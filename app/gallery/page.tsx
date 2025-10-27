import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Photo Gallery | Papikondalu Hills, Bhadradri Temples & East Godavari Adventures',
  description: 'Browse stunning images of Papikondalu river cruises, Bhadradri temples, Maredumalli waterfalls, and East Godavari attractions. See why 7 lakh travelers love our memorable tours.',
  keywords: 'Papikondalu photos, Bhadrachalam temple images, Rajahmundry gallery, Maredumalli waterfalls photos, Rampachodavaram pictures, East Godavari tourism gallery',
}

export default function Gallery() {
  return <GalleryClient />
}