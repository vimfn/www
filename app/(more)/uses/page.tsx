import Image from "next/image";

const usesPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16 dark:text-zinc-200">
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Uses</h1>
        I love building side projects that solve either my own or someone
        else&apos;s problems. Here is an extensive list of all the stuff I have
        built over the years.
        <br />
        <br />
        <p>
          As a student, I might not have the time for full-time projects, but
          who knows 🤭?
          <br />
          Always happy to discuss an idea— hit me a up at
          <a
            href="http://x.com/arnvgh"
            className="link ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @arnvgh
          </a>
          .
        </p>
      </div>
      <Image
        src="/dwm.png"
        className="rounded-md"
        width={1920}
        height={1080}
        alt="dwm"
      />
    </div>
  );
};

export default usesPage;
