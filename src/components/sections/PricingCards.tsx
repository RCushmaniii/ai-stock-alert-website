"use client";

import { useTranslations } from "next-intl";
import { Check, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  popularLabel?: string;
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
  popularLabel,
}: PricingCardProps) {
  return (
    <Card
      variant="pricing"
      hover
      className={cn(
        "relative h-full flex flex-col",
        popular && "border-2 border-primary shadow-lg shadow-primary/20"
      )}
    >
      {popular && popularLabel && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
            <Sparkles className="w-4 h-4" />
            {popularLabel}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        <span className="ml-2 text-muted-foreground">/ {period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-primary/10">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/download" className="mt-auto">
        <Button
          variant={popular ? "primary" : "secondary"}
          className="w-full"
        >
          {cta}
        </Button>
      </Link>
    </Card>
  );
}

export function PricingCards({ showTitle = true }: { showTitle?: boolean }) {
  const t = useTranslations("pricing.plans");
  const tSection = useTranslations("home.pricing");

  const plans = [
    {
      name: t("free.name"),
      price: t("free.price"),
      period: t("free.period"),
      description: t("free.description"),
      features: t.raw("free.features") as string[],
      cta: t("free.cta"),
    },
    {
      name: t("premium.name"),
      price: t("premium.price"),
      period: t("premium.period"),
      description: t("premium.description"),
      features: t.raw("premium.features") as string[],
      cta: t("premium.cta"),
      popular: true,
      popularLabel: t("premium.popular"),
    },
    {
      name: t("pro.name"),
      price: t("pro.price"),
      period: t("pro.period"),
      description: t("pro.description"),
      features: t.raw("pro.features") as string[],
      cta: t("pro.cta"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        {showTitle && (
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {tSection("title")} <span className="gradient-text">{tSection("titleHighlight")}</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              {tSection("subtitle")}
            </p>
          </AnimatedSection>
        )}

        <StaggeredContainer className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <StaggeredItem key={index}>
              <PricingCard {...plan} />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
