import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      }
    ],
    sitemap: [
      'https://bhadradripapikondalu.com/sitemap.xml',
      'https://bhadradripapikondalu.com/sitemap-images.xml'
    ],
    host: 'https://bhadradripapikondalu.com',
  }
}