import React from "react";

export const MyLogo = () => {
  return (
    <div className="py-5 select-none">
      <div className="grid grid-cols-2 items-center place-items-center border border-collapse">
        <div className="flex flex-col items-center justify-center border border-divider border-dashed p-6 w-full text-center bg-white dark:bg-black">
          <span className="text-5xl">~</span>
        </div>
        <div className="flex flex-col items-center justify-center border  p-6 w-full text-center bg-black dark:bg-white">
          <span className="text-5xl text-white dark:text-black">~</span>
        </div>
      </div>
    </div>
  );
};

