const DCStatus = () => {
  return (
    <div className="dark:bg-[#202124] rounded-lg items-center flex justify-center border shadow-sm">
      <div className="items-center gap-2 flex justify-center -rotate-12">
        <span className="w-2 h-2">
          <span className="absolute w-2 h-2 bg-black/25 dark:bg-white/25 rounded-full"></span>
        </span>
        <p>offline</p>
      </div>
    </div>
  );
};

export default DCStatus;
