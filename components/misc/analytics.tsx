import Script from "next/script";
import React from "react";
import { env } from "@/app/env";

export const Analytics = () => {
  return (
    <>
      {env.NODE_ENV === "production" && (
        <Script
          async
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={`${env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
        />
      )}
    </>
  );
};
