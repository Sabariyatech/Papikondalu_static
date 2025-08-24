'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Users, MapPin, Star, CheckCircle } from 'lucide-react'

const packages = [
  {
    id: 1,
    name: 'Bhadrachalam to Papikondalu',
    duration: '2 Days',
    capacity: '50 People',
    departure: 'Bhadrachalam',
    rating: 4.8,
    reviews: 245,
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    description: 'Experience the spiritual journey from the sacred Bhadrachalam temple to the scenic Papikondalu hills.',
    features: ['Temple darshan', 'Scenic boat ride', 'Local cuisine', 'Professional guide'],
    itinerary: [
      'Day 1: Bhadrachalam temple visit and boat departure',
      'Day 1: Scenic cruise through Godavari River',
      'Day 2: Papikondalu sightseeing and return journey'
    ],
    bestTime: 'October to March'
  },
  {
    id: 2,
    name: 'Bhadrachalam to Rajahmundry via Papikondalu',
    duration: '3 Days 2 Nights',
    capacity: '100 People',
    departure: 'Bhadrachalam',
    rating: 4.9,
    reviews: 189,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg',
    description: 'Complete Godavari river experience covering major attractions from Bhadrachalam to Rajahmundry.',
    features: ['3-day river cruise', 'Multiple attractions', 'Onboard accommodation', 'All meals included'],
    itinerary: [
      'Day 1: Bhadrachalam departure and temple visit',
      'Day 2: Papikondalu exploration and overnight stay',
      'Day 3: Continue to Rajahmundry with sightseeing'
    ],
    bestTime: 'November to February'
  },
  {
    id: 3,
    name: 'Rajahmundry to Papikondalu',
    duration: '8 Hours',
    capacity: '100 People',
    departure: 'Rajahmundry',
    rating: 4.9,
    reviews: 312,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg',
    description: 'Perfect day trip from Rajahmundry to experience the beauty of Papikondalu hills.',
    features: ['Full day tour', 'Photography opportunities', 'Refreshments', 'Return journey'],
    itinerary: [
      'Morning: Departure from Rajahmundry',
      'Afternoon: Papikondalu sightseeing and lunch',
      'Evening: Return journey to Rajahmundry'
    ],
    bestTime: 'October to March'
  },
  {
    id: 4,
    name: 'Rajahmundry to Bhadrachalam via Papikondalu',
    duration: '3 Days 2 Nights',
    capacity: '75 People',
    departure: 'Rajahmundry',
    rating: 4.7,
    reviews: 156,
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    description: 'Reverse journey from Rajahmundry to Bhadrachalam covering all major attractions.',
    features: ['Extended river cruise', 'Temple visits', 'Cultural experiences', 'Comfortable stay'],
    itinerary: [
      'Day 1: Rajahmundry departure and river cruise',
      'Day 2: Papikondalu exploration and activities',
      'Day 3: Bhadrachalam temple visit and conclusion'
    ],
    bestTime: 'November to February'
  },
  {
    id: 5,
    name: 'Bhadrachalam to Sirivaka',
    duration: '2 Days 1 Night',
    capacity: '30 People',
    departure: 'Bhadrachalam',
    rating: 4.6,
    reviews: 98,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1756003855/sirivaka_fdzsuf.avif',
    description: 'Adventure package with overnight camping experience in the heart of nature.',
    features: ['Camping experience', 'Bonfire night', 'Nature walks', 'Adventure activities'],
    itinerary: [
      'Day 1: Journey to Sirivaka and camp setup',
      'Day 1: Evening bonfire and stargazing',
      'Day 2: Nature activities and return journey'
    ],
    bestTime: 'October to March'
  },
  {
    id: 6,
    name: 'Rajahmundry to Sirivaka',
    duration: '2 Days 1 Night',
    capacity: '40 People',
    departure: 'Rajahmundry',
    rating: 4.5,
    reviews: 87,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1756003855/sirivaka_fdzsuf.avif',
    description: 'Camping adventure starting from Rajahmundry with unique overnight experience.',
    features: ['River journey', 'Camping setup', 'Outdoor activities', 'Local cuisine'],
    itinerary: [
      'Day 1: Rajahmundry to Sirivaka journey',
      'Day 1: Camp activities and overnight stay',
      'Day 2: Morning activities and return'
    ],
    bestTime: 'October to March'
  },
  {
    id: 7,
    name: 'Maredumalli Special Package',
    duration: '1 Day',
    capacity: '25 People',
    departure: 'Rajahmundry',
    rating: 4.7,
    reviews: 134,
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg',
    description: 'Explore the pristine waterfalls and dense forests of Maredumalli.',
    features: ['Waterfall visits', 'Forest trekking', 'Wildlife spotting', 'Photography'],
    itinerary: [
      'Morning: Departure and forest entry',
      'Afternoon: Waterfall exploration and lunch',
      'Evening: Return journey'
    ],
    bestTime: 'June to February'
  },
  {
    id: 8,
    name: 'Parnasala Addon Package',
    duration: '6 Hours',
    capacity: '50 People',
    departure: 'Bhadrachalam',
    rating: 4.4,
    reviews: 76,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_600,q_auto,f_auto/v1755979312/dev_parnasala_pfvan7.jpg',
    description: 'Visit the mythologically significant Parnasala with cultural insights.',
    features: ['Historical tour', 'Cultural stories', 'Scenic views', 'Photography'],
    itinerary: [
      'Morning: Departure to Parnasala',
      'Afternoon: Site exploration and cultural tour',
      'Evening: Return journey'
    ],
    bestTime: 'October to March'
  },
  {
    id: 9,
    name: 'Gudisa Package',
    duration: '4 Hours',
    capacity: '20 People',
    departure: 'Rajahmundry',
    rating: 4.3,
    reviews: 45,
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755981754/Camping_in_Mountains_ytwmvi.avif',
    description: 'Hill station experience with panoramic views and adventure activities.',
    features: ['Hill station visit', 'Panoramic views', 'Adventure activities', 'Cool climate'],
    itinerary: [
      'Morning: Journey to Gudisa hills',
      'Afternoon: Sightseeing and activities',
      'Evening: Return journey'
    ],
    bestTime: 'September to March'
  }
]

export default function PackagesClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tour Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Choose from our carefully crafted packages for an unforgettable experience
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                    <Star size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>

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
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Itinerary:</h4>
                    <ul className="space-y-1">
                      {pkg.itinerary.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        {pkg.reviews} reviews
                      </div>
                      <div className="text-sm text-gray-600">
                        Best time: {pkg.bestTime}
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-lg font-bold text-primary-600">
                        Contact for Pricing
                      </div>
                    </div>

                    <button className="w-full btn-primary">
                      Book Now
                    </button>
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
              <a href="tel:+919876543210" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Call Now: +91 9876543210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}