// this is a workaround to get track cover from spotify if lastfm fails to get the image

import { env } from "@/app/env";

const ENDPOINT = "https://api.spotify.com/v1/search?q=";

const CLIENT_ID = env.SPOTIFY_CLIENT_ID as string;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET as string;
const REFRESH_TOKEN = env.SPOTIFY_REFRESH_TOKEN as string;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });
  return await response.json();
};

export const getAlbumCover = async (track: string) => {
  const { access_token } = await getAccessToken();
  const URL = ENDPOINT + encodeURI(track) + "&type=track&market=IN&limit=1";
  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then(async (res) => {
    return res.json();
  });

  const { name, album, external_urls, preview_url } = await res.tracks.items[0];

  return {
    name,
    releaseDate: album.release_date,
    coverArt: album.images[1],
    external_urls,
    preview_url,
  };
};
