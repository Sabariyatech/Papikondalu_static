import type { Metadata } from 'next'
import PackagesClient from './PackagesClient'

export const metadata: Metadata = {
  title: 'Tour Packages - Papikondalu Tourism | 9 Amazing Packages',
  description: 'Choose from 9 carefully crafted tour packages including Bhadrachalam to Papikondalu, Rajahmundry tours, Sirivaka night stays, and more.',
  keywords: 'Papikondalu tour packages, Bhadrachalam tours, Rajahmundry packages, Sirivaka camping, boat tours',
}

export default function Packages() {
  return <PackagesClient />
}