'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="mx-auto mb-6 text-white" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Tours
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new packages, 
            special offers, and exclusive deals.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block"
            >
              Thank you for subscribing! We'll keep you updated.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-secondary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  Subscribe
                  <Send size={16} className="ml-2" />
                </button>
              </div>
              <p className="text-primary-200 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter