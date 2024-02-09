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
        <div className="col-span-2">
          <StacksCard />
        </div>
      </div>
    </div>
  );
};
