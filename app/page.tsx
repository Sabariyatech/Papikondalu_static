import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import { LazyTestimonials, LazyNewsletter } from './components/LazyComponents'
import CriticalCSS from './components/CriticalCSS'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papikondalu Tourism - Best Boat Tours | 7+ Lakh Customers',
  description: 'Discover magical Papikondalu Hills with India\'s #1 river tourism company. 20+ years expertise, premium boat tours & temple visits.',
  keywords: [
    'Papikondalu tourism', 'best boat tours Godavari', 'Andhra Pradesh river cruise', 'Bhadrachalam temple tours',
    'Papikondalu hills boat ride', 'Godavari river tourism', 'Rajahmundry boat tours', 'temple tours Andhra Pradesh',
    'adventure packages Papikondalu', 'river cruise India', 'weekend getaway Andhra Pradesh', 'family tour packages'
  ],
  openGraph: {
    title: 'Papikondalu Tourism - Best Boat Tours | 7+ Lakh Customers',
    description: 'Discover magical Papikondalu Hills with India\'s leading river tourism company. 20+ years of excellence, premium boat tours, temple visits & adventure packages.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Hills Boat Tours - Best River Cruise Experience'
    }]
  }
}

export default function Home() {
  const homePageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://papikondalutourism.com/#webpage',
    'url': 'https://papikondalutourism.com',
    'name': 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh',
    'isPartOf': {
      '@id': 'https://papikondalutourism.com/#website'
    },
    'about': {
      '@id': 'https://papikondalutourism.com/#organization'
    },
    'description': 'Experience Papikondalu Hills with India\'s #1 river tourism company. Premium boat tours, temple visits & adventure packages.',
    'breadcrumb': {
      '@id': 'https://papikondalutourism.com/#breadcrumb'
    },
    'inLanguage': 'en-US',
    'potentialAction': [
      {
        '@type': 'ReadAction',
        'target': ['https://papikondalutourism.com']
      }
    ]
  }

  return (
    <>
      <CriticalCSS />
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData) }}
      />
      <Hero />
      <FeaturedAttractions />
      <PackageShowcase />
      <LazyTestimonials />
      <LazyNewsletter />
    </>
  )
}