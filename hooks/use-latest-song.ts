import fetcher from "@/lib/utils";
import useSWR from "swr";
import type { Response } from "../app/api/lastfm/latest/get-latest-song";

export function useLatestSong(): Partial<Response> {
  const { data } = useSWR<Response>("/api/lastfm/latest", fetcher);

  return data ?? {};
}
