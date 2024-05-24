import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Intro } from "@/components/misc/(home)/intro";
import { GridCards } from "@/components/misc/(home)/grid-cards";
import ContactCard from "@/components/misc/(home)/cards/contact-card";

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
      <GridCards />
      <ContactCard />
    </section>
  );
};

export default Home;
