import type { Metadata } from 'next'
import AttractionsClient from './AttractionsClient'

export const metadata: Metadata = {
  title: 'Papikondalu Attractions | Bhadradri Temples | Maredumalli Waterfalls - East Godavari Tourism',
  description: 'Discover the top attractions in Papikondalu, Bhadradri, East Godavari, and Maredumalli. From scenic hills and temples to waterfalls and cultural sites—plan your perfect tour today!',
  keywords: 'Papikondalu attractions, Bhadrachalam temple, Maredumalli waterfalls, Rajahmundry tourism, Rampachodavaram attractions, East Godavari tourism, Bhadradri temple',
}

export default function Attractions() {
  return <AttractionsClient />
}