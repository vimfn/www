import { env } from "@/app/env";
import { AlbumCard } from "@/components/misc/(music)/album-card";

async function getData() {
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=vimfn&period=1month&api_key=${env.LASTFM_API_TOKEN}&format=json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TopAblums() {
  const data = await getData();

  const truncate = (str: string, n: number) =>
    str.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div className="mt-5 mb-20 ">
      <div className="flex overflow-scroll no-scrollbar space-x-3 p-3 -ml-3">
        {data.topalbums.album
          .filter(
            (album: { image: { [x: string]: any }[] }) =>
              album.image[3]["#text"]
          )
          .map(
            (album: {
              artist: { name: string };
              name: any;
              image: { [x: string]: string }[];
              url: string;
            }) => (
              <AlbumCard
                key={album.url}
                artist={album.artist.name}
                name={truncate(album.name, 25)}
                coverImage={album.image[3]["#text"]}
                href={album.url}
              />
            )
          )}
      </div>
    </div>
  );
}
