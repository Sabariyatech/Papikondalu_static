import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Photo Gallery - Papikondalu Tourism | Nature, Temple & Heritage Photos',
  description: 'Browse our stunning photo gallery featuring nature landscapes, temple architecture, heritage sites, and accommodation options in Papikondalu region.',
  keywords: 'Papikondalu photos, gallery, nature photography, temple images, heritage sites, accommodation',
}

export default function Gallery() {
  return <GalleryClient />
}