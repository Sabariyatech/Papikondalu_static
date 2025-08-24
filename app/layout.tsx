import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Papikondalu Tourism - 20+ Years of Excellence | Premium Boat Tours',
  description: 'Experience the beauty of Papikondalu with our expert boat tours. 20+ years of experience serving 7+ lakh happy customers. Book your adventure today!',
  keywords: 'Papikondalu, tourism, boat tours, Godavari river, Andhra Pradesh, Bhadrachalam, temple tours, adventure packages',
  authors: [{ name: 'Papikondalu Tourism' }],
  openGraph: {
    title: 'Papikondalu Tourism - 20+ Years of Excellence',
    description: 'Experience the beauty of Papikondalu with our expert boat tours. Premium service, unforgettable memories.',
    images: ['https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Papikondalu Tourism - Premium Boat Tours',
    description: 'Experience the beauty of Papikondalu with 20+ years of expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  )
}