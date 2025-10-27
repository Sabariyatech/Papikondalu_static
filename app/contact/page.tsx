import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Papikondalu Tours | Bhadradri, East Godavari & Maredumalli Tourism',
  description: 'Get in touch with the leading Papikondalu tour operator for Bhadradri temple visits, East Godavari river cruises, and Maredumalli adventures. 24/7 expert assistance, best pricing, and customized travel support.',
  keywords: 'contact Papikondalu Tourism, Rajahmundry tour operator, Bhadrachalam booking, Maredumalli tours contact, Rampachodavaram adventures, East Godavari tourism contact',
}

export default function Contact() {
  return <ContactClient />
}