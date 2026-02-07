"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function TechnicalSpecs() {
  const t = useTranslations("download.specs");

  const specs = [
    { label: t("platform"), value: t("platformValue") },
    { label: t("language"), value: t("languageValue") },
    { label: t("stockData"), value: t("stockDataValue") },
    { label: t("exchangeRates"), value: t("exchangeRatesValue") },
    { label: t("whatsapp"), value: t("whatsappValue") },
    { label: t("maxTickers"), value: t("maxTickersValue") },
    { label: t("minInterval"), value: t("minIntervalValue") },
    { label: t("languages"), value: t("languagesValue") },
    { label: t("currencies"), value: t("currenciesValue") },
    { label: t("themes"), value: t("themesValue") },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <Container size="md">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {specs.map((spec, index) => (
                  <tr
                    key={index}
                    className="transition-colors border-b border-border hover:bg-muted/50"
                  >
                    <td className="py-4 px-4 font-medium text-foreground w-1/2">
                      {spec.label}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {spec.value}
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
