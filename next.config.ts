import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If you're using static export for Vercel
  output: "export",
  trailingSlash: true,
  images: {
    domains: [],
    formats: ["image/webp", "image/avif"],
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
