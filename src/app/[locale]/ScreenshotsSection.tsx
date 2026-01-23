"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ScreenshotsSection() {
  const t = useTranslations("home.screenshots");

  const screenshots = [
    { label: "Dashboard View", aspect: "16/10" },
    { label: "Alert Settings", aspect: "16/10" },
    { label: "Stock Details", aspect: "16/10" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="rounded-xl p-4 transition-colors bg-muted border border-border hover:border-primary/20">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                {/* Placeholder */}
                <div
                  className="rounded-lg flex items-center justify-center bg-card"
                  style={{ aspectRatio: screenshot.aspect }}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">{screenshot.label}</p>
                    <p className="text-xs mt-1 text-muted-foreground/70">Placeholder</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
