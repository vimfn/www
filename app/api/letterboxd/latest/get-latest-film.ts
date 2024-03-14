import { XMLParser } from "fast-xml-parser";
import { decode } from "html-entities";

const LETTERBOXD_USERNAME = "arnvgh";
const LETTERBOXD_URL = "https://letterboxd.com";
const LETTERBOXD_FEED = `${LETTERBOXD_URL}/${LETTERBOXD_USERNAME}/rss/`;
const LETTERBOXD_FILM_URL = (film: string) => `${LETTERBOXD_URL}/film/${film}/`;

interface XMLParserDocument<T> {
  rss: T;
}

interface FilmEntry {
  description: string;
  guid: string;
  "letterboxd:filmTitle": string;
  "letterboxd:filmYear": number;
  "letterboxd:memberRating": number;
  "letterboxd:rewatch": "No" | "Yes";
  "letterboxd:watchedDate": string;
  link: string;
  title: string;
}

interface LetterboxdResponse {
  channel: {
    description: string;

    item: FilmEntry[];

    link: string;

    title: string;
  };
}

export interface Response {
  date: string;
  poster?: string;

  rating?: number;
  title: string;
  url: string;
  year: number;
}

export async function getLatestFilm(): Promise<Response | undefined> {
  try {
    const response = await fetch(LETTERBOXD_FEED, {
      method: "GET",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      mode: "cors",
      credentials: "include",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          "There was an error while fetching the Letterboxd feed."
        );
      }
      return response.text();
    });

    const parser = new XMLParser();
    const { rss }: XMLParserDocument<LetterboxdResponse> =
      parser.parse(response);

    const [film] = rss.channel.item.sort((a, b) =>
      b["letterboxd:watchedDate"].localeCompare(a["letterboxd:watchedDate"])
    );
    const [poster] =
      film.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? [];
    const [, slug] = film.link.match(/film\/([^/]*)\/?/) ?? [];

    return {
      title: decode(film["letterboxd:filmTitle"]),
      year: film["letterboxd:filmYear"],
      rating: film["letterboxd:memberRating"],
      date: film["letterboxd:watchedDate"],
      poster,
      url: LETTERBOXD_FILM_URL(slug),
    };
  } catch (error) {
    console.error(error);

    return;
  }
}
