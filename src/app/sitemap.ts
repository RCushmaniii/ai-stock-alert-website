import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://stockalert.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];
  const pathnames = routing.pathnames;

  // Generate URLs for each route and locale
  for (const [internalPath, localizedPaths] of Object.entries(pathnames)) {
    const lastModified = new Date();

    for (const locale of routing.locales) {
      // Get the localized path for this locale
      const localizedPath =
        typeof localizedPaths === "string"
          ? localizedPaths
          : localizedPaths[locale as keyof typeof localizedPaths];

      const url = `${baseUrl}/${locale}${localizedPath === "/" ? "" : localizedPath}`;

      // Build alternates for hreflang
      const languages: Record<string, string> = {};
      for (const altLocale of routing.locales) {
        const altPath =
          typeof localizedPaths === "string"
            ? localizedPaths
            : localizedPaths[altLocale as keyof typeof localizedPaths];
        languages[altLocale] = `${baseUrl}/${altLocale}${altPath === "/" ? "" : altPath}`;
      }

      routes.push({
        url,
        lastModified,
        changeFrequency: internalPath === "/" ? "weekly" : "monthly",
        priority: internalPath === "/" ? 1 : 0.8,
        alternates: {
          languages,
        },
      });
    }
  }

  return routes;
}
