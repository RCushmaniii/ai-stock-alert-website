"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title }: FAQProps) {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
          {title}
        </h2>
      )}
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl border border-border bg-card px-5 data-[state=open]:bg-muted"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-0">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
