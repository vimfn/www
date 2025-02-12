import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://beta.vimfn.in/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = [
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
    url: `https://beta.vimfn.in${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
