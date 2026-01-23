"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TrendingUp, Github, Twitter, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  {tCommon("appName")}
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("description")}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://twitter.com/StockAlertApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/stockalert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:support@stockalert.app"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                {t("product")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tNav("features")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/download"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tNav("download")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tNav("pricing")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                {t("company")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("blog")}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tNav("contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                {t("legal")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {currentYear} {tCommon("appName")}. {t("copyright")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
