'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users, MapPin, Star } from 'lucide-react'

const packages = [
  {
    id: 1,
    name: 'Bhadrachalam to Papikondalu',
    duration: '2 Days',
    capacity: '50 People',
    departure: 'Bhadrachalam',
    rating: 4.8,
    reviews: 245,
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    highlights: ['Temple Visit', 'Scenic Boat Ride', 'Local Cuisine']
  },
  {
    id: 2,
    name: 'Rajahmundry to Papikondalu',
    duration: '8 Hours',
    capacity: '100 People',
    departure: 'Rajahmundry',
    rating: 4.9,
    reviews: 189,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg',
    highlights: ['Full Day Tour', 'Photography', 'Refreshments']
  },
  {
    id: 3,
    name: 'Sirivaka Night Stay',
    duration: '2 Days 1 Night',
    capacity: '30 People',
    departure: 'Bhadrachalam',
    rating: 4.7,
    reviews: 156,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1756003855/sirivaka_fdzsuf.avif',
    highlights: ['Night Stay', 'Campfire', 'Nature Walk']
  }
]

const PackageShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted tour packages for an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                  <Star size={14} className="text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {pkg.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">Up to {pkg.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">Departs from {pkg.departure}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {pkg.reviews} reviews
                  </div>
                  <div className="text-lg font-semibold text-primary-600">
                    Contact for Pricing
                  </div>
                </div>

                <Link 
                  href="/packages"
                  className="w-full btn-primary mt-4 text-center block"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/packages" className="btn-secondary">
            View All Packages
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PackageShowcase