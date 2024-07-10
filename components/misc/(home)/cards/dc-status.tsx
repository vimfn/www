"use client";

import { LanyardResponse } from "@/app/api/discord/route";
import { LogosVisualStudioCode } from "@/components/icons";
import fetcher from "@/lib/utils";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import useSWR from "swr";

export const DCStatus = () => {
  const { data, isLoading, error } = useSWR<LanyardResponse>(
    "/api/discord",
    fetcher
  );

  return (
    <div className="w-32 h-36  text-white rounded-lg items-center flex justify-center overflow-hidden">
      <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
        {/* <DiscordLogoIcon className="w-48 h-48 text-blue-800 absolute top-0" /> */}
        <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />

        {error || isLoading ? (
          <p className="text-xl font-semibold text-black dark:text-white">
            offline
          </p>
        ) : (
          <div className="text-xl font-semibold text-black dark:text-white">
            {data?.data.discord_status}
            <p className="text-sm">
              (@vimfn)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
