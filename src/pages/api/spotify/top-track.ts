import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "src/lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 3).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    imageUrl: track.album.images[1].url,
    previewUrl: track.preview_url,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ tracks });
}
