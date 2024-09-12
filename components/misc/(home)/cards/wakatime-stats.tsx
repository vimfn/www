import { env } from "@/app/env";
import { LogosVisualStudioCode } from "@/components/icons";
import { Code2 } from "lucide-react";

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

const getCodingHrs = async () => {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
            "base64"
          )}`,
        },
      },
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: WakatimeRes = await res.json();

    return {
      seconds: data.data.total_seconds,
    }
  }

export const WakatimeStats = async () => {
  const { seconds } = await getCodingHrs();

  return (
    <a
      href="https://wakatime.com/@vimfn"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-95 duration-500 transform-gpu"
    >
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <LogosVisualStudioCode className="absolute blur-sm text-[60px] top-0 left-0 -rotate-45 brightness-50" />
        <span className="font-semibold items-center font-mono text-3xl -rotate-2">
          <Code2 className="inline-block mr-1 -mt-[0.15rem]" size={18} />
          {Math.round(seconds / 3600)}h
        </span>
        <span className="text-sm">coding stats</span>
        <span className="text-[10px]">(wakatime)</span>
      </div>
    </a>
  );
};
