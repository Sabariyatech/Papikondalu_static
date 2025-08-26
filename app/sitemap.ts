import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://papikondalutourism.com'
  const currentDate = new Date()

  // Main pages with enhanced SEO priorities
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/aboutus`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/attractions`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/packages`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/gallery`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
  ]

  // High-priority attraction pages
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

  // High-priority package pages
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

  // Additional SEO pages
  const additionalPages = [
    { url: `${baseUrl}/boat-tours-godavari`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/papikondalu-hills-tour`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/andhra-pradesh-tourism`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/river-cruise-india`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/bhadrachalam-tours`, priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  return [
    ...mainPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...attractionPages,
    ...packagePages,
    ...additionalPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}