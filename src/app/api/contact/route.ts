import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Log the submission (in production, you would send this to your email or a service like Formspree, SendGrid, Resend, etc.)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service
    // Example services you can use:
    // - Formspree: https://formspree.io
    // - SendGrid: https://sendgrid.com
    // - Resend: https://resend.com
    // - Nodemailer with SMTP

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
