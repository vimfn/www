import { Snippet } from "contentlayer/generated";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SnippetCard from "src/components/SnippetCard";

export default function ListLayout({ snippets }: { snippets: Snippet[] }) {
  const [search, setsearch] = useState("");
  const filteredPosts = snippets.filter((snippet) =>
    snippet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="border-b-[1px] pb-8 mb-8 border-muted">
        <div className="max-w-xl ">
          <h1 className="mb-4 text-3xl font-bold uppercase md:text-5xl text-text">
            Snippets
          </h1>

          <p className="mb-4 text-subtle">
            These are {snippets.length} snippets that I have written.
          </p>
          <div className="relative w-full">
            <input
              aria-label="Search snippets"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              placeholder="Search snippets"
              className="block w-full px-4 py-2 border rounded-md border-hightlight-med bg-surface focus:ring-rose focus:border-rose"
            />
            <svg
              className="absolute w-5 h-5 right-3 top-3 text-subtle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        layout="position"
        transition={{ duration: 0.5 }}
      >
        {filteredPosts.map((snippet) => (
          <SnippetCard key={snippet.slug} {...snippet} />
        ))}
      </motion.div>
    </div>
  );
}
