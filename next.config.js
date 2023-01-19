/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: ["naturo.vexinweb.com", "picsum.photos"],
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
