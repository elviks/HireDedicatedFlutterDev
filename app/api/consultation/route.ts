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
    const emailTemplate = emailTemplates.consultationRequest({ 
      name, 
      email, 
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
      subject: 'Consultation Request Confirmed',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Consultation Request Confirmed!</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for requesting a consultation! We've received your project details and our team will review them.</p>
            <p>We'll schedule a consultation call within the next 48 hours to discuss your project requirements in detail.</p>
            <p><strong>Your project details:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
              ${projectDetails.replace(/\n/g, '<br>')}
            </p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Best regards,<br>
            The HireFlutterDeveloper Team<br>
            <br>
            P.S. If you have any urgent questions, feel free to reply to this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully',
        confirmationSent: userConfirmation
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Consultation form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
