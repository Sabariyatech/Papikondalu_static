'use client'

import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1200,h_800,q_60/v1755401093/papihills1_hmfpkr.jpg'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.loading = 'eager'
            imageObserver.unobserve(img)
          }
        })
      }, { rootMargin: '50px' })

      images.forEach(img => imageObserver.observe(img))
    }

    // Remove unused CSS
    const removeUnusedCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      stylesheets.forEach(sheet => {
        const link = sheet as HTMLLinkElement
        if (link.href.includes('unused')) {
          link.remove()
        }
      })
    }

    preloadCriticalResources()
    optimizeImages()
    removeUnusedCSS()

    // Cleanup
    return () => {
      // Cleanup observers if needed
    }
  }, [])

  return null
}

export default PerformanceOptimizer