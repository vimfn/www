"use client";

import { LanyardResponse } from "@/app/api/discord/route";
import fetcher from "@/lib/utils";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import useSWR from "swr";

export const DCStatus = () => {
  const { data, isLoading, error } = useSWR<LanyardResponse>(
    "/api/discord",
    fetcher
  );

  return (
    <div className="w-32 h-36 bg-[#a5b4fc] dark:bg-[#35323a] text-white rounded-lg items-center flex justify-center">
      <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 overflow-hidden relative">
        <DiscordLogoIcon className="w-48 h-48 text-blue-800 absolute top-0"/>
        {/* {error || (isLoading && <p>offline</p>)} */}
        <p>{data?.data.discord_status}</p>
      </div>
    </div>
  );
};
