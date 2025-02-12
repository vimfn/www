import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    LASTFM_API_TOKEN: z.string().length(32),
    GITHUB_TOKEN: z.string().startsWith("ghp_"),
    WAKATIME_API_KEY: z.string().min(1),
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1),
    DISCORD_WEBHOOK_URL: z.string().min(30),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    NEXT_PUBLIC_UMAMI_URL: z.string().url(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
});
