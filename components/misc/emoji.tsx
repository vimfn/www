"use client";

import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

const EMOJI = [
  "🤹",
  "👀",
  "🇮🇳",
  "⛺",
  "✨",
  "🌚",
  "🌱",
  "🌸",
  "🌹",
  "🍂",
  "🍬",
  "🍭",
  "🎀",
  "🎈",
  "🎉",
  "🎨",
  "🏝️",
  "👋",
  "👒",
  "📚",
  "🔮",
  "🗿",
  "🥖",
  "🦋",
  "🧩",
  "🧶",
  "🪀",
  "🪁",
  "🪐",
];

function getRandomEmoji(exclude?: string) {
  const emoji = exclude ? EMOJI.filter((emoji) => emoji !== exclude) : EMOJI;

  return emoji[Math.trunc(emoji.length * Math.random())];
}

export function Emoji(props: ComponentProps<"span">) {
  const [emoji, setEmoji] = useState(EMOJI[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEmoji((emoji) => getRandomEmoji(emoji));
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return <span {...props}>{emoji}</span>;
}
