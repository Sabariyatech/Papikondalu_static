'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      console.log(metric)
    }
  })

  return null
}