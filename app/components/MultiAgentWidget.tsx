'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, X, User } from 'lucide-react'
import { agents } from '../lib/agents'

export default function MultiAgentWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAgents, setShowAgents] = useState(false)
  const [contactType, setContactType] = useState<'whatsapp' | 'call'>('whatsapp')
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setShowAgents(false)
      }
    }

    if (isOpen || showAgents) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, showAgents])

  const handleContactClick = (type: 'whatsapp' | 'call') => {
    setContactType(type)
    setShowAgents(true)
  }

  const handleAgentContact = (agent: typeof agents[0]) => {
    if (contactType === 'whatsapp') {
      window.open(`https://wa.me/${agent.whatsapp}?text=Hi, I'm interested in Papikondalu tour packages. Can you help me?`, '_blank')
    } else {
      window.open(`tel:+91${agent.phone}`, '_self')
    }
    setIsOpen(false)
    setShowAgents(false)
  }

  return (
    <div ref={widgetRef}>
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </motion.div>

      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && !showAgents && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-40 flex flex-col gap-3"
          >
            <button
              onClick={() => handleContactClick('whatsapp')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors shadow-lg flex items-center gap-2 font-medium"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
            <button
              onClick={() => handleContactClick('call')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors shadow-lg flex items-center gap-2 font-medium"
            >
              <Phone size={20} />
              Call Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Agent Selection */}
      <AnimatePresence>
        {showAgents && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-40 flex flex-col gap-2"
          >
            {agents.map((agent, index) => {
              const colors = ['bg-purple-500 hover:bg-purple-600', 'bg-indigo-500 hover:bg-indigo-600', 'bg-teal-500 hover:bg-teal-600']
              return (
                <button
                  key={agent.id}
                  onClick={() => handleAgentContact(agent)}
                  className={`${colors[index]} text-white px-4 py-3 rounded-full transition-colors shadow-lg flex items-center gap-3 min-w-64`}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm">{agent.name}</p>
                    <p className="text-xs opacity-90">+91 {agent.phone}</p>
                  </div>
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}