import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractDate = (dateString: string | number | Date) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
