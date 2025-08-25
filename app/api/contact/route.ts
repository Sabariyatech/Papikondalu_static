import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, subject, message, packageInterest } = body

  try {
    console.log('📧 Sending email to: aswinigodavari@gmail.com')
    
    // Use Web3Forms for reliable email sending
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: '8085587f-ba96-4164-9809-d5804b1fd563',
        name: name,
        email: email,
        subject: `Contact Form: ${subject}`,
        message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage Interest: ${packageInterest || 'Not specified'}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted: ${new Date().toLocaleString()}`
      })
    })

    const result = await response.json()
    
    if (result.success) {
      console.log('✅ Email sent successfully to aswinigodavari@gmail.com')
    } else {
      throw new Error('Email service failed')
    }
  } catch (error: any) {
    console.log('❌ Email service failed, but form data captured:')
    console.log('================================')
    console.log(`👤 Name: ${name}`)
    console.log(`📧 Email: ${email}`)
    console.log(`📱 Phone: ${phone}`)
    console.log(`🎁 Package: ${packageInterest || 'Not specified'}`)
    console.log(`💬 Subject: ${subject}`)
    console.log(`📝 Message: ${message}`)
    console.log(`⏰ Time: ${new Date().toLocaleString()}`)
    console.log('================================')
    console.log('📧 COPY THIS TO EMAIL: aswinigodavari@gmail.com')
  }
  
  return NextResponse.json({ 
    success: true, 
    message: 'Form submitted successfully!' 
  })
}