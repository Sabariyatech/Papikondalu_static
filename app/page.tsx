import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import SEOContent from './components/SEOContent'
import { LazyTestimonials, LazyNewsletter } from './components/LazyComponents'
import CriticalCSS from './components/CriticalCSS'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papikondalu Tours | Bhadradri Temple | East Godavari & Maredumalli Tourism Packages',
  description: 'Book top-rated Papikondalu tours from Rajahmundry and Bhadrachalam. Explore East Godavari river cruises, Maredumalli waterfalls, Rampachodavaram adventures, and Bhadradri temple visits. No.1 operator trusted by 7 lakh customers for 20+ years.',
  keywords: [
    'Papikondalu tourism', 'Bhadrachalam temple tours', 'Rajahmundry boat tours', 'Maredumalli waterfalls',
    'Rampachodavaram tours', 'East Godavari tourism', 'Papikondalu from Rajahmundry', 'Bhadradri temple packages',
    'Godavari river cruise', 'Papikondalu hills', 'Andhra Pradesh tourism', 'weekend getaway packages',
    'family tour packages', 'adventure tours East Godavari', 'temple tours Andhra Pradesh', 'river tourism India'
  ],
  openGraph: {
    title: 'Papikondalu Tours | Bhadradri Temple | East Godavari & Maredumalli Tourism Packages',
    description: 'Book top-rated Papikondalu tours from Rajahmundry and Bhadrachalam. Explore East Godavari river cruises, Maredumalli waterfalls, Rampachodavaram adventures, and Bhadradri temple visits. No.1 operator trusted by 7 lakh customers.',
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
    '@id': 'https://bhadradripapikondalu.com/#webpage',
    'url': 'https://bhadradripapikondalu.com',
    'name': 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh',
    'isPartOf': {
      '@id': 'https://bhadradripapikondalu.com/#website'
    },
    'about': {
      '@id': 'https://bhadradripapikondalu.com/#organization'
    },
    'description': 'Experience Papikondalu Hills with India\'s #1 river tourism company. Premium boat tours, temple visits & adventure packages.',
    'breadcrumb': {
      '@id': 'https://bhadradripapikondalu.com/#breadcrumb'
    },
    'inLanguage': 'en-US',
    'potentialAction': [
      {
        '@type': 'ReadAction',
        'target': ['https://bhadradripapikondalu.com']
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
      <SEOContent />
      <PackageShowcase />
      <LazyTestimonials />
      <LazyNewsletter />
    </>
  )
}