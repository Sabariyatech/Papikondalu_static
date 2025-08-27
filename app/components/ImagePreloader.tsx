'use client'

import { useEffect } from 'react'

const criticalImages = [
  'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
  'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
  'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
  'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg'
]

export default function ImagePreloader() {
  useEffect(() => {
    const preloadImages = () => {
      criticalImages.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', preloadImages)
    } else {
      preloadImages()
    }
  }, [])

  return null
}