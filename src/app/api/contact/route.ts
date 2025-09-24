import { NextRequest, NextResponse } from 'next/server'
import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from '@sendinblue/client'

const brevo = new TransactionalEmailsApi()
const apiKey = process.env.BREVO_API_KEY

if (apiKey) {
  brevo.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey)
}

export async function POST(request: NextRequest) {
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL
  const senderName = process.env.BREVO_SENDER_NAME ?? 'Sam Shames'
  const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL ?? senderEmail
  const recipientName = process.env.BREVO_RECIPIENT_NAME ?? senderName

  if (!senderEmail || !recipientEmail) {
    return NextResponse.json(
      { error: 'Email service is missing sender configuration.' },
      { status: 500 }
    )
  }

  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailData = {
      sender: {
        email: senderEmail,
        name: senderName,
      },
      to: [
        {
          email: recipientEmail,
          name: recipientName,
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject: `Website contact: ${subject}`,
      htmlContent: `
        <h2>New message from samshames.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }

    await brevo.sendTransacEmail(emailData)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'Something went wrong while sending your message.' },
      { status: 500 }
    )
  }
}
