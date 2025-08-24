import { packagesData } from '../packagesData'
import PackageDetailClient from './PackageDetailClient'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id.toString(),
  }))
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const packageData = packagesData.find(p => p.id === parseInt(params.id))
  
  if (!packageData) {
    notFound()
  }

  return <PackageDetailClient packageData={packageData} />
}