"use server";

import { env } from "@/app/env";
import { headers } from "next/headers";

const WEBHOOK_URL = env.DISCORD_WEBHOOK_URL as string;

const Identifier = () => {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
};

export const submitForm = async (email: string, message: string) => {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: Identifier() + "\n" + email + "\n" + message,
    }),
  });
};
