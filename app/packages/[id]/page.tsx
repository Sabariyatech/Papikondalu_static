import { packagesData } from '../packagesData'
import PackageDetailClient from './PackageDetailClient'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id.toString(),
  }))
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const packageData = packagesData.find(p => p.id === parseInt(id))
  
  if (!packageData) {
    notFound()
  }

  return <PackageDetailClient packageData={packageData} />
}