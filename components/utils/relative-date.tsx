"use client";

import { capitalize } from "@/lib/utils";
import { formatDistanceToNowStrict } from "date-fns";
import type { ComponentProps } from "react";
import { useMemo } from "react";

interface Props extends ComponentProps<"time"> {
  date: Date | number | string;
}

export function RelativeDate({ date, ...props }: Props) {
  const parsedDate = useMemo(() => new Date(date), [date]);
  const normalizedDate = useMemo(() => parsedDate.toISOString(), [parsedDate]);
  const formattedDate = useMemo(() => {
    return `${capitalize(formatDistanceToNowStrict(parsedDate))} ago`;
  }, [parsedDate]);

  return (
    <time {...props} dateTime={normalizedDate}>
      {formattedDate}
    </time>
  );
}
