import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "image.tmdb.org"
        }
      ]
    },
    // eslint: {
    //   ignoreDuringBuilds: true,
    // },
    
    experimental: {
      ppr: 'incremental',
    },
};

export default nextConfig;
