/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
      source: "/(github|gh|git)",
      destination: "https://github.com/vimfn",
      permanent: true,
      },
      {
      source: "/sponsor",
      destination: "https://github.com/sponsors/vimfn",
      permanent: true,
      },
      {
      source: "/(gh|github|git)/:slug*",
      destination: "https://github.com/vimfn/:slug*",
      permanent: true,
      },
      {
      source: "/(twitter|x)",
      destination: "https://twitter.com/vimfnn",
      permanent: true,
      },
      {
      source: "/linkedin",
      destination: "https://www.linkedin.com/in/vimfn/",
      permanent: true,
      },
      {
      source: "/devden",
      // invite only for now :(
      destination: "https://discord.gg/N5Ce5uDvQZ",
      permanent: true,
      },
      {
      source: "/spotify",
      destination: "https://open.spotify.com/user/zfu9cur8fpnw6oc4q8vm55op6",
      permanent: true,
      },
      {
      source: "/blog",
      destination: "https://vimfn.in/writing",
      permanent: true,
      },
      {
      source: "/blog/:slug*",
      destination: "https://vimfn.in/writing/:slug*",
      permanent: true,
      },
      {
      source: "/feed.xml",
      destination: "https://vimfn.in/rss.xml",
      permanent: true,
      },
      {
      source: "/feed",
      destination: "https://vimfn.in/rss.xml",
      permanent: true,
      },
      {
      source: "/rss",
      destination: "https://vimfn.in/rss.xml",
      permanent: true,
      },
      {
      source: "/gpg",
      destination: "https://github.com/vimfn.gpg",
      permanent: true,
      },
    ];
  },
};

export default nextConfig;
