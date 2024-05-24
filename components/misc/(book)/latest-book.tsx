"use client";

import { clsx } from "clsx";
import { formatDistanceToNow, isToday, isYesterday } from "date-fns";
import type { Transition, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { Skeleton } from "@/components/utils/skeleton";
import { capitalize } from "@/lib/utils";
import { BookAudio, BookOpenText } from "lucide-react";
import { books } from "@/app/(more)/books/books";

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

export function LatestBook({
  startDate,
  poster,
  author,
  title,
  year,
  url,
  type,
  readingNow,
}: Readonly<books>) {
  const absoluteDate = useMemo(() => {
    if (!startDate) return;

    return new Date(startDate);
  }, [startDate]);
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
        "min-w-0 max-w-full",
        "focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-lime-500/40 dark:ring-offset-zinc-900 dark:focus:ring-lime-400/40"
      )}
      href={url}
      rel="noreferrer"
      target="_blank"
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
        {readingNow && (
          <small className="flex items-center text-2xs font-semibold uppercase leading-tight tracking-widest text-blue-500 dark:text-blue-400">
            {type === "audiobook" ? (
              <BookAudio className="mr-1 -ml-px flex-none" size={15} />
            ) : (
              <BookOpenText className="mr-1 -ml-px flex-none" size={15} />
            )}
            {absoluteDate ? (
              <time className="truncate" dateTime={absoluteDate.toISOString()}>
                Started {relativeDate}
              </time>
            ) : (
              <span className="truncate">Nothing Read.</span>
            )}
          </small>
        )}
        <p className="mt-1 mb-1.5 flex items-center">
          <span
            className="truncate font-semibold text-zinc-700 dark:text-zinc-100"
            title={title}
          >
            {title ?? <Skeleton className="w-32" />}
          </span>{" "}
          {year !== undefined ? (
            <time
              className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              dateTime={String(year)}
            >
              {year}
            </time>
          ) : null}
        </p>
        <p className="truncate text-zinc-500 dark:text-zinc-400" title={author}>
          {author ?? <Skeleton className="w-28" />}
        </p>
      </div>
    </a>
  );
}
