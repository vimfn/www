import {
  AnimeLinkCard,
  DCStatus,
  GHStats,
  ImagesCard,
  StacksCard,
  WakatimeStats,
  MusicCard,
  LinksCard,
  GHLink,
  BooksCard
} from "@/components/misc/(home)/cards";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
        <div className="col-span-3">
          <GHLink />
        </div>
        <div className="col-span-2">
          <GHStats />
        </div>
        <MusicCard />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 mt-3">
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

          <div className="cols-span-3 ">
            <StacksCard />
          </div>
        </div>

        <div className="col-span-3 md:ml-3">
          <div className="flex gap-3 ">
            <DCStatus />

            <ImagesCard />
          </div>
          <BooksCard />
        </div>
      </div>
    </div>
  );
};
