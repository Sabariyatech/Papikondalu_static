export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Papikondalu Tourism - Best Boat Tours</title>
    <description>Experience the best boat tours Papikondalu with premium Godavari river cruise adventures</description>
    <link>https://bhadradripapikondalu.com</link>
    <atom:link href="https://bhadradripapikondalu.com/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    
    <item>
      <title>Best Boat Tours Papikondalu - Premium Godavari River Cruise</title>
      <description>Experience the best boat tours Papikondalu with our premium Godavari river cruise services. 20+ years experience serving 7+ lakh customers.</description>
      <link>https://bhadradripapikondalu.com</link>
      <guid>https://bhadradripapikondalu.com</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    
    <item>
      <title>Papikondalu Attractions - Scenic Hills and Temple Tours</title>
      <description>Discover amazing attractions in Papikondalu including scenic hills, ancient temples, and cultural heritage sites.</description>
      <link>https://bhadradripapikondalu.com/attractions</link>
      <guid>https://bhadradripapikondalu.com/attractions</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    
    <item>
      <title>Tour Packages - Best Godavari River Cruise Deals</title>
      <description>Choose from our premium tour packages for the best Godavari river cruise experience with family, adventure, and honeymoon options.</description>
      <link>https://bhadradripapikondalu.com/packages</link>
      <guid>https://bhadradripapikondalu.com/packages</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}