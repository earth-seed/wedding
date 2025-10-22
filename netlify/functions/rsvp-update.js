const admin = require('firebase-admin');

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

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
    if (event.httpMethod === 'PUT') {
      const { id } = event.pathParameters;
      const updates = JSON.parse(event.body);
      
      console.log('Update request:', { id, updates });
      
      // Validate the updates
      const validUpdates = {};
      if (updates.guestName !== undefined) validUpdates.guestName = updates.guestName;
      if (updates.attending !== undefined) validUpdates.attending = updates.attending;
      if (updates.numberOfGuests !== undefined) validUpdates.numberOfGuests = updates.numberOfGuests;
      if (updates.dietaryPreferences !== undefined) validUpdates.dietaryPreferences = updates.dietaryPreferences;
      if (updates.message !== undefined) validUpdates.message = updates.message;
      
      console.log('Valid updates:', validUpdates);
      
      // Update RSVP in Firebase
      const rsvpRef = db.collection('rsvps').doc(id);
      const rsvpDoc = await rsvpRef.get();
      
      if (!rsvpDoc.exists) {
        console.log('RSVP not found for id:', id);
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'RSVP not found' }),
        };
      }
      
      const updatedRsvp = {
        ...rsvpDoc.data(),
        ...validUpdates,
      };
      
      await rsvpRef.update(validUpdates);
      
      console.log('Updated RSVP:', updatedRsvp);
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRsvp),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Update error:', error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid update data' }),
    };
  }
};
