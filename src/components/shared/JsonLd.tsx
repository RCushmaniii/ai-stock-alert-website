export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI StockAlert",
    description:
      "Real-time stock price alerts delivered via WhatsApp. Bilingual (English/Spanish) desktop application for Windows with Bring Your Own API Key model.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Windows 10, Windows 11",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
    featureList: [
      "WhatsApp price alerts",
      "Bilingual support (English/Spanish)",
      "Bring Your Own API Key",
      "Real-time stock news",
      "Multi-currency display (USD/MXN)",
      "Background monitoring",
      "Market hours awareness",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StockAlert",
    url: "https://aistockalert.app",
    logo: "https://aistockalert.app/favicon.svg",
    sameAs: [
      "https://twitter.com/AIStockAlert",
      "https://github.com/stockalert",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@aistockalert.app",
      contactType: "customer support",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
