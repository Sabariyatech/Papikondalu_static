import type { Metadata } from 'next'
import AttractionsClient from './AttractionsClient'

export const metadata: Metadata = {
  title: 'Papikondalu Attractions | Bhadradri Temples | Maredumalli Waterfalls - East Godavari Tourism',
  description: 'Discover top attractions in Papikondalu, Bhadrachalam, Rajahmundry, Maredumalli, and Rampachodavaram. Scenic hills, ancient temples, waterfalls, and cultural sites in East Godavari. Plan your perfect tour today!',
  keywords: 'Papikondalu attractions, Bhadrachalam temple, Maredumalli waterfalls, Rajahmundry tourism, Rampachodavaram attractions, East Godavari tourism, Bhadradri temple',
}

export default function Attractions() {
  return <AttractionsClient />
}