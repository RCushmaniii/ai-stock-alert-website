"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <section className="py-20 md:py-32 lg:py-40">
      <Container size="sm">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href={`/${locale}`}>
                <Home className="w-4 h-4 mr-2" />
                {t("homeButton")}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/${locale}/contact`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("contactButton")}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
