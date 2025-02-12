import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";
import { faqs } from "./faqs";

export const metadata: Metadata = {
  title: "vimfn // faqs",
  description:
    "Redirected here? It means you have asked me something that has already been asked many times. Please don't think I am rude.",
};

const pinsPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">FAQs</h1>
        <p>
          I've gathered some commonly asked questions here to save time for both
          of us. If you have any other inquiries, feel free to reach out to me
          at{" "}
          <a
            href="http://x.com/vimfnx"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            x.com
          </a>
          {""}. Thanks!
        </p>
      </div>

      {faqs.map((faq, i) => (
        <Accordion type="single" collapsible className="w-full" key={i}>
          <AccordionItem value={"item-" + i}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
};

export default pinsPage;
