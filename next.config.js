/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // basePath: '/erec-2025',
  // assetPrefix: '/erec-2025/',
  images: {
    unoptimized: true, // For static exports, images must be unoptimized
  },
}

module.exports = nextConfig
