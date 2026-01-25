import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { FeaturesGrid } from "@/components/sections/Features";
import { FeaturesHero } from "./FeaturesHero";
import { ComparisonTable } from "./ComparisonTable";
import { FeaturesCTA } from "./FeaturesCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "features.hero" });

  return {
    title: t("title") + " " + t("titleHighlight"),
    description: t("subtitle"),
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FeaturesHero />
      <section className="py-20 md:py-32 bg-card">
        <Container>
          <FeaturesGrid />
        </Container>
      </section>
      <ComparisonTable />
      <FeaturesCTA />
    </>
  );
}
