import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Blog | Papikondalu, Bhadradri, East Godavari & Maredumalli Stories',
  description: 'Explore the latest travel tips, adventure stories, and insights for Papikondalu, Bhadradri temple, East Godavari, and Maredumalli. Find guides from trusted local experts and customer experiences.',
  keywords: 'Papikondalu blog, Bhadrachalam temple guide, Rajahmundry travel tips, Maredumalli waterfalls stories, Rampachodavaram adventures, East Godavari tourism blog',
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover travel tips, adventure stories, and insights for Papikondalu, 
            Bhadradri temple, East Godavari, and Maredumalli from our local experts.
          </p>
        </div>
        
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-neutral-700 mb-4">
            Coming Soon
          </h2>
          <p className="text-neutral-600">
            We&apos;re working on bringing you amazing travel stories and guides. 
            Stay tuned for exciting content about our destinations!
          </p>
        </div>
      </div>
    </div>
  )
}