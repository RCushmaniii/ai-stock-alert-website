"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  // Use locale-specific video and poster
  const videoUrl = locale === "es"
    ? "/videos/es_ai_atockalert.mp4"
    : "/videos/en_ai_atockalert.mp4";

  const posterUrl = locale === "es"
    ? "/images/es_ai_atockalert_poster.jpg"
    : "/images/en_ai_atockalert_poster.jpg";

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-primary/20" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <AnimatedSection delay={0}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                {t("title")}{" "}
                <span className="gradient-text">{t("titleHighlight")}</span>{" "}
                {t("titleEnd")}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground">
                {t("subtitle")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/download">
                  <Button size="lg" className="w-full sm:w-auto group">
                    {t("cta")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" />
                    {t("ctaSecondary")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust badges */}
            <AnimatedSection delay={0.3}>
              <div className="mt-12 flex items-center gap-6 md:gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>No signup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Windows 10/11</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* App Video Demo */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="relative">
              <div className="relative rounded-2xl p-4 shadow-2xl bg-muted border border-border">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                {/* Video player */}
                <VideoPlayer
                  url={videoUrl}
                  poster={posterUrl}
                  priority
                  className="aspect-[16/10] rounded-lg overflow-hidden bg-card"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl bg-primary/30" />
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full blur-3xl bg-primary/20" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
