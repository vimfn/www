"use client";

import { clsx } from "clsx";
import { formatDistanceToNow, isToday, isYesterday } from "date-fns";
import type { Transition, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Skeleton } from "@/components/utils/skeleton";
import { capitalize } from "@/lib/utils";
import { useLatestFilm } from "@/hooks/use-latest-film";

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

export function LatestFilm({ className, ...props }: ComponentProps<"a">) {
  const { date, poster, rating, title, year, url } = useLatestFilm();
  const absoluteDate = useMemo(() => {
    if (!date) return;

    return new Date(date);
  }, [date]);
  const relativeDate = useMemo(() => {
    if (!absoluteDate) return;

    if (isToday(absoluteDate)) {
      return "Today";
    } else if (isYesterday(absoluteDate)) {
      return "Yesterday";
    } else {
      return capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }));
    }
  }, [absoluteDate]);

  return (
    <a
      className={clsx(
        className,
        "focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-lime-500/40 dark:ring-offset-zinc-900 dark:focus:ring-lime-400/40"
      )}
      href={url}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <div className="highlight dark:highlight-invert relative aspect-[2/3] h-20 flex-none overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
        <svg
          className="absolute h-full w-full text-zinc-300 dark:text-zinc-600"
          role="presentation"
          viewBox="0 0 52 78"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M11 30.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327h20.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C41 27.78 41 28.62 41 30.3v17.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H15.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C11 50.22 11 49.38 11 47.7V30.3Zm2-1.3c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 29.699 13 29.466 13 29Zm22.076-.883C35 28.301 35 28.534 35 29s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 29.699 39 29.466 39 29s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 34c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 34.699 13 34.466 13 34Zm22.076-.883C35 33.301 35 33.534 35 34s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 34.699 39 34.466 39 34s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 39c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 39.699 13 39.466 13 39Zm22.076-.883C35 38.301 35 38.534 35 39s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 39.699 39 39.466 39 39s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 44c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 44.699 13 44.466 13 44Zm22.076-.883C35 43.301 35 43.534 35 44s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 44.699 39 44.466 39 44s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 49c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 49.699 13 49.466 13 49Zm22.076-.883C35 48.301 35 48.534 35 49s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 49.699 39 49.466 39 49s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM19 29.1c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.109.494-.109 1.054-.109h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C33 28.26 33 28.54 33 29.1v7.3c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C32.24 38 31.96 38 31.4 38H20.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C19 37.24 19 36.96 19 36.4v-7.3Zm.109 11.446C19 40.76 19 41.04 19 41.6v7.3c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h10.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C33 49.74 33 49.46 33 48.9v-7.3c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C32.24 40 31.96 40 31.4 40H20.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <AnimatePresence>
          {poster && (
            <motion.img
              alt={title}
              animate="visible"
              className="absolute h-full w-full object-cover"
              exit="hidden"
              initial="hidden"
              key={title}
              loading="lazy"
              src={poster}
              transition={fade}
              variants={variants}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <small className="flex items-center text-2xs font-semibold uppercase leading-tight tracking-widest text-lime-500 dark:text-lime-400">
          <svg
            className="mr-1 -ml-px flex-none"
            height="20"
            role="presentation"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M2.559 9.104a1.566 1.566 0 0 0 0 1.792C3.63 12.454 6.21 15.5 9.999 15.5c3.79 0 6.37-3.046 7.442-4.604a1.567 1.567 0 0 0 0-1.792C16.369 7.546 13.789 4.5 10 4.5c-3.789 0-6.369 3.046-7.441 4.604Zm9.94.896a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          {absoluteDate ? (
            <time className="truncate" dateTime={absoluteDate.toISOString()}>
              {relativeDate}
            </time>
          ) : (
            <span className="truncate">Nothing watched</span>
          )}
        </small>
        <p className="mt-1 mb-1.5 flex items-center">
          <span
            className="truncate font-semibold text-zinc-700 dark:text-zinc-100"
            title={title}
          >
            {title ?? <Skeleton className="w-32" />}
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
        <div
          aria-label={`${rating ?? 0} out of 5`}
          className="relative -ml-px h-[20px] w-[96px]"
          role="img"
        >
          <svg
            className="absolute text-zinc-200 dark:text-zinc-700"
            height="20"
            role="presentation"
            width="96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L14.5 11.85l.718 4.156a1 1 0 0 1-1.448 1.057L10 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM28.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L33.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L29 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM47.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L52.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L48 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM66.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L71.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L67 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM85.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L90.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L86 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute text-zinc-600 dark:text-zinc-300"
            height="20"
            role="presentation"
            style={{
              clipPath: `inset(0 ${100 - (rating ?? 0) * (100 / 5)}% 0 0)`,
            }}
            width="96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L14.5 11.85l.718 4.156a1 1 0 0 1-1.448 1.057L10 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM28.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L33.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L29 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM47.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L52.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L48 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM66.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L71.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L67 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM85.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L90.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L86 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
