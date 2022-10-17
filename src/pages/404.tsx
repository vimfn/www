import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:my-24">
      <NextSeo title="404" />
      <div className="pt-6 pb-8 space-x-2 md:space-y-5 md:border-r-2 md:px-6">
        <h1
          title="404"
          className="font-mono text-6xl font-extrabold tracking-tight text-text glitch md:text-8xl md:leading-14 "
        >
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Whoops! This is definitely, absolutely not the page you were looking
          for.
        </p>
        <p className="mb-8 italic text-subtle">
          Unless of course you&apos;re one of those people obsessed with finding
          404 pages, then you&apos;ve hit the jackpot my friend!{" "}
        </p>
        <p className="text-lg leading-7">
          Take me{" "}
          <Link href="/">
            <a className="inline-flex flex-row items-center gap-2 font-bold hover-underline-animation">
              HOME
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                ></path>
              </svg>
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
