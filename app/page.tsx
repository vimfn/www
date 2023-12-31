import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Intro from "@/components/misc/intro";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
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
        <div className="w-48 h-48">
          <video
            width={192}
            height={192}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/bug.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <p className="text-zinc-400 text-xs">(time to fix it)</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
