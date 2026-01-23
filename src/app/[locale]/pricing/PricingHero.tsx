"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function PricingHero() {
  const t = useTranslations("pricing.hero");

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none bg-primary/10" />

      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
