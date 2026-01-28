"use client";

import { useTranslations } from "next-intl";
import { Bell, MessageCircle, Globe, Key, Zap, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card variant="feature" hover className="h-full">
      <div className="flex flex-col h-full p-2">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-primary/10">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

function LargeFeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card variant="feature" hover className="h-full">
      <div className="flex flex-col h-full p-3">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 bg-primary/10">
          <div className="text-primary [&>svg]:w-8 [&>svg]:h-8">{icon}</div>
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

export function FeaturesSection() {
  const t = useTranslations("home.features");

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t("whatsappFirst.title"),
      description: t("whatsappFirst.description"),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("bilingual.title"),
      description: t("bilingual.description"),
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: t("byoKey.title"),
      description: t("byoKey.description"),
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: t("newsFeed.title"),
      description: t("newsFeed.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <StaggeredItem key={index}>
              <FeatureCard {...feature} />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}

export function FeaturesGrid() {
  const t = useTranslations("features.grid");

  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: t("priceAlerts.title"),
      description: t("priceAlerts.description"),
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t("whatsappAlerts.title"),
      description: t("whatsappAlerts.description"),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("bilingual.title"),
      description: t("bilingual.description"),
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: t("byoKey.title"),
      description: t("byoKey.description"),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("lightweight.title"),
      description: t("lightweight.description"),
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: t("newsFeed.title"),
      description: t("newsFeed.description"),
    },
  ];

  return (
    <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <StaggeredItem key={index}>
          <LargeFeatureCard {...feature} />
        </StaggeredItem>
      ))}
    </StaggeredContainer>
  );
}
