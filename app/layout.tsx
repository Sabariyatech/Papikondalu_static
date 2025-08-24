import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'

import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://papikondalutourism.com'),
  title: {
    default: 'Papikondalu Tourism - 20+ Years of Excellence | Premium Boat Tours',
    template: '%s | Papikondalu Tourism'
  },
  description: 'Experience the beauty of Papikondalu with our expert boat tours. 20+ years of experience serving 7+ lakh happy customers. Book your adventure today!',
  keywords: ['Papikondalu tourism', 'boat tours Godavari', 'Andhra Pradesh tourism', 'Bhadrachalam tours', 'river cruise India', 'temple tours', 'adventure packages', 'Rajahmundry tourism'],
  authors: [{ name: 'Papikondalu Tourism', url: 'https://papikondalutourism.com' }],
  creator: 'Papikondalu Tourism',
  publisher: 'Papikondalu Tourism',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://papikondalutourism.com',
    siteName: 'Papikondalu Tourism',
    title: 'Papikondalu Tourism - 20+ Years of Excellence',
    description: 'Experience the beauty of Papikondalu with our expert boat tours. Premium service, unforgettable memories.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Hills - Scenic Boat Tours'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@papikondalutourism',
    creator: '@papikondalutourism',
    title: 'Papikondalu Tourism - Premium Boat Tours',
    description: 'Experience the beauty of Papikondalu with 20+ years of expertise',
    images: ['https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://papikondalutourism.com',
  },
  category: 'tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="antialiased">

        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  )
}