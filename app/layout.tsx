import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Papikondalu Tourism - 20+ Years of Excellence',
  description: 'Experience the beauty of Papikondalu with our expert boat tours. 20+ years of experience serving 7+ lakh happy customers.',
  keywords: 'Papikondalu, tourism, boat tours, Godavari river, Andhra Pradesh, Bhadrachalam',
  openGraph: {
    title: 'Papikondalu Tourism - 20+ Years of Excellence',
    description: 'Experience the beauty of Papikondalu with our expert boat tours.',
    images: ['https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}