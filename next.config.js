/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions:true
  },
  images: {
    domains: ['images.ctfassets.net','images.unsplash.com','dummyimage.com'],
  },
}

module.exports = nextConfig
