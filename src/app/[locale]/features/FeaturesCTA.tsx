"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function FeaturesCTA() {
  const t = useTranslations("features.cta");

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            {t("subtitle")}
          </p>
          <Link href="/download">
            <Button size="lg">
              <Download className="w-5 h-5 mr-2" />
              {t("button")}
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
