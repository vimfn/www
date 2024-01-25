"use client";

import { clsx } from "clsx";
import { formatDistanceToNow, isYesterday } from "date-fns";
import type { Transition, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Skeleton } from "../utils/Skeleton";
import { useLatestSong } from "../../hooks/use-latest-song";
import { capitalize } from "@/lib/utils";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const fade: Transition = {
  ease: "easeInOut",
  duration: 0.6,
};

export function LatestSong({ className, ...props }: ComponentProps<"a">) {
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
    <a
      className={clsx(
        className,
        "flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
      )}
      href={url}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <div className="highlight dark:highlight-invert relative aspect-square h-20 flex-none overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
        <svg
          className="absolute h-full w-full text-zinc-300 dark:text-zinc-600"
          role="presentation"
          viewBox="0 0 78 78"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 34.576v14.697c0 1.075-.146 2.13-.614 3.105-.72 1.517-1.89 2.473-3.46 2.936-.868.26-1.764.402-2.67.442-2.369.122-4.425-1.538-4.844-3.95-.361-1.99.565-4.183 2.592-5.208.798-.401 1.667-.643 2.533-.824.945-.21 1.89-.401 2.825-.623.693-.16 1.14-.593 1.277-1.328.039-.16.048-.332.048-.492V29.318c0-.16-.03-.322-.067-.473-.097-.391-.37-.623-.76-.604-.4.02-.79.091-1.179.172-1.9.382-3.8.774-5.692 1.176l-9.228 1.92c-.04.01-.088.03-.128.03-.692.202-.935.524-.965 1.267-.01.11 0 .222 0 .332-.01 6.695 0 13.39-.01 20.084 0 1.087-.117 2.152-.535 3.156-.692 1.648-1.92 2.684-3.575 3.176-.878.261-1.774.413-2.691.442-2.388.091-4.377-1.547-4.785-3.97-.351-2.09.575-4.342 2.875-5.348.896-.382 1.822-.592 2.767-.793.711-.15 1.433-.301 2.144-.452.955-.21 1.452-.834 1.5-1.839V24.352c0-.322.04-.642.108-.955.175-.733.683-1.156 1.364-1.328.634-.172 1.287-.291 1.929-.432 1.832-.382 3.654-.765 5.486-1.137l5.662-1.187c1.677-.342 3.342-.693 5.019-1.034.546-.11 1.102-.232 1.656-.273.769-.07 1.306.433 1.384 1.238.019.19.03.382.03.573v14.747l.004.012Z"
            fill="currentColor"
          />
        </svg>
        <AnimatePresence>
          {cover && (
            <motion.img
              alt={`${title} by ${artist}`}
              animate="visible"
              className="absolute h-full w-full object-cover"
              exit="hidden"
              initial="hidden"
              key={`${artist} ${title}`}
              loading="lazy"
              src={cover}
              transition={fade}
              variants={variants}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <small className="flex items-center text-2xs font-semibold uppercase leading-tight tracking-widest text-rose-500 dark:text-rose-400">
          <svg
            className="mr-1 -ml-px flex-none will-change-transform"
            fill="currentColor"
            height="20"
            role="presentation"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {playing ? (
              <>
                <rect height="8" rx="1" width="2" x="3" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;2;6;4;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;9;7;8;6"
                  />
                </rect>
                <rect height="12" rx="1" width="2" x="7" y="4">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="12;8;10;8;14;12"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="4;6;5;6;3;4"
                  />
                </rect>
                <rect height="6" rx="1" width="2" x="11" y="7">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;6;10;8;6"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="7;6;7;5;6;7"
                  />
                </rect>
                <rect height="8" rx="1" width="2" x="15" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;6;4;2;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;7;8;9;6"
                  />
                </rect>
              </>
            ) : (
              <path
                clipRule="evenodd"
                d="M16 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM8 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
                fillRule="evenodd"
              />
            )}
          </svg>
          {absoluteDate ? (
            <time className="truncate" dateTime={absoluteDate.toISOString()}>
              {relativeDate}
            </time>
          ) : (
            <span className="truncate">
              {playing ? "Currently playing" : "Not playing"}
            </span>
          )}
        </small>
        <p className="my-1 flex items-center">
          <span
            className="truncate font-semibold text-zinc-700 dark:text-zinc-100"
            title={title}
          >
            {title ?? <Skeleton className="w-40" />}
          </span>{" "}
          {year && (
            <time
              className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              dateTime={String(year)}
            >
              {year}
            </time>
          )}
        </p>
        <p className="truncate text-zinc-500 dark:text-zinc-400" title={artist}>
          {artist ?? <Skeleton className="w-28" />}
        </p>
      </div>
    </a>
  );
}
