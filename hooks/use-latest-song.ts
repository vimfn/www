import useSWR from "swr";
import type { Response } from "../app/api/lastfm/latest/get-latest-song";
import { revalidate } from "../app/api/lastfm/latest/route";
import { json } from "@/lib/utils";

export function useLatestSong(): Partial<Response> {
  const { data } = useSWR<Response>("/api/lastfm/latest", json, {
    refreshInterval: revalidate * 1000,
  });

  return data ?? {};
}
