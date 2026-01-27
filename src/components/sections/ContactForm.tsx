"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqobael";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      // Build form data for Formspree
      // Using lowercase field names - Formspree auto-detects 'email' for reply-to
      const formData = new FormData();

      // Core form fields (lowercase for Formspree compatibility)
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("regarding", data.subject);  // 'subject' conflicts with _subject
      formData.append("message", data.message);

      // Formspree special fields
      formData.append("_subject", `AI StockAlert Contact: ${data.subject}`);
      formData.append("_template", "table");

      // Context fields
      formData.append("source", "AI StockAlert Website");
      formData.append("page", "Contact Form");
      formData.append("language", locale === "es" ? "Spanish" : "English");

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        reset();
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Card variant="glass" className="p-6">
      <h3 className="text-2xl font-semibold mb-6 text-foreground">{t("title")}</h3>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-lg flex items-center gap-3 bg-green-500/10 border border-green-500/20">
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
          <p className="text-green-400">{t("success")}</p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-lg flex items-center gap-3 bg-red-500/10 border border-red-500/20">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <p className="text-red-400">{t("error")}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-muted-foreground">
              {t("name")}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={t("namePlaceholder")}
              className={cn(
                "bg-muted border-border",
                errors.name && "border-red-500 focus-visible:ring-red-500"
              )}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground">
              {t("email")}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              className={cn(
                "bg-muted border-border",
                errors.email && "border-red-500 focus-visible:ring-red-500"
              )}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-muted-foreground">
            {t("subject")}
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder={t("subjectPlaceholder")}
            className={cn(
              "bg-muted border-border",
              errors.subject && "border-red-500 focus-visible:ring-red-500"
            )}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-sm text-red-400">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-muted-foreground">
            {t("message")}
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder={t("messagePlaceholder")}
            className={cn(
              "bg-muted border-border resize-none",
              errors.message && "border-red-500 focus-visible:ring-red-500"
            )}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {t("sending")}
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {t("submit")}
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
