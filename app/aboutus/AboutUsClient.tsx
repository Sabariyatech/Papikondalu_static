'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Award, Ship, Clock, Star, CheckCircle } from 'lucide-react'

export default function AboutUsClient() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '7+ Lakh' },
    { icon: Clock, label: 'Years of Experience', value: '20+' },
    { icon: Ship, label: 'Fleet Size', value: '3 Boats' },
    { icon: Star, label: 'Customer Rating', value: '4.8/5' },
  ]

  const boats = [
    { name: 'Aswini', capacity: '50 passengers', features: ['AC Cabin', 'Restaurant', 'Safety Equipment'] },
    { name: 'Sri Godavari', capacity: '100 passengers', features: ['Luxury Seating', 'Entertainment', 'Dining Hall'] },
    { name: 'Srilaxmi', capacity: '75 passengers', features: ['Panoramic Views', 'Comfort Seating', 'Refreshments'] },
  ]

  const whyChooseUs = [
    'Expert local guides with deep knowledge',
    'Safety-first approach with modern equipment',
    'Customizable tour packages',
    '24/7 customer support',
    'Competitive pricing with no hidden costs',
    'Eco-friendly tourism practices',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg"
          alt="About Papikondalu Tourism"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Papikondalu Tourism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            20+ Years of Excellence in Tourism
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                For over two decades, Papikondalu Tourism has been the leading name in 
                river tourism along the scenic Godavari River. What started as a small 
                family business has grown into a trusted brand serving thousands of 
                visitors every year.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We have successfully served more than 7 lakh happy customers, creating 
                unforgettable memories through our carefully crafted boat tours, temple 
                visits, and adventure packages in the breathtaking Papikondalu region.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to excellence, safety, and customer satisfaction has made 
                us the preferred choice for tourists seeking authentic experiences in 
                Andhra Pradesh's most scenic destination.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-primary-50 rounded-lg">
                  <stat.icon className="mx-auto mb-4 text-primary-600" size={32} />
                  <div className="text-2xl font-bold text-primary-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-600">
              Modern, safe, and comfortable boats for your perfect journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boats.map((boat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <Ship className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {boat.name}
                </h3>
                <p className="text-gray-600 mb-4">Capacity: {boat.capacity}</p>
                <ul className="space-y-2">
                  {boat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Experience the difference with Papikondalu Tourism
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-primary-50 rounded-lg"
              >
                <CheckCircle className="text-primary-600 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>+91 9876543210</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p>info@papikondalutourism.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p>Rajahmundry, Andhra Pradesh</p>
              </div>
            </div>
            <a href="/contact" className="btn-secondary">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}