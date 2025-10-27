import type { Metadata } from 'next'
import PackagesClient from './PackagesClient'

export const metadata: Metadata = {
  title: 'Best Papikondalu Tour Packages | Bhadradri Temple Trips & East Godavari Cruises',
  description: 'Explore premium Papikondalu boat tour packages from Rajahmundry and Bhadrachalam. Bhadradri temple trips, East Godavari river cruises, Maredumalli waterfalls, and Rampachodavaram adventures. Custom spiritual journeys for every traveler.',
  keywords: 'Papikondalu tour packages, Bhadrachalam tours, Rajahmundry packages, Maredumalli tours, Rampachodavaram adventures, East Godavari cruises, Bhadradri temple packages',
}

export default function Packages() {
  return <PackagesClient />
}