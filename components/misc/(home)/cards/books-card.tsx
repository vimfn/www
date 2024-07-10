import { Quote } from "lucide-react";
import books from "@/public/images/(home)/books.jpg";
import Image from "next/image";
import Link from "next/link";

export const BooksCard = () => {
  return (
    <Link href="/books">
      {" "}
      <div className=" mt-3 w-full h-[7.5rem] rounded-lg   overflow-hidden relative hover:scale-95 duration-500 transform-gpu">
        {/* <p className=" ml-3 py-1 font-semibold text-xl">Books</p> */}
        <Image
          src={books}
          alt=""
          className="absolute object-cover bottom-0 left-0 right-0 top-0 -z-30  brightness-90 dark:brightness-75"
        />
        <div className="px-4 py-2 text-white text-md font-[500]">
          <Quote className="rotate-180" />
          <p className="text-xl ">I lived in book than anywhere else.</p>
          <span className="text-white/85 flex justify-end">― Neil Gaiman</span>
        </div>
      </div>
    </Link>
  );
};
