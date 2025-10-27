import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Papikondalu Tours | Bhadradri, East Godavari & Maredumalli Tourism',
  description: 'Contact the leading Papikondalu tour operator from Rajahmundry for Bhadrachalam temple visits, East Godavari river cruises, Maredumalli waterfalls, and Rampachodavaram adventures. 24/7 expert assistance and customized travel support.',
  keywords: 'contact Papikondalu Tourism, Rajahmundry tour operator, Bhadrachalam booking, Maredumalli tours contact, Rampachodavaram adventures, East Godavari tourism contact',
}

export default function Contact() {
  return <ContactClient />
}