export async function GET() {
  const baseUrl = 'https://papikondalutourism.com'
  
  const images = [
    {
      loc: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
      caption: 'Papikondalu Hills - Scenic Beauty of Godavari River',
      title: 'Papikondalu Hills Boat Tours',
      geoLocation: 'Rajahmundry, Andhra Pradesh, India'
    },
    {
      loc: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg',
      caption: 'Papikondalu Tourism - 20+ Years of Excellence',
      title: 'About Papikondalu Tourism',
      geoLocation: 'Rajahmundry, Andhra Pradesh, India'
    },
    {
      loc: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/bhadrachalam_temple_hmfpkr.jpg',
      caption: 'Bhadrachalam Temple - Sacred Hindu Temple',
      title: 'Bhadrachalam Temple Tours',
      geoLocation: 'Bhadrachalam, Telangana, India'
    },
    {
      loc: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/perantalapalli_hmfpkr.jpg',
      caption: 'Perantalapalli Temple - Ancient Temple on Godavari',
      title: 'Perantalapalli Temple Visit',
      geoLocation: 'Perantalapalli, Andhra Pradesh, India'
    },
    {
      loc: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/kolluru_bamboo_hmfpkr.jpg',
      caption: 'Kolluru Bamboo Huts - Eco-friendly Accommodation',
      title: 'Kolluru Bamboo Huts Experience',
      geoLocation: 'Kolluru, Andhra Pradesh, India'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    ${images.map(image => `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
      <image:geo_location>${image.geoLocation}</image:geo_location>
    </image:image>`).join('')}
  </url>
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}