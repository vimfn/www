import moment from "moment";
import { allPosts, Post } from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import ListLayout from "src/layouts/ListLayout";
import { NextSeo } from "next-seo";

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <NextSeo title="Blog" description="All of the blog on this website." />
      <ListLayout posts={posts} name="Blog" />
    </>
  );
}

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => post.draft !== true)
    .map((blog) => pick(blog, ["slug", "title", "summary", "date", "tags"]))
    .sort((a, b) => moment(b.date).diff(moment(a.date)));

  return { props: { posts } };
}
