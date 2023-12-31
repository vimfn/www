import { LatestBook } from "@/components/misc/latest-book";
import { booksData } from "./books";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "arnvgh // books",
  description:
    "Find some of my favorite book collections and the one currently reading.",
};

const booksPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16 dark:text-zinc-200">
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Books</h1>
        Aside from reading many lines of code, errors, and pages of
        documentation, when I find some time or feel like delving into a topic
        in depth, I often turn to books for their excellent in-depth
        explanations.
        <br />
        <br />
        If it is not something related to my work, or a mystery or sci-fi story
        book or novel, I opt for the audiobook version and enjoy it either while
        traveling or at bedtime.
        <br />
        <br />
        {booksData.map(
          (book) => book.readingNow && <LatestBook key={book.url} {...book} />
        )}
        <br />
        <p>Below are some of my favorite collections of various authors.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {booksData.map(
            (book) =>
              !book.readingNow && <LatestBook key={book.url} {...book} />
          )}
        </div>
      </div>
    </div>
  );
};

export default booksPage;
