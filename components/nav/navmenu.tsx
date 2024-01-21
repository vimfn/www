"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: {
  title: string;
  href: string;
  img: string;
  description: string;
}[] = [
  {
    title: "work",
    href: "/work",
    img: "/images/work.webp",
    description: "Projects and Experience.",
  },

  {
    title: "music",
    href: "/music",
    img: "/images/music.webp",
    description: "Listening History and current obsessions.",
  },
  {
    title: "anime",
    href: "/anime",
    img: "/images/anime.webp",

    description: "My Fav Animes and more.",
  },
  {
    title: "books",
    href: "/books",
    img: "/images/books.webp",

    description: "Books I found interesting or have been reading.",
  },
  {
    title: "uses",
    href: "/uses",
    img: "/images/uses.webp",
    description: "Stuff I use daily.",
  },
  {
    title: "faqs",
    href: "/faqs",
    img: "/images/faqs.webp",
    description: "Collection of all the movies I watched.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem className="p-0">
          <NavigationMenuTrigger className="font-normal text-base p-0 -mt-3 rounded-full px-3 py-1 bg-transparent hover:bg-black/30 h-auto">
            more
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="text-white grid w-[150px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[350px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="relative z-10 hover:text-white hover:opacity-80"
                >
                  <Image
                    className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                    src={component.img}
                    alt=""
                    width={150}
                    height={150}
                  />
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
