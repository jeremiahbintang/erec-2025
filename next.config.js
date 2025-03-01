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
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
