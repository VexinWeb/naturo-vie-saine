/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: ["naturo.vexinweb.com", "picsum.photos"],
        domains: ["naturo.vexinweb.com", "picsum.photos"],
        //hostname: "**",
      },
    ],
  }, */
  images: {
    /* protocol: "https", */
    //hostname: ["naturo.vexinweb.com", "picsum.photos"],
    domains: ["naturo.vexinweb.com", "picsum.photos"],
    //hostname: "**",,
    path: "",
    loader: "imgix",
  },
};

module.exports = nextConfig;
