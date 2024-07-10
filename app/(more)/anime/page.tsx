import { AnimeCard } from "@/components/misc/(anime)/anime-card";
import { Anime, AnimeData } from "./anime";
import { LatestFilm } from "@/components/misc/(anime)/latest-film";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "vimfn // anime",
  description: "Find a list of my fav and currently watching anime.",
};

const animePage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Anime</h1>
        <p className="pb-3">
          I have loved watching anime since childhood. My first anime was Death
          Note, which is one of the most popular ones. It was suggested to me by
          a friend. Since then, I have watched many anime of different genres,
          but Isekai, Mecha, and Slice of Life are some of my favorites.
        </p>
        <LatestFilm className="min-w-0 max-w-full" />
        <p className="pt-5">Below are some of my all-time favorite anime.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {AnimeData.map((anime: Anime) => (
          <AnimeCard
            key={anime.href}
            title={anime.title}
            altTitle={anime.altTitle}
            href={anime.href}
            imgName={anime.imgName}
            starred={anime.starred}
          />
        ))}
      </div>
    </section>
  );
};

export default animePage;
