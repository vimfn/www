interface Album {
  artist: string;
  name: string;
  coverImage: string;
  href: string;
}

export const AlbumCard = ({ artist, name, coverImage, href }: Album) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className=" transition duration-300 ease-in-out transform relative flex items-end  h-36 w-36 bg-no-repeat bg-cover rounded-md shadow-md"
    >
      <div
        className=" rounded-md bg-cover absolute w-full h-full"
        style={{ backgroundImage: `url('${coverImage}')` }}
      ></div>
      <div className="transition duration-300 ease-in-out opacity-0 hover:opacity-100 p-4 z-40 font-bold hover:bg-opacity-50 bg-black w-full h-full text-white overflow-y-hidden overflow-x-hidden">
        <h1 className="font-bold text-2xl capitalize">{artist}</h1>
        <p className="font-medium text-sm capitalize">{name}</p>
      </div>
    </a>
  );
};
