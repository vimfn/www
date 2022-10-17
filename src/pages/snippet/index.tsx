import { allSnippets, Snippet } from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import moment from "moment";
import { NextSeo } from "next-seo";
import ListLayout2 from "src/layouts/ListLayout2";

export default function BlogPage({ snippets }: { snippets: Snippet[] }) {
  return (
    <>
      <NextSeo
        title="Snippet list"
        description="All the code snippet I made that maybe useful to you."
      />
      <ListLayout2 snippets={snippets} />
    </>
  );
}

export async function getStaticProps() {
  const snippets = allSnippets
    .map((snippet) =>
      pick(snippet, ["slug", "title", "date", "logos", "description"])
    )
    .sort((a, b) => moment(b.date).diff(moment(a.date)));

  return { props: { snippets } };
}
