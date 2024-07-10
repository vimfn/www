import useSWR from "swr/immutable";
import type { Response } from "../app/api/letterboxd/latest/get-latest-film";
import fetcher from "@/lib/utils";

export function useLatestFilm(): Partial<Response> {
  const { data } = useSWR<Response>("/api/letterboxd/latest", fetcher, {
    revalidateIfStale: true,
  });

  const fakeData: Response = {
    date: "2024-05-15",
    title: "Overlord",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Overlord_I.jpg",
    url: "https://myanimelist.net/anime/29803/Overlord?pid=72748",
    year: 2022,
    rating: 4.5,
  };

  return data || fakeData;
}
