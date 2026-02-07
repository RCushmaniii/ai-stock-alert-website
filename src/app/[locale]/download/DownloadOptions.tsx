"use client";

import { useTranslations } from "next-intl";
import { Download, Shield, FileCheck, Lock, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

export function DownloadOptions() {
  const t = useTranslations("download.options");
  const tSecurity = useTranslations("download.security");

  const securityFeatures = [
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: tSecurity("signed.title"),
      description: tSecurity("signed.description"),
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: tSecurity("scanned.title"),
      description: tSecurity("scanned.description"),
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: tSecurity("noDataCollection.title"),
      description: tSecurity("noDataCollection.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container size="md">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Download Card */}
          <StaggeredItem>
            <Card
              variant="glass"
              hover
              className="h-full flex flex-col p-8 border-2 border-primary"
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full w-fit bg-primary/10 text-primary">
                {t("exe.badge")}
              </span>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {t("exe.title")}
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {t("exe.description")}
              </p>
              <p className="text-sm mb-6 text-muted-foreground/70">
                {t("exe.size")}
              </p>
              <a
                href="https://github.com/RCushmaniii/ai-stock-alert-website/releases/download/v2.0.0/StockAlert-4.1.0-Setup.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="w-full">
                  <Download className="w-5 h-5 mr-2" />
                  {t("exe.button")}
                </Button>
              </a>
            </Card>
          </StaggeredItem>

          {/* Security & Trust Card */}
          <StaggeredItem>
            <Card
              variant="glass"
              hover
              className="h-full flex flex-col p-8"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-500/10 text-green-500">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {tSecurity("title")}
              </h3>
              <p className="mb-6 text-muted-foreground">
                {tSecurity("subtitle")}
              </p>

              <div className="space-y-4 flex-grow">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-green-500/10 text-green-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://www.virustotal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {tSecurity("viewReport")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
          </StaggeredItem>
        </StaggeredContainer>
      </Container>
    </section>
  );
}
