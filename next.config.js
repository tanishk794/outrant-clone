/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['outrank.so','www.outrank.so','api.outrank.so','firebasestorage.googleapis.com'],
    },
     eslint: {
    ignoreDuringBuilds: true,
  },
  };
  
  module.exports = nextConfig;
  