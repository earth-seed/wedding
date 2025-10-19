import nodemailer from "nodemailer";
import { type Rsvp } from "@shared/schema";

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this to any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

export async function sendRsvpNotification(rsvp: Rsvp): Promise<void> {
  const attendingText = rsvp.attending ? "✅ WILL BE ATTENDING" : "❌ CANNOT ATTEND";
  const guestCountText = rsvp.numberOfGuests ? `\nNumber of Guests: ${rsvp.numberOfGuests}` : "";
  const dietaryText = rsvp.dietaryPreferences ? `\nDietary Preferences: ${rsvp.dietaryPreferences}` : "";
  const messageText = rsvp.message ? `\nMessage: ${rsvp.message}` : "";

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // Where to send notifications
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
    // Don't throw error - we don't want email failures to break RSVP submission
  }
}
