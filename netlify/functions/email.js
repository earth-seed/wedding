const nodemailer = require('nodemailer');

// Email configuration for Netlify Functions
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendRsvpNotification(rsvp) {
  const attendingText = rsvp.attending ? "✅ WILL BE ATTENDING" : "❌ CANNOT ATTEND";
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

  try {
    await transporter.sendMail(mailOptions);
    console.log(`RSVP notification sent for ${rsvp.guestName}`);
  } catch (error) {
    console.error("Error sending RSVP notification:", error);
  }
}

module.exports = { sendRsvpNotification };
