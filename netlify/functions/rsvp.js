const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

// Email function using Nodemailer
const sendRsvpNotification = async (rsvp) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const attendingText = rsvp.attending ? "✅ Will be attending" : "❌ Cannot attend";
    const guestCountText = rsvp.numberOfGuests ? `\nNumber of Guests: ${rsvp.numberOfGuests}` : "";
    const dietaryText = rsvp.dietaryPreferences ? `\nDietary Preferences: ${rsvp.dietaryPreferences}` : "";
    const messageText = rsvp.message ? `\nMessage: ${rsvp.message}` : "";

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: `Wedding RSVP: ${rsvp.guestName} - ${attendingText}`,
      text: `
New Wedding RSVP Received!

Guest Name: ${rsvp.guestName}
Status: ${attendingText}${guestCountText}${dietaryText}${messageText}

Submitted: ${rsvp.createdAt.toLocaleString()}
      `.trim(),
      html: `
        <h2>New Wedding RSVP Received!</h2>
        <p><strong>Guest Name:</strong> ${rsvp.guestName}</p>
        <p><strong>Status:</strong> ${attendingText}</p>
        ${rsvp.numberOfGuests ? `<p><strong>Number of Guests:</strong> ${rsvp.numberOfGuests}</p>` : ""}
        ${rsvp.dietaryPreferences ? `<p><strong>Dietary Preferences:</strong> ${rsvp.dietaryPreferences}</p>` : ""}
        ${rsvp.message ? `<p><strong>Message:</strong> ${rsvp.message}</p>` : ""}
        <p><em>Submitted: ${rsvp.createdAt.toLocaleString()}</em></p>
      `.trim(),
    };

    await transporter.sendMail(mailOptions);
    console.log(`RSVP notification sent for ${rsvp.guestName}`);
  } catch (error) {
    console.error("Error sending RSVP notification:", error);
    // Don't throw error - email failure shouldn't break RSVP submission
  }
};

// Simple validation schema for Netlify Functions
const validateRsvp = (data) => {
  if (!data.guestName || typeof data.guestName !== 'string') {
    throw new Error('Guest name is required');
  }
  if (typeof data.attending !== 'boolean') {
    throw new Error('Attending status is required');
  }
  return {
    guestName: data.guestName,
    attending: data.attending,
    dietaryPreferences: data.dietaryPreferences || null,
    message: data.message || null,
  };
};

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    if (event.httpMethod === 'POST') {
      // Create new RSVP
      const body = JSON.parse(event.body);
      const validatedData = validateRsvp(body);
      
      const rsvp = {
        id: Math.random().toString(36).substr(2, 9),
        ...validatedData,
        numberOfGuests: "1",
        createdAt: admin.firestore.Timestamp.now(),
      };
      
      // Save to Firebase
      await db.collection('rsvps').doc(rsvp.id).set(rsvp);
      
      // Send email notification
      await sendRsvpNotification(rsvp);
      
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvp),
      };
    }

    if (event.httpMethod === 'GET') {
      // Get all RSVPs from Firebase
      const snapshot = await db.collection('rsvps').orderBy('createdAt', 'desc').get();
      const rsvps = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        // Convert Firestore Timestamp to JavaScript Date
        if (data.createdAt && data.createdAt.toDate) {
          data.createdAt = data.createdAt.toDate();
        }
        rsvps.push({ id: doc.id, ...data });
      });
      
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvps),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
