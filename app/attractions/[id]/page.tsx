import { attractionsData } from '../attractionsData'
import AttractionDetailClient from './AttractionDetailClient'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    id: attraction.id.toString(),
  }))
}

export default function AttractionDetailPage({ params }: { params: { id: string } }) {
  const attraction = attractionsData.find(a => a.id === parseInt(params.id))
  
  if (!attraction) {
    notFound()
  }

  return <AttractionDetailClient attraction={attraction} />
}