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
import LinksCard from "./cards/links-card";
import { MusicCard } from "./cards/music-card";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
        <div className="col-span-3"></div>
        <div className="col-span-2">
          <GHStats />
        </div>
        {/* <DCStatus /> */}
        <MusicCard />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 gap-3 mt-3">
        {/* <div className="md:order-2 order-1"> */}
        {/* <CurrentTime /> */}

        {/* </div> */}
        {/* <LocateMe /> */}
        <div className="flex flex-col col-span-3">
          <div className="flex gap-3">
            <div className="w-24">
              <AnimeLinkCard />
            </div>
            <div className="flex flex-col gap-3 w-full ">
              <LinksCard />
              <WakatimeStats />
            </div>
          </div>

          <div className="cols-span-3">
            <StacksCard />
          </div>
        </div>

        {/* <div className="col-span-1 order-2"> */}
        {/* </div>   */}

        <div className="col-span-3">
          <ImagesCard />
        </div>
      </div>
    </div>
  );
};
