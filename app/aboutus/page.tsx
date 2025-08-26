import type { Metadata } from 'next'
import Script from 'next/script'
import AboutUsClient from './AboutUsClient'

export const metadata: Metadata = {
  title: 'About Papikondalu Tourism - 20+ Years Excellence | 7+ Lakh Happy Customers',
  description: 'Discover Papikondalu Tourism\'s journey since 2004. Leading Andhra Pradesh river tourism with 20+ years experience, modern boat fleet, and 7+ lakh satisfied customers. Learn our story of excellence.',
  keywords: [
    'Papikondalu Tourism about', 'river tourism company Andhra Pradesh', '20 years experience boat tours',
    'Godavari river tourism history', 'boat fleet Papikondalu', 'tourism company since 2004',
    'Rajahmundry tourism company', '7 lakh customers served', 'best river tourism Andhra Pradesh',
    'Papikondalu Tourism story', 'boat tour company history', 'Godavari cruise company'
  ],
  openGraph: {
    title: 'About Papikondalu Tourism - 20+ Years of Excellence in River Tourism',
    description: 'Leading Andhra Pradesh river tourism company since 2004. Modern fleet, expert guides, 7+ lakh happy customers.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg',
      width: 1200,
      height: 630,
      alt: 'About Papikondalu Tourism - Company Story and Fleet'
    }]
  },
  alternates: {
    canonical: 'https://papikondalutourism.com/aboutus'
  }
}

export default function AboutUs() {
  const aboutUsSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://papikondalutourism.com/aboutus#webpage',
    'url': 'https://papikondalutourism.com/aboutus',
    'name': 'About Papikondalu Tourism',
    'isPartOf': {
      '@id': 'https://papikondalutourism.com/#website'
    },
    'about': {
      '@id': 'https://papikondalutourism.com/#organization'
    },
    'description': 'Learn about Papikondalu Tourism\'s 20+ years journey in river tourism, our modern fleet, and commitment to excellence.',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://papikondalutourism.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Us',
          'item': 'https://papikondalutourism.com/aboutus'
        }
      ]
    },
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Papikondalu Tourism',
      'foundingDate': '2004',
      'description': 'Leading river tourism company in Andhra Pradesh with 20+ years of experience',
      'numberOfEmployees': '50-100',
      'location': {
        '@type': 'Place',
        'name': 'Rajahmundry, Andhra Pradesh'
      }
    }
  }

  return (
    <>
      <Script
        id="aboutus-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsSchema) }}
      />
      <AboutUsClient />
    </>
  )
}