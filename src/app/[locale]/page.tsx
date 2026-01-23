import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingCards } from "@/components/sections/PricingCards";
import { CTASection } from "./CTASection";
import { ScreenshotsSection } from "./ScreenshotsSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <ScreenshotsSection />
      <PricingCards />
      <CTASection />
    </>
  );
}
