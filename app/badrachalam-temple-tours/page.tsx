import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Badrachalam Temple Tours | Lord Rama Temple Tours | Spiritual Tourism',
  description: 'Experience sacred Badrachalam temple tours with Lord Rama darshan, spiritual programs, and cultural experiences. Book Badrachalam tour packages with premium facilities. 20+ years expertise.',
  keywords: [
    'Badrachalam temple tours', 'Badrachalam tour packages', 'Lord Rama temple tours', 'Badrachalam temple darshan',
    'spiritual tourism Andhra Pradesh', 'Badrachalam temple booking', 'religious tours India', 'temple tourism packages'
  ]
}

export default function BadrachalamTempleToursPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755980907/Bhadrachalam_Temple_yg8met.jpg"
          alt="Badrachalam Temple Tours - Sacred Lord Rama Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sacred <span className="text-yellow-400">Badrachalam Temple Tours</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience divine <strong>Badrachalam temple tours</strong> with <strong>Lord Rama darshan</strong>. 
            Book premium <strong>Badrachalam tour packages</strong> with spiritual programs and cultural experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Book Temple Tours
            </Link>
            <Link href="tel:+919848323488" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Call: +91 9848323488
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Premium <span className="text-orange-600">Badrachalam Temple Tours</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Discover the spiritual significance of <strong>Badrachalam temple</strong> with our premium <strong>temple tours</strong>. 
              Experience <strong>Lord Rama darshan</strong>, participate in religious ceremonies, and explore the rich cultural heritage 
              with India&apos;s most trusted spiritual tourism operator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temple Darshan Package</h3>
              <div className="flex items-center mb-3">
                <Clock className="text-orange-600 mr-2" size={20} />
                <span className="text-gray-700">Half Day (4-5 hours)</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700">4.8/5 Rating</span>
              </div>
              <p className="text-gray-700 mb-4">
                Sacred <strong>Badrachalam temple darshan</strong> with guided tour, 
                prayer sessions, and cultural insights.
              </p>
              <Link href="/packages" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Book Now
              </Link>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spiritual Retreat Package</h3>
              <div className="flex items-center mb-3">
                <Clock className="text-red-600 mr-2" size={20} />
                <span className="text-gray-700">2-3 Days</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700">4.9/5 Rating</span>
              </div>
              <p className="text-gray-700 mb-4">
                Extended <strong>spiritual tourism</strong> with temple stay, 
                meditation sessions, and religious programs.
              </p>
              <Link href="/packages" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Book Now
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Festival Special Tours</h3>
              <div className="flex items-center mb-3">
                <Clock className="text-purple-600 mr-2" size={20} />
                <span className="text-gray-700">Festival Dates</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700">4.8/5 Rating</span>
              </div>
              <p className="text-gray-700 mb-4">
                Special <strong>Badrachalam temple tours</strong> during Rama Navami 
                and other religious festivals.
              </p>
              <Link href="/packages" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              India&apos;s Most Trusted <span className="text-yellow-300">Temple Tour Operator</span>
            </h2>
            <p className="text-xl mb-6">
              Experience divine <strong>Badrachalam temple tours</strong> with complete spiritual guidance, 
              comfortable facilities, and memorable religious experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Book Temple Tours
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}