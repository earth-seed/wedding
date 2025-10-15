# Email Setup for RSVP Notifications

## Quick Setup (Gmail)

1. **Create a `.env` file** in the project root with:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@gmail.com
```

2. **Get Gmail App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification (enable if not already)
   - Security → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

3. **Test it:**
   - Submit an RSVP on your website
   - Check your email for notification!

## Other Email Services

You can use any email service by changing the `service` in `server/email.ts`:
- `"gmail"` - Gmail
- `"outlook"` - Outlook/Hotmail  
- `"yahoo"` - Yahoo Mail
- Or use SMTP settings for custom providers

## What You'll Receive

Each RSVP will send you an email with:
- Guest name
- Attending status (✅ or ❌)
- Dietary preferences (if provided)
- Personal message (if provided)
- Timestamp

## Deployment

For production deployment, set these environment variables:
- `EMAIL_USER` - Your email address
- `EMAIL_PASS` - Your email password/app password
- `NOTIFICATION_EMAIL` - Where to send notifications

Works on any hosting platform (Vercel, Netlify, Railway, etc.)!
