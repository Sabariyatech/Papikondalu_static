import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us - Papikondalu Tourism | Get in Touch',
  description: 'Contact Papikondalu Tourism for bookings and inquiries. Call +91 9876543210 or email info@papikondalutourism.com. Located in Rajahmundry, Andhra Pradesh.',
  keywords: 'contact Papikondalu Tourism, booking inquiries, Rajahmundry tourism, phone number, email',
}

export default function Contact() {
  return <ContactClient />
}