/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "i.ibb.co",
      "www.gannett-cdn.com",
      "encrypted-tbn0.gstatic.com",
      "media-exp1.licdn.com",
      "hips.hearstapps.com",
    ],
  },
};

module.exports = nextConfig;
