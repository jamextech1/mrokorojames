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
};

export default nextConfig;
