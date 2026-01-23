"use client";

import { useTranslations } from "next-intl";
import { Download, MousePointer, Rocket, Settings } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

export function InstallationSteps() {
  const t = useTranslations("download.installation");

  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t("step3.title"),
      description: t("step3.description"),
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: t("step4.title"),
      description: t("step4.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container size="md">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="space-y-6">
          {steps.map((step, index) => (
            <StaggeredItem key={index}>
              <div className="flex gap-6 items-start">
                {/* Step number and line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold bg-primary/10 border-2 border-primary text-primary">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 mt-2 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="pl-9 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
