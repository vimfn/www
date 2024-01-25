"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import place from "@/public/images/places/1.jpg";
import place2 from "@/public/images/places/2.jpg";
import place3 from "@/public/images/places/3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function PlacesCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
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
              src={place}
              alt=""
              className="rounded-lg object-cover h-36"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={place2}
              alt=""
              className="rounded-lg object-cover h-36"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="h-36">
          <div className="rounded-lg text-card-foreground">
            <Image
              src={place3}
              alt=""
              className="rounded-lg object-cover h-36"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute bottom-3 right-14" />
      <CarouselNext className="absolute bottom-3 right-3" />
    </Carousel>
  );
}
