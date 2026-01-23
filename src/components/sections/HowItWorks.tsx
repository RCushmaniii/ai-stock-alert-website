"use client";

import { useTranslations } from "next-intl";
import { Download, Search, Bell } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      number: "01",
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: <Search className="w-8 h-8" />,
      number: "02",
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: <Bell className="w-8 h-8" />,
      number: "03",
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container>
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StaggeredItem key={index}>
              <div className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}

                {/* Step circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-muted border-2 border-primary">
                  <div className="text-primary">{step.icon}</div>
                </div>

                {/* Step number */}
                <span className="inline-block px-3 py-1 mb-4 text-sm font-mono rounded-full bg-primary/10 text-primary">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="leading-relaxed max-w-xs mx-auto text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
