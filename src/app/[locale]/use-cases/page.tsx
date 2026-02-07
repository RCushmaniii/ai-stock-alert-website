import { setRequestLocale, getTranslations } from "next-intl/server";
import { UseCasesHero } from "./UseCasesHero";
import { UseCasesGrid } from "./UseCasesGrid";
import { BenefitsSection } from "./BenefitsSection";
import { UseCasesCTA } from "./UseCasesCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "useCases.hero" });

  return {
    title: t("title") + " " + t("titleHighlight"),
    description: t("subtitle"),
  };
}

export default async function UseCasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <UseCasesHero />
      <UseCasesGrid />
      <BenefitsSection />
      <UseCasesCTA />
    </>
  );
}
