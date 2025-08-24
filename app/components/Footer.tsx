'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, ArrowUp, Award, Shield, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About Us' },
    { href: '/attractions', label: 'Attractions' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ]

  const services = [
    'Boat Tours',
    'Temple Visits', 
    'Adventure Packages',
    'Night Stay Arrangements',
    'Group Bookings',
    'Custom Itineraries'
  ]

  const certifications = [
    { icon: Award, text: 'Tourism Board Certified' },
    { icon: Shield, text: 'Safe Travel Approved' },
    { icon: Heart, text: 'Customer Satisfaction Guaranteed' }
  ]

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.3),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto container-padding py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png"
                  alt="Papikondalu Tourism"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="ml-4">
                <span className="text-2xl font-bold gradient-text">Papikondalu Tourism</span>
                <div className="text-sm text-neutral-400">Experience Excellence Since 2000</div>
              </div>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed text-lg">
              Experience the beauty of Papikondalu with 20+ years of expertise. 
              We've served 7+ lakh happy customers with unforgettable boat tours 
              and temple visits along the scenic Godavari River.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-500 transition-colors">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">+91 9876543210</div>
                  <div className="text-sm text-neutral-400">24/7 Customer Support</div>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-secondary-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-secondary-500 transition-colors">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">info@papikondalutourism.com</div>
                  <div className="text-sm text-neutral-400">Quick Response Guaranteed</div>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-500 transition-colors">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Rajahmundry, Andhra Pradesh</div>
                  <div className="text-sm text-neutral-400">Visit Our Office</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-neutral-700 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-neutral-300 group-hover:text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service) => (
                <li key={service} className="text-neutral-300 flex items-center">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                  {service}
                </li>
              ))}
            </ul>
            
            <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
              <div className="flex items-center mb-2">
                <Clock size={16} className="mr-2 text-primary-400" />
                <span className="font-semibold text-white">24/7 Support</span>
              </div>
              <p className="text-sm text-neutral-400">Always here to help you plan your perfect trip</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <Icon className="text-primary-400 mr-3" size={20} />
                  <span className="text-neutral-300 text-sm">{cert.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 Papikondalu Tourism. All rights reserved.</p>
            <p className="mt-1">Made with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> for travelers</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer