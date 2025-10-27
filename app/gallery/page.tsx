import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Photo Gallery | Papikondalu Hills, Bhadradri Temples & East Godavari Adventures',
  description: 'Browse stunning images of Papikondalu river cruises from Rajahmundry, Bhadrachalam temples, Maredumalli waterfalls, and Rampachodavaram adventures. See why 7 lakh travelers love our East Godavari tours.',
  keywords: 'Papikondalu photos, Bhadrachalam temple images, Rajahmundry gallery, Maredumalli waterfalls photos, Rampachodavaram pictures, East Godavari tourism gallery',
}

export default function Gallery() {
  return <GalleryClient />
}