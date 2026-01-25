# StockAlert Marketing Website

> **Demo Project**: This is an example SaaS marketing website built for portfolio demonstration purposes only. StockAlert is not a real product and no actual software is available for download.

Marketing website for StockAlert, a fictional Windows desktop application that delivers real-time stock price alerts. Built with Next.js 16 for static deployment with zero server costs.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.4 | React framework with App Router |
| React | 19.2.3 | UI library |
| Tailwind CSS | 4.x | Utility-first styling |
| shadcn/ui | Latest | Accessible UI components (Radix) |
| Framer Motion | 12.x | Page animations |
| next-intl | 4.7.0 | Internationalization (EN/ES) |
| next-themes | 0.4.6 | Light/dark mode switching |
| Playwright | 1.58.0 | End-to-end testing |

## Features

| Feature | Benefit |
|---------|---------|
| Static Site Generation | Sub-second page loads, zero server costs |
| Internationalization | English and Spanish with localized URLs |
| Dark/Light Theme | System preference detection with manual toggle |
| Responsive Design | Mobile-first, tested on iPhone 14 viewport |
| E2E Test Coverage | 23 Playwright tests across all pages |
| Security Headers | X-Frame-Options, CSP, and caching configured |

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. **Clone the repository**
   ```powershell
   git clone https://github.com/RCushmaniii/ai-stock-alert-website.git
   cd ai-stock-alert-website
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```
   Expected output: `added 440 packages in 30s`

3. **Start development server**
   ```powershell
   npm run dev
   ```
   Expected output: `▲ Next.js 16.1.4 - Local: http://localhost:3000`

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```powershell
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Generating static pages (17/17)
```

## Project Structure

```
├── e2e/                       # Playwright test specs
│   ├── navigation.spec.ts     # Page navigation tests
│   ├── i18n.spec.ts           # Language switching tests
│   ├── theme.spec.ts          # Dark/light mode tests
│   ├── pages.spec.ts          # Page rendering tests
│   └── responsive.spec.ts     # Mobile viewport tests
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-specific pages (en, es)
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── download/      # Download page
│   │   │   ├── features/      # Features page
│   │   │   ├── pricing/       # Pricing page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── terms/         # Terms of Service
│   │   │   └── privacy/       # Privacy Policy
│   │   ├── globals.css        # Theme CSS variables
│   │   └── layout.tsx         # Root layout with fonts
│   ├── components/
│   │   ├── layout/            # Header, Footer, ThemeSwitcher
│   │   ├── sections/          # Hero, Features, FAQ, PricingCards
│   │   ├── ui/                # shadcn/ui components
│   │   └── providers/         # ThemeProvider context
│   ├── i18n/                  # Internationalization config
│   ├── lib/                   # Utilities (cn helper)
│   └── messages/              # Translation files (en.json, es.json)
├── playwright.config.ts       # E2E test configuration
└── netlify.toml               # Deployment configuration
```

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

## Testing

23 end-to-end tests covering:

- Navigation between all pages
- Language switching (EN ↔ ES)
- Theme toggling (light ↔ dark)
- Page rendering for all 10 routes
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

## Deployment

### Netlify (Recommended)

This project includes `netlify.toml` with optimized configuration:

1. Connect repository to Netlify
2. Build settings are auto-detected from `netlify.toml`
3. Deploy triggers automatically on push to `main`

Configuration includes:
- Node.js 20 runtime
- Automatic locale redirect (/ → /en)
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

## Pages

| Route | EN URL | ES URL |
|-------|--------|--------|
| Home | `/en` | `/es` |
| Features | `/en/features` | `/es/caracteristicas` |
| Download | `/en/download` | `/es/descargar` |
| Pricing | `/en/pricing` | `/es/precios` |
| Contact | `/en/contact` | `/es/contacto` |
| Terms | `/en/terms` | `/es/terminos` |
| Privacy | `/en/privacy` | `/es/privacidad` |

## Customization

### Adding a New Language

1. Create translation file:
   ```powershell
   copy src\messages\en.json src\messages\fr.json
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
   mkdir src\app\[locale]\about
   ```

2. Create page component:
   ```powershell
   notepad src\app\[locale]\about\page.tsx
   ```

3. Add route to `src/i18n/routing.ts`

4. Add translations to `src/messages/en.json` and `src/messages/es.json`

## Security

| Measure | Status |
|---------|--------|
| X-Frame-Options: DENY | ✅ Configured |
| X-Content-Type-Options: nosniff | ✅ Configured |
| Referrer-Policy: strict-origin | ✅ Configured |
| Static Site (no server) | ✅ No attack surface |
| No sensitive data collection | ✅ Contact form is UI only |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.
