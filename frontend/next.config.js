/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'static.prod-images.emergentagent.com' },
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  swcMinify: true,
  allowedDevOrigins: ['*'],
}

module.exports = nextConfig
