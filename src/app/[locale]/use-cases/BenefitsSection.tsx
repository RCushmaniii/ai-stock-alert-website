"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, Globe, Briefcase, Wallet, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function BenefitCard({ icon, title, items }: BenefitCardProps) {
  return (
    <Card variant="feature" className="h-full">
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
            <div className="text-primary">{icon}</div>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export function BenefitsSection() {
  const t = useTranslations("useCases.benefits");

  const benefits = [
    {
      key: "activeTraders",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      key: "internationalUsers",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      key: "busyProfessionals",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      key: "costConscious",
      icon: <Wallet className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container>
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Benefits by <span className="gradient-text">User Type</span>
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <StaggeredItem key={benefit.key}>
              <BenefitCard
                icon={benefit.icon}
                title={t(`${benefit.key}.title`)}
                items={t.raw(`${benefit.key}.items`) as string[]}
              />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
