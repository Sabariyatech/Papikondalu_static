import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gudisa | Gudisa Hills | Hill Station East Godavari | Trekking Adventures',
  description: 'Gudisa hills and hill station tours in East Godavari. Experience Gudisa trekking, panoramic views, camping. Book authentic Gudisa adventure packages.',
  keywords: 'Gudisa, Gudisa hills, hill station, East Godavari, trekking, camping, adventure, panoramic views',
}

export default function GudisaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Gudisa</h1>
          <p className="text-2xl mb-8">Discover Gudisa hills - East Godavari&apos;s scenic hill station</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Gudisa Hills</h2>
              <p className="text-lg mb-6">
                Gudisa is a picturesque hill station located in East Godavari district, offering breathtaking 
                panoramic views of the surrounding valleys and forests. Known for its cool climate and serene 
                environment, Gudisa is perfect for trekking, camping, and nature photography.
              </p>
              <p className="text-lg mb-6">
                The Gudisa hills provide an ideal escape from the hustle and bustle of city life. With its 
                pristine natural beauty, diverse flora and fauna, and adventure opportunities, Gudisa has 
                become a popular destination for nature lovers and adventure enthusiasts.
              </p>
            </div>
            <div className="bg-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Gudisa Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Panoramic Mountain Views</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Trekking and Hiking Trails</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Camping Under Stars</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Cool Hill Station Climate</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Nature Photography</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>Adventure Activities</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">Gudisa Adventure Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Hill Trekking</h4>
                <p className="mb-4">Guided Gudisa hills trekking with panoramic viewpoints</p>
                <Link href="/packages/8" className="text-purple-600 font-semibold">Book Trek →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Camping Experience</h4>
                <p className="mb-4">Overnight camping at Gudisa with bonfire and stargazing</p>
                <Link href="/contact" className="text-purple-600 font-semibold">Inquire →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Nature Photography</h4>
                <p className="mb-4">Photography tours capturing Gudisa&apos;s scenic beauty</p>
                <Link href="/contact" className="text-purple-600 font-semibold">Book Tour →</Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Best Time to Visit Gudisa</h3>
              <p className="text-lg mb-4">
                The best time to visit Gudisa hills is from October to March when the weather is pleasant 
                and ideal for trekking and outdoor activities. The cool climate during these months makes 
                it perfect for camping and sightseeing.
              </p>
              <p className="text-lg">
                Monsoon season (June to September) brings lush greenery but can make trekking challenging. 
                Summer months are warmer but still offer a respite from the plains&apos; heat.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Spectacular sunrise and sunset views from hilltops</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Well-marked trekking trails for different skill levels</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Rich biodiversity and bird watching opportunities</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Local tribal culture and traditional lifestyle</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Plan Your Gudisa Adventure</h3>
            <p className="text-lg mb-8">Experience the beauty of Gudisa hills with our expert guides</p>
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">
              Book Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}