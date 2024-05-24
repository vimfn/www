"use client";

import { ArcticonsLastfmscrobbler } from "@/components/icons";
import { useLatestSong } from "@/hooks/use-latest-song";
import { capitalize } from "@/lib/utils";
import { isYesterday, formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export const MusicCard = () => {
  const { artist, cover, date, title, year, playing, url } = useLatestSong();
  const absoluteDate = useMemo(() => {
    if (!date) return;

    return new Date(date * 1000);
  }, [date]);
  const relativeDate = useMemo(() => {
    if (!absoluteDate) return;

    return isYesterday(absoluteDate)
      ? "Yesterday"
      : capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }));
  }, [absoluteDate]);

  return (
    <Link
      className="bg-[#000] h-36 text-white rounded-lg items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
      href="/music"
    >
      <ArcticonsLastfmscrobbler className="text-red-800 text-[50px] left-0 absolute top-0" />
      <div className="-rotate-90 text-white font-extrabold text-2xl mt-11 mb-10 ml-8">
        {absoluteDate ? (
          <time
            className="truncate text-sm"
            dateTime={absoluteDate.toISOString()}
          >
            {relativeDate}
          </time>
        ) : (
          <span className="truncate">
            {playing ? "Listening" : "fetching.."}
          </span>
        )}
        <br />
        <span className="absolute text-sm font-normal truncate">{title}</span>
      </div>
      {cover && title &&
        <>
          <Image
            src={cover}
            alt={title!}
            className="blur-lg absolute -bottom-3 -left-12  brightness-50"
            width={500}
            height={500}
          />

          <Image
            src={cover}
            alt={title!}
            className={`absolute rounded-full -bottom-10 -left-14 overflow-hidden ${playing && "animate-slow-spin"
              }`}
            placeholder="empty"
            width={200}
            height={200}
          />
        </>
      }
    </Link>
  );
};
