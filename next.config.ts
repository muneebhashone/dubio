import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [90, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/launch",
        permanent: false,
      },
    ];
  },
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
