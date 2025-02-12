import { LatestBook } from "@/components/misc/(book)/latest-book";
import type { Metadata } from "next";
import { booksData } from "./books";

export const metadata: Metadata = {
  title: "vimfn // books",
  description:
    "Find some of my favorite book collections and the one currently reading.",
};

const booksPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Books</h1>
        <p className="mb-6">
          Aside from reading many lines of code, errors, and pages of
          documentation, when I find some time or feel like delving into a topic
          in depth, I often turn to books for their excellent in-depth
          explanations and often fun.
        </p>
        <p className="mb-6">
          If it is not something related to my work, or a mystery or sci-fi
          story book or novel, I opt for the audiobook version and enjoy it
          either while traveling or at bedtime.
        </p>
        {booksData.map(
          (book) => book.readingNow && <LatestBook key={book.url} {...book} />,
        )}
        <p className="mt-6">
          Below are some of my favorite collections of various authors.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {booksData.map(
            (book) =>
              !book.readingNow && <LatestBook key={book.url} {...book} />,
          )}
        </div>
      </div>
    </section>
  );
};

export default booksPage;
