import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { headers } from "next/headers";
import { Textarea } from "@/components/ui/textarea";
import { Send, SendHorizontal } from "lucide-react";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL as string;

const IP = () => {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
};

const submitForm = async (e: FormData) => {
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
    <div className=" mt-3 w-full h-[7.5rem] rounded-lg bg-[#f7f2f2] dark:bg-[#191919] dark:hover:bg-white/5">
      <p className=" ml-3 py-1 font-semibold text-[14px]">Leave a message</p>
      <div className="">
        <form action={submitForm} className="px-2">
          <Input
            type="email"
            placeholder="arnvgh@gmail.com"
            name="email"
            className="h-9"
          />
          <div className="flex mt-2 h-9 gap-3">
            <Textarea placeholder="Hey, wassup ?" name="message" />
            <Button type="submit" className="w-12 h-[33px] flex">
              <SendHorizontal size={18} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
