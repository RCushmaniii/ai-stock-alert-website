"use client";

import { useTranslations } from "next-intl";
import { Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ResponseTimes() {
  const t = useTranslations("contact.response");

  const times = [
    t("general"),
    t("technical"),
    t("billing"),
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container size="md">
        <AnimatedSection>
          <Card variant="glass" className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{t("title")}</h2>
            </div>
            <ul className="space-y-3">
              {times.map((time, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {time}
                </li>
              ))}
            </ul>
          </Card>
        </AnimatedSection>
      </Container>
    </section>
  );
}
