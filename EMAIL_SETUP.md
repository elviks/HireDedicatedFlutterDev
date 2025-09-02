# Email Setup Documentation

This document explains how email functionality has been implemented in the HireDedicatedFlutterDev project using Nodemailer.

## Overview

The project now includes a complete email system that handles:
- Contact form submissions
- Consultation requests
- CTA section project requests
- Newsletter subscriptions

## Email Configuration

### Environment Variables

Add these variables to your `.env` file:

```bash
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Email (where form submissions will be sent)
ADMIN_EMAIL=admin@yourdomain.com
```

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `SMTP_PASS`

3. **Update your .env file**:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

### Other SMTP Providers

You can use any SMTP provider. Here are some common configurations:

#### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### SendGrid
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### AWS SES
```bash
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
```

## API Endpoints

### 1. Contact Form (`/api/contact`)
- **Method**: POST
- **Body**: `{ name, email, message }`
- **Action**: Sends email to admin and confirmation to user

### 2. Consultation Request (`/api/consultation`)
- **Method**: POST
- **Body**: `{ name, email, company, projectDetails }`
- **Action**: Sends consultation request to admin and confirmation to user

### 3. CTA Request (`/api/cta-request`)
- **Method**: POST
- **Body**: `{ name, email, phone, company, projectDetails }`
- **Action**: Sends project request to admin and confirmation to user

### 4. Newsletter Subscription (`/api/newsletter`)
- **Method**: POST
- **Body**: `{ email }`
- **Action**: Sends confirmation to user and notification to admin

### 5. Test Email (`/api/test-email`)
- **Method**: GET
- **Action**: Tests SMTP connection and sends a test email

## Testing Email Functionality

### 1. Test SMTP Connection
Visit `/api/test-email` in your browser to test the SMTP connection.

### 2. Test Form Submissions
1. Fill out any of the forms on the website
2. Submit the form
3. Check your admin email for the submission
4. Check the user's email for confirmation

### 3. Check Console Logs
Monitor your terminal/console for email sending logs:
```
Email sent successfully: <message-id>
SMTP connection verified successfully
```

## Email Templates

All emails use professional HTML templates with:
- Company branding
- Responsive design
- Clear information layout
- Professional styling

### Template Types
- **Contact Form**: Admin notification + user confirmation
- **Consultation**: Project details + scheduling information
- **CTA Request**: Complete project request details
- **Newsletter**: Subscription confirmation + welcome message

## Error Handling

The system includes comprehensive error handling:
- **Validation Errors**: Form field validation
- **SMTP Errors**: Connection and sending failures
- **Network Errors**: API request failures
- **User Feedback**: Toast notifications and status messages

## Security Features

- **Input Validation**: All form inputs are validated
- **Email Validation**: Proper email format checking
- **Rate Limiting**: Built into the forms
- **Error Logging**: Comprehensive error tracking

## Troubleshooting

### Common Issues

1. **"SMTP connection failed"**
   - Check your SMTP credentials
   - Verify port and security settings
   - Ensure 2FA is enabled for Gmail

2. **"Failed to send email"**
   - Check SMTP password
   - Verify email address format
   - Check firewall/network settings

3. **Emails not received**
   - Check spam folder
   - Verify admin email address
   - Check SMTP provider limits

### Debug Steps

1. **Test SMTP Connection**:
   ```bash
   curl http://localhost:3008/api/test-email
   ```

2. **Check Environment Variables**:
   ```bash
   echo $SMTP_HOST
   echo $SMTP_USER
   ```

3. **Monitor Console Logs**:
   - Start the development server
   - Submit a form
   - Check terminal output

## Production Deployment

### Environment Setup
1. Set production environment variables
2. Use production SMTP credentials
3. Configure proper admin email addresses

### Monitoring
- Monitor email delivery rates
- Set up email delivery notifications
- Configure error alerting

## Support

If you encounter issues:
1. Check the console logs
2. Verify environment variables
3. Test SMTP connection
4. Review this documentation

## Dependencies

The email system requires:
- `nodemailer`: Email sending library
- `@types/nodemailer`: TypeScript types
- Environment variables for SMTP configuration

## Files Modified/Created

- `lib/email.ts` - Email utility functions
- `app/api/contact/route.ts` - Contact form API
- `app/api/consultation/route.ts` - Consultation API
- `app/api/cta-request/route.ts` - CTA request API
- `app/api/newsletter/route.ts` - Newsletter API
- `app/api/test-email/route.ts` - Test email API
- `app/contact/page.tsx` - Contact form with functionality
- `app/components/hero-section.tsx` - Consultation form
- `app/components/cta-section.tsx` - CTA form
- `app/components/footer.tsx` - Newsletter form

All forms now include:
- Form validation
- Email submission
- Success/error handling
- User feedback
- Loading states
