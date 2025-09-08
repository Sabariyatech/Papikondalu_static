'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg"
        >
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [-200, 200] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <Link
              href="/packages"
              className="flex items-center justify-center text-white py-3 px-4 hover:bg-black/10 transition-all duration-300 group"
            >
              <Package size={20} className="mr-2 animate-bounce" />
              <span className="font-bold text-sm md:text-base">
                🎉 SPECIAL PACKAGES AVAILABLE - VIEW NOW!
              </span>
              <Sparkles size={18} className="ml-2 animate-pulse" />
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingActionButton