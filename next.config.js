/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:'/portfolio',
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: 'laravelalvin.github.io/portfolio',
    domains: [
      'localhost',
      'localhost:3000',
      'alvinf.vercel.app',
      'laravelalvin.github.io/portfolio'
    ],
  },
};

module.exports = nextConfig;


