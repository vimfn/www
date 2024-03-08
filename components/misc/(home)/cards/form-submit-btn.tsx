"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FormSubmitBtn = () => {
  return (
    <div>
      <Button
        type="submit"
        className="w-24 mt-2 h-8"
        onClick={() =>
          toast("Message sent!", {
            description: "Thanks, I'll get back to you ASAP.",
            action: {
              label: "Undo",
              //TODO: implement undo function.
              onClick: () => console.log("implement undo function"),
            },
          })
        }
      >
        Send
      </Button>
    </div>
  );
};

export default FormSubmitBtn;
