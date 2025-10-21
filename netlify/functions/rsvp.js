// Simple in-memory storage for Netlify Functions
let rsvps = [];

// Simple email function (you'll need to add nodemailer to package.json)
const sendRsvpNotification = async (rsvp) => {
  console.log('RSVP notification:', rsvp);
  // Email functionality will be added later
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
        createdAt: new Date().toISOString(),
      };
      
      rsvps.push(rsvp);
      
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
      // Get all RSVPs
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
