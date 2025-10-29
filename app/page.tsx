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
  title: 'Papikondalu | Maredumilli | Bhadrachalam | East Godavari Tourism | Gudisa | Rampa Waterfalls',
  description: 'Papikondalu tours, Maredumilli waterfalls, Bhadrachalam temple visits, East Godavari tourism, Gudisa hills, and Rampa waterfalls. Book authentic experiences with local experts. Best rates guaranteed!',
  keywords: [
    'Papikondalu', 'Maredumilli', 'Bhadrachalam', 'East Godavari tourism', 'Gudisa', 'Rampa waterfalls',
    'Papikondalu tours', 'Maredumilli waterfalls', 'Bhadrachalam temple', 'East Godavari', 'Gudisa hills',
    'Rampachodavaram', 'Godavari river cruise', 'Andhra Pradesh tourism', 'Papikondalu hills',
    'Bhadradri temple', 'Maredumilli forest', 'East Godavari attractions', 'Gudisa trekking'
  ],
  openGraph: {
    title: 'Papikondalu Tours | Bhadradri Temple | East Godavari & Maredumalli Tourism Packages',
    description: 'Book top-rated Papikondalu tours and East Godavari river cruises with the No.1 operator. Explore Bhadradri temples, Maredumalli waterfalls, heritage sites, and adventure packages—trusted by 7 lakh customers for 20+ years.',
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