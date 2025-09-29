/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'homy.com'],
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'http://localhost:5000'}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
