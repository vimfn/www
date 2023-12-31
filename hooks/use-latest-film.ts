import useSWR from "swr/immutable";
import type { Response } from "../app/api/letterboxd/latest/get-latest-film";
import { json } from "@/lib/utils";

export function useLatestFilm(): Partial<Response> {
  const { data } = useSWR<Response>("/api/letterboxd/latest", json, {
    revalidateIfStale: true,
  });

  return data ?? {};
}
