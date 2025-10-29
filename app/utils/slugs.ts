// SEO-friendly URL slugs for attractions and packages

export const attractionSlugs = {
  1: 'papikondalu-hills-godavari-cruise',
  2: 'perantalapalli-village-culture',
  3: 'gandipochamma-temple-spiritual',
  4: 'bhadrachalam-temple-rama',
  5: 'sirivaka-night-stay-camping',
  6: 'maredumilli-waterfalls-forest',
  7: 'parnasala-ramayana-heritage',
  8: 'gudisa-hills-trekking-adventure'
}

export const packageSlugs = {
  1: 'papikondalu-river-cruise-package',
  2: 'bhadradri-temple-godavari-cruise-tour',
  3: 'maredumilli-waterfalls-adventure-package',
  4: 'rampachodavaram-tribal-culture-tour',
  5: 'rajahmundry-papikondalu-day-tour',
  6: 'sirivaka-night-stay-camping-package',
  7: 'parnasala-heritage-temple-tour',
  8: 'gudisa-hills-trekking-tour-package',
  9: 'perantalapalli-eco-tour-package'
}

// Reverse mapping for slug to ID conversion
export const attractionSlugToId = Object.fromEntries(
  Object.entries(attractionSlugs).map(([id, slug]) => [slug, parseInt(id)])
)

export const packageSlugToId = Object.fromEntries(
  Object.entries(packageSlugs).map(([id, slug]) => [slug, parseInt(id)])
)

// Helper functions
export function getAttractionSlug(id: number): string {
  return attractionSlugs[id as keyof typeof attractionSlugs] || `attraction-${id}`
}

export function getPackageSlug(id: number): string {
  return packageSlugs[id as keyof typeof packageSlugs] || `package-${id}`
}

export function getAttractionIdFromSlug(slug: string): number | null {
  return attractionSlugToId[slug] || null
}

export function getPackageIdFromSlug(slug: string): number | null {
  return packageSlugToId[slug] || null
}