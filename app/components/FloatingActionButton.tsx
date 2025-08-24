'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Calendar, X } from 'lucide-react'
import Link from 'next/link'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const actions = [
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+919876543210',
      color: 'bg-accent-500 hover:bg-accent-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Calendar,
      label: 'Book Now',
      href: '/contact',
      color: 'bg-secondary-500 hover:bg-secondary-600'
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Action Items */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="mb-4 space-y-3"
              >
                {actions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={action.href}
                        className={`flex items-center ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
                      >
                        <Icon size={20} className="mr-3" />
                        <span className="font-medium whitespace-nowrap">{action.label}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Phone size={24} />}
            </motion.div>
          </motion.button>

          {/* Pulse Animation */}
          {!isOpen && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary-600 rounded-full opacity-20 -z-10"
            />
          )}
        </div>
      )}
    </AnimatePresence>
  )
}

export default FloatingActionButton