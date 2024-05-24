import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { extractDate } from "@/lib/utils";
import { Rss } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "arnvgh // writing",
  description:
    "My blogs about programming, computers, linux, and occasional life insights.",
};

const writingPage = () => {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-8">Writing</h1>
          <p>
            Programming, Computers, Linux, and occasional life insights.
            Subscribe to{" "}
            <a className="link mx-1 items-center" href={"/rss.xml"}>
              RSS
              <Rss className="inline-flex mb-1 ml-1" size={16} />
            </a>{" "}
            or follow on
            <a
              href="https://x.com/arnvgh"
              target="_blank"
              className="link mx-1"
            >
              Twitter
            </a>{" "}
            for updates.
          </p>
        </div>

        {allBlogs
          .toSorted((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <Link
              key={post.slug}
              className="w-full cursor-pointer"
              aria-label={post.metadata.title}
              href={`/writing/${post.slug}`}
            >
              <div className="w-full  py-1 transform hover:scale-[1.01] transition-all">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div className="flex items-center">
                    <div className="text-left mr-6">{Number(index) + 1}</div>
                    <h4 className="w-full focusable link">
                      {post.metadata.title}
                    </h4>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0  justify-between">
                    <p className="text-xs text-left sm:text-right md:mb-0 mr-2 ml-8 sm:ml-0 text-text/70">
                      <time>{extractDate(post.metadata.publishedAt)}</time>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default writingPage;
