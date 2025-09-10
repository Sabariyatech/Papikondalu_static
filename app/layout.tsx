import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
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
  metadataBase: new URL('https://manapapikondalu.vercel.app'),
  title: {
    default: 'Papikondalu Tourism - Best Boat Tours | 7+ Lakh Happy Customers',
    template: '%s | Papikondalu Tourism'
  },
  icons: {
    icon: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
    shortcut: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
    apple: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
  },
  description: 'Experience Papikondalu Hills with India\'s #1 river tourism company. 20+ years expertise, 7+ lakh satisfied customers. Book now!',
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
    url: 'https://manapapikondalu.vercel.app',
    siteName: 'Papikondalu Tourism - Best River Cruise Experience',
    title: 'Papikondalu Tourism - Best Boat Tours | 7+ Lakh Customers',
    description: 'Experience Papikondalu Hills with India\'s leading river tourism company. 20+ years of excellence. Book now!',
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
    google: 'VTniYMmiV4j622S8nRf2la5x52w-Oj0SqPvSzaiR0zA',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://manapapikondalu.vercel.app',
    languages: {
      'en-US': 'https://manapapikondalu.vercel.app',
      'te-IN': 'https://manapapikondalu.vercel.app/te',
      'hi-IN': 'https://manapapikondalu.vercel.app/hi'
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
    'DC.identifier': 'https://manapapikondalu.vercel.app',
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
        '@type': 'TravelAgency',
        '@id': 'https://manapapikondalu.vercel.app/#organization',
        'name': 'Papikondalu Tourism',
        'alternateName': 'Papikondalu River Tourism',
        'description': 'Leading river tourism company with 20+ years of experience serving 7+ lakh customers',
        'url': 'https://manapapikondalu.vercel.app',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
          'width': 512,
          'height': 512
        },
        'image': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
        'telephone': '+91-9848323488',
        'email': 'info@papikondalutourism.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rajahmundry',
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
        'areaServed': {
          '@type': 'State',
          'name': 'Andhra Pradesh'
        },
        'serviceType': ['River Tourism', 'Boat Tours', 'Temple Tours', 'Adventure Packages'],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '2500',
          'bestRating': '5',
          'worstRating': '1'
        },
        'priceRange': '₹₹',
        'currenciesAccepted': 'INR',
        'paymentAccepted': 'Cash, Card, UPI',
        'openingHours': 'Mo-Su 06:00-20:00',
        'sameAs': [
          'https://www.facebook.com/papikondalutourism',
          'https://www.instagram.com/papikondalutourism',
          'https://www.youtube.com/papikondalutourism'
        ]
      },
      {
        '@type': 'TouristAttraction',
        '@id': 'https://manapapikondalu.vercel.app/#attraction',
        'name': 'Papikondalu Hills',
        'description': 'Scenic hills along the Godavari River offering breathtaking boat tours and temple visits',
        'url': 'https://manapapikondalu.vercel.app/attractions/papikondalu-hills',
        'image': {
          '@type': 'ImageObject',
          'url': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
          'width': 1200,
          'height': 800
        },
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Papikondalu',
          'addressRegion': 'Andhra Pradesh',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.0005,
          'longitude': 81.8040
        },
        'touristType': ['Family', 'Adventure', 'Nature Lovers', 'Pilgrims'],
        'availableLanguage': ['English', 'Telugu', 'Hindi']
      },
      {
        '@type': 'WebSite',
        '@id': 'https://manapapikondalu.vercel.app/#website',
        'url': 'https://manapapikondalu.vercel.app',
        'name': 'Papikondalu Tourism',
        'description': 'Best boat tours and river cruise experiences in Papikondalu Hills',
        'publisher': {
          '@id': 'https://manapapikondalu.vercel.app/#organization'
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://manapapikondalu.vercel.app/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        'inLanguage': 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://manapapikondalu.vercel.app/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://manapapikondalu.vercel.app'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Packages',
            'item': 'https://manapapikondalu.vercel.app/packages'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Attractions',
            'item': 'https://manapapikondalu.vercel.app/attractions'
          }
        ]
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


        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased">
        <WebVitals />
        <ImagePreloader />
        <Header />
        <FloatingActionButton />
        <main className="relative" role="main">{children}</main>
        <Footer />
        <LazyMultiAgentWidget />
      </body>
    </html>
  )
}