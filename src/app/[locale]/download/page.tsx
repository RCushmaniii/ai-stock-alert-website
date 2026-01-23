import { setRequestLocale, getTranslations } from "next-intl/server";
import { DownloadHero } from "./DownloadHero";
import { DownloadOptions } from "./DownloadOptions";
import { SystemRequirements } from "./SystemRequirements";
import { InstallationSteps } from "./InstallationSteps";
import { DownloadFAQ } from "./DownloadFAQ";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download.hero" });

  return {
    title: t("title") + " " + t("titleHighlight"),
    description: t("subtitle"),
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <DownloadHero />
      <DownloadOptions />
      <SystemRequirements />
      <InstallationSteps />
      <DownloadFAQ />
    </>
  );
}
