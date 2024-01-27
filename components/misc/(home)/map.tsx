import Image from "next/image";
import map from "@/public/images/places/map.png";

const Map = () => {
  return (
    <div className="h-36">
      <div className="relative">
        <Image src={map} alt="" className="rounded-lg object-cover h-36" placeholder="blur" priority/>
        <p className="absolute top-1/2 left-16 rounded-full bg-white/10 pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md">
          📍 Kolkata
        </p>
      </div>
    </div>
  );
};

export default Map;
