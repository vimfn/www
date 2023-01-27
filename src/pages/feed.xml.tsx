import { GetServerSideProps } from "next";
import {
  allPosts,
  allPages,
  allSnippets,
  Post,
  Snippet,
  Page,
} from "contentlayer/generated";
import siteMetadata from "data/siteMetadata";
import { allTags, Tag } from "src/lib/tags";
import { Feed } from "feed";

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  // full host url
  const posts = allPosts
    .filter((post) => post.draft !== true)
    .sort((a, b) => b.date.localeCompare(a.date));
  const siteURL = siteMetadata.siteUrl;
  const author = {
    name: siteMetadata.author,
    email: siteMetadata.email,
    link: siteMetadata.github,
  };
  const feed = new Feed({
    title: siteMetadata.title,
    description: " ©️ Website designed and developed by Arunava Ghosh",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/static/images/logo.png`,
    favicon: `${siteURL}/static/favicons/favicon-32x32.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      siteMetadata.author
    }`,
    updated: new Date(),
    generator: "Feed for Node.js",
    author: author,
  });
  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      content: post.summary,
      image: post.image ? `${siteURL}${post.image}` : undefined,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });
  res.setHeader("Content-Type", "text/xml");
  res.write(feed.rss2());
  res.end();

  return {
    props: {},
  };
};
