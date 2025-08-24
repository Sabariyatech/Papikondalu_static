'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-secondary-900">
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-white">PT</span>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-semibold text-white mb-4"
        >
          Papikondalu Tourism
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -10, 0],
                backgroundColor: ['#0ea5e9', '#f59e0b', '#0ea5e9']
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 rounded-full bg-primary-500"
            />
          ))}
        </div>

        <p className="text-white/80 mt-6">Loading your adventure...</p>
      </div>
    </div>
  )
}