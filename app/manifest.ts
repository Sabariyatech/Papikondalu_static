import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Papikondalu Tourism - Premium Boat Tours',
    short_name: 'Papikondalu Tourism',
    description: 'Experience the beauty of Papikondalu with our expert boat tours. 20+ years of experience serving 7+ lakh happy customers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['travel', 'tourism', 'entertainment'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}