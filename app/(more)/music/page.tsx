import { LatestSong } from "@/components/misc/latest-song";
import TopAblums from "@/components/misc/top-albums";

const MusicPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16 dark:text-zinc-200">
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Music</h1>
        Music has always been something near to my heart. Whether it&apos;s a
        happy day or a sad one, there is a memory linked with it, and a song
        that accompanies the moment.
        <br />
        <br />
        <p>
          You can find a screencast my 2023 Spotify wrapped
          <a
            href="https://files.arnvgh.me/r/2023_Spotify_Wrapped.mkv"
            className="link ml-1"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
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
    </div>
  );
};

export default MusicPage;
