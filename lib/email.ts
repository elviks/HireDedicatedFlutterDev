import nodemailer from 'nodemailer';

// Email configuration interface
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Email data interface
interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Create transporter
const createTransporter = () => {
  const config: EmailConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  };

  console.log('SMTP Config:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user,
    pass: config.auth.pass ? `${config.auth.pass.substring(0, 4)}...` : 'undefined'
  });

  return nodemailer.createTransport(config);
};

// Send email function
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@example.com',
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text || emailData.html.replace(/<[^>]*>/g, ''),
    };

    console.log('Attempting to send email to:', emailData.to);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
};

// Email templates
export const emailTemplates = {
  contactForm: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => ({
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
            ${data.message.replace(/\n/g, '<br>')}
          </p>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This message was sent from the contact form on HireFlutterDeveloper.com
        </p>
      </div>
    `,
  }),

  consultationRequest: (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectDetails: string;
  }) => ({
    subject: `New Consultation Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">New Consultation Request</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Project Details:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
            ${data.projectDetails.replace(/\n/g, '<br>')}
          </p>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This request was submitted from the consultation form on HireFlutterDeveloper.com
        </p>
      </div>
    `,
  }),

  ctaRequest: (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectDetails: string;
  }) => ({
    subject: `New Project Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">New Project Request</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Project Details:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
            ${data.projectDetails.replace(/\n/g, '<br>')}
          </p>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This request was submitted from the CTA section on HireFlutterDeveloper.com
        </p>
      </div>
    `,
  }),

  newsletterSubscription: (data: { email: string }) => ({
    subject: 'Newsletter Subscription Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">Newsletter Subscription Confirmed</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p>Thank you for subscribing to our newsletter!</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p>You'll now receive the latest updates on Flutter development, industry insights, and exclusive offers.</p>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This subscription was created on HireFlutterDeveloper.com
        </p>
      </div>
    `,
  }),
};

// Verify SMTP connection
export const verifySMTPConnection = async (): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP connection failed:', error);
    if (error instanceof Error) {
      console.error('SMTP error details:', error.message);
    }
    return false;
  }
};
