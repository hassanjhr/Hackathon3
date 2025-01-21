import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://next-ecommerce-template-4.vercel.app/api/:path*',
      },
    ];
  },
  reactStrictMode: true, // Optional: enables strict mode for better error handling
  webpack(config) {
    // Custom Webpack Configurations
    return config;
  },
};

export default nextConfig;
