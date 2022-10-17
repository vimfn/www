import { allSnippets, Snippet } from "contentlayer/generated";
import siteMetadata from "data/siteMetadata";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ArticleJsonLd, NextSeo } from "next-seo";
import SnippetLayout from "src/layouts/SnippetLayout";
import components from "../../components/MDXComponents";

export default function BlogDetailPage({ snippet }: { snippet: Snippet }) {
  const Component = useMDXComponent(snippet.body.code);
  return (
    <SnippetLayout snippet={snippet}>
      <SEO snippet={snippet} />
      <Component
        components={{
          ...components,
        }}
      />
    </SnippetLayout>
  );
}

function SEO({ snippet }: { snippet: Snippet }) {
  return (
    <>
      <NextSeo
        title={snippet.title}
        description={snippet.description}
        openGraph={{
          type: "article",
          article: {
            publishedTime: snippet.date,
          },
        }}
      />
      <ArticleJsonLd
        url={`${siteMetadata.siteUrl}/snippet/${snippet.slug}`}
        title={snippet.title}
        datePublished={snippet.date}
        authorName={siteMetadata.author}
        description={snippet.description}
        images={[]}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);
  return { props: { snippet } };
}
