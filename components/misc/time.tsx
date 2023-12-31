"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="h-48 pointer-events-none relative">
      <div
        className={`h-48 rounded-md relative
        first-letter:w-full flex justify-center items-center select-none`}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <h2
            className="font-bold text-5xl text-center"
            suppressHydrationWarning
          >
            {INTimeFormatter.format(time)}
            <span className="text-sm font-light"> (IST)</span>
          </h2>

          <p className="text-inherit font-light ">
            {daysUntilBirthday} days until birthday
          </p>
          <p className="text-inherit "></p>
        </div>
      </div>
    </div>
  );
}
