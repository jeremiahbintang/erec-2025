/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/erec-2025',
  assetPrefix: '/erec-2025/',
  images: {
    unoptimized: true, // For static exports, images must be unoptimized
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig

// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

// export default (phase) => {
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER
//   const nextConfig = {
//     output: 'export',
//     basePath: isDev ? undefined : '/erec-2025',
//     assetPrefix: isDev ? undefined : '/erec-2025/',
//     images: {
//       unoptimized: true, // For static exports, images must be unoptimized
//     },

//   };
//   return nextConfig
// }
// module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["d1lp121c60gp91.cloudfront.net"],
//   },
// };
