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

export const ImagesCard = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-36 rounded-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={img1}
              alt=""
              className="rounded-lg object-cover h-36 w-full "
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
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute bottom-3 right-14" />
      <CarouselNext className="absolute bottom-3 right-3" />
    </Carousel>
  );
};
