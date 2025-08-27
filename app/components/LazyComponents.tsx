'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'

// Lazy load non-critical components
export const LazyTestimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <div className="h-96 bg-neutral-100 animate-pulse rounded-2xl" />,
  ssr: true
})

export const LazyNewsletter = dynamic(() => import('./Newsletter'), {
  loading: () => <div className="h-64 bg-neutral-100 animate-pulse rounded-2xl" />,
  ssr: true
})

export const LazyMultiAgentWidget = dynamic(() => import('./MultiAgentWidget'), {
  loading: () => null,
  ssr: false
})

export const LazyLightbox = dynamic(() => import('./Lightbox'), {
  loading: () => null,
  ssr: false
})

// Wrapper component with Suspense and mounting check
export const LazyComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-32 bg-neutral-100 animate-pulse rounded-2xl" />
  }

  return (
    <Suspense fallback={<div className="h-32 bg-neutral-100 animate-pulse rounded-2xl" />}>
      {children}
    </Suspense>
  )
}