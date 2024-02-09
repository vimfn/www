import { Metadata } from "next";

export const metadata: Metadata = {
  title: "arnvgh // about",
  description: "Most of the things you (maybe) want to know about me.",
};

const aboutPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <h1 className="text-2xl font-bold pb-8">About</h1>

      <div className="flex flex-col gap-16 dark:text-zinc-200">
        <section className="flex flex-col md:flex-row gap-1 md:gap-9">
          <h2 className="md:w-28 text-zinc-400 font-medium shrink-0 md:text-left">
            Who am I
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              Hi there<span className="wave mx-1">👋🏻</span> I&apos;m Arunava, a
              19-year-old guy, passionate about computers.
            </p>
            <p>
              My journey began in 6th or 7th grade when I installed Linux on my
              computer, seeking something new beyond the dull Windows
              environment. Since then, I&apos;ve never looked back. I got into
              the terminal, learned Python, engaged in basic shell scripting,
              automated stuff, scraped websites, tweaked system services, and
              enjoyed breaking stuff to understand how things work.
            </p>
            <p>
              Later, I explored web development, working with various
              technologies, libraries, and frameworks. I learned about backend
              operations, databases, scalability, and real-time communications.
            </p>
            <p>
              Currently, I&apos;m engaged in the startup world, working with
              cloud platforms, and doing freelancing on the side.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-1 md:gap-9">
          <h2 className="md:w-28 text-zinc-400 font-medium shrink-0 md:text-left">
            How I Tech
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              As a full-stack developer, my primary focus involves handling both
              backend operations and user interface development. For robust
              tasks requiring performance and scalability, I rely on Golang,
              while for typical backend functionalities, I turn to NodeJS.
              Additionally, I use React (Next.js) for creating user interfaces,
              and I enhance the styling with TailwindCSS.
            </p>
            <p>
              I have several years of experience working with these
              technologies, as well as experience in other languages such as
              TypeScript, Python, C++, Elixir, and Rust, ranked in order from
              most to least experienced.
            </p>
            <p>
              In a nutshell, I&apos;m all about breaking down complex tech
              stuff, building cool things, and having some fun along the way!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default aboutPage;
