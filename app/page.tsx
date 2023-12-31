import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Intro from "./intro";
import Image from "next/image";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8">
      <h1 className="mt-0 mb-1 text-xl font-medium dark:text-white">
        Arunava Ghosh
      </h1>
      <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
        <HoverCard>
          <HoverCardTrigger className="mr-1">19y/o</HoverCardTrigger>
          Software Engineer, India
          <HoverCardContent className="w-auto h-8 p-0 px-2 pt-1">
            <p>17 Dec, 2004</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Intro />
      <div className="flex pt-3 mt-5 gap-3">
        <div>
          <Image
            width={192}
            height={192}
            src="/bug.gif"
            className="pb-1 w-48"
            alt="fix the bugs"
            priority
          />
          <p className="text-zinc-400 text-xs">(time to fix it)</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
