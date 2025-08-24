'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    packageInterest: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', packageInterest: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9876543210', '24/7 Customer Support'],
      action: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@papikondalutourism.com', 'Quick Response Guaranteed'],
      action: 'mailto:info@papikondalutourism.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Rajahmundry', 'Andhra Pradesh, India'],
      action: null
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Sun: 6:00 AM - 10:00 PM', 'Emergency: 24/7'],
      action: null
    }
  ]

  const packages = [
    'Bhadrachalam to Papikondalu (2 Days)',
    'Rajahmundry to Papikondalu (8 Hours)',
    'Bhadrachalam to Rajahmundry via Papikondalu (3 Days)',
    'Sirivaka Night Stay Package',
    'Maredumalli Special Package',
    'Custom Package'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Get in touch with us to plan your perfect Papikondalu experience
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to embark on an unforgettable journey? Contact our experienced team 
              to plan your perfect Papikondalu tour. We're here to help you create 
              memories that will last a lifetime.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <info.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {info.action && idx === 0 ? (
                          <a href={info.action} className="hover:text-primary-600 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-primary-50 rounded-lg"
            >
              <h3 className="font-semibold text-primary-900 mb-2">Why Choose Us?</h3>
              <ul className="space-y-2 text-primary-800">
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-primary-600" />
                  20+ Years of Experience
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-primary-600" />
                  7+ Lakh Happy Customers
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-primary-600" />
                  Professional & Safe Tours
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-primary-600" />
                  Customizable Packages
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="packageInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Package Interest
                    </label>
                    <select
                      id="packageInterest"
                      name="packageInterest"
                      value={formData.packageInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      {packages.map((pkg, index) => (
                        <option key={index} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your travel plans, group size, preferred dates, or any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl mb-8">
              Call us now for instant booking and travel assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now: +91 9876543210
              </a>
              <a 
                href="mailto:info@papikondalutourism.com" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}