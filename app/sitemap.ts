import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://vimfn.in/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    "",
    "/about",
    "/writing",
    "/uses",
    "/work",
    "/music",
    "/anime",
    "/books",
    "/nsfw",
    "/faqs",
  ].map((route) => ({
    url: `https://vimfn.in${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
