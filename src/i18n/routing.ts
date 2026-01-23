import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/features": {
      en: "/features",
      es: "/caracteristicas",
    },
    "/download": {
      en: "/download",
      es: "/descargar",
    },
    "/pricing": {
      en: "/pricing",
      es: "/precios",
    },
    "/contact": {
      en: "/contact",
      es: "/contacto",
    },
    "/terms": {
      en: "/terms",
      es: "/terminos",
    },
    "/privacy": {
      en: "/privacy",
      es: "/privacidad",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
