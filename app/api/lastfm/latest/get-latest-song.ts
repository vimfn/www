import { env } from "@/app/env";

const LASTFM_API = "https://ws.audioscrobbler.com/2.0";
const MUSICBRAINZ_API = "https://musicbrainz.org/ws/2";
const LASTFM_USERNAME = "arnvgh";
const LASTFM_ENDPOINT = `${LASTFM_API}?method=user.getRecentTracks&api_key=${env.LASTFM_API_TOKEN}&format=json&user=${LASTFM_USERNAME}&limit=1`;
const MUSICBRAINZ_ENDPOINT = (mbid: string) => {
  return `${MUSICBRAINZ_API}/release/${mbid}?fmt=json`;
};

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

interface MusicBrainzResponse {
  date?: string;
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
    const response: LastFmResponse = await fetch(LASTFM_ENDPOINT).then(
      (response) => {
        if (!response.ok) {
          throw new Error("There was an error while querying the Last.fm API.");
        }

        return response.json();
      }
    );

    const song = response.recenttracks?.track?.[0];
    const date = song.date?.uts ? Number(song.date?.uts) : undefined;
    const mbid = song.album.mbid;
    let year: number | undefined;

    if (mbid) {
      const release: MusicBrainzResponse = await fetch(
        MUSICBRAINZ_ENDPOINT(mbid)
      ).then((response) => {
        if (!response.ok) return {};

        return response.json();
      });

      if (release.date) {
        const date = new Date(release.date);

        year = date.getFullYear();
      }
    }

    return {
      title: song.name,
      artist: song.artist["#text"],
      year,
      date,
      url: song.url,
      cover: song.image.find((image) => image.size === "large")?.["#text"],
      playing: Boolean(song["@attr"]?.nowplaying) ?? !date,
    };
  } catch (error) {
    console.error(error);

    return;
  }
}
