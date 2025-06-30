import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.BACKEND_URL}/api/:path*`,
      },
    ];
  },  
};

export default nextConfig;
