/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false
  }
};

const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA(nextConfig);
