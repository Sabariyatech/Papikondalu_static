/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    qualities: [60, 75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'djmcbqzqt.cloudinary.com',
      },
    ],
  },
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  output: 'standalone',
}

module.exports = nextConfig