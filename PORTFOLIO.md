---
# Control flags
include_in_portfolio: true
featured: true
priority: 1

# Card display
title: "StockAlert Marketing Website"
tagline: "Static marketing site with i18n, theming, and e2e tests"
category: "Marketing Website"
tech_stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Playwright", "shadcn/ui"]
thumbnail: "/portfolio/stockalert-thumbnail.png"
status: "Production"

# Detail page
problem: "StockAlert needed a professional marketing presence to showcase features, provide secure downloads, and support international users. Trust was critical for users downloading executable files."
solution: "Built a static Next.js site with full internationalization (EN/ES), dark/light theming, and a security trust card to build download confidence. Comprehensive Playwright testing ensures reliability."

key_features:
  - "7 pages with full English/Spanish localization and localized URLs"
  - "Security trust card with VirusTotal verification for download confidence"
  - "23 Playwright e2e tests with 100% pass rate"
  - "Dark/light theme with system preference detection"
  - "Sub-second page loads via static site generation"

# Links
demo_url: ""
repo_url: "https://github.com/RCushmaniii/ai-stock-alert-website"
live_url: ""

# Optional metrics
metrics:
  - "23 e2e tests passing"
  - "14 localized pages (7 EN + 7 ES)"
  - "0 ESLint errors"
  - "6.8s full test suite runtime"

date_completed: "2025-01"
---

## Overview

Production-ready marketing website for StockAlert, a Windows desktop application that delivers real-time stock price alerts. Built with Next.js 16 App Router for fast static deployment with zero server costs.

## Technical Highlights

**Frontend Architecture**
- Next.js 16.1.4 with App Router and static site generation
- React 19.2.3 with TypeScript strict mode
- Tailwind CSS 4 with CSS custom properties for theming
- shadcn/ui components built on Radix UI primitives

**Internationalization**
- next-intl for translations with 2 languages (English, Spanish)
- Localized URL paths (/en/features → /es/caracteristicas)
- Language switcher preserves page context

**Quality Assurance**
- 23 Playwright e2e tests covering navigation, i18n, theming, and responsive behavior
- Desktop and mobile viewport testing (iPhone 14)
- ESLint with Next.js recommended configuration

**Deployment**
- Netlify configuration with security headers
- X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- 1-year cache headers for static assets

## Pages

- **Home** - Hero, features, pricing preview, CTA
- **Features** - Feature grid, comparison table
- **Download** - EXE download, security trust card, system requirements
- **Pricing** - Free/Premium/Pro tiers, feature comparison, FAQ
- **Contact** - Contact form, support options
- **Terms** - Terms of Service
- **Privacy** - Privacy Policy

## Skills Demonstrated

Next.js App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Radix UI, Framer Motion, next-intl, next-themes, Playwright testing, Netlify deployment, Git version control
