import { attractionsData } from '../attractionsData'
import AttractionDetailClient from './AttractionDetailClient'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    id: attraction.id.toString(),
  }))
}

export default async function AttractionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const attraction = attractionsData.find(a => a.id === parseInt(id))
  
  if (!attraction) {
    notFound()
  }

  return <AttractionDetailClient attraction={attraction} />
}