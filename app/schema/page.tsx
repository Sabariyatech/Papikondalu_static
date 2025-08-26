import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schema Markup - Papikondalu Tourism SEO',
  description: 'Comprehensive schema markup for Papikondalu Tourism website',
  robots: { index: false, follow: false }
}

export default function SchemaPage() {
  const comprehensiveSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': 'https://papikondalutourism.com/#organization',
        'name': 'Papikondalu Tourism',
        'alternateName': 'Papikondalu River Tourism',
        'description': 'Leading river tourism company in Andhra Pradesh with 20+ years of experience serving 7+ lakh customers',
        'url': 'https://papikondalutourism.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://papikondalutourism.com/icon-512x512.png',
          'width': 512,
          'height': 512
        },
        'image': [
          'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
          'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg'
        ],
        'telephone': '+91-9876543210',
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
        'numberOfEmployees': {
          '@type': 'QuantitativeValue',
          'minValue': 50,
          'maxValue': 100
        },
        'areaServed': [
          {
            '@type': 'State',
            'name': 'Andhra Pradesh'
          },
          {
            '@type': 'State', 
            'name': 'Telangana'
          }
        ],
        'serviceType': [
          'River Tourism',
          'Boat Tours',
          'Temple Tours',
          'Adventure Packages',
          'Family Packages',
          'Honeymoon Packages'
        ],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': 4.8,
          'reviewCount': 2500,
          'bestRating': 5,
          'worstRating': 1
        },
        'sameAs': [
          'https://www.facebook.com/papikondalutourism',
          'https://www.instagram.com/papikondalutourism',
          'https://www.youtube.com/papikondalutourism',
          'https://twitter.com/papikondalutourism'
        ]
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Script
        id="comprehensive-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comprehensiveSchema) }}
      />
      <h1 className="text-3xl font-bold mb-6">Schema Markup - SEO Enhancement</h1>
      <p className="text-gray-600">
        This page contains comprehensive schema markup for better search engine understanding.
      </p>
    </div>
  )
}