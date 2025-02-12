/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "/**",
      },
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
        source: "/(gh|github|git)/:slug*",
        destination: "https://github.com/vimfn/:slug*",
        permanent: true,
      },
      {
        source: "/sponsor",
        destination: "https://github.com/sponsors/vimfn",
        permanent: true,
      },
      {
        source: "/(twitter|x)",
        destination: "https://twitter.com/vimfnx",
        permanent: true,
      },
      {
        source: "/(linkedin|ln)",
        destination: "https://www.linkedin.com/in/vimfn/",
        permanent: true,
      },
      {
        source: "/(spotify|sp)",
        destination: "https://open.spotify.com/user/zfu9cur8fpnw6oc4q8vm55op6",
        permanent: true,
      },
      {
        source: "/feed.xml",
        destination: "https://beta.vimfn.in/rss.xml",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "https://beta.vimfn.in/rss.xml",
        permanent: true,
      },
      {
        source: "/rss",
        destination: "https://beta.vimfn.in/rss.xml",
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
