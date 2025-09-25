'use client'

import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_400,h_300,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg',
        'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_400,h_300,q_auto,f_webp/v1755401093/bhadrachalam_temple_ixqhqy.jpg'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]')
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', '')
        }
      })
    }

    // Enable resource hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ]

      hints.forEach(hint => {
        const link = document.createElement('link')
        link.rel = hint.rel
        link.href = hint.href
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin
        document.head.appendChild(link)
      })
    }

    // Run optimizations
    preloadCriticalImages()
    optimizeThirdPartyScripts()
    addResourceHints()

    // Cleanup function
    return () => {
      // Remove preloaded resources if needed
    }
  }, [])

  return null
}

export default PerformanceOptimizer