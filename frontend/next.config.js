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
  allowedDevOrigins: [
    'a290c679-1154-4b44-bcd1-029a6dd86e3f.cluster-0.preview.emergentcf.cloud',
    'web-craft-hub-12.cluster-0.preview.emergentcf.cloud',
    'a290c679-1154-4b44-bcd1-029a6dd86e3f.preview.emergentagent.com',
  ],
}

module.exports = nextConfig
