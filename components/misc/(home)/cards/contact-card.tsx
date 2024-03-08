import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, SendHorizontal } from "lucide-react";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL as string;
import { headers } from "next/headers";

const IP = () => {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
};

export const submitForm = async (e: FormData) => {
  "use server";

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: IP() + "\n" + e.get("email") + "\n" + e.get("message"),
    }),
  });
};


const ContactCard = () => {
  return (
    <div className=" w-full h-64 rounded-lg bg-[#f7f2f2] dark:bg-[#191919] px-2">
      <p className=" ml-3 py-1 font-semibold text-md pt-3">Drop a message</p>
      <div className="mt-1">
        <form action={submitForm} className="px-2">
          <Input type="email" placeholder="arnvgh@gmail.com" name="email" />
          <div className="flex mt-2 gap-3">
            <Textarea
              placeholder="Hey, wassup ?"
              className="h-28"
              name="message"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-24 mt-2 h-8">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
