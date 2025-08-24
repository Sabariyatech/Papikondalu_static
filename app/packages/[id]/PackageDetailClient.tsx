'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, MapPin, Users, Calendar, CheckCircle, Info, Route, Lightbulb, Phone, MessageCircle } from 'lucide-react'
import { agents } from '../../lib/agents'

interface Package {
  id: number
  name: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  capacity: string
  departure: string
  rating: number
  reviews: number
  features: string[]
  itinerary: string[]
  bestTime: string
  inclusions: string[]
  highlights: string[]
  tips: string[]
}

interface PackageDetailClientProps {
  packageData: Package
}

export default function PackageDetailClient({ packageData }: PackageDetailClientProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={packageData.image}
          alt={packageData.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {packageData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl"
            >
              {packageData.shortDescription}
            </motion.p>
          </div>
        </div>
        
        {/* Back Button */}
        <Link
          href="/packages"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Package Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Info className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Package Overview</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {packageData.description}
                </p>
                
                {/* Package Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Users className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Capacity</p>
                    <p className="font-semibold">{packageData.capacity}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Departure</p>
                    <p className="font-semibold">{packageData.departure}</p>
                  </div>
                  <div className="text-center">
                    <Star className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="font-semibold">{packageData.rating}/5</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Best Time</p>
                    <p className="font-semibold text-xs">{packageData.bestTime}</p>
                  </div>
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Route className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Itinerary</h2>
                </div>
                <div className="space-y-4">
                  {packageData.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-elevated p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card-elevated p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-500" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Travel Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="card-elevated p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Lightbulb className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Travel Tips</h2>
                </div>
                <div className="space-y-3">
                  {packageData.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 mb-8 sticky top-6"
              >
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="text-yellow-500" size={20} />
                    <span className="text-xl font-bold">{packageData.rating}</span>
                  </div>
                  <p className="text-gray-600">{packageData.reviews} reviews</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {packageData.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <p className="text-primary-600 font-semibold">Contact for Pricing</p>
                    <p className="text-sm text-gray-600 mt-1">Best rates guaranteed</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/contact" className="w-full btn-primary text-center block">
                    Book Now
                  </Link>
                  <div className="text-center text-sm text-gray-600 mb-2">Quick Contact</div>
                  {agents.slice(0, 2).map((agent) => (
                    <div key={agent.id} className="flex gap-2">
                      <a
                        href={`https://wa.me/${agent.whatsapp}?text=Hi, I'm interested in ${packageData.name} package. Can you help me?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <MessageCircle size={14} className="mr-1" />
                        {agent.name.split(' ')[0]}
                      </a>
                      <a
                        href={`tel:+91${agent.phone}`}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <Phone size={14} className="mr-1" />
                        Call
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready for This Adventure?</h2>
            <p className="text-xl mb-8">
              Contact us to customize this package or book your journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Customize Package
              </Link>
              <Link href="/packages" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                View All Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}