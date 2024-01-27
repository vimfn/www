import DCStatus from "@/components/misc/(home)/dc-status";
import GHStats from "@/components/misc/(home)/gh-stats";
import { PlacesCard } from "@/components/misc/(home)/places-card";
import Map from "./map";
import { Time } from "./time";
import WakatimeStats from "./wakatime-stats";
import AnimeCard from "./anime-card";
import StacksCard from "./stacks-card";

const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
        <div className="col-span-3">
          <PlacesCard />
        </div>
        <div className="col-span-2">
          <GHStats />
        </div>
        <DCStatus />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 gap-3 mt-3">
        <div className="col-span-2 md:order-1 order-2">
          <Map />
        </div>
        <div className="col-span-1 order-2">
          <AnimeCard />
        </div>
        <div className="md:order-2 order-1">
          <div className="flex flex-col gap-3">
            <Time />
            <WakatimeStats />
          </div>
        </div>
        <div className="col-span-2">
          <StacksCard />
        </div>
      </div>
    </div>
  );
};

export default GridCards;
