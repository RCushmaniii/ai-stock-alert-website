"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Key, Shield, HelpCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SetupPage() {
  const t = useTranslations("setup");

  const steps = [
    { key: "step1" },
    { key: "step2" },
    { key: "step3" },
    { key: "step4" },
    { key: "step5" },
    { key: "step6" },
  ];

  const troubleshootingItems = [
    { key: "invalidKey", icon: <AlertTriangle className="w-5 h-5 text-yellow-500" /> },
    { key: "rateLimit", icon: <AlertTriangle className="w-5 h-5 text-yellow-500" /> },
    { key: "noData", icon: <AlertTriangle className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-card to-background">
        <Container size="md">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Key className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {t("hero.title")}{" "}
              <span className="gradient-text">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* What Is / Why Need / Is Safe Section */}
      <section className="py-16 md:py-24 bg-background">
        <Container size="md">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <AnimatedSection delay={0.1}>
              <Card variant="feature" className="h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t("whatIs.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("whatIs.description")}
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card variant="feature" className="h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                    <Key className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t("whyNeed.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("whyNeed.description")}
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card variant="feature" className="h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-green-500/10">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {t("isSafe.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("isSafe.description")}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <Container size="md">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("steps.title")}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <AnimatedSection key={step.key} delay={0.1 * index}>
                <div className="flex gap-4 p-6 rounded-xl bg-background border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-16 md:py-24 bg-background">
        <Container size="md">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("troubleshooting.title")}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {troubleshootingItems.map((item, index) => (
              <AnimatedSection key={item.key} delay={0.1 * index}>
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      {t(`troubleshooting.${item.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`troubleshooting.${item.key}.description`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Limits Note Section */}
      <section className="py-16 md:py-24 bg-card">
        <Container size="sm">
          <AnimatedSection>
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {t("limits.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("limits.description")}
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
