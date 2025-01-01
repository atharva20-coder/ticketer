import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "amiable-ibex-756.convex.cloud", protocol: "https" },
      { hostname: "wary-anaconda-29.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
