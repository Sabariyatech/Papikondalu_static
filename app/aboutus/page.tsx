import type { Metadata } from 'next'
import AboutUsClient from './AboutUsClient'

export const metadata: Metadata = {
  title: 'About Us - Papikondalu Tourism | 20+ Years of Excellence',
  description: 'Learn about Papikondalu Tourism\'s 20+ years of experience serving 7+ lakh customers. Discover our fleet, story, and commitment to excellence.',
  keywords: 'Papikondalu Tourism, about us, 20 years experience, Godavari river tours, boat fleet',
}

export default function AboutUs() {
  return <AboutUsClient />
}