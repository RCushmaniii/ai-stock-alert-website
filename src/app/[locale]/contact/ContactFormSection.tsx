"use client";

import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ContactFormSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <Container size="md">
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </Container>
    </section>
  );
}
