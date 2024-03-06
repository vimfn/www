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
import { Pen } from "lucide-react";

export const ImagesCard = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-72 rounded-lg bg-[#ece8e8] dark:bg-[#0f1319]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="h-72 rounded-lg">
          <Link href="/writing/2023">
            <div className="rounded-lg text-card-foreground relative overflow-hidden">
              <div className="flex-col text-3xl font-bold p-2 flex justify-start dark:text-white">
                <p>A look back at 2023</p>
                <span className="text-sm font-normal italic dark:text-white/75">
                  rant about my 2024 goals • 3 min read
                </span>
              </div>
              <div className="p-3">
                <Image
                  src={img1}
                  alt=""
                  className="rounded-lg object-cover w-full h-48"
                  placeholder="blur"
                  priority
                />
                
              </div>
            </div>
          </Link>
        </CarouselItem>
        ``
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
      {/* <CarouselPrevious className="absolute bottom-3 right-14" />
      <CarouselNext className="absolute bottom-3 right-3" /> */}
    </Carousel>
  );
};
