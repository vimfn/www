"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const INTimeFormatter = new Intl.DateTimeFormat(undefined, {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});

export const RelativeTimeFormatter = new Intl.RelativeTimeFormat("en", {
  style: "long",
});

export const dob = new Date("2004-12-17");
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
export const hasHadBirthdayThisYear =
  new Date().getMonth() >= dob.getMonth() &&
  new Date().getDate() >= dob.getDate();
export const nextBirthdayYear =
  new Date().getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);
export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
  Math.floor(
    (new Date(nextBirthdayYear, dob.getMonth(), dob.getDay() + 1).getTime() -
      Date.now()) /
      1000 /
      60 /
      60 /
      24
  ),
  "day"
)[1]!.value.toString();

export function Time() {
  const [time, setTime] = useState(() => new Date());

  const isNight = time.getHours() >= 17 || time.getHours() < 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-lg h-36">
      <div className="flex flex-col gap-3">
        <div
          className={cn(
            "flex flex-col justify-center items-center h-[4.125rem] rounded-lg",
            isNight ? "bg-[#0c4b6f]" : "bg-[#319fff]"
          )}
        >
          <h2 className="font-bold text-base text-center">
            {INTimeFormatter.format(time)}
            <span className="text-sm font-light"> (IST)</span>
          </h2>
        </div>

        <div className=" h-[4.125rem] text-sm bg-[#23224c] rounded-lg flex flex-col justify-center">
          <h2 className="mx-auto">
            <span className="text-base mr-1">{daysUntilBirthday}</span>
            days
          </h2>
          <span className="mx-auto">until birthday</span>
        </div>
      </div>
    </div>
  );
}
