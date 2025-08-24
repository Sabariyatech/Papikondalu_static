'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Hyderabad',
    rating: 5,
    text: 'Amazing experience! The boat ride through Papikondalu was breathtaking. The team was professional and the arrangements were perfect.',
    date: 'December 2023'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bangalore',
    rating: 5,
    text: 'Best tourism service in the region. 20+ years of experience really shows in their attention to detail and customer care.',
    date: 'November 2023'
  },
  {
    id: 3,
    name: 'Venkat Reddy',
    location: 'Vijayawada',
    rating: 5,
    text: 'Visited with family and everyone loved it. The temple tour combined with scenic beauty made it a perfect spiritual journey.',
    date: 'October 2023'
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join 7+ lakh happy customers who have experienced the magic of Papikondalu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 text-primary-200" size={24} />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
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
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
            <div className="text-3xl font-bold text-primary-600 mb-2">7+ Lakh</div>
            <div className="text-gray-600">Happy Customers Served</div>
            <div className="text-2xl font-bold text-secondary-600 mt-4 mb-2">20+ Years</div>
            <div className="text-gray-600">Of Excellence in Tourism</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials