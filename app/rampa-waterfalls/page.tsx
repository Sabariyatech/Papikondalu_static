import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rampa Waterfalls | Rampachodavaram Waterfalls | East Godavari Adventure',
  description: 'Rampa waterfalls and Rampachodavaram adventure tours. Experience spectacular waterfalls, forest treks, tribal culture. Book authentic Rampa waterfall packages.',
  keywords: 'Rampa waterfalls, Rampachodavaram, waterfalls, East Godavari, adventure, forest, tribal culture, trekking',
}

export default function RampaWaterfallsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Rampa Waterfalls</h1>
          <p className="text-2xl mb-8">Experience spectacular Rampa waterfalls in East Godavari</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Rampa Waterfalls</h2>
              <p className="text-lg mb-6">
                Rampa waterfalls, located near Rampachodavaram in East Godavari district, are among the most 
                spectacular natural attractions in Andhra Pradesh. These cascading waterfalls, surrounded by 
                dense forests and tribal settlements, offer visitors an authentic wilderness experience.
              </p>
              <p className="text-lg mb-6">
                The area around Rampa waterfalls is rich in tribal culture and natural beauty. Visitors can 
                experience traditional tribal lifestyle, enjoy forest treks, and witness the raw power and 
                beauty of these magnificent waterfalls in their pristine natural setting.
              </p>
            </div>
            <div className="bg-teal-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Rampa Waterfalls Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>Spectacular Multi-tier Waterfalls</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>Dense Forest Surroundings</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>Tribal Culture Experience</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>Adventure Trekking Trails</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>Natural Swimming Pools</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>Wildlife Spotting</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">Rampa Waterfalls Experiences</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Waterfall Trek</h4>
                <p className="mb-4">Guided trek to Rampa waterfalls through dense forests</p>
                <Link href="/packages/4" className="text-teal-600 font-semibold">Book Trek →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Tribal Culture</h4>
                <p className="mb-4">Experience authentic tribal culture near Rampachodavaram</p>
                <Link href="/packages/4" className="text-teal-600 font-semibold">Explore →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Adventure Package</h4>
                <p className="mb-4">Complete adventure tour with waterfalls and forest activities</p>
                <Link href="/contact" className="text-teal-600 font-semibold">Inquire →</Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Rampachodavaram Region</h3>
              <p className="text-lg mb-4">
                Rampachodavaram, also known as Rampa, is a town in East Godavari district famous for its 
                natural beauty and tribal heritage. The region is home to several waterfalls, dense forests, 
                and indigenous tribal communities who have preserved their traditional way of life.
              </p>
              <p className="text-lg">
                The area offers unique opportunities to experience tribal culture, traditional crafts, 
                folk dances, and local cuisine while enjoying the pristine natural environment.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Adventure Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2"></span>Forest trekking to multiple waterfalls</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2"></span>River rafting and water sports</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2"></span>Tribal village visits and cultural programs</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2"></span>Wildlife photography and bird watching</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2"></span>Camping and bonfire experiences</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Discover Rampa Waterfalls</h3>
            <p className="text-lg mb-8">Book your Rampa waterfalls adventure with experienced local guides</p>
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700">
              Plan Your Adventure
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}