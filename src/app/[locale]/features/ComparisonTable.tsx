"use client";

import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ComparisonTable() {
  const t = useTranslations("features.comparison");

  const features = [
    "multiChannelAlerts",
    "whatsappIntegration",
    "backgroundMonitoring",
    "companyIntelligence",
    "liveNewsFeed",
    "noSubscription",
  ] as const;

  const stockAlertValues: Record<string, boolean> = {
    multiChannelAlerts: true,
    whatsappIntegration: true,
    backgroundMonitoring: true,
    companyIntelligence: true,
    liveNewsFeed: true,
    noSubscription: true,
  };

  const othersValues: Record<string, boolean> = {
    multiChannelAlerts: false,
    whatsappIntegration: false,
    backgroundMonitoring: false,
    companyIntelligence: false,
    liveNewsFeed: false,
    noSubscription: false,
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container size="md">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">
                    {t("feature")}
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">
                    {t("stockAlert")}
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-muted-foreground">
                    {t("others")}
                  </th>
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
                    <td className="py-4 px-4 text-center">
                      {stockAlertValues[feature] ? (
                        <Check className="w-5 h-5 mx-auto text-green-500" />
                      ) : (
                        <X className="w-5 h-5 mx-auto text-red-500" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {othersValues[feature] ? (
                        <Check className="w-5 h-5 mx-auto text-green-500" />
                      ) : (
                        <X className="w-5 h-5 mx-auto text-red-500" />
                      )}
                    </td>
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
