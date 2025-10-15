/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
