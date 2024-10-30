/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image hosts
  images: {
    domains: [
      "portfolio-server-production-c601.up.railway.app",
      "res.cloudinary.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
    ];
  },
};

export default nextConfig;
