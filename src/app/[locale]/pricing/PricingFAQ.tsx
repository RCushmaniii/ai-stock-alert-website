"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/sections/FAQ";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function PricingFAQ() {
  const t = useTranslations("pricing.faq");

  const faqItems = [
    { question: t("q1.question"), answer: t("q1.answer") },
    { question: t("q2.question"), answer: t("q2.answer") },
    { question: t("q3.question"), answer: t("q3.answer") },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container size="md">
        <AnimatedSection>
          <FAQ items={faqItems} title={t("title")} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
