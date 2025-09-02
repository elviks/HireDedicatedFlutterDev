import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectDetails } = body;

    // Basic validation
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@example.com';
    const emailTemplate = emailTemplates.ctaRequest({ 
      name, 
      email, 
      phone: phone || 'Not specified', 
      company: company || 'Not specified', 
      projectDetails 
    });
    
    const emailSent = await sendEmail({
      to: adminEmail,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    });

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userConfirmation = await sendEmail({
      to: email,
      subject: 'Project Request Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Project Request Received!</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for submitting your project request! We've received your details and our team is excited to work with you.</p>
            <p>We'll review your project requirements and get back to you within 24 hours with a detailed proposal and timeline.</p>
            <p><strong>Your project details:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
              ${projectDetails.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Best regards,<br>
            The HireFlutterDeveloper Team<br>
            <br>
            P.S. We're committed to delivering exceptional Flutter solutions that exceed your expectations.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Project request submitted successfully',
        confirmationSent: userConfirmation
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('CTA request form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
