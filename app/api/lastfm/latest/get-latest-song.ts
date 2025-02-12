import { env } from "@/app/env";
import { getAlbumCover } from "./get-album-cover";

const LASTFM_API = "https://ws.audioscrobbler.com/2.0";
const LASTFM_USERNAME = "vimfnx";
const LASTFM_ENDPOINT = `${LASTFM_API}?method=user.getRecentTracks&api_key=${env.LASTFM_API_TOKEN}&format=json&user=${LASTFM_USERNAME}&limit=1`;

type Boolean = "0" | "1";

interface Text<T = string> {
  "#text": T;
}

interface MusicBrainzID extends Text {
  mbid: string;
}

interface Image extends Text {
  size: "extralarge" | "large" | "medium" | "small";
}

interface TrackDate extends Text {
  uts: string;
}

interface RecentTrackAttributes {
  nowplaying: string;
}

interface RecentTrack {
  "@attr"?: RecentTrackAttributes;
  album: MusicBrainzID;
  artist: MusicBrainzID;
  date?: TrackDate;
  image: Image[];
  mbid: string;
  name: string;
  streamable: Boolean;
  url: string;
}

interface RecentTracksAttributes {
  page: string;
  perPage: string;
  total: string;
  totalPages: string;
}

interface RecentTracks {
  "@attr": RecentTracksAttributes;

  track: RecentTrack[];
}

interface LastFmResponse {
  recenttracks: RecentTracks;
}

export interface Response {
  artist: string;
  cover?: string;
  date?: number;
  playing: boolean;
  title: string;
  url: string;
  year?: number;
}

export async function getLatestSong(): Promise<Response | undefined> {
  try {
    const response: LastFmResponse = await fetch(LASTFM_ENDPOINT, {
      cache: "no-store",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("There was an error while querying the Last.fm API.");
      }

      return response.json();
    });

    const song = response.recenttracks?.track?.[0];
    const date = song.date?.uts ? Number(song.date?.uts) : undefined;
    // const cover = song.image[3]["#text"] ? song.image[3]["#text"] : undefined;

    const sp = await getAlbumCover(song.name);

    const year: number = sp.releaseDate.split("-")[0];

    const data = {
      title: song.name,
      artist: song.artist["#text"],
      year,
      date,
      url: song.url,
      cover: sp.coverArt.url as string,
      playing: Boolean(song["@attr"]?.nowplaying) ?? !date,
    };
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
