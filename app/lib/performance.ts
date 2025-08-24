// Image optimization utilities
export const getOptimizedImageUrl = (
  baseUrl: string,
  width: number,
  height?: number,
  quality: number = 80
): string => {
  if (baseUrl.includes('cloudinary.com')) {
    const transformations = [
      `w_${width}`,
      height ? `h_${height}` : '',
      `q_${quality}`,
      'f_auto',
      'dpr_auto'
    ].filter(Boolean).join(',')
    
    return baseUrl.replace('/upload/', `/upload/c_fill,${transformations}/`)
  }
  return baseUrl
}

// Lazy loading intersection observer
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined') return null
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  })
}

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  if (typeof document === 'undefined') return
  
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  document.head.appendChild(link)
}

// Critical CSS inlining
export const inlineCriticalCSS = (css: string) => {
  if (typeof document === 'undefined') return
  
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}