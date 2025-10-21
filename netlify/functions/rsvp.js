const { storage } = require('./storage');
const { sendRsvpNotification } = require('./email');

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
      const rsvp = await storage.createRsvp(validatedData);
      
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
      const rsvps = await storage.getAllRsvps();
      
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
