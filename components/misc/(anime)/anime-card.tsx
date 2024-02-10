import { Anime } from "@/app/(more)/anime/anime";

export const AnimeCard = ({
  title,
  href,
  imgName,
  altTitle,
  starred,
}: Anime) => {
  const altTitleElement = altTitle ? (
    <div className="text-xs text-gray-900 dark:text-gray-200 italic font-semibold opacity-75">
      ({altTitle})
    </div>
  ) : null;

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="relative h-32 focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left shadow-lg max-w-2xl group"
    >
      <div
        className="transition duration-300 ease-in-out rounded-md bg-cover absolute w-full h-full group-hover:opacity-40"
        style={{ backgroundImage: `url('/images/(anime)/${imgName}.webp')` }}
      ></div>
      <div className="transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 ml-0 sm:ml-4 z-40 text-2xl my-auto font-bold">
        <div>{title}</div> {altTitleElement}
      </div>
    </a>
  );
};
