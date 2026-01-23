"use client";

import { useTranslations } from "next-intl";
import { Check, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import type { Pathnames } from "@/i18n/routing";

export function PricingPlans() {
  const t = useTranslations("pricing.plans");

  const plans: Array<{
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    href: Pathnames;
    popular?: boolean;
    popularLabel?: string;
  }> = [
    {
      name: t("free.name"),
      price: t("free.price"),
      period: t("free.period"),
      description: t("free.description"),
      features: t.raw("free.features") as string[],
      cta: t("free.cta"),
      href: "/download",
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
      href: "/download",
    },
    {
      name: t("pro.name"),
      price: t("pro.price"),
      period: t("pro.period"),
      description: t("pro.description"),
      features: t.raw("pro.features") as string[],
      cta: t("pro.cta"),
      href: "/download",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        <StaggeredContainer className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <StaggeredItem key={index}>
              <Card
                variant="pricing"
                hover
                className={cn(
                  "relative h-full flex flex-col",
                  plan.popular && "border-2 border-primary shadow-lg shadow-primary/20"
                )}
              >
                {plan.popular && plan.popularLabel && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                      <Sparkles className="w-4 h-4" />
                      {plan.popularLabel}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="ml-2 text-muted-foreground">/ {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-primary/10">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="mt-auto">
                  <Button
                    variant={plan.popular ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
