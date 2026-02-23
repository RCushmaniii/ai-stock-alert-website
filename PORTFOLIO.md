---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 4
portfolio_featured: false

# === CARD DISPLAY ===
title: "AI StockAlert Website"
tagline: "Bilingual SaaS marketing site — 18 routes, e2e tested, zero server cost"
slug: "ai-stock-alert-website"
category: "Templates"
tech_stack:
  - "Next.js 16"
  - "TypeScript"
  - "Tailwind CSS 4"
  - "next-intl"
  - "Playwright"
thumbnail: "/images/ai-stockalert-website-thumb.jpg"
status: "Production"

# === DETAIL PAGE ===
problem: "Businesses launching software products hit the same bottleneck: the marketing website. Agency builds cost $10K-50K+ and take weeks. Templates look generic. Bilingual support is always an afterthought — and SEO, structured data, and accessibility get skipped entirely."
solution: "A production-ready bilingual (EN/ES) marketing website covering the complete surface area of a real SaaS launch — 9 pages across 18 localized routes, with SEO, structured data, animations, dark/light themes, e2e tests, and static deployment to Netlify CDN."
key_features:
  - "9 pages x 2 languages = 18 localized routes with native URL routing via next-intl"
  - "SEO from day one — dynamic sitemap with hreflang alternates, JSON-LD structured data, page-level metadata"
  - "23 Playwright e2e tests covering navigation, language switching, theme toggling, and responsive behavior"
  - "Static site generation — zero server cost, sub-second loads, deployed to Netlify global CDN"
  - "Working contact form (Formspree + react-hook-form + Zod), dark/light themes, scroll-triggered animations"

# === MEDIA: PORTFOLIO SLIDES ===
slides:
  - src: "/images/ai-stockalert-website-01.png"
    alt_en: "AI StockAlert — The Blueprint for High-Performance Bilingual SaaS Marketing"
    alt_es: "AI StockAlert — El Plan para Marketing SaaS Bilingue de Alto Rendimiento"
  - src: "/images/ai-stockalert-website-02.png"
    alt_en: "The Launch Bottleneck — agency costs, template trap, skill gap, zero visibility"
    alt_es: "El Cuello de Botella del Lanzamiento — costos de agencia, trampa de plantillas, brecha de habilidades"
  - src: "/images/ai-stockalert-website-03.png"
    alt_en: "Not a Wireframe, A Production Reality — live at aistockalert.app"
    alt_es: "No es un Wireframe, Es Produccion Real — en vivo en aistockalert.app"
  - src: "/images/ai-stockalert-website-04.png"
    alt_en: "Internationalization Done Right — native routing, localized pathnames for SEO"
    alt_es: "Internacionalizacion Bien Hecha — rutas nativas, nombres de ruta localizados para SEO"
  - src: "/images/ai-stockalert-website-05.png"
    alt_en: "Built for Speed and Scale — 0 server costs, sub-1s load time, Lighthouse 100"
    alt_es: "Construido para Velocidad y Escala — 0 costos de servidor, carga sub-1s, Lighthouse 100"
  - src: "/images/ai-stockalert-website-06.png"
    alt_en: "Invisible Tech, Visible Results — dynamic metadata, hreflang, JSON-LD structured data"
    alt_es: "Tecnologia Invisible, Resultados Visibles — metadata dinamica, hreflang, datos estructurados JSON-LD"
  - src: "/images/ai-stockalert-website-07.png"
    alt_en: "Polished to Perfection — themes, typography, validated forms, responsive and accessible"
    alt_es: "Pulido a la Perfeccion — temas, tipografia, formularios validados, responsivo y accesible"
  - src: "/images/ai-stockalert-website-08.png"
    alt_en: "Trust, Verified — 23 Playwright e2e tests before every deploy"
    alt_es: "Confianza Verificada — 23 pruebas e2e de Playwright antes de cada despliegue"
  - src: "/images/ai-stockalert-website-09.png"
    alt_en: "Tech Spec to Business Value — bilingual = 2x market, static = 100% uptime"
    alt_es: "De Especificacion Tecnica a Valor de Negocio — bilingue = 2x mercado, estatico = 100% uptime"
  - src: "/images/ai-stockalert-website-10.png"
    alt_en: "Why Owners Love This Blueprint — cost efficiency, speed, future-proof, verified"
    alt_es: "Por Que los Duenos Aman Este Plan — eficiencia de costos, velocidad, a prueba de futuro, verificado"

# === MEDIA: VIDEO ===
video_url: "/videos/AI-StockAlert-brief.mp4"
video_poster: "/videos/AI-StockAlert-brief-poster.jpg"

# === LINKS ===
demo_url: "https://aistockalert.app/"
live_url: "https://aistockalert.app/"

# === OPTIONAL ===
metrics:
  - "9 pages x 2 languages = 18 localized routes"
  - "23 end-to-end Playwright tests"
  - "100% static — $0 server cost"
  - "Sub-second page loads via CDN"
tags:
  - "nextjs"
  - "marketing-website"
  - "bilingual"
  - "i18n"
  - "saas"
  - "static-site"
  - "seo"
  - "tailwind"
  - "playwright"
  - "netlify"
date_completed: "2026-02"
---

## About This Project

AI StockAlert is a bilingual (English/Spanish) SaaS marketing website that demonstrates the complete surface area of a real product launch — not a landing page, not a template, but the full thing. It covers 9 pages across 18 localized routes: Homepage, Features, Use Cases, Pricing, Download, Setup Guide, Contact, Terms of Service, and Privacy Policy. Every page exists in both English and Spanish with properly translated URLs, synced translation files, and language switching that preserves page context.

The site markets a fictional Windows desktop application that delivers stock price alerts via WhatsApp. While the product itself is a portfolio demonstration, the website is production-grade: statically generated for zero server costs, deployed to Netlify's global CDN, and built with SEO infrastructure (hreflang sitemaps, JSON-LD structured data, page-level metadata) that most real SaaS launches skip entirely. Dark/light theme support, scroll-triggered Framer Motion animations, accessible Radix-based UI components, and a working Formspree contact form round out the experience.

## Key Engineering Decisions

**next-intl over manual i18n:** Native locale-based routing gives clean localized URLs (`/en/features` vs `/es/caracteristicas`) with proper hreflang alternates generated automatically in the sitemap. Language switching preserves page context — no redirects to the homepage.

**Static export over SSR:** The entire site generates as static HTML at build time. Zero server cost, sub-second loads from Netlify's CDN, and 100% uptime. No cold starts, no edge functions, no infrastructure to manage.

**Playwright e2e over unit tests:** 23 end-to-end tests validate the actual user experience — navigation, language switching, theme toggling, form validation, and responsive behavior across viewports. These catch integration bugs that unit tests miss.
