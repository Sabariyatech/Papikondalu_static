import type { Metadata } from 'next'
import PackagesClient from './PackagesClient'

export const metadata: Metadata = {
  title: 'Best Papikondalu Tour Packages | Bhadradri Temple Trips & East Godavari Cruises',
  description: 'Explore premium Papikondalu boat tour packages, Bhadradri temple trips, and East Godavari river cruises. Custom adventures and spiritual journeys for every traveler—book your unforgettable experience!',
  keywords: 'Papikondalu tour packages, Bhadrachalam tours, Rajahmundry packages, Maredumalli tours, Rampachodavaram adventures, East Godavari cruises, Bhadradri temple packages',
}

export default function Packages() {
  return <PackagesClient />
}