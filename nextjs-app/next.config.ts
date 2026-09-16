import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from Blogger/Google CDN
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    // Optimize images for faster loading
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Compress responses
  compress: true,

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Faster builds
  poweredByHeader: false,
};

export default nextConfig;
