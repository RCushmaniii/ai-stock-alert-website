"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className="flex items-center gap-1 rounded-lg p-1"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <button
        onClick={() => switchLocale("en")}
        className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200"
        style={{
          backgroundColor: locale === "en" ? '#F97316' : 'transparent',
          color: locale === "en" ? '#ffffff' : '#a3a3a3',
        }}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("es")}
        className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200"
        style={{
          backgroundColor: locale === "es" ? '#F97316' : 'transparent',
          color: locale === "es" ? '#ffffff' : '#a3a3a3',
        }}
        aria-label="Cambiar a Espanol"
      >
        ES
      </button>
    </div>
  );
}
