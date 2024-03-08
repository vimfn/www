"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, SendHorizontal } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { submitForm } from "@/actions/submit-form";

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
