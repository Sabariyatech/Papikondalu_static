import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedAttractions />
      <PackageShowcase />
      <Testimonials />
      <Newsletter />
    </>
  )
}