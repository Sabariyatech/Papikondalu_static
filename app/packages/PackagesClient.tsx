'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, MapPin, Star } from 'lucide-react'
import { packagesData } from './packagesData'

export default function PackagesClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
          Best Papikondalu Tour Packages | Bhadradri Temple Trips & East Godavari Cruises          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Explore premium Papikondalu boat tour packages, Bhadradri temple trips, and East Godavari river cruises. Custom adventures and spiritual journeys for every traveler—book your unforgettable experience!
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated overflow-hidden group hover-glow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                    <Star size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {pkg.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Users size={14} className="mr-2" />
                      <span className="text-sm">{pkg.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={14} className="mr-2" />
                      <span className="text-sm">{pkg.departure}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star size={14} className="mr-2" />
                      <span className="text-sm">{pkg.bestTime}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href={`/packages/${pkg.id}`} 
                      className="flex-1 btn-primary text-center"
                    >
                      Know More
                    </Link>
                    <Link 
                      href={`/packages/${pkg.id}`} 
                      className="flex-1 btn-outline text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-xl mb-8">
              We can create personalized itineraries based on your preferences and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
              <a href="tel:+919848323488" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Call Now: +91 9848323488
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}