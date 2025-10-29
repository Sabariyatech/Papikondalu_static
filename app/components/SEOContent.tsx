'use client'

import { motion } from 'framer-motion'
import { Anchor, MapPin, Users, Award } from 'lucide-react'

const SEOContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Papikondalu</span> | Maredumilli | Bhadrachalam | East Godavari Tourism
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            Explore Papikondalu hills, Maredumilli waterfalls, Bhadrachalam temples, and East Godavari tourism. 
            Visit Gudisa hills and Rampa waterfalls with expert guides. Authentic experiences in Andhra Pradesh&apos;s 
            most beautiful destinations with 20+ years of trusted service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Anchor,
              title: 'Premium Boat Tours',
              description: 'Best boat tours Papikondalu with modern, comfortable vessels equipped with safety features'
            },
            {
              icon: MapPin,
              title: 'Godavari River Cruise',
              description: 'Scenic Godavari river cruise routes covering Papikondalu hills and temple destinations'
            },
            {
              icon: Users,
              title: '7+ Lakh Customers',
              description: 'Trusted by over 7 lakh satisfied customers for memorable boat tours Papikondalu experiences'
            },
            {
              icon: Award,
              title: '20+ Years Experience',
              description: 'Two decades of expertise in providing the best Godavari river cruise adventures'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="heading-sm mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-md mb-6">
              Papikondalu, Maredumilli, Bhadrachalam & East Godavari Tourism
            </h3>
            <p className="text-body mb-8">
              Discover Papikondalu scenic beauty, Maredumilli dense forests, Bhadrachalam spiritual heritage, 
              and East Godavari tourism attractions. Explore Gudisa hill station and Rampa waterfalls with 
              our comprehensive tour packages designed for authentic Andhra Pradesh experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">Papikondalu & Maredumilli</h4>
                <p className="text-sm text-neutral-600">
                  Experience Papikondalu hills and Maredumilli waterfalls with scenic boat rides and forest treks
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">Bhadrachalam & East Godavari</h4>
                <p className="text-sm text-neutral-600">
                  Visit Bhadrachalam temples and explore East Godavari tourism attractions with cultural insights
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">Gudisa & Rampa Waterfalls</h4>
                <p className="text-sm text-neutral-600">
                  Discover Gudisa hills and Rampa waterfalls for adventure and nature photography experiences
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SEOContent