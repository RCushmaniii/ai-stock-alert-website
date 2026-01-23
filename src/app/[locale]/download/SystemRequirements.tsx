"use client";

import { useTranslations } from "next-intl";
import { Monitor, Cpu, HardDrive, Wifi, Settings } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

export function SystemRequirements() {
  const t = useTranslations("download.requirements");

  const requirements = [
    { icon: <Monitor className="w-5 h-5" />, text: t("os") },
    { icon: <Cpu className="w-5 h-5" />, text: t("ram") },
    { icon: <HardDrive className="w-5 h-5" />, text: t("storage") },
    { icon: <Wifi className="w-5 h-5" />, text: t("internet") },
    { icon: <Settings className="w-5 h-5" />, text: t("dotnet") },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container size="md">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card variant="glass" className="p-8">
            <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <StaggeredItem key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary">
                      {req.icon}
                    </div>
                    <span className="text-muted-foreground">{req.text}</span>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </Card>
        </AnimatedSection>
      </Container>
    </section>
  );
}
