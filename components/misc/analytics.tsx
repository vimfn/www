"use client";

import { env } from "@/app/env";
import Script from "next/script";

export const Analytics = () => {
  return (
    <Script defer src={`${env.NEXT_PUBLIC_UMAMI_URL}/script.js`} data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} />);
};
