'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Star } from 'lucide-react'

const attractions = [
  {
    id: 1,
    name: 'Papikondalu',
    description: 'The crown jewel of Godavari tourism, Papikondalu offers breathtaking views of lush green hills reflected in the pristine waters. This scenic wonder is perfect for photography and peaceful contemplation.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
    highlights: ['Scenic boat rides', 'Photography spots', 'Peaceful environment', 'Natural beauty'],
    bestTime: 'October to March',
    duration: '4-6 hours'
  },
  {
    id: 2,
    name: 'Perantalapalli',
    description: 'A serene village nestled along the Godavari River, known for its traditional lifestyle and beautiful landscapes. Experience authentic rural life and interact with friendly locals.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980789/papikondalu-900x500-1_d4f8xn.jpg',
    highlights: ['Village life experience', 'Local culture', 'River views', 'Traditional crafts'],
    bestTime: 'November to February',
    duration: '2-3 hours'
  },
  {
    id: 3,
    name: 'Gandipochamma Temple',
    description: 'A sacred temple with deep spiritual significance, offering devotees a peaceful place for worship and meditation. The temple architecture reflects traditional South Indian style.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    highlights: ['Spiritual experience', 'Traditional architecture', 'Religious ceremonies', 'Peaceful atmosphere'],
    bestTime: 'Year round',
    duration: '1-2 hours'
  },
  {
    id: 4,
    name: 'Bhadrachalam Temple',
    description: 'One of the most revered temples dedicated to Lord Rama, attracting thousands of devotees. The temple is famous for its grand architecture and spiritual significance.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980907/Bhadrachalam_Temple_yg8met.jpg',
    highlights: ['Lord Rama temple', 'Grand architecture', 'Religious festivals', 'Spiritual significance'],
    bestTime: 'Year round',
    duration: '2-3 hours'
  },
  {
    id: 5,
    name: 'Sirivaka Night Stay',
    description: 'Experience the magic of staying overnight in the heart of nature. Enjoy campfires, stargazing, and the sounds of the forest in this unique accommodation experience.',
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1756003855/sirivaka_fdzsuf.avif',
    highlights: ['Overnight camping', 'Campfire experience', 'Stargazing', 'Nature sounds'],
    bestTime: 'October to March',
    duration: 'Overnight'
  },
  {
    id: 6,
    name: 'Maredumalli',
    description: 'A pristine forest area with stunning waterfalls and rich biodiversity. Perfect for nature lovers and adventure enthusiasts seeking an escape into the wilderness.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg',
    highlights: ['Waterfalls', 'Forest trekking', 'Wildlife spotting', 'Adventure activities'],
    bestTime: 'June to February',
    duration: 'Full day'
  },
  {
    id: 7,
    name: 'Parnasala',
    description: 'A place of historical and mythological significance, believed to be where Lord Rama, Sita, and Lakshmana stayed during their exile. Rich in cultural heritage and natural beauty.',
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1755979312/dev_parnasala_pfvan7.jpg',
    highlights: ['Mythological significance', 'Historical importance', 'Cultural heritage', 'Scenic beauty'],
    bestTime: 'October to March',
    duration: '3-4 hours'
  },
  {
    id: 8,
    name: 'Gudisa',
    description: 'A hill station offering panoramic views and cool climate. Perfect for those seeking adventure and breathtaking landscapes away from the hustle and bustle.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755981754/Camping_in_Mountains_ytwmvi.avif',
    highlights: ['Hill station', 'Panoramic views', 'Cool climate', 'Adventure activities'],
    bestTime: 'September to March',
    duration: '4-5 hours'
  }
]

export default function AttractionsClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Amazing Attractions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Explore the most beautiful and sacred places in the Papikondalu region
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated overflow-hidden group hover-glow"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {attraction.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        <span className="text-sm">Duration: {attraction.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star size={16} className="mr-2" />
                        <span className="text-sm">Best Time: {attraction.bestTime}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/attractions/${attraction.id}`} className="flex-1 btn-primary text-center">
                        See More
                      </Link>
                      <Link href="/contact" className="flex-1 btn-outline text-center">
                        Contact Us
                      </Link>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl mb-8">
              Contact us to create a custom package with your favorite attractions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/packages" className="btn-secondary">
                View Packages
              </a>
              <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}