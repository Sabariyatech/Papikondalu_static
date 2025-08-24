import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
  url = 'https://papikondalutourism.com',
  type = 'website'
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, 'Papikondalu tourism', 'boat tours', 'Godavari river'],
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      url,
      type,
      siteName: 'Papikondalu Tourism',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}