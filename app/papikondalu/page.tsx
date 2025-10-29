import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Papikondalu | Best Papikondalu Tours | Godavari River Cruise | East Godavari',
  description: 'Papikondalu tours with scenic Godavari river cruise. Experience Papikondalu hills, boat rides, temple visits. Book authentic Papikondalu packages with local experts.',
  keywords: 'Papikondalu, Papikondalu tours, Papikondalu hills, Godavari river cruise, East Godavari, Papikondalu boat tours',
}

export default function PapikondaluPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Papikondalu</h1>
          <p className="text-2xl mb-8">Experience the scenic beauty of Papikondalu hills with Godavari river cruise</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Papikondalu</h2>
              <p className="text-lg mb-6">
                Papikondalu is a stunning hill range located along the Godavari River in East Godavari district. 
                Known for its scenic beauty and peaceful boat rides, Papikondalu offers visitors a unique experience 
                of nature&apos;s grandeur combined with spiritual significance.
              </p>
              <p className="text-lg mb-6">
                The name &quot;Papikondalu&quot; literally means &quot;hills of paper&quot; in Telugu, referring to the white limestone 
                cliffs that resemble sheets of paper. These hills create a breathtaking backdrop for river cruises 
                and are considered one of the most beautiful destinations in Andhra Pradesh.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg"
                alt="Papikondalu hills scenic view"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">Papikondalu Tour Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Day Tour</h4>
                <p className="mb-4">Rajahmundry to Papikondalu day cruise with lunch and sightseeing</p>
                <Link href="/packages/rajahmundry-papikondalu-day-tour" className="text-blue-600 font-semibold">Book Now →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Temple & Cruise</h4>
                <p className="mb-4">Bhadrachalam temple visit combined with Papikondalu cruise</p>
                <Link href="/packages/bhadradri-temple-godavari-cruise-tour" className="text-blue-600 font-semibold">Book Now →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">River Cruise</h4>
                <p className="mb-4">Premium Papikondalu river cruise with comfortable boats</p>
                <Link href="/packages/papikondalu-river-cruise-package" className="text-blue-600 font-semibold">Book Now →</Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Plan Your Papikondalu Visit</h3>
            <p className="text-lg mb-8">Contact our experts for customized Papikondalu tour packages</p>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}