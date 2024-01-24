import Image from "next/image";
import map from "@/public/images/places/map.png";

const Map = () => {
  return (
    <div className="h-36">
      <Image src={map} alt="" className="rounded-lg object-cover h-36" />
    </div>
  );
};

export default Map;
