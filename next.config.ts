import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'localhost'],
    loader: 'akamai',
    path: '/_next/image'
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};