// https://tailwindcss.com/docs/configuration
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

let themeColors = {
  base: withOpacityValue("--color-base"),
  surface: withOpacityValue("--color-surface"),
  overlay: withOpacityValue("--color-overlay"),
  muted: withOpacityValue("--color-muted"),
  subtle: withOpacityValue("--color-subtle"),
  text: withOpacityValue("--color-text"),
  love: withOpacityValue("--color-love"),
  gold: withOpacityValue("--color-gold"),
  rose: withOpacityValue("--color-rose"),
  pine: withOpacityValue("--color-pine"),
  foam: withOpacityValue("--color-foam"),
  iris: withOpacityValue("--color-iris"),
  "hightlight-low": withOpacityValue("--color-hightlight-low"),
  "hightlight-med": withOpacityValue("--color-hightlight-med"),
  "hightlight-high": withOpacityValue("--color-hightlight-high"),
};

module.exports = {
  content: [
    "./data/**/*.mdx",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeColors,
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text"),
            "--tw-prose-headings": theme("colors.rose"),
            "--tw-prose-links": theme("colors.iris"),
            "--tw-prose-bold": theme("colors.rose"),
            "--tw-prose-counters": theme("colors.rose"),
            "--tw-prose-bullets": theme("colors.rose"),
            "--tw-prose-hr": theme("colors.gold"),
            "--tw-prose-quotes": theme("colors.foam"),
            "--tw-prose-pre-bg": "rgb(38 35 58)",
            "--tw-prose-quote-borders": theme("colors.pine"),
            "--tw-prose-captions": theme("colors.subtle"),
            "--tw-prose-th-borders": theme("colors.muted"),
            "--tw-prose-td-borders": theme("colors.muted"),
            h1: {
              marginTop: "1.3em",
            },
            img: {
              margin: "auto",
              borderRadius: theme("borderRadius.lg"),
            },
            code: {
              color: theme("colors.pine"),
              background: "rgb(38 35 58)",
              padding: "0.25rem 0.4rem",
              borderRadius: "0.25rem",
              fontWeight: "600",
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
