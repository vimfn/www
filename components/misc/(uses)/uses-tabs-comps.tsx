import Image from "next/image";

import { Colophon } from "@/components/misc/(uses)/colophon";
import { Typography } from "@/components/misc/(uses)/typography";
import { DesignAndColors } from "@/components/misc/(uses)/design-colors";
import { MyLogo } from "@/components/misc/(uses)/my-logo";

import bspwmImg from "@/public/images/(uses)/bspwm.webp";

export const AllTabs = () => {
  return (
    <section className="border-none">
      <Image
        src={bspwmImg}
        placeholder="blur"
        alt={"Desk setup in early 2023"}
        width={1920}
        height={1080}
        className={"h-full object-top py-5"}
        priority
      />
      <EverydayTab />
      <SoftwareTab />
      <BrowserTab />
      <CodingTab />
      <WebsiteTab />
    </section>
  );
};

const EverydayTabData = [
  {
    key: "Laptop",
    desc: "Lenovo AMD Ryzen X + 16 GB RAM + NVIDIA GeForce GTX 30XX + 2TB SSD",
  },
  {
    key: "Old Laptop",
    desc: "HP Laptop 15s running Ubuntu Server (yes, I kind of made it a homelab)",
  },
  {
    key: "Secondary Monitor",
    desc: "BenQ GW2283 (22 inch)",
  },
];

export const EverydayTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Everyday</h1>

      {EverydayTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const SoftwareTabData = [
  {
    key: "OS",
    desc: "Fedora Linux",
  },
  {
    key: "Init System",
    desc: "systemd",
  },
  {
    key: "DNS",
    desc: "Cloudflare",
  },
  {
    key: "Window Manager",
    desc: "i3wm",
  },
  {
    key: "Terminal",
    desc: "Alacritty",
  },
  {
    key: "Text Editor",
    desc: "Neovim",
  },
  {
    key: "Video Streaming",
    desc: "MPV + Jellyfin",
  },
  {
    key: "Music",
    desc: "MPD + NCMPCPP (and occasionally Spotify or YT Music)",
  },
  {
    key: "Notes",
    desc: "Neovim+Telescope",
  },
  {
    key: "Password Manager",
    desc: "GnuPG + pass",
  },
  {
    key: "Sync",
    desc: "Syncthing (Local), Mega, or Google Drive (Cloud)",
  },
];

export const SoftwareTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Software</h1>

      {SoftwareTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const BrowserTabData = [
  {
    desc: "OneTab",
  },
  {
    desc: "Dark Reader",
  },
  {
    desc: "JSON Viewer",
  },
  {
    desc: "uBlock Origin",
  },
  {
    desc: "Video Playback Speed Controller",
  },
  {
    desc: "React Developer Tools",
  },
  {
    desc: "Sponsor Block",
  },
  {
    desc: "Unhook",
  },
  {
    desc: "Google Docs Offline",
  },
];

export const BrowserTab = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold py-8">Browser</h1>

        <div className="pb-5">
          I use <code>chromium</code> as my primary browser, and{" "}
          <code>firefox-developer-edition</code> as my secondary browser, along
          with following extensions:
        </div>
      </div>
      {BrowserTabData.map((data, i) => (
        <div key={i}>
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="dark:text-white">{i + 1}. </span>
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export const CodingTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Coding</h1>

      <div className="pb-5">
        I use Neovim most of the time, and VSCode with Vim Extension ({""}
        <a
          href="https://gist.github.com/vimfn/32e28c0d699a6685017a5e2ba606e1ab"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Settings
        </a>
        {""}) for web and some of my other projects.
      </div>

      <div>
        <span className="font-medium dark:text-white">Font: </span>
        <span className="text-zinc-600 dark:text-zinc-400">Jetbrains Mono</span>
      </div>
      <div>
        <span className="font-medium dark:text-white">Theme: </span>
        <span className="text-zinc-600 dark:text-zinc-400">Vitesse Theme</span>
      </div>
    </div>
  );
};

const InspirationsList = [
  {
    title: "leerob.io",
    link: "https://leerob.io",
  },
  {
    title: "zenorocha.com",
    link: "https://zenorocha.com/",
  },
  {
    title: "ped.ro",
    link: "https://ped.ro/",
  },
  {
    title: "delba.dev",
    link: "https://delba.dev/",
  },
  {
    title: "jahir.dev",
    link: "https://jahir.dev/",
  },
  {
    title: "marcbouchenoire.com",
    link: "https://marcbouchenoire.com/",
  },
  {
    title: "honghong.me",
    link: "https://honghong.me",
  },
  {
    title: "ui.shadcn.com",
    link: "https://ui.shadcn.com/",
  },
  {
    title: "anishde.dev",
    link: "https://anishde.dev/",
  },
  {
    title: "ui.aceternity.com",
    link: "https://ui.aceternity.com/",
  },
];

InspirationsList.sort((a, b) => {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
});

export const WebsiteTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pt-8">Website</h1>
      <h1 className="text-xl font-bold py-5">Tech Stack</h1>
      <p>
        This website is created with Next.js, Tailwind CSS, MDX, Umami, and
        PlanetScale. It's hosted on Vercel. If you're curious, feel free to
        explore the source code on{" "}
        <a
          href="https://github.com/vimfn/www"
          className="link"
          target="_blank"
        >
          GitHub
        </a>
        {""}.
      </p>
      <Colophon />
      <div>
        <h1 className="text-xl font-bold py-5">Inspirations</h1>
        <p>
          Thanks to these awesome websites for inspiring me to build this site,
          listed in alphabetical order.
        </p>
        <ul className="list-disc mx-4 mt-6">
          {InspirationsList.map(({ title, link }) => (
            <li key={link}>
              <a className="link" target="_blank" href={link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-xl font-bold py-5">Typography</h1>
      <p className="pb-5">
        For the website typography, I am using Inter for most of the content and
        Kaisei Tokumin for Open Graph Images and a few other elements. Both have
        some font features enabled to make them stand out from the default.
      </p>
      <Typography />
      <h1 className="text-xl font-bold py-5">Design & Colors</h1>
      <DesignAndColors />
      <h1 className="text-xl font-bold py-5">Logo</h1>
      My personal logo is designed by myself.
      <MyLogo />
    </div>
  );
};
