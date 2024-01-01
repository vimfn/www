"use client";

import { Anime } from "@/app/(more)/anime/anime";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export const AnimeCard = ({
  title,
  href,
  imgName,
  altTitle,
  starred,
}: Anime) => {
  const [hovering, setHovering] = useState(false);

  const imageOpacity = hovering ? "opacity-40" : "opacity-100";
  const textOpacity = hovering ? "opacity-100" : "opacity-0";
  const sparkles = starred ? <Sparkles className="mr-2" /> : null;
  const altTitleElement = altTitle ? (
    <div className="text-xs text-gray-900 dark:text-gray-200 italic font-semibold opacity-75">
      ({altTitle})
    </div>
  ) : null;

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseOver={() => setHovering(true)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      onMouseLeave={() => setHovering(false)}
      className="relative h-32 focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left shadow-lg max-w-2xl"
    >
      <div
        className={`transition duration-300 ease-in-out ${imageOpacity} rounded-md bg-cover bg-ce absolute w-full h-full`}
        style={{ backgroundImage: `url('/anime/${imgName}.webp')` }}
      ></div>
      <div
        className={`transition duration-300 ease-in-out ${textOpacity} ml-0 sm:ml-4 z-40 text-2xl my-auto font-bold`}
      >
        <div>
          {sparkles}
          {title}
        </div>{" "}
        {altTitleElement}
      </div>
    </a>
  );
};
