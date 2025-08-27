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
  id: number
  name: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  highlights: string[]
  bestTime: string
  activities: string[]
  facilities: string[]
  tips: string[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'nature' | 'temple' | 'heritage' | 'accommodation'
}