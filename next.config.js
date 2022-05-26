/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'alvinf.vercel.app',
    ],
  },
};

module.exports = nextConfig;
