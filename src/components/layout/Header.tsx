"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/features", label: t("features") },
    { href: "/setup", label: t("setup") },
    { href: "/download", label: t("download") },
    { href: "/pricing", label: t("pricing") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border backdrop-blur-xl bg-background/80"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-colors">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              {tCommon("appName")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <Link href="/download">
              <Button size="sm">{tCommon("download")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-accent"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
            <Link href="/download" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm">{tCommon("download")}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
