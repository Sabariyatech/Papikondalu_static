import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://papikondalutourism.com'
  const currentDate = new Date()

  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/aboutus`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/attractions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/packages`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/gallery`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Attraction pages
  const attractions = [
    'papi-hills', 'bhadrachalam-temple', 'perantalapalli', 'kolluru-bamboo-huts',
    'gandi-pochamma-temple', 'sabari-temple', 'parnasala', 'rampa-waterfalls'
  ]

  const attractionPages = attractions.map(attraction => ({
    url: `${baseUrl}/attractions/${attraction}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Package pages
  const packages = [
    'day-cruise', 'overnight-package', 'temple-tour', 'adventure-package',
    'family-package', 'honeymoon-package', 'group-package', 'premium-package', 'budget-package'
  ]

  const packagePages = packages.map(pkg => ({
    url: `${baseUrl}/packages/${pkg}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...mainPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...attractionPages,
    ...packagePages,
  ]
}