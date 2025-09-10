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
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'manapapikondalu.vercel.app',
          },
        ],
        destination: 'https://manapapikondalu.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig