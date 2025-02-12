import { clsx } from "clsx";
import type { ComponentProps } from "react";

export function Skeleton({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={clsx(
        className,
        "skeleton inline-block h-[1em] w-20 rounded-[0.2em] align-middle",
      )}
      {...props}
    />
  );
}
