import { env } from "@/app/env";
import { Code2 } from "lucide-react";
import { unstable_cache as cache } from "next/cache";

type WakatimeRes = {
  data: {
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: {
      end: string;
      end_date: string;
      end_text: string;
      start: string;
      start_date: string;
      start_text: string;
      timezone: string;
    };
    text: string;
    timeout: number;
    total_seconds: number;
  };
};

const getCodingHrs = cache(
  async () => {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
            "base64"
          )}`,
        },
      }
    );

    const data: WakatimeRes = await res.json();
    return {
      seconds: data.data.total_seconds,
    };
  },
  [],
  {
    revalidate: 3600,
  }
);

export const WakatimeStats = async () => {
  const { seconds } = await getCodingHrs();

  return (
    <a
      href="https://wakatime.com/@arnvgh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#4a5c95]">
        <span className="font-semibold items-center">
          <Code2 className="inline-block mr-1 -mt-[0.15rem]" size={18} />
          {Math.round((seconds) / 3600)}
        </span>
        <span className="text-sm">coding hrs</span>
      </div>
    </a>
  );
};
