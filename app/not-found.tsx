'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="heading-lg mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-body mb-8">
            It seems like you've wandered off the beaten path. The page you're looking for 
            doesn't exist or has been moved to a new location.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary group">
              <Home className="mr-2 transition-transform group-hover:scale-110" size={20} />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-outline group"
            >
              <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="card-glass p-6">
            <h3 className="heading-sm mb-4 flex items-center justify-center">
              <MapPin className="mr-2 text-primary-600" size={20} />
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link href="/attractions" className="text-primary-600 hover:text-primary-700 transition-colors">
                Attractions
              </Link>
              <Link href="/packages" className="text-primary-600 hover:text-primary-700 transition-colors">
                Packages
              </Link>
              <Link href="/gallery" className="text-primary-600 hover:text-primary-700 transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-300 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-300 rounded-full opacity-60"
        />
      </div>
    </div>
  )
}