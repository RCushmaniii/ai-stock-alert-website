"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function MoneyBackGuarantee() {
  const t = useTranslations("pricing.guarantee");

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container size="md">
        <AnimatedSection>
          <Card variant="glass" className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-500/10">
              <ShieldCheck className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t("title")}
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
              {t("description")}
            </p>
          </Card>
        </AnimatedSection>
      </Container>
    </section>
  );
}
