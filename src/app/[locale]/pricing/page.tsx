import { setRequestLocale, getTranslations } from "next-intl/server";
import { PricingHero } from "./PricingHero";
import { PricingPlans } from "./PricingPlans";
import { PricingComparison } from "./PricingComparison";
import { MoneyBackGuarantee } from "./MoneyBackGuarantee";
import { PricingFAQ } from "./PricingFAQ";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing.hero" });

  return {
    title: t("title") + " " + t("titleHighlight"),
    description: t("subtitle"),
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <MoneyBackGuarantee />
      <PricingFAQ />
    </>
  );
}
