# StockAlert Marketing Website

Marketing website for StockAlert, a Windows desktop application that delivers real-time stock price alerts directly to your desktop. Built with Next.js 16 and designed for fast static deployment.

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

## Features

| Feature | Benefit |
|---------|---------|
| Static Site Generation | Sub-second page loads, zero server costs |
| Internationalization | English and Spanish support out of the box |
| Dark/Light Theme | System preference detection with manual toggle |
| Responsive Design | Optimized for mobile, tablet, and desktop |
| Accessible Components | WAI-ARIA compliant via Radix UI primitives |
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
   Expected output: `added 247 packages in 30s`

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
✓ Generating static pages (13/13)
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Locale-specific pages (en, es)
│   │   ├── page.tsx           # Homepage
│   │   ├── download/          # Download page components
│   │   ├── features/          # Features page components
│   │   ├── pricing/           # Pricing page components
│   │   └── contact/           # Contact page components
│   ├── globals.css            # Theme CSS variables and base styles
│   └── layout.tsx             # Root layout with fonts
├── components/
│   ├── layout/                # Header, Footer, ThemeSwitcher
│   ├── sections/              # Hero, Features, FAQ, PricingCards
│   ├── ui/                    # shadcn/ui components (Button, Card, etc.)
│   ├── shared/                # AnimatedSection wrapper
│   └── providers/             # ThemeProvider context
├── i18n/                      # Internationalization config
│   ├── routing.ts             # Locale routing setup
│   ├── navigation.ts          # Localized Link/useRouter
│   └── request.ts             # Server-side locale handling
├── lib/
│   └── utils.ts               # cn() utility for class merging
├── messages/
│   ├── en.json                # English translations
│   └── es.json                # Spanish translations
└── middleware.ts              # Locale detection middleware
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Generate production build with SSG |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint checks |

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

## Customization

### Adding a New Language

1. Create translation file:
   ```powershell
   copy src\messages\en.json src\messages\fr.json
   ```

2. Add locale to routing config in `src/i18n/routing.ts`:
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

1. Create directory in `src/app/[locale]/`:
   ```powershell
   mkdir src\app\[locale]\about
   ```

2. Create page component:
   ```powershell
   notepad src\app\[locale]\about\page.tsx
   ```

3. Add translations to `src/messages/en.json` and `src/messages/es.json`

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

## Related Projects

- [StockAlert Desktop App](https://github.com/RCushmaniii/stockalert) - The Windows application this site markets

---

Built with Next.js 16 and deployed on Netlify.
