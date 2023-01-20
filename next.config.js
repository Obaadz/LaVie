/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    DB_URI: "mongodb+srv://Obada:123@cluster0.nnh58nb.mongodb.net/LaVie",
    SECRET: "Obaadz000",
  },
};

module.exports = nextConfig;
