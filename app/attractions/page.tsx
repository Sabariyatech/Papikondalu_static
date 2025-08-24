import type { Metadata } from 'next'
import AttractionsClient from './AttractionsClient'

export const metadata: Metadata = {
  title: 'Attractions - Papikondalu Tourism | 8 Amazing Destinations',
  description: 'Explore 8 stunning attractions including Papikondalu hills, Bhadrachalam temple, Maredumalli waterfalls, and more scenic destinations.',
  keywords: 'Papikondalu attractions, Bhadrachalam temple, Maredumalli waterfalls, Godavari tourism',
}

export default function Attractions() {
  return <AttractionsClient />
}