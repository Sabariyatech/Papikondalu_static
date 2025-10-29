import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bhadrachalam | Bhadrachalam Temple | Lord Rama Temple | Spiritual Tours',
  description: 'Bhadrachalam temple tours and Lord Rama darshan. Experience Bhadrachalam spiritual heritage, temple festivals, cultural programs. Book authentic temple tours.',
  keywords: 'Bhadrachalam, Bhadrachalam temple, Lord Rama temple, spiritual tours, temple darshan, religious tourism',
}

export default function BhadrachalamPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Bhadrachalam</h1>
          <p className="text-2xl mb-8">Sacred Bhadrachalam temple - Home of Lord Rama</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Bhadrachalam</h2>
              <p className="text-lg mb-6">
                Bhadrachalam is a sacred pilgrimage town located on the banks of the Godavari River in Telangana. 
                The town is famous for the ancient Bhadrachalam temple dedicated to Lord Rama, making it one of 
                the most important religious destinations in South India.
              </p>
              <p className="text-lg mb-6">
                The Bhadrachalam temple is renowned for its architectural beauty and spiritual significance. 
                The temple celebrates grand festivals, especially during Rama Navami, attracting thousands of 
                devotees from across the country seeking Lord Rama&apos;s blessings.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png"
                alt="Bhadrachalam temple"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">Bhadrachalam Temple Tours</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Temple Darshan</h4>
                <p className="mb-4">Sacred Bhadrachalam temple visit with special darshan arrangements</p>
                <Link href="/packages/2" className="text-orange-600 font-semibold">Book Now →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Festival Tours</h4>
                <p className="mb-4">Experience Bhadrachalam temple festivals and cultural celebrations</p>
                <Link href="/contact" className="text-orange-600 font-semibold">Inquire →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Spiritual Journey</h4>
                <p className="mb-4">Complete Bhadrachalam spiritual tour with guided temple visits</p>
                <Link href="/packages/4" className="text-orange-600 font-semibold">Explore →</Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Visit Bhadrachalam Temple</h3>
            <p className="text-lg mb-8">Plan your spiritual journey to Bhadrachalam with expert guidance</p>
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700">
              Book Temple Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}