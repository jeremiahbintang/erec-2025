const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    basePath: '/erec-2025',
    assetPrefix: isDev ? undefined : '/erec-2025/',
    images: {
      unoptimized: true, // For static exports, images must be unoptimized
    },

  };
  return nextConfig
}
// module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["d1lp121c60gp91.cloudfront.net"],
//   },
// };
