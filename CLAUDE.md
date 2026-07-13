# CLAUDE.md

This file provides guidance for AI assistants working on the AI StockAlert marketing website.

## Project Overview

A bilingual (English/Spanish) marketing website for AI StockAlert, a real Windows desktop application (source: `ai-stock-alert` repo, distinct from this repo). Built with Next.js 16 App Router and deployed as a static site on Netlify.

**Note**: AI StockAlert is a real, production application in active daily use - not a fictional portfolio placeholder. The download page links to a real installer (`StockAlert-4.1.0-Setup.exe`) hosted as a GitHub release asset on this repo. It is not code-signed (no Authenticode signing found in the build scripts) - Windows SmartScreen may warn on install.

## Tech Stack

- **Framework**: Next.js 16.1.4 with App Router
- **React**: 19.2.3
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui (Radix primitives)
- **Animations**: Framer Motion 12.x
- **i18n**: next-intl 4.7.0
- **Themes**: next-themes 0.4.6
- **Forms**: react-hook-form + Zod
- **Testing**: Playwright 1.58.0

## Common Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build with static export
npm run lint     # Run ESLint
npm test         # Run Playwright e2e tests
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-specific pages (en, es)
│   │   ├── page.tsx        # Homepage
│   │   ├── features/       # Features page
│   │   ├── setup/          # API key setup guide
│   │   ├── download/       # Download page
│   │   ├── pricing/        # Pricing page
│   │   ├── contact/        # Contact page
│   │   ├── use-cases/      # Use Cases page
│   │   ├── terms/          # Terms of Service
│   │   └── privacy/        # Privacy Policy
│   ├── sitemap.ts          # Dynamic sitemap with hreflang
│   ├── robots.ts           # Robots.txt configuration
│   ├── globals.css         # Theme CSS variables
│   └── layout.tsx          # Root layout with fonts
├── components/
│   ├── layout/             # Header, Footer, ThemeSwitcher, LanguageSwitcher
│   ├── sections/           # Hero, Features, FAQ, PricingCards
│   ├── shared/             # AnimatedSection, reusable components
│   ├── ui/                 # shadcn/ui components, VideoPlayer
│   └── providers/          # ThemeProvider context
├── i18n/                   # Internationalization config
│   ├── routing.ts          # Locale definitions and pathnames
│   ├── navigation.ts       # Localized Link/useRouter
│   └── request.ts          # Message loading
├── lib/                    # Utilities (cn helper)
└── messages/               # Translation files (en.json, es.json)
```

## Internationalization (i18n)

- **Supported locales**: English (`en`), Spanish (`es`)
- **Default locale**: English
- **Locale prefix**: Always required in URLs (`/en`, `/es`)
- **Localized pathnames**: URLs are translated (e.g., `/es/caracteristicas` vs `/en/features`)

### Adding translations

1. Add keys to both `src/messages/en.json` and `src/messages/es.json`
2. Use `useTranslations('namespace')` hook in components
3. For new pages, add pathname mapping in `src/i18n/routing.ts`

## Routing

Routes are defined in `src/i18n/routing.ts`:

| Internal Path | English URL     | Spanish URL           |
| ------------- | --------------- | --------------------- |
| `/`           | `/en`           | `/es`                 |
| `/features`   | `/en/features`  | `/es/caracteristicas` |
| `/download`   | `/en/download`  | `/es/descargar`       |
| `/pricing`    | `/en/pricing`   | `/es/precios`         |
| `/contact`    | `/en/contact`   | `/es/contacto`        |
| `/terms`      | `/en/terms`     | `/es/terminos`        |
| `/privacy`    | `/en/privacy`   | `/es/privacidad`      |
| `/use-cases`  | `/en/use-cases` | `/es/casos-de-uso`    |
| `/setup`      | `/en/setup`     | `/es/configuracion`   |

## Component Patterns

### Using translations in components

```tsx
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

### Localized navigation

```tsx
import { Link } from "@/i18n/navigation";

// Automatically uses current locale
<Link href="/features">Features</Link>;
```

### AnimatedSection wrapper

Use `AnimatedSection` for scroll-triggered fade-in animations:

```tsx
import AnimatedSection from "@/components/shared/AnimatedSection";

<AnimatedSection>
  <YourContent />
</AnimatedSection>;
```

## Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io) for submissions:

- Endpoint: `https://formspree.io/f/xaqobael`
- Component: `src/components/sections/ContactForm.tsx`
- Validation: react-hook-form + Zod

**Note**: The Formspree endpoint is hardcoded (not in .env) because:

- It's client-side code - the endpoint is visible in the JS bundle regardless
- Formspree endpoints are public by design with built-in spam protection
- No security benefit from environment variables for this use case

Fields sent to Formspree:

- `Name`, `Email`, `Subject`, `Message` - user input
- `Source`, `Page`, `Language` - context for identifying submissions
- `_subject`, `_replyto`, `_template` - Formspree formatting options

## Styling Guidelines

- Use Tailwind CSS utility classes
- Theme colors are CSS variables defined in `globals.css`
- Primary brand color: `--primary` (orange #F97316)
- Use `cn()` helper from `@/lib/utils` for conditional classes
- Components support dark mode via `.dark` class

## Testing

23 Playwright e2e tests in `e2e/` directory covering:

- Navigation between pages
- Language switching (EN ↔ ES)
- Theme toggling (light ↔ dark)
- Page rendering for all routes
- Mobile responsive behavior

Run specific test file:

```bash
npx playwright test e2e/navigation.spec.ts
```

## Build & Deployment

- **Production URL**: https://aistockalert.app/
- Static site generation (SSG) - no server required
- Build output in `.next/` directory
- Deployed to Netlify (config in `netlify.toml`)
- Automatic locale redirect: `/` → `/en`

## Important Files

- `src/i18n/routing.ts` - Locale and pathname configuration
- `src/messages/*.json` - Translation strings
- `src/app/globals.css` - Theme CSS variables
- `src/app/sitemap.ts` - Dynamic sitemap with hreflang alternates
- `src/app/robots.ts` - Search engine crawl directives
- `src/components/shared/JsonLd.tsx` - Structured data (Schema.org)
- `netlify.toml` - Deployment configuration and caching headers
- `playwright.config.ts` - Test configuration

## Session Log

A running log of all working sessions is maintained at `docs/SESSION_LOG.md`.
Always append a new entry at the top of this file before closing a session.
Use the `session-logger` skill to generate the entry.
