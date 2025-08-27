'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

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
  ssr: true
})

export const LazyLightbox = dynamic(() => import('./Lightbox'), {
  loading: () => null,
  ssr: false
})

// Wrapper component with Suspense
export const LazyComponentWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-32 bg-neutral-100 animate-pulse rounded-2xl" />}>
    {children}
  </Suspense>
)