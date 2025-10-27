import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhadradripapikondalu.com'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/aboutus`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/attractions`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/packages`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/gallery`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
  ]

  // All attraction pages
  const attractions = [
    { slug: 'papi-hills', priority: 0.9 },
    { slug: 'bhadrachalam-temple', priority: 0.85 },
    { slug: 'perantalapalli', priority: 0.8 },
    { slug: 'kolluru-bamboo-huts', priority: 0.8 },
    { slug: 'gandi-pochamma-temple', priority: 0.75 },
    { slug: 'sabari-temple', priority: 0.75 },
    { slug: 'parnasala', priority: 0.75 },
    { slug: 'rampa-waterfalls', priority: 0.8 }
  ]

  const attractionPages = attractions.map(attraction => ({
    url: `${baseUrl}/attractions/${attraction.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: attraction.priority,
  }))

  // All package pages
  const packages = [
    { slug: 'day-cruise', priority: 0.9 },
    { slug: 'overnight-package', priority: 0.85 },
    { slug: 'temple-tour', priority: 0.85 },
    { slug: 'adventure-package', priority: 0.8 },
    { slug: 'family-package', priority: 0.85 },
    { slug: 'honeymoon-package', priority: 0.8 },
    { slug: 'group-package', priority: 0.8 },
    { slug: 'premium-package', priority: 0.75 },
    { slug: 'budget-package', priority: 0.85 }
  ]

  const packagePages = packages.map(pkg => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: pkg.priority,
  }))

  // Blog pages (placeholder for future blog posts)
  const blogPages: any[] = []

  // SEO landing pages
  const seoLandingPages = [
    { url: `${baseUrl}/papikondalu-tours`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/badrachalam-temple-tours`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/east-godavari-tourism`, priority: 0.95, changeFrequency: 'daily' as const },
  ]

  const allPages = [
    ...mainPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...seoLandingPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...attractionPages,
    ...packagePages,
    ...blogPages,
  ]

  return allPages
}