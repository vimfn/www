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
        source: "/github",
        destination: "https://github.com/arnvgh",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/arnvgh",
        permanent: true,
      },
      {
        source: "/sponsor",
        destination: "https://github.com/sponsors/arnvgh",
        permanent: true,
      },
      {
        source: "/github/:slug*",
        destination: "https://github.com/arnvgh/:slug*",
        permanent: true,
      },
      {
        source: "/gh/:slug*",
        destination: "https://github.com/arnvgh/:slug*",
        permanent: true,
      },
      {
        source: "/resume",
        destination:
          "https://docs.google.com/document/d/1ucYSZSVyidP-fu3olrTK6vifs0-8Wz79OSuSZfQDBU8/edit",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/arnvgh",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/arnvgh/",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/N5Ce5uDvQZ",
        permanent: true,
      },
      {
        source: "/devden",
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
        destination: "https://arnvgh.me/writing",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "https://arnvgh.me/writing/:slug*",
        permanent: true,
      },
      {
        source: "/chess",
        destination: "https://lichess.org/arunava",
        permanent: true,
      },
      {
        source: "/yt",
        destination: "https://youtube.com/@arnvgh",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@arnvgh",
        permanent: true,
      },
      {
        source: "/feed.xml",
        destination: "https://arnvgh.me/rss.xml",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "https://arnvgh.me/rss.xml",
        permanent: true,
      },
      {
        source: "/rss",
        destination: "https://arnvgh.me/rss.xml",
        permanent: true,
      },
      {
        source: "/gpg",
        destination: "https://keys.openpgp.org/search?q=arnvgh%40gmail.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
