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
import moment from "moment";

function generateSiteMap(
  host_url: string | undefined,
  {
    posts,
    pages,
    snippets,
    tags,
  }: {
    posts: Post[];
    pages: Page[];
    snippets: Snippet[];
    tags: Tag[];
  }
) {
  const date = moment().format("YYYY-MM-DD");
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${host_url}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
    <url>
      <loc>${host_url}/blog</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
    <url>
      <loc>${host_url}/tag</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>
      <url>
        <loc>${host_url}/snippet</loc>
        <lastmod>${date}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
        </url>
     

       ${pages
         .map(({ slug }) => {
           return `
      <url>
          <loc>${`${host_url}/${slug}`}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.9</priority>

      </url>
    `;
         })
         .join("")}

         ${posts
           .map(({ slug, date }) => {
             return `
          <url>
              <loc>${`${host_url}/blog/${slug}`}</loc>
              <lastmod>${date}</lastmod>
          </url>
        `;
           })
           .join("")}

        ${snippets
          .map(({ slug, date }) => {
            return `
          <url>
              <loc>${`${host_url}/snippet/${slug}`}</loc>
              <lastmod>${date}</lastmod>
              <changefreq>daily</changefreq>
          </url>
        `;
          })
          .join("")}
         ${tags
           .map(({ name }) => {
             return `
            <url>
                <loc>${`${host_url}/tag/${encodeURI(name)}`}</loc>
                <lastmod>${date}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
            </url>
               `;
           })
           .join("")}
        
   </urlset>
 `;
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  // full host url
  const posts = allPosts.filter((post) => post.draft !== true);
  const tags = allTags();
  const pages = allPages;
  const snippets = allSnippets;

  const sitemap = generateSiteMap(siteMetadata.siteUrl, {
    posts,
    tags,
    pages,
    snippets,
  });
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
