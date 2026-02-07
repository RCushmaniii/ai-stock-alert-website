"use client";

import { useTranslations } from "next-intl";
import { Mail, Twitter, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

export function ContactOptions() {
  const t = useTranslations("contact.options");

  const options = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: t("email.title"),
      description: t("email.description"),
      subtitle: t("email.subtitle"),
      href: "mailto:support@aistockalert.app",
    },
    {
      icon: <Twitter className="w-6 h-6 text-primary" />,
      title: t("twitter.title"),
      description: t("twitter.description"),
      subtitle: t("twitter.subtitle"),
      href: "https://twitter.com/StockAlertApp",
    },
    {
      icon: <Github className="w-6 h-6 text-primary" />,
      title: t("github.title"),
      description: t("github.description"),
      subtitle: t("github.subtitle"),
      href: "https://github.com/stockalert",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        <StaggeredContainer className="grid md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <StaggeredItem key={index}>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card variant="glass" hover className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {option.title}
                  </h3>
                  <p className="font-medium mb-2 text-primary">
                    {option.description}
                  </p>
                  <p className="text-sm text-muted-foreground">{option.subtitle}</p>
                </Card>
              </a>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
