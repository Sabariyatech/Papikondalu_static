import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'East Godavari Tourism | Best Places in East Godavari | Andhra Pradesh Tours',
  description: 'East Godavari tourism guide. Explore best places in East Godavari including Papikondalu, Maredumilli, temples, waterfalls. Complete East Godavari tour packages.',
  keywords: 'East Godavari tourism, East Godavari, best places East Godavari, Andhra Pradesh tourism, East Godavari attractions',
}

export default function EastGodavariPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">East Godavari Tourism</h1>
          <p className="text-2xl mb-8">Discover the best places in East Godavari, Andhra Pradesh</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">About East Godavari</h2>
            <p className="text-lg mb-6 text-center max-w-4xl mx-auto">
              East Godavari is one of the most scenic districts in Andhra Pradesh, known for its rich cultural heritage, 
              natural beauty, and spiritual significance. The district offers diverse tourism experiences from river cruises 
              to forest adventures, temple visits to hill station retreats.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Best Places in East Godavari</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Papikondalu</h4>
                <p className="mb-4">Scenic hills with Godavari river cruise and boat tours</p>
                <Link href="/papikondalu" className="text-blue-600 font-semibold">Explore →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Maredumilli</h4>
                <p className="mb-4">Pristine waterfalls and dense forests for eco-tourism</p>
                <Link href="/maredumilli" className="text-blue-600 font-semibold">Visit →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Bhadrachalam</h4>
                <p className="mb-4">Sacred Lord Rama temple and spiritual experiences</p>
                <Link href="/bhadrachalam" className="text-blue-600 font-semibold">Discover →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Gudisa Hills</h4>
                <p className="mb-4">Hill station with panoramic views and trekking</p>
                <Link href="/gudisa" className="text-blue-600 font-semibold">Explore →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Rampa Waterfalls</h4>
                <p className="mb-4">Spectacular waterfalls and adventure activities</p>
                <Link href="/rampa-waterfalls" className="text-blue-600 font-semibold">Visit →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Rajahmundry</h4>
                <p className="mb-4">Cultural hub with river activities and heritage sites</p>
                <Link href="/packages" className="text-blue-600 font-semibold">Book Tours →</Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">East Godavari Tourism Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Godavari River Cruises</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Ancient Temples and Heritage Sites</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Pristine Waterfalls and Forests</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Hill Stations and Trekking</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Tribal Culture and Heritage</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Adventure and Eco-Tourism</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose East Godavari</h3>
              <p className="text-lg mb-4">
                East Godavari offers a perfect blend of natural beauty, spiritual significance, and cultural richness. 
                From the scenic Papikondalu hills to the sacred Bhadrachalam temple, from the pristine Maredumilli 
                forests to the adventurous Rampa waterfalls, East Godavari has something for every traveler.
              </p>
              <p className="text-lg">
                Our expert guides and comprehensive tour packages ensure you experience the best of East Godavari 
                tourism with comfort, safety, and authentic local insights.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Plan Your East Godavari Tour</h3>
            <p className="text-lg mb-8">Explore the best of East Godavari with our comprehensive tour packages</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                View Packages
              </Link>
              <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}