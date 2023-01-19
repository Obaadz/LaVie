/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    DB_URI:
      "mongodb+srv://Obada:111999111@obaadz.fqqpqhp.mongodb.net/LaVie?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
