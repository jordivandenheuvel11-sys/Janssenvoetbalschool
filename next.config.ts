import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // Attempt to disable all dev indicators
  allowedDevOrigins: ['127.0.0.1', 'localhost', '10.10.0.107', '10.10.0.110'], // Allow local network IPs
};

export default nextConfig;
