/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    loader: 'imgix',
    path: '/',
  },
}
