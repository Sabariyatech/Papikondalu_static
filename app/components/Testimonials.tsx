'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Users, Calendar, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Hyderabad',
    rating: 5,
    text: 'Amazing experience! The boat ride through Papikondalu was breathtaking. The team was professional and the arrangements were perfect. Highly recommend for families!',
    date: 'December 2023',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bangalore',
    rating: 5,
    text: 'Best tourism service in the region. 20+ years of experience really shows in their attention to detail and customer care. Worth every penny!',
    date: 'November 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Venkat Reddy',
    location: 'Vijayawada',
    rating: 5,
    text: 'Visited with family and everyone loved it. The temple tour combined with scenic beauty made it a perfect spiritual journey. Unforgettable memories!',
    date: 'October 2023',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  }
]

const stats = [
  {
    icon: Users,
    number: '7+ Lakh',
    label: 'Happy Customers',
    color: 'text-primary-600'
  },
  {
    icon: Calendar,
    number: '20+',
    label: 'Years Experience',
    color: 'text-secondary-600'
  },
  {
    icon: Award,
    number: '4.9/5',
    label: 'Average Rating',
    color: 'text-accent-600'
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Satisfaction Rate',
    color: 'text-primary-600'
  }
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} className="mr-2" />
            Customer Reviews
          </div>
          <h2 className="heading-lg mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Join thousands of satisfied customers who have experienced the magic of Papikondalu 
            with our award-winning tourism services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-elevated p-8 relative hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full">
                  <Quote className="text-white" size={20} />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-secondary-500 fill-current mr-1" />
                ))}
                <span className="ml-2 text-sm font-semibold text-neutral-600">5.0</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center pt-6 border-t border-neutral-100">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-xs text-neutral-500">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="card-glass p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4">Trusted by Thousands</h3>
            <p className="text-body">Our numbers speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-soft mb-4 group-hover:shadow-medium transition-shadow">
                    <Icon className={`${stat.color} group-hover:scale-110 transition-transform`} size={28} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials