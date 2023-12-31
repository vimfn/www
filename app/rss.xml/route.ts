import { getBlogPosts } from "@/lib/blog";
import { NextResponse } from "next/server";
import RSS from "rss";

export const GET = () => {
  const SITE_URL =
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000"
      : "https://arnvgh.me";

  const feed = new RSS({
    title: "Writing @ arnvgh",
    description: "Read my articles about tech, life and anything in between.",
    site_url: `${SITE_URL}`,
    feed_url: `${SITE_URL}/rss.xml`,
    language: "en-US",
    image_url: `${SITE_URL}/og.png`,
  });

  const posts = getBlogPosts();

  for (const post of posts) {
    feed.item({
      title: post.metadata.title,
      url: `${SITE_URL}/wiriting/${post.slug}`,
      date: post.metadata.publishedAt,
      description: post.content,
      author: "Arunava",
    });
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
