import { useMDXComponent } from "next-contentlayer/hooks";
import { allPages, Page } from "contentlayer/generated";
import components from "src/components/MDXComponents";
import { NextSeo } from "next-seo";

export default function Pages({ page }: { page: Page }) {
  const Component = useMDXComponent(page.body.code);

  return (
    <article>
      <NextSeo title={page.title} description={page.description} />
      <h1 className="mb-4 text-3xl font-bold tracking-tight uppercase md:text-5xl text-text">
        {page.title}
      </h1>
      <p className="mt-2 mb-8 text-subtle">{page.description}</p>
      <div className="w-full prose dark:prose-dark">
        <Component components={components} />
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPages.map((page) => ({
      params: { slug: page.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const page = allPages.find((page) => page.slug === params.slug);
  return { props: { page } };
}
