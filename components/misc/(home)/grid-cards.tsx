import {
  AnimeLinkCard,
  CurrentTime,
  DCStatus,
  GHStats,
  ImagesCard,
  LocateMe,
  StacksCard,
  WakatimeStats,
} from "@/components/misc/(home)/cards";
<<<<<<< HEAD
import LinksCard from "./cards/links-card";
import { MusicCard } from "./cards/music-card";
import GHLink from "./cards/gh-link";
import ContactCard from "./cards/contact-card";
import BooksCard from "./cards/books-card";
=======
>>>>>>> main

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
        <div className="col-span-3">
          <ImagesCard />
        </div>
        <div className="col-span-2">
          <GHStats />
        </div>
        <DCStatus />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 gap-3 mt-3">
        <div className="col-span-2 md:order-1 order-2">
          <LocateMe />
        </div>
        <div className="col-span-1 order-2">
          <AnimeLinkCard />
        </div>
        <div className="md:order-2 order-1">
          <div className="flex flex-col gap-3">
            <CurrentTime />
            <WakatimeStats />
          </div>
        </div>
<<<<<<< HEAD

        {/* <div className="col-span-1 order-2"> */}
        {/* </div>   */}

        <div className="col-span-3 md:ml-3">
          <div className="flex gap-3 ">
            <DCStatus />

            <ImagesCard />
          </div>
          <BooksCard/>
=======
        <div className="col-span-2">
          <StacksCard />
>>>>>>> main
        </div>
      </div>
    </div>
  );
};
