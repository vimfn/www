"use client";

import { cn } from "@/lib/utils";
import { CloudMoon, CloudSun } from "lucide-react";
import { useEffect, useState } from "react";

export const CurrentTime = () => {
  const [time, setTime] = useState(() => new Date());

  const isNight = time.getHours() >= 17 || time.getHours() < 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const INTimeFormatter = new Intl.DateTimeFormat(undefined, {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="rounded-lg">
      <div className="flex flex-col gap-3">
        <div
          className={cn(
            "flex flex-col justify-center items-center h-[4.125rem] rounded-lg text-white",
            !isNight ? "bg-[#dcd789] dark:bg-[#2d66c9]" : "bg-[#a18ad4] "
          )}
        >
          <h2 className="font-bold text-base text-center">
            {isNight ? (
              <CloudMoon size={18} className="my-1" />
            ) : (
              <CloudSun className="my-1" />
            )}

            {INTimeFormatter.format(time)}
            <span className="text-[0.6rem] font-medium"> (IST)</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
