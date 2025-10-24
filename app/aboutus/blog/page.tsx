import type { Metadata } from 'next'
import Script from 'next/script'
import BlogListClient from './BlogListClient'

export const metadata: Metadata = {
  title: 'Papikondalu Tourism Blog - Travel Guides & River Tourism Insights',
  description: 'Explore expert travel guides, hidden gems, and insider insights about Godavari river cruises, Papikondalu hills, and Andhra Pradesh river tourism from industry leaders.',
  keywords: [
    'Papikondalu blog', 'Godavari river cruise guide', 'Andhra Pradesh travel blog',
    'river tourism insights', 'Papikondalu travel tips', 'boat tour guides',
    'Eastern Ghats travel', 'tribal culture Andhra Pradesh', 'river cruise blog'
  ],
  openGraph: {
    title: 'Papikondalu Tourism Blog - Expert Travel Guides & Insights',
    description: 'Discover expert travel guides, hidden gems, and insider insights about Godavari river cruises and Papikondalu hills.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1200,h_630,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Tourism Blog - Travel Guides'
    }]
  },
  alternates: {
    canonical: 'https://papikondalutourism.com/aboutus/blog'
  }
}

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://papikondalutourism.com/aboutus/blog#blog',
    'url': 'https://papikondalutourism.com/aboutus/blog',
    'name': 'Papikondalu Tourism Blog',
    'description': 'Expert travel guides and insights about Godavari river cruises and Papikondalu tourism',
    'publisher': {
      '@type': 'Organization',
      'name': 'Papikondalu Tourism',
      'url': 'https://papikondalutourism.com'
    },
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
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Blog',
          'item': 'https://papikondalutourism.com/aboutus/blog'
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogListClient />
    </>
  )
}