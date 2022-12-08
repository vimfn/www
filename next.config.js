const { withContentlayer } = require("next-contentlayer");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
