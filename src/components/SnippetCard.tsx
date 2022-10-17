import { Snippet } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function SnippetCard(snippet: Snippet) {
  return (
    <Link href={`/snippet/${snippet.slug}`}>
      <a className="relative w-full p-4 transition duration-500 transform border rounded cursor-pointer bg-surface border-hightlight-high group hover:scale-105">
        <div className="absolute bottom-0 left-0 w-full h-0.5 duration-300 origin-left transform scale-x-0 bg-rose group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-full duration-300 origin-bottom transform scale-y-0 bg-rose group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 duration-300 origin-right transform scale-x-0 bg-rose group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full duration-300 origin-top transform scale-y-0 bg-rose group-hover:scale-y-100"></div>
        <div className="flex flex-wrap gap-3">
          {snippet.logos.map((logo) => (
            <Image
              key={logo}
              src={logo}
              width={40}
              height={40}
              alt=""
              className="object-contain"
            />
          ))}
        </div>
        <h4 className="mt-2 text-xl font-medium text-left line-clamp-2 text-text">
          {snippet.title}
        </h4>
        <p className="mt-1 text-subtle line-clamp-3">{snippet.description}</p>
      </a>
    </Link>
  );
}
