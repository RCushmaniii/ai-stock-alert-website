"use client";

import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export function PricingComparison() {
  const t = useTranslations("pricing.comparison");
  const tPlans = useTranslations("pricing.plans");

  const features = [
    "stockAlerts",
    "priceAlerts",
    "percentageAlerts",
    "volumeAlerts",
    "technicalIndicators",
    "watchlists",
    "desktopNotifications",
    "emailNotifications",
    "webhooks",
    "apiAccess",
    "support",
  ] as const;

  const plans = ["free", "premium", "pro"] as const;

  const renderValue = (value: string) => {
    if (value === "Yes" || value === "Sí") {
      return <Check className="w-5 h-5 mx-auto text-green-500" />;
    }
    if (value === "No") {
      return <X className="w-5 h-5 mx-auto text-red-500" />;
    }
    return <span className="text-muted-foreground">{value}</span>;
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                    {t("feature")}
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan}
                      className={cn(
                        "text-center py-4 px-4 font-semibold",
                        plan === "premium" ? "text-primary" : "text-foreground"
                      )}
                    >
                      {tPlans(`${plan}.name`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr
                    key={feature}
                    className="transition-colors border-b border-muted hover:bg-muted/50"
                  >
                    <td className="py-4 px-4 text-foreground">
                      {t(`features.${feature}`)}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan} className="py-4 px-4 text-center">
                        {renderValue(t(`values.${plan}.${feature}`))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
