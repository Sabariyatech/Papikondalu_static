import Script from 'next/script'

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Papikondalu Tourism",
    "description": "Best boat tours Papikondalu with premium Godavari river cruise adventures. 20+ years experience serving 7+ lakh customers.",
    "url": "https://manapapikondalu.vercel.app",
    "telephone": "+91-9848323488",
    "email": "aswinigodavari@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajahmundry",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "700000"
    },
    "priceRange": "₹₹",
    "servesCuisine": "River Tourism",
    "foundingDate": "2004"
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }}
    />
  )
}

export default StructuredData