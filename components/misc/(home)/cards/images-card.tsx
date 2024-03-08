<<<<<<< HEAD
=======
"use client";

import Image from "next/image";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

>>>>>>> main
import img1 from "@/public/images/(home)/0001.jpg";
import img2 from "@/public/images/(home)/0002.jpg";
import img3 from "@/public/images/(home)/0003.jpg";
import img4 from "@/public/images/(home)/0004.jpg";
import img5 from "@/public/images/(home)/0005.jpg";
import img6 from "@/public/images/(home)/0006.jpg";
import img7 from "@/public/images/(home)/0007.jpg";
<<<<<<< HEAD
import { getBlogPosts } from "@/lib/blog";
import { cn, extractDate } from "@/lib/utils";
import Link from "next/link";
import { PenTool } from "lucide-react";
=======
>>>>>>> main

export const ImagesCard = () => {
  const allBlogs = getBlogPosts();
  allBlogs.toSorted((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
  return (
<<<<<<< HEAD
    <Link
      className="w-full h-36 hover:scale-95 transform-gpu duration-500 transition-all rounded-xl bg-gradient-to-r p-1 from-[#d0bfea] to-[#c7bcfb]  dark:from-[#342848] dark:to-[#6859aa]"
      href={`/writing/${allBlogs[0].slug}`}
    >
      <div className="relative  overflow-hidden flex flex-col justify-between h-full rounded-lg bg-[#f7f2f2] dark:bg-[#191919]">
        {/* <PenTool
          className="absolute -right-4 -bottom-8 text-[#323232]"
          size={100}
        /> */}
        <div className="flex flex-col justify-between">
          <div className="px-4 py-2">
            <p className="text-xl font-semibold mb-3">Latest Post</p>
            <p className="w-full font-bold text-xl py-3 border-y dark:border-white/20 border-[#dbdbde]">
              {allBlogs[0].metadata.title}
            </p>
          </div>
        </div>
        <div>
          <div className="px-4 text-sm mb-2 text-[#a1a1aa]">
            <div className="12px">
              {extractDate(allBlogs[0].metadata.publishedAt)}
            </div>
            {/* <div >
              <span>--- views</span>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
=======
    <Carousel
      plugins={[plugin.current]}
      className="w-full md:max-w-xs h-36"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img1}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs "
              placeholder="blur"
              priority
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img2}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs"
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img3}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs"
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img4}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs"
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img5}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs"
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img6}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs"
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img7}
              alt=""
              className="rounded-lg object-cover h-36 w-full md:max-w-xs"
              placeholder="blur"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute bottom-3 right-14" />
      <CarouselNext className="absolute bottom-3 right-3" />
    </Carousel>
>>>>>>> main
  );
};
