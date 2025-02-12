// TODO: Add rate limiting and handle errors.
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { submitForm } from "@/lib/submit-form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .max(64),
  message: z.string().max(1500, {
    message: "Max 1500 characaters, if you need more please send me an email.",
  }),
});

const ContactCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // https://react.dev/reference/react-dom/components/input#im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled
    // the library should handle this by themselves bruh
    // i really hate how react got around being huge piece of mess, needs fix.
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast("Message sent!", {
      description: "Thanks, I'll get back to you ASAP.",
      action: {
        label: "Undo",
        // TODO: Undo Functionality + x3 for :)
        onClick: () => console.log("implement undo function"),
      },
    });
    const { email, message } = values;
    submitForm(email, message);
    form.reset(
      {
        email: "",
        message: "",
      },
      {
        keepValues: false,
      },
    );
  }

  return (
    <div className="mt-3 md:mt-0 w-full h-64 rounded-lg bg-[#f7f2f2] dark:bg-[#191919] px-2">
      <Form {...form}>
        <p className="px-2 py-1 font-semibold text-md pt-2">Drop a message</p>
        <div className="mt-1">
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="hi@vimfn.in" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2 flex gap-3 w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="your message here"
                        className="h-28 w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex justify-end">
              <Button type="submit" className="w-36 h-8">
                Send
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ContactCard;
