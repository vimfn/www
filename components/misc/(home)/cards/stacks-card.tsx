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

  const ifToRightOrToBottom = (direction: string) => {
    if (direction === "left") {
      return "to right";
    } else {
      return "to bottom";
    }
  };

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
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
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

export const StacksCard = () => {
  return (
    <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
      {/* <p className="text-sm font-mono flex justify-center  text-zinc-600 dark:text-zinc-488">
        fun things
      </p> */}
      <Marquee className="" fade pauseOnHover>
        <IconTypescript width="48" height="48" />
        <IconTailwindcss width="48" height="48" />
        <IconNextJS width="48" height="48" />
        <IconReactJS width="48" height="48" />
        <IconPython width="48" height="48" />
        <IconPostgres width="48" height="48" />
        <VscodeIconsFileTypeCpp3 width="48" height="48" />

        <SkillIconsGolang width="48" height="48" />
        <SkillIconsGraphqlDark width="48" height="48" />
      </Marquee>
      <Marquee className="mt-2" reverse fade pauseOnHover>
        <DeviconElixir width="48" height="48" />
        <SkillIconsDocker width="48" height="48" />
        <LogosArchlinux width="48" height="48" />
        <SkillIconsGodotLight width="48" height="48" />

        <IconPrisma width="48" height="48" />
        <IconMySQL width="48" height="48" />
        <IconFirebase width="48" height="48" />
        <IconFigma width="48" height="48" />
        <IconGit width="48" height="48" />
        <IconVite width="48" height="48" />
        <IconCloudflare width="48" height="48" />
        <IconJest width="48" height="48" />
        <IconNodeJS width="48" height="48" />
      </Marquee>
    </div>
  );
};

