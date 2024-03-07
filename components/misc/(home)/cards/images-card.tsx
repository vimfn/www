// TODO: Meh this file is so messy. CLEAN UP !!

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

import img1 from "@/public/images/(home)/0001.jpg";
import img2 from "@/public/images/(home)/0002.jpg";
import img3 from "@/public/images/(home)/0003.jpg";
import img4 from "@/public/images/(home)/0004.jpg";
import img5 from "@/public/images/(home)/0005.jpg";
import img6 from "@/public/images/(home)/0006.jpg";
import img7 from "@/public/images/(home)/0007.jpg";
import Link from "next/link";
import { ArrowUpRight, Pen } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const ImagesCard = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-72 rounded-lg bg-[#f7f2f2] dark:bg-[#191919] dark:hover:bg-white/5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="h-72 rounded-lg group hover:scale-95 duration-500 transform-gpu">
          <Link href="/writing/2023">
            <div className="rounded-lg text-card-foreground relative overflow-hidden">
              <div className="flex-col text-2xl font-bold px-4  mt-3 flex justify-start dark:text-white">
                <p>A look back at 2023</p>
                <span className="text-sm font-normal text-[#a1a1aa]">
                  year review + goals for 2024 • 7 min read
                </span>
              </div>
              <div className="p-3 relative">
                <Image
                  src={img1}
                  alt=""
                  className="rounded-lg object-cover w-full h-48"
                  placeholder="blur"
                  priority
                />
              </div>
              {/* <ArrowUpRight className="absolute text-white transition-all group-hover:scale-105 bottom-4 left-4 border border-white bg-black rounded-full p-1" /> */}
            </div>
          </Link>
        </CarouselItem>
        {/* <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img2}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img3}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img4}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img5}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img6}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
              placeholder="blur"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img7}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
              placeholder="blur"
            />
          </div>
        </CarouselItem> */}
      </CarouselContent>
      {/* <HoverCard>
        <HoverCardTrigger></HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard> */}
      {/* <CarouselPrevious className="absolute bottom-3 right-14" />
      <CarouselNext className="absolute bottom-3 right-3" /> */}
    </Carousel>
  );
};
