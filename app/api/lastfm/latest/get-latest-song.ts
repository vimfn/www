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
  /**
   * The value's content.
   */
  "#text": T;
}

interface MusicBrainzID extends Text {
  /**
   * A MusicBrainz identifier.
   */
  mbid: string;
}

interface Image extends Text {
  /**
   * The image's size.
   */
  size: "extralarge" | "large" | "medium" | "small";
}

interface TrackDate extends Text {
  /**
   * A Unix timestamp.
   */
  uts: string;
}

interface RecentTrackAttributes {
  /**
   * Whether the track is currently playing.
   */
  nowplaying: string;
}

interface RecentTrack {
  /**
   * A list of track-specific attributes.
   */
  "@attr"?: RecentTrackAttributes;

  /**
   * The album the track is featured in.
   */
  album: MusicBrainzID;

  /**
   * The track's artist.
   */
  artist: MusicBrainzID;

  /**
   * The date at which the track was listened to.
   */
  date?: TrackDate;

  /**
   * A cover art image in various sizes.
   */
  image: Image[];

  /**
   * The track's MusicBrainz identifier.
   */
  mbid: string;

  /**
   * The track's name.
   */
  name: string;

  /**
   * Whether a preview is available for streaming.
   */
  streamable: Boolean;

  /**
   * The track's Last.fm URL.
   */
  url: string;
}

interface RecentTracksAttributes {
  /**
   * The current page index.
   */
  page: string;

  /**
   * The amount of tracks per page.
   */
  perPage: string;

  /**
   * The total amount of tracks.
   */
  total: string;

  /**
   * The total amount of pages.
   */
  totalPages: string;
}

interface RecentTracks {
  /**
   * A list of response-specific attributes.
   */
  "@attr": RecentTracksAttributes;

  /**
   * A list of tracks.
   */
  track: RecentTrack[];
}

interface LastFmResponse {
  /**
   * The response's main content.
   */
  recenttracks: RecentTracks;
}

interface MusicBrainzResponse {
  /**
   * The release's release date.
   */
  date?: string;
}

export interface Response {
  /**
   * The song's artist.
   */
  artist: string;

  /**
   * The song's cover art.
   */
  cover?: string;

  /**
   * The date at which the song was listened to.
   */
  date?: number;

  /**
   * Whether the song is currently playing.
   */
  playing: boolean;

  /**
   * The song's title.
   */
  title: string;

  /**
   * The song's Last.fm URL.
   */
  url: string;

  /**
   * The song's release year.
   */
  year?: number;
}

/**
 * Fetch the latest song I listened to from Last.fm.
 */
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
