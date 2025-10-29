import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Maredumilli | Maredumilli Waterfalls | Forest Tours | East Godavari Adventure',
  description: 'Maredumilli waterfalls and forest tours. Experience Maredumilli eco-tourism, wildlife, trekking. Book authentic Maredumilli packages with expert guides.',
  keywords: 'Maredumilli, Maredumilli waterfalls, Maredumilli forest, East Godavari, eco-tourism, wildlife, trekking',
}

export default function MaredumilliPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Maredumilli</h1>
          <p className="text-2xl mb-8">Discover Maredumilli waterfalls and pristine forests in East Godavari</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Maredumilli</h2>
              <p className="text-lg mb-6">
                Maredumilli is a pristine forest area in East Godavari district, known for its spectacular waterfalls, 
                dense forests, and rich biodiversity. This eco-tourism destination offers visitors an authentic 
                wilderness experience with opportunities for trekking, wildlife spotting, and nature photography.
              </p>
              <p className="text-lg mb-6">
                The Maredumilli forests are home to numerous waterfalls, including the famous Jalatarangini and 
                Rampa waterfalls. The area is perfect for adventure enthusiasts and nature lovers seeking an 
                escape from urban life into the heart of Andhra Pradesh&apos;s natural beauty.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg"
                alt="Maredumilli waterfalls"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">Maredumilli Experiences</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Waterfall Tours</h4>
                <p className="mb-4">Visit multiple Maredumilli waterfalls with guided forest treks</p>
                <Link href="/packages/3" className="text-green-600 font-semibold">Explore →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Eco-Tourism</h4>
                <p className="mb-4">Sustainable Maredumilli forest tours with wildlife spotting</p>
                <Link href="/packages/9" className="text-green-600 font-semibold">Book Now →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Adventure Trekking</h4>
                <p className="mb-4">Challenging Maredumilli forest treks for adventure seekers</p>
                <Link href="/contact" className="text-green-600 font-semibold">Inquire →</Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Explore Maredumilli</h3>
            <p className="text-lg mb-8">Book your Maredumilli adventure with experienced local guides</p>
            <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}