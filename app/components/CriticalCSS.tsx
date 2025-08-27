'use client'

import { useEffect } from 'react'

const criticalCSS = `
  .hero-bg { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); }
  .btn-primary { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); }
  .card { background: #ffffff; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
  .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
`

export default function CriticalCSS() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = criticalCSS
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}