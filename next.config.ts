import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "amiable-ibex-756.convex.cloud", protocol: "https" },
      { hostname: "friendly-sardine-32.convex.cloud", protocol: "https" }, //hosted on vercel
    ],
  },
};

export default nextConfig;
