"use client";

import { useTranslations } from "next-intl";
import { Bell, MessageCircle, Mail, Activity, Building2, Newspaper, Clock, Globe, Monitor } from "lucide-react";
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
      title: t("multiChannelAlerts.title"),
      description: t("multiChannelAlerts.description"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("backgroundMonitoring.title"),
      description: t("backgroundMonitoring.description"),
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("companyIntelligence.title"),
      description: t("companyIntelligence.description"),
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: t("liveNewsFeed.title"),
      description: t("liveNewsFeed.description"),
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
      icon: <Monitor className="w-6 h-6" />,
      title: t("windowsAlerts.title"),
      description: t("windowsAlerts.description"),
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t("whatsappAlerts.title"),
      description: t("whatsappAlerts.description"),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("emailAlerts.title"),
      description: t("emailAlerts.description"),
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: t("realTimeMonitoring.title"),
      description: t("realTimeMonitoring.description"),
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("companyProfiles.title"),
      description: t("companyProfiles.description"),
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: t("newsFeed.title"),
      description: t("newsFeed.description"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("backgroundService.title"),
      description: t("backgroundService.description"),
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: t("marketHours.title"),
      description: t("marketHours.description"),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("bilingual.title"),
      description: t("bilingual.description"),
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
