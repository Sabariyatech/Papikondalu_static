import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import SEOContent from './components/SEOContent'
import SEOBoostContent from './components/SEOBoostContent'
import { LazyTestimonials, LazyNewsletter } from './components/LazyComponents'
import CriticalCSS from './components/CriticalCSS'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papikondalu Tours | Badrachalam Temple Tours | East Godavari Tourism',
  description: 'Best Papikondalu tours, Badrachalam temple tours & East Godavari tourism. Premium Rajahmundry tours, Maredumilli tours & Rampachodavaram tours. 20+ years expertise, 7+ lakh customers. Book now!',
  keywords: [
    'Papikondalu tours', 'Badrachalam temple tours', 'East Godavari tourism', 'Rajahmundry tours', 'Maredumilli tours', 'Rampachodavaram tours',
    'best tourist places in East Godavari', 'Papikondalu boat tours', 'Godavari river cruise', 'Badrachalam tour packages',
    'East Godavari tour packages', 'Rajahmundry boat tours', 'Maredumilli waterfalls', 'Rampachodavaram adventure tours',
    'weekend getaways East Godavari', 'family tour packages', 'adventure tourism Andhra Pradesh', 'temple tourism'
  ],
  openGraph: {
    title: 'Papikondalu Tours | Badrachalam Temple Tours | East Godavari Tourism',
    description: 'Best Papikondalu tours, Badrachalam temple tours & East Godavari tourism. Premium Rajahmundry tours, Maredumilli tours & Rampachodavaram tours. 7+ lakh customers.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Tours - Best East Godavari Tourism & Badrachalam Temple Tours'
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
      <SEOBoostContent />
      <SEOContent />
      <PackageShowcase />
      <LazyTestimonials />
      <LazyNewsletter />
    </>
  )
}