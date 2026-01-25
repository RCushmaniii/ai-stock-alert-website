"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <Container size="md">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              {t("title")}
            </h1>
            <p className="text-sm mb-8 text-muted-foreground">
              {t("lastUpdated")}: January 23, 2025
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mb-8 p-4 rounded-lg border-2 border-primary bg-primary/10">
              <h2 className="text-lg font-semibold mb-2 text-primary">{t("demoNotice.title")}</h2>
              <p className="text-muted-foreground">{t("demoNotice.content")}</p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.acceptance.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.acceptance.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.license.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.license.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.restrictions.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t("sections.restrictions.content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t("sections.restrictions.items.reverse")}</li>
                    <li>{t("sections.restrictions.items.distribute")}</li>
                    <li>{t("sections.restrictions.items.commercial")}</li>
                    <li>{t("sections.restrictions.items.remove")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.disclaimer.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.disclaimer.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.limitation.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.limitation.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.thirdParty.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.thirdParty.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.termination.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.termination.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.changes.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.changes.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.contact.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("sections.contact.content")}{" "}
                    <a href="mailto:legal@stockalert.app" className="text-primary hover:underline">
                      legal@stockalert.app
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
