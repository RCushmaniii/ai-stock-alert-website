"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ScreenshotsSection() {
  const t = useTranslations("home.screenshots");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxLabel, setLightboxLabel] = useState<string>("");

  const screenshots = [
    { label: "Dashboard View", aspect: "18/10", image: "/images/ticker_tab.jpg" },
    { label: "Alert Settings", aspect: "18/10", image: "/images/whatsapp_alert.jpg" },
    { label: "Stock Details", aspect: "18/10", image: "/images/settings_alert.jpg" },
  ];

  const openLightbox = (image: string, label: string) => {
    setLightboxImage(image);
    setLightboxLabel(label);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxLabel("");
  };

  return (
    <>
      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <Container size="full" className="max-w-[1440px]">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {screenshots.map((screenshot, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="rounded-xl p-4 transition-all bg-muted border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer group"
                  onClick={() => screenshot.image && openLightbox(screenshot.image, screenshot.label)}
                >
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  {/* Screenshot */}
                  <div
                    className="rounded-lg overflow-hidden flex items-center justify-center bg-card relative"
                    style={{ aspectRatio: screenshot.aspect }}
                  >
                    {screenshot.image ? (
                      <>
                        <Image
                          src={screenshot.image}
                          alt={screenshot.label}
                          width={640}
                          height={400}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded-full">
                            Click to enlarge
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{screenshot.label}</p>
                        <p className="text-xs mt-1 text-muted-foreground/70">Placeholder</p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image label */}
          <div className="absolute top-4 left-4 text-white text-lg font-medium">
            {lightboxLabel}
          </div>

          {/* Image container */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt={lightboxLabel}
              width={1920}
              height={1200}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
