import Image from "next/image";
import ghCat from "@/public/images/(home)/0002.jpg";
import { Github } from "lucide-react";

export const GHLink = () => {
  return (
    <a
      className="relative h-full w-full group flex flex-col justify-between overflow-hidden rounded-2xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95"
      href="http://github.com/vimfn"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={ghCat}
          alt="cat img"
          priority={true}
          className="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7] "
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" className="px-6 pt-6">
        <span className="flex justify-between">
          <Github />
        </span>
      </span>
      <span className="space-y-0.5 px-6 pb-6">
        <span className="block font-semibold">GitHub</span>
        <span className="block text-sm">My experiments (aka projects)</span>
      </span>
    </a>
  );
};
