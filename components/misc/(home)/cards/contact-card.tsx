"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, SendHorizontal } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { submitForm } from "@/actions/submit-form";

const ContactCard = () => {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className=" mt-3 w-full h-[7.5rem] rounded-lg dark:bg-[#191919]">
        <p className=" ml-3 py-1 font-semibold text-[14px]">Leave a message</p>
        <div className="mt-1">
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
    </BackgroundGradient>
  );
};

export default ContactCard;
