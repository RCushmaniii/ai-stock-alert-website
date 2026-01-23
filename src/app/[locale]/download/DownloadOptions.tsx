"use client";

import { useTranslations } from "next-intl";
import { Download, Package, FolderArchive } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export function DownloadOptions() {
  const t = useTranslations("download.options");

  const options = [
    {
      icon: <Package className="w-8 h-8" />,
      title: t("msi.title"),
      description: t("msi.description"),
      size: t("msi.size"),
      button: t("msi.button"),
      href: "https://github.com/stockalert/releases/download/latest/StockAlert.msi",
      recommended: true,
    },
    {
      icon: <FolderArchive className="w-8 h-8" />,
      title: t("zip.title"),
      description: t("zip.description"),
      size: t("zip.size"),
      button: t("zip.button"),
      href: "https://github.com/stockalert/releases/download/latest/StockAlert.zip",
      recommended: false,
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
          {options.map((option, index) => (
            <StaggeredItem key={index}>
              <Card
                variant="glass"
                hover
                className={cn(
                  "h-full flex flex-col p-8",
                  option.recommended && "border-2 border-primary"
                )}
              >
                {option.recommended && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full w-fit bg-primary/10 text-primary">
                    Recommended
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {option.title}
                </h3>
                <p className="mb-4 flex-grow text-muted-foreground">
                  {option.description}
                </p>
                <p className="text-sm mb-6 text-muted-foreground/70">
                  File size: {option.size}
                </p>
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={option.recommended ? "primary" : "secondary"}
                    className="w-full"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {option.button}
                  </Button>
                </a>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
