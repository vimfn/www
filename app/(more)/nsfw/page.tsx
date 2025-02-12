import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vimfn // nsfw",
  description: "🥵",
};

const nsfwPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pb-8">NSFW</h1>
      <img
        src="https://media1.tenor.com/m/YdM6A95s6cEAAAAC/mr-bean-when-you-see-your-crush.gif"
        alt="NSFW"
      />
    </div>
  );
};

export default nsfwPage;
