import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email transporter configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message, phone, company, projectType } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Email content for the business
        const businessEmailContent = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This consultation request was submitted from your website.</em></p>
    `;

        // Email content for the customer (confirmation)
        const customerEmailContent = `
      <h2>Thank you for your consultation request!</h2>
      <p>Dear ${name},</p>
      <p>We've received your consultation request and our team will get back to you within 24 hours.</p>
      <p>Here's a copy of your message:</p>
      <blockquote>${message}</blockquote>
      <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
      <p>Best regards,<br>The HireFlutterDeveloper Team</p>
    `;

        // Send email to business
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'info@hireflutterdeveloper.com', // You can change this to your preferred email
            subject: `New Consultation Request from ${name}`,
            html: businessEmailContent,
        });

        // Send confirmation email to customer
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Consultation Request Received - HireFlutterDeveloper',
            html: customerEmailContent,
        });

        return NextResponse.json(
            { message: 'Consultation request sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending consultation email:', error);
        return NextResponse.json(
            { error: 'Failed to send consultation request. Please try again.' },
            { status: 500 }
        );
    }
}
