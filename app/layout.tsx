import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { LazyMultiAgentWidget } from './components/LazyComponents'
import WebVitals from './components/WebVitals'
import ImagePreloader from './components/ImagePreloader'
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
    default: 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh | 7+ Lakh Happy Customers',
    template: '%s | Papikondalu Tourism - Best River Cruise Experience'
  },
  icons: {
    icon: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
    shortcut: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
    apple: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
  },
  description: 'Experience Papikondalu Hills with India\'s #1 river tourism company. 20+ years expertise, 7+ lakh satisfied customers. Book premium Godavari boat tours, temple visits & adventure packages. Best prices guaranteed!',
  keywords: [
    'Papikondalu tourism', 'best boat tours Godavari', 'Andhra Pradesh river cruise', 'Bhadrachalam temple tours',
    'Papikondalu hills boat ride', 'Godavari river tourism', 'Rajahmundry boat tours', 'temple tours Andhra Pradesh',
    'adventure packages Papikondalu', 'river cruise India', 'weekend getaway Andhra Pradesh', 'family tour packages',
    'honeymoon packages Papikondalu', 'group tours Godavari', 'budget tour packages', 'premium boat tours',
    'Perantalapalli temple', 'Kolluru bamboo huts', 'Parnasala tours', 'Rampa waterfalls'
  ],
  authors: [{ name: 'Papikondalu Tourism', url: 'https://papikondalutourism.com' }],
  creator: 'Papikondalu Tourism',
  publisher: 'Papikondalu Tourism',
  applicationName: 'Papikondalu Tourism',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://papikondalutourism.com',
    siteName: 'Papikondalu Tourism - Best River Cruise Experience',
    title: 'Papikondalu Tourism - #1 Boat Tours in Andhra Pradesh | 7+ Lakh Happy Customers',
    description: 'Experience Papikondalu Hills with India\'s leading river tourism company. 20+ years of excellence, premium boat tours, temple visits & adventure packages. Book now!',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Hills Boat Tours - Best River Cruise Experience in Andhra Pradesh',
      type: 'image/jpeg'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@papikondalutourism',
    creator: '@papikondalutourism',
    title: 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh',
    description: 'Experience Papikondalu Hills with 20+ years of expertise. 7+ lakh satisfied customers. Premium boat tours & temple visits.',
    images: ['https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://papikondalutourism.com',
    languages: {
      'en-US': 'https://papikondalutourism.com',
      'te-IN': 'https://papikondalutourism.com/te',
      'hi-IN': 'https://papikondalutourism.com/hi'
    }
  },
  category: 'tourism',
  classification: 'Tourism & Travel',
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Rajahmundry, Andhra Pradesh',
    'geo.position': '17.0005;81.8040',
    'ICBM': '17.0005, 81.8040',
    'DC.title': 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh',
    'DC.creator': 'Papikondalu Tourism',
    'DC.subject': 'River Tourism, Boat Tours, Temple Tours, Adventure Packages',
    'DC.description': 'Premium boat tours and river cruise experiences in Papikondalu Hills',
    'DC.publisher': 'Papikondalu Tourism',
    'DC.contributor': 'Papikondalu Tourism Team',
    'DC.date': '2024-01-01T00:00:00.000Z',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://papikondalutourism.com',
    'DC.language': 'en',
    'DC.coverage': 'Andhra Pradesh, India',
    'DC.rights': '© 2024 Papikondalu Tourism. All rights reserved.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': 'https://papikondalutourism.com/#attraction',
        'name': 'Papikondalu Hills',
        'description': 'Scenic hills along the Godavari River offering breathtaking boat tours and temple visits',
        'url': 'https://papikondalutourism.com',
        'image': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Rajahmundry',
          'addressRegion': 'Andhra Pradesh',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.0005,
          'longitude': 81.8040
        }
      },
      {
        '@type': 'TravelAgency',
        '@id': 'https://papikondalutourism.com/#organization',
        'name': 'Papikondalu Tourism',
        'description': 'Leading river tourism company with 20+ years of experience serving 7+ lakh customers',
        'url': 'https://papikondalutourism.com',
        'logo': 'https://papikondalutourism.com/icon-512x512.png',
        'image': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
        'telephone': '+91-9876543210',
        'email': 'info@papikondalutourism.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Rajahmundry',
          'addressRegion': 'Andhra Pradesh',
          'postalCode': '533101',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.0005,
          'longitude': 81.8040
        },
        'foundingDate': '2004',
        'numberOfEmployees': '50-100',
        'areaServed': 'Andhra Pradesh, Telangana',
        'serviceType': 'River Tourism, Boat Tours, Temple Tours',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '2500',
          'bestRating': '5',
          'worstRating': '1'
        },
        'sameAs': [
          'https://www.facebook.com/papikondalutourism',
          'https://www.instagram.com/papikondalutourism',
          'https://www.youtube.com/papikondalutourism'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://papikondalutourism.com/#website',
        'url': 'https://papikondalutourism.com',
        'name': 'Papikondalu Tourism',
        'description': 'Best boat tours and river cruise experiences in Papikondalu Hills',
        'publisher': {
          '@id': 'https://papikondalutourism.com/#organization'
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://papikondalutourism.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        'inLanguage': 'en-US'
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://djmcbqzqt.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://djmcbqzqt.cloudinary.com" />

        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased">
        <WebVitals />
        <ImagePreloader />
        <Header />
        <main className="relative" role="main">{children}</main>
        <Footer />
        <LazyMultiAgentWidget />
      </body>
    </html>
  )
}