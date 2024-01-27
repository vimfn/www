import { cn } from "@/lib/utils";
import React from "react";
import {
  IconCloudflare,
  IconFigma,
  IconFirebase,
  IconGit,
  IconJest,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPostgres,
  IconPrisma,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  IconVite,
  LogosArchlinux,
  SkillIconsDocker,
  DeviconElixir,
  VscodeIconsFileTypeCpp3,
  SkillIconsGraphqlDark,
  SkillIconsGodotLight,
  SkillIconsGolang,
} from "@/components/icons";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
};

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start);

const Marquee = (props: MarqueeProps) => {
  const {
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
  } = props;

  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      )}
      data-testid="marquee"
      style={{
        maskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      {range(0, 2).map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-4 [--gap:1rem]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse"
          )}
          data-testid={`marquee-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

const StacksCard = () => {
  return (
    <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl border bg-[#f7f2f2] dark:bg-inherit">
      <p className="text-sm font-mono flex justify-center  text-zinc-600 dark:text-zinc-400">
        fun things
      </p>
      <Marquee className="" fade pauseOnHover>
        <IconTypescript width="40" height="40" />
        <IconTailwindcss width="40" height="40" />
        <IconNextJS width="40" height="40" />
        <IconReactJS width="40" height="40" />
        <IconPython width="40" height="40" />
        <IconPostgres width="40" height="40" />
        <VscodeIconsFileTypeCpp3 width="40" height="40" />

        <SkillIconsGolang width="40" height="40" />
        <SkillIconsGraphqlDark width="40" height="40" />
      </Marquee>
      <Marquee className="mt-2" reverse fade pauseOnHover>
        <DeviconElixir width="40" height="40" />
        <SkillIconsDocker width="40" height="40" />
        <LogosArchlinux width="40" height="40" />
        <SkillIconsGodotLight width="40" height="40" />

        <IconPrisma width="40" height="40" />
        <IconMySQL width="40" height="40" />
        <IconFirebase width="40" height="40" />
        <IconFigma width="40" height="40" />
        <IconGit width="40" height="40" />
        <IconVite width="40" height="40" />
        <IconCloudflare width="40" height="40" />
        <IconJest width="40" height="40" />
        <IconNodeJS width="40" height="40" />
      </Marquee>
    </div>
  );
};

export default StacksCard;
