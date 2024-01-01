import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/layouts/mdx";
import { getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format-date";

export async function generateMetadata({
  //@ts-ignore
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://arnvgh.me${image}`
    : `https://arnvgh.me/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://arnvgh.me/writing/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

//@ts-ignore
export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://arnvgh.me${post.metadata.image}`
              : `https://arnvgh.me/api/og?title=${post.metadata.title}`,
            url: `https://arnvgh.me/writing/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Arunava Ghosh",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
