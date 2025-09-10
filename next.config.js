/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
  output: 'export',
  trailingSlash: true,

}

module.exports = nextConfig