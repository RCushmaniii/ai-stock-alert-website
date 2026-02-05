import { setRequestLocale, getTranslations } from "next-intl/server";
import { ContactHero } from "./ContactHero";
import { ContactOptions } from "./ContactOptions";
import { ContactFormSection } from "./ContactFormSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.hero" });

  return {
    title: t("title") + " " + t("titleHighlight"),
    description: t("subtitle"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactFormSection />
    </>
  );
}
