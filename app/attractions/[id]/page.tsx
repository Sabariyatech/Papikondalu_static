import { attractionsData } from '../attractionsData'
import AttractionDetailClient from './AttractionDetailClient'
import { notFound } from 'next/navigation'
import { getAttractionSlug, getAttractionIdFromSlug } from '../../utils/slugs'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    id: getAttractionSlug(attraction.id),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const attractionId = getAttractionIdFromSlug(id)
  const attraction = attractionsData.find(a => a.id === attractionId)
  
  if (!attraction) {
    return {
      title: 'Attraction Not Found | Papikondalu Tourism',
      description: 'The requested attraction could not be found.'
    }
  }

  return {
    title: `${attraction.name} | Papikondalu Tourism | East Godavari Attractions`,
    description: `${attraction.shortDescription} - Best time to visit: ${attraction.bestTime}. Book your ${attraction.name} tour with Papikondalu Tourism.`,
    keywords: `${attraction.name}, ${attraction.activities?.join(', ')}, East Godavari, Papikondalu Tourism, Godavari River`,
    openGraph: {
      title: `${attraction.name} | Papikondalu Tourism`,
      description: attraction.shortDescription,
      images: [attraction.image],
      type: 'website'
    }
  }
}

export default async function AttractionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const attractionId = getAttractionIdFromSlug(id)
  
  if (!attractionId) {
    notFound()
  }
  
  const attraction = attractionsData.find(a => a.id === attractionId)
  
  if (!attraction) {
    notFound()
  }

  return <AttractionDetailClient attraction={attraction} />
}