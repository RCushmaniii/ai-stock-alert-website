"use client";

import { useTranslations } from "next-intl";
import { Bell, Settings, BarChart3, Monitor, TrendingUp, Percent, Volume2, LineChart, Briefcase, List, BellRing, Wifi } from "lucide-react";
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
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

export function FeaturesSection() {
  const t = useTranslations("home.features");

  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: t("realTimeAlerts.title"),
      description: t("realTimeAlerts.description"),
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: t("customTriggers.title"),
      description: t("customTriggers.description"),
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("multipleStocks.title"),
      description: t("multipleStocks.description"),
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t("desktopNotifications.title"),
      description: t("desktopNotifications.description"),
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
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("priceAlerts.title"),
      description: t("priceAlerts.description"),
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: t("percentageAlerts.title"),
      description: t("percentageAlerts.description"),
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: t("volumeAlerts.title"),
      description: t("volumeAlerts.description"),
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: t("technicalIndicators.title"),
      description: t("technicalIndicators.description"),
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: t("portfolioTracking.title"),
      description: t("portfolioTracking.description"),
    },
    {
      icon: <List className="w-6 h-6" />,
      title: t("watchlists.title"),
      description: t("watchlists.description"),
    },
    {
      icon: <BellRing className="w-6 h-6" />,
      title: t("notifications.title"),
      description: t("notifications.description"),
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: t("marketData.title"),
      description: t("marketData.description"),
    },
  ];

  return (
    <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <StaggeredItem key={index}>
          <FeatureCard {...feature} />
        </StaggeredItem>
      ))}
    </StaggeredContainer>
  );
}
