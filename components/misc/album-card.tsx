"use client";

import { useState } from "react";

interface Album {
  artist: string;
  name: string;
  coverImage: string;
  href: string;
}

export const AlbumCard = ({ artist, name, coverImage, href }: Album) => {
  const [hovering, setHovering] = useState(false);

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseOver={() => setHovering(true)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      onMouseLeave={() => setHovering(false)}
      className=" transition duration-300 ease-in-out transform relative flex items-end  h-36 w-36 bg-no-repeat bg-cover rounded-md shadow-md"
    >
      <div
        className={`transition duration-300 ease-in-out ${
          hovering ? "opacity-40" : "opacity-100 "
        } rounded-md bg-cover absolute w-full h-full`}
        style={{ backgroundImage: `url('${coverImage}')` }}
      ></div>
      <div
        className={`transition duration-300 ease-in-out ${
          hovering ? "opacity-100" : "opacity-0 "
        } p-4 z-40 font-bold`}
      >
        <h1 className="font-bold text-2xl capitalize">{artist}</h1>
        <p className="font-medium text-sm capitalize">{name}</p>
      </div>
    </a>
  );
};
