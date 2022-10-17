import Link from "next/link";
import React from "react";

export default function Tag({ text, count }: { text: string; count?: number }) {
  return (
    <Link href={`/tag/${text}`}>
      <a className="uppercase duration-150 divide-x-[1px] hover:divide-gold divide-text outline outline-text outline-1 hover:scale-105 hover:outline-gold hover:text-gold">
        <span className="px-2">{text}</span>
        {count && <span className="px-2">{count}</span>}
      </a>
    </Link>
  );
}
