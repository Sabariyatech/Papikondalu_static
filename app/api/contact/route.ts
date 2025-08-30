import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const formData = new FormData()
    formData.append('access_key', '8085587f-ba96-4164-9809-d5804b1fd563')
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone || '')
    formData.append('message', message)
    formData.append('subject', `New Contact from ${name} - Papikondalu Tourism`)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}