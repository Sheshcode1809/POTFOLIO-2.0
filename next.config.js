/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // disabled for Vercel
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig