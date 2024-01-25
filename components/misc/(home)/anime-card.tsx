import Link from "next/link";
import Image from "next/image";
import animePic from "@/public/images/anime.webp";
import { ArrowUpRight } from "lucide-react";

const AnimeCard = () => {
  return (
    <Link href={"/anime"}>
      <div className="h-36 group rounded-lg relative">
        <Image
          className="absolute object-cover inset-0 w-full h-full -z-40 rounded-lg  dark:brightness-75"
          src={animePic}
          alt="anime"
        />

        <ArrowUpRight className="absolute text-white transition-all group-hover:scale-105 top-2 right-2 border border-white bg-black rounded-full p-1" />
      </div>
    </Link>
  );
};

export default AnimeCard;
