import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, subject, message, packageInterest } = body

  try {
    const emailData = {
      from: 'Papikondalu Tourism <noreply@papikondalutourism.com>',
      to: ['aswinigodavari@gmail.com'],
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e40af;">Customer Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Package Interest:</strong> ${packageInterest || 'Not specified'}</p>
            </div>
            
            <div style="background: #fff; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e40af;">Subject</h3>
              <p>${subject}</p>
            </div>
            
            <div style="background: #fff; padding: 15px; border-left: 4px solid #059669; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #047857;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="background: #f1f5f9; padding: 10px; border-radius: 5px; font-size: 12px; color: #64748b; text-align: center;">
              <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              <p>From: Papikondalu Tourism Website</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage Interest: ${packageInterest || 'Not specified'}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`
    }

    const result = await resend.emails.send(emailData)
    
    if (result.data) {
      console.log('✅ Email sent successfully via Resend')
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.' 
      })
    } else {
      throw new Error('Resend API failed')
    }
  } catch (error: any) {
    console.error('❌ Email sending failed:', error)
    
    // Fallback to Web3Forms
    try {
      const fallbackResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8085587f-ba96-4164-9809-d5804b1fd563',
          from_name: 'Papikondalu Tourism',
          name: name,
          email: email,
          subject: `Contact Form: ${subject}`,
          message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage Interest: ${packageInterest || 'Not specified'}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted: ${new Date().toLocaleString()}`
        })
      })
      
      const fallbackResult = await fallbackResponse.json()
      
      if (fallbackResult.success) {
        console.log('✅ Email sent via Web3Forms fallback')
        return NextResponse.json({ 
          success: true, 
          message: 'Thank you for contacting us! We will get back to you soon.' 
        })
      }
    } catch (fallbackError) {
      console.error('❌ Fallback also failed:', fallbackError)
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
    }, { status: 500 })
  }
}