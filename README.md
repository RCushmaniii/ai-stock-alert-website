# AI StockAlert Marketing Website

> **Portfolio Demo**: This is a production-quality SaaS marketing website built to demonstrate modern web development practices. AI StockAlert is a fictional product—no software is available for download.

A bilingual (English/Spanish) marketing website for a fictional Windows desktop application that delivers WhatsApp stock price alerts. Built with Next.js 16 and deployed as a static site with zero server costs.

**[Live Demo →](https://ai-stock-alert-website.netlify.app/)**

---

## What This Demonstrates

| Capability | Implementation |
|------------|----------------|
| Modern React Architecture | Next.js 16 App Router with React 19 |
| Internationalization | Full EN/ES support with localized URLs |
| Accessible Components | shadcn/ui built on Radix primitives |
| Theme System | Light/dark mode with system detection |
| Animation | Framer Motion page transitions |
| Testing | 23 Playwright e2e tests with 100% pass rate |
| Static Deployment | Sub-second loads, zero hosting costs |

---

## Live Demo

**URL**: [https://ai-stock-alert-website.netlify.app/](https://ai-stock-alert-website.netlify.app/)

Try these scenarios:

1. **Language Switching**: Click the language toggle (EN/ES) in the header—notice URLs change to localized paths (`/es/caracteristicas` vs `/en/features`)
2. **Theme Toggle**: Click the sun/moon icon to switch between light and dark modes
3. **Video Player**: On the homepage hero, click the play button to watch the demo video; click the expand icon for fullscreen
4. **Image Lightbox**: Scroll to the screenshots section and click any image to open the lightbox view
5. **Responsive Design**: Resize your browser or use mobile DevTools to see the adaptive layout

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | Accessible UI components (Radix) |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Page animations |
| [next-intl](https://next-intl-docs.vercel.app/) | 4.7.0 | Internationalization (EN/ES) |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Light/dark mode switching |
| [Playwright](https://playwright.dev/) | 1.58.0 | End-to-end testing |
| [Zod](https://zod.dev/) | 4.3.5 | Form validation |

---

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```powershell
# 1. Clone the repository
git clone https://github.com/RCushmaniii/ai-stock-alert-website.git
cd ai-stock-alert-website

# 2. Install dependencies
npm install
# Expected: added ~440 packages in 30s

# 3. Start development server
npm run dev
# Expected: ▲ Next.js 16.1.4 - Local: http://localhost:3000

# 4. Open http://localhost:3000 in your browser
```

### Production Build

```powershell
npm run build
# Expected output:
# ✓ Compiled successfully
# ✓ Generating static pages (19/19)
```

---

## Project Structure

```
ai-stock-alert-website/
├── e2e/                           # Playwright test specs
│   ├── navigation.spec.ts         # Page navigation tests
│   ├── i18n.spec.ts               # Language switching tests
│   ├── theme.spec.ts              # Dark/light mode tests
│   ├── pages.spec.ts              # Page rendering tests
│   └── responsive.spec.ts         # Mobile viewport tests
├── public/
│   ├── images/                    # Screenshot images
│   └── videos/                    # Demo video (MP4)
├── src/
│   ├── app/
│   │   ├── [locale]/              # Locale-specific pages (en, es)
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── features/          # Features page
│   │   │   ├── setup/             # API key setup guide
│   │   │   ├── download/          # Download page
│   │   │   ├── pricing/           # Pricing page
│   │   │   ├── contact/           # Contact page
│   │   │   ├── terms/             # Terms of Service
│   │   │   └── privacy/           # Privacy Policy
│   │   ├── globals.css            # Theme CSS variables
│   │   └── layout.tsx             # Root layout with fonts
│   ├── components/
│   │   ├── layout/                # Header, Footer, ThemeSwitcher, LanguageSwitcher
│   │   ├── sections/              # Hero, Features, FAQ, PricingCards
│   │   ├── shared/                # AnimatedSection, reusable components
│   │   ├── ui/                    # shadcn/ui components, VideoPlayer
│   │   └── providers/             # ThemeProvider context
│   ├── i18n/                      # Internationalization config
│   ├── lib/                       # Utilities (cn helper)
│   └── messages/                  # Translation files (en.json, es.json)
├── playwright.config.ts           # E2E test configuration
├── netlify.toml                   # Deployment configuration
└── tailwind.config.ts             # Tailwind configuration
```

---

## Pages

| Page | EN URL | ES URL | Description |
|------|--------|--------|-------------|
| Home | `/en` | `/es` | Hero, features, screenshots, pricing preview |
| Features | `/en/features` | `/es/caracteristicas` | Detailed feature grid with comparison table |
| Setup Guide | `/en/setup` | `/es/configuracion` | API key setup instructions |
| Download | `/en/download` | `/es/descargar` | Download options, requirements, FAQ |
| Pricing | `/en/pricing` | `/es/precios` | Pricing tiers with feature comparison |
| Contact | `/en/contact` | `/es/contacto` | Contact form and support options |
| Terms | `/en/terms` | `/es/terminos` | Terms of Service |
| Privacy | `/en/privacy` | `/es/privacidad` | Privacy Policy |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Generate production build with SSG |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint checks |
| `npm test` | Run all Playwright tests |
| `npm run test:ui` | Open Playwright test UI |
| `npm run test:headed` | Run tests with visible browser |

---

## Testing

23 end-to-end tests covering:

- Navigation between all pages
- Language switching (EN ↔ ES)
- Theme toggling (light ↔ dark)
- Page rendering for all routes
- Mobile responsive behavior

```powershell
# Run all tests
npm test

# Run specific test file
npx playwright test e2e\navigation.spec.ts

# Run with browser visible
npm run test:headed
```

Expected output:
```
Running 23 tests using 14 workers
  23 passed (6.8s)
```

---

## Deployment

### Netlify (Recommended)

This project includes `netlify.toml` with optimized configuration:

1. Connect repository to Netlify
2. Build settings are auto-detected from `netlify.toml`
3. Deploy triggers automatically on push to `main`

**Configuration includes:**
- Node.js 20 runtime
- Automatic locale redirect (`/` → `/en`)
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Static asset caching (1 year for fonts and Next.js bundles)

### Vercel

```powershell
npx vercel
```

### Manual Deployment

```powershell
npm run build
# Deploy contents of .next/ directory to any static host
```

---

## Customization

### Adding a New Language

1. Create translation file:
   ```powershell
   Copy-Item src\messages\en.json -Destination src\messages\fr.json
   ```

2. Add locale to `src/i18n/routing.ts`:
   ```typescript
   export const locales = ['en', 'es', 'fr'] as const;
   ```

3. Translate strings in `src/messages/fr.json`

### Modifying Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #F97316;        /* Brand orange */
  --background: #ffffff;     /* Light mode background */
}

.dark {
  --background: #0a0a0a;     /* Dark mode background */
}
```

### Adding New Pages

1. Create directory:
   ```powershell
   New-Item -ItemType Directory -Path src\app\[locale]\about
   ```

2. Create page component:
   ```powershell
   notepad src\app\[locale]\about\page.tsx
   ```

3. Add route to `src/i18n/routing.ts`

4. Add translations to `src/messages/en.json` and `src/messages/es.json`

---

## Security

| Measure | Status |
|---------|--------|
| X-Frame-Options: DENY | ✅ Configured |
| X-Content-Type-Options: nosniff | ✅ Configured |
| Referrer-Policy: strict-origin | ✅ Configured |
| Static Site (no server) | ✅ No attack surface |
| No sensitive data collection | ✅ Contact form is UI only |

---

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

---

## Key Implementation Details

### Video Player Component

Custom video player (`src/components/ui/VideoPlayer.tsx`) with:
- Thumbnail preview with play button overlay
- Inline playback with custom controls
- Fullscreen modal view
- Mute/unmute toggle
- Keyboard support (Escape to close)

### Lightbox Gallery

Screenshot section (`src/app/[locale]/ScreenshotsSection.tsx`) features:
- Click-to-enlarge functionality
- Overlay modal with close button
- Image label display
- Click outside to close

### Internationalization

Full i18n support via next-intl:
- Localized URL paths (`/es/caracteristicas` vs `/en/features`)
- Complete translation coverage in `src/messages/`
- Language switcher persists selection
- SEO-friendly locale prefixes

### Contact Form

Contact form (`src/components/sections/ContactForm.tsx`) powered by [Formspree](https://formspree.io):
- Client-side validation with react-hook-form + Zod
- Submissions sent via Formspree (no backend required)
- Table-formatted emails with human-readable field names
- Includes context fields: Source, Page, and Language
- Reply-to set to submitter's email for easy responses

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Author

Built by [Robert Cushman](https://github.com/RCushmaniii) as a portfolio demonstration of modern web development practices.
