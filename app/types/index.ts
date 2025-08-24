export interface Package {
  id: string
  name: string
  description: string
  duration: string
  capacity: string
  departure: string
  features: string[]
  itinerary: string[]
  bestTime: string
  rating: number
  reviews: number
  image: string
}

export interface Attraction {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'nature' | 'temple' | 'heritage' | 'accommodation'
}