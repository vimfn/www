import { CalendarDays, Linkedin } from "lucide-react";

type LinksType = {
  Icon: "LinkedIn" | "";
  title: string;
  href: URL;
};

const links: LinksType[] = [
  {
    title: "",
    href: new URL("https://google.com"),
    Icon: "",
  },
];

const LinksCard = () => {
  return (
    <div className="flex gap-2">
      <div className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full cursor-pointer">
        <Linkedin className=""/>
        {/* <span className="font-semibold items-center"></span> */}
        {/* <span className="text-sm">coding hrs</span> */}
      </div>
      <div className="hover:scale-95 duration-500 cursor-pointer transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full">
        <CalendarDays/>
      </div>
    </div>
  );
};

export default LinksCard;
