"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full blur-[120px] bg-primary/10" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground">
            {t("subtitle")}
          </p>
          <Link href="/download">
            <Button size="lg" className="group">
              {t("button")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
