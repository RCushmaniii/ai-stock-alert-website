"use client";

import { useTranslations } from "next-intl";
import { Clock, Mail, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ContactFormSection() {
  const tResponse = useTranslations("contact.response");
  const tSidebar = useTranslations("contact.sidebar");

  const times = [
    tResponse("general"),
    tResponse("technical"),
    tResponse("billing"),
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container size="lg">
        <div className="grid lg:grid-cols-[1fr_340px] md:grid-cols-[1fr_300px] gap-8">
          {/* Contact Form - Left Column */}
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>

          {/* Sidebar - Right Column */}
          <AnimatedSection className="flex flex-col gap-6">
            {/* We're Here to Help */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {tSidebar("title")}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tSidebar("description")}
              </p>
            </Card>

            {/* Response Times */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {tResponse("title")}
                </h3>
              </div>
              <ul className="space-y-3">
                {times.map((time, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {time}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Direct Contact */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {tSidebar("directContact")}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {tSidebar("emailLabel")}
              </p>
              <a
                href={`mailto:${tSidebar("email")}`}
                className="text-sm font-medium text-primary hover:underline mt-1 inline-block"
              >
                {tSidebar("email")}
              </a>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
