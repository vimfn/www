import { LatestSong } from "@/components/misc/(music)/latest-song";
import TopAblums from "@/components/misc/(music)/top-albums";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vimfn // music",
  description: "Get an Idea of my music taste.",
};

const MusicPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Music</h1>
        <p>
          Music has always been something near to my heart. Whether it&apos;s a
          happy day or a sad one, there is a memory linked with it, and a song
          that accompanies the moment.
        </p>
        {/* <p>
          You can find a screencast my 2023 Spotify wrapped{""}
          <a
            href="https://files.vimfn.in/r/2023_Spotify_Wrapped.mkv"
            className="link ml-1"
            rel="noopener noreferrer"
          >
            here
          </a>
          {""}.
        </p>
        */}
      </div>
      <LatestSong className="min-w-0 max-w-full" />
      <h1 className="text-2xl font-bold py-8">Fav Tracks</h1>
      <p>
        I listen to a lot of Spotify, Over the last 12 months, I&apos;ve played
        the song イザベラの唄 by Takahiro Obata exactly 146 times! Below you can
        find an up-to-date collection of my favourite songs from the past ~4
        weeks.
      </p>
      <TopAblums />
    </section>
  );
};

export default MusicPage;
