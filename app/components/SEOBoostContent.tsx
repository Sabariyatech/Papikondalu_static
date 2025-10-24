'use client'

import { memo } from 'react'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Award, Phone } from 'lucide-react'

const SEOBoostContent = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main SEO Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero SEO Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Best <span className="text-primary-600">Papikondalu Tours</span> & <span className="text-secondary-600">East Godavari Tourism</span>
            </h2>
            <p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Discover the ultimate <strong>Papikondalu tours</strong>, <strong>Badrachalam temple tours</strong>, and complete <strong>East Godavari tourism</strong> experiences. 
              Our premium <strong>Rajahmundry tours</strong>, <strong>Maredumilli tours</strong>, and <strong>Rampachodavaram tours</strong> offer unforgettable adventures 
              in Andhra Pradesh's most scenic destinations.
            </p>
          </div>

          {/* Location Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Papikondalu */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-primary-600 mr-2" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">Papikondalu Tours</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Experience the best <strong>Papikondalu boat tours</strong> with scenic <strong>Godavari river cruise</strong>. 
                Our <strong>Papikondalu tour packages</strong> include temple visits, hill sightseeing, and cultural experiences.
              </p>
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <Star className="text-yellow-500 mr-1" size={16} />
                <span>4.9/5 Rating • 2000+ Reviews</span>
              </div>
              <Link href="/attractions/papikondalu" className="text-primary-600 font-semibold hover:text-primary-700">
                Explore Papikondalu Tours →
              </Link>
            </div>

            {/* Badrachalam */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-secondary-600 mr-2" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">Badrachalam Temple Tours</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Sacred <strong>Badrachalam temple tours</strong> with <strong>Lord Rama darshan</strong>. 
                Our <strong>Badrachalam tour packages</strong> include temple visits, cultural programs, and spiritual experiences.
              </p>
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <Star className="text-yellow-500 mr-1" size={16} />
                <span>4.8/5 Rating • 1500+ Reviews</span>
              </div>
              <Link href="/attractions/bhadrachalam-temple" className="text-secondary-600 font-semibold hover:text-secondary-700">
                Book Badrachalam Tours →
              </Link>
            </div>

            {/* East Godavari */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-green-600 mr-2" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">East Godavari Tourism</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Complete <strong>East Godavari tourism</strong> covering <strong>best tourist places in East Godavari</strong>. 
                Explore temples, hills, rivers, and cultural heritage sites.
              </p>
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <Star className="text-yellow-500 mr-1" size={16} />
                <span>4.9/5 Rating • 3000+ Reviews</span>
              </div>
              <Link href="/attractions" className="text-green-600 font-semibold hover:text-green-700">
                Discover East Godavari →
              </Link>
            </div>

            {/* Rajahmundry */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 mr-2" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">Rajahmundry Tours</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Premium <strong>Rajahmundry tours</strong> with <strong>Godavari river cruise</strong>. 
                Our <strong>Rajahmundry boat tours</strong> include city sightseeing, river activities, and cultural experiences.
              </p>
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <Star className="text-yellow-500 mr-1" size={16} />
                <span>4.8/5 Rating • 2500+ Reviews</span>
              </div>
              <Link href="/packages" className="text-blue-600 font-semibold hover:text-blue-700">
                Book Rajahmundry Tours →
              </Link>
            </div>

            {/* Maredumilli */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-emerald-600 mr-2" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">Maredumilli Tours</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Adventure <strong>Maredumilli tours</strong> with <strong>waterfalls and forest trekking</strong>. 
                Our <strong>Maredumilli packages</strong> include eco-tourism, wildlife spotting, and nature walks.
              </p>
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <Star className="text-yellow-500 mr-1" size={16} />
                <span>4.7/5 Rating • 1200+ Reviews</span>
              </div>
              <Link href="/attractions/maredumalli" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Explore Maredumilli →
              </Link>
            </div>

            {/* Rampachodavaram */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-600 mr-2" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">Rampachodavaram Tours</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Exciting <strong>Rampachodavaram tours</strong> with <strong>adventure activities</strong>. 
                Our <strong>Rampachodavaram packages</strong> include river rafting, trekking, and tribal culture experiences.
              </p>
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <Star className="text-yellow-500 mr-1" size={16} />
                <span>4.6/5 Rating • 800+ Reviews</span>
              </div>
              <Link href="/packages" className="text-purple-600 font-semibold hover:text-purple-700">
                Book Rampachodavaram →
              </Link>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center text-neutral-900 mb-8">
              Why Choose Our <span className="text-primary-600">East Godavari Tours</span>?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="text-primary-600" size={32} />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">20+ Years Experience</h4>
                <p className="text-neutral-700 text-sm">Leading <strong>East Godavari tour operator</strong> since 2004</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="text-secondary-600" size={32} />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">7+ Lakh Customers</h4>
                <p className="text-neutral-700 text-sm">Trusted by families for <strong>Papikondalu tours</strong></p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="text-yellow-500" size={32} />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">4.9/5 Rating</h4>
                <p className="text-neutral-700 text-sm">Highest rated <strong>Godavari river cruise</strong> operator</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="text-green-600" size={32} />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">24/7 Support</h4>
                <p className="text-neutral-700 text-sm">Round-the-clock assistance for all tours</p>
              </div>
            </div>
          </div>

          {/* Comprehensive Tour Information */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                Complete <span className="text-primary-600">Papikondalu Tour Packages</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4 mt-1">
                    <Clock className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Day Tours</h4>
                    <p className="text-neutral-700">
                      <strong>Rajahmundry to Papikondalu</strong> day tours with lunch, sightseeing, and return journey. 
                      Perfect for <strong>weekend getaways</strong> and <strong>family tours</strong>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary-100 rounded-full p-2 mr-4 mt-1">
                    <Clock className="text-secondary-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Overnight Tours</h4>
                    <p className="text-neutral-700">
                      <strong>Badrachalam to Papikondalu</strong> overnight packages with temple darshan, 
                      river cruise, and comfortable accommodation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <Clock className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Multi-Day Tours</h4>
                    <p className="text-neutral-700">
                      Complete <strong>East Godavari tourism</strong> covering <strong>Maredumilli</strong>, 
                      <strong>Rampachodavaram</strong>, and all major attractions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                <span className="text-secondary-600">Best Tourist Places</span> in East Godavari
              </h3>
              <div className="space-y-3">
                {[
                  'Papikondalu Hills - Scenic river cruise destination',
                  'Badrachalam Temple - Sacred Lord Rama temple',
                  'Maredumilli Waterfalls - Adventure and eco-tourism',
                  'Rampachodavaram - Tribal culture and river rafting',
                  'Perantalapalli - Ancient Shiva temple',
                  'Parnasala - Mythological significance',
                  'Sirivaka - Overnight camping experience',
                  'Gudisa Hills - Panoramic mountain views'
                ].map((place, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-neutral-700">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Book Your <span className="text-yellow-300">East Godavari Tour</span> Today!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Experience the best <strong>Papikondalu tours</strong>, <strong>Badrachalam temple tours</strong>, 
              and complete <strong>East Godavari tourism</strong> with India's most trusted tour operator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
                View All Packages
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Contact Us: +91 9848323488
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(SEOBoostContent)