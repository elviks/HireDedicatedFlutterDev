import { NextRequest, NextResponse } from 'next/server';
import { verifySMTPConnection, sendEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  try {
    // Verify SMTP connection
    const smtpConnected = await verifySMTPConnection();
    
    if (!smtpConnected) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'SMTP connection failed',
          error: 'Check your SMTP configuration in .env file'
        },
        { status: 500 }
      );
    }

    // Test email sending
    const testEmailSent = await sendEmail({
      to: process.env.SMTP_USER || 'test@example.com',
      subject: 'SMTP Test Email',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">SMTP Test Email</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>This is a test email to verify that your SMTP configuration is working correctly.</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
            <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
            <p><strong>SMTP User:</strong> ${process.env.SMTP_USER}</p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            If you received this email, your email configuration is working properly!
          </p>
        </div>
      `,
    });

    if (!testEmailSent) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'SMTP connection successful but test email failed',
          error: 'Check your SMTP credentials'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'SMTP connection and email sending verified successfully',
        smtp: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: process.env.SMTP_SECURE,
          user: process.env.SMTP_USER,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
