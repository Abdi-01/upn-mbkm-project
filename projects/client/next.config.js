/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA(nextConfig);
