'use client'

import { useEffect } from 'react'

const criticalImages = [
  'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
  'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
  'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg'
]

export default function ImagePreloader() {
  useEffect(() => {
    const preloadImages = () => {
      // Only preload images that will be visible in the viewport soon
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            criticalImages.forEach((src) => {
              const img = new Image()
              img.src = src
            })
            observer.disconnect()
          }
        })
      }, { rootMargin: '200px' })
      
      // Observe the featured attractions section
      const featuredSection = document.querySelector('[data-section="featured-attractions"]')
      if (featuredSection) {
        observer.observe(featuredSection)
      } else {
        // Fallback: preload after a short delay
        setTimeout(() => {
          criticalImages.forEach((src) => {
            const img = new Image()
            img.src = src
          })
        }, 1000)
      }
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', preloadImages)
    } else {
      preloadImages()
    }
  }, [])

  return null
}