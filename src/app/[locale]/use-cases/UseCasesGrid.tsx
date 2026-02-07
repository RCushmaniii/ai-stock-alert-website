"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, BarChart2, Globe, Briefcase, LineChart, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { StaggeredContainer, StaggeredItem } from "@/components/shared/AnimatedSection";

interface UseCaseCardProps {
  icon: React.ReactNode;
  persona: string;
  quote: string;
  solution: string;
}

function UseCaseCard({ icon, persona, quote, solution }: UseCaseCardProps) {
  return (
    <Card variant="feature" hover className="h-full">
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
            <div className="text-primary">{icon}</div>
          </div>
          <h3 className="text-xl font-semibold text-foreground">{persona}</h3>
        </div>
        <blockquote className="italic text-muted-foreground mb-4 border-l-2 border-primary/30 pl-4">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-auto">
          <p className="text-sm text-foreground/80">{solution}</p>
        </div>
      </div>
    </Card>
  );
}

export function UseCasesGrid() {
  const t = useTranslations("useCases.cases");

  const useCases = [
    {
      key: "dayTrader",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      key: "swingTrader",
      icon: <BarChart2 className="w-6 h-6" />,
    },
    {
      key: "mexicanInvestor",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      key: "partTimeInvestor",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      key: "optionsTrader",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      key: "familyOffice",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <Container>
        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase) => (
            <StaggeredItem key={useCase.key}>
              <UseCaseCard
                icon={useCase.icon}
                persona={t(`${useCase.key}.persona`)}
                quote={t(`${useCase.key}.quote`)}
                solution={t(`${useCase.key}.solution`)}
              />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Container>
    </section>
  );
}
