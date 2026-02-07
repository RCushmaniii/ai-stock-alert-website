"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

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
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.overview.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.overview.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.collection.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t("sections.collection.content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t("sections.collection.items.usage")}</li>
                    <li>{t("sections.collection.items.device")}</li>
                    <li>{t("sections.collection.items.preferences")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.notCollected.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t("sections.notCollected.content")}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t("sections.notCollected.items.personal")}</li>
                    <li>{t("sections.notCollected.items.financial")}</li>
                    <li>{t("sections.notCollected.items.stocks")}</li>
                    <li>{t("sections.notCollected.items.alerts")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.localStorage.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.localStorage.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.thirdParty.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.thirdParty.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.security.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.security.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.children.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.children.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.changes.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t("sections.changes.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">{t("sections.contact.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("sections.contact.content")}{" "}
                    <a href="mailto:privacy@aistockalert.app" className="text-primary hover:underline">
                      privacy@aistockalert.app
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
