import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png"
                alt="Papikondalu Tourism"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="ml-3 text-xl font-bold">Papikondalu Tourism</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the beauty of Papikondalu with 20+ years of expertise. 
              We've served 7+ lakh happy customers with unforgettable boat tours 
              and temple visits along the scenic Godavari River.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@papikondalutourism.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Rajahmundry, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/aboutus" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/attractions" className="text-gray-300 hover:text-white transition-colors">Attractions</Link></li>
              <li><Link href="/packages" className="text-gray-300 hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Boat Tours</li>
              <li>Temple Visits</li>
              <li>Adventure Packages</li>
              <li>Night Stay Arrangements</li>
              <li>Group Bookings</li>
              <li>Custom Itineraries</li>
            </ul>
            <div className="mt-4 flex items-center">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">24/7 Customer Support</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Papikondalu Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer