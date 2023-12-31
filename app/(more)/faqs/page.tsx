import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "./faqs";

const pinsPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16 dark:text-zinc-200">
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">FAQs</h1>
        I've gathered some commonly asked questions here to save time for both
        of us. If you have any other inquiries, feel free to reach out to me at
        @arnvgh. Thanks!
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
    </div>
  );
};

export default pinsPage;
