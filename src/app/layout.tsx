import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StockAlert - Real-Time Stock Alerts for Windows",
    template: "%s | StockAlert",
  },
  description:
    "Real-time stock price alerts and market monitoring for Windows. Get instant notifications when stocks hit your target prices. Free download.",
  keywords: [
    "stock alerts",
    "stock price alerts",
    "market monitoring",
    "windows stock app",
    "trading alerts",
    "price notifications",
    "whatsapp stock alerts",
    "bilingual stock app",
  ],
  authors: [{ name: "StockAlert" }],
  creator: "StockAlert",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stockalert.app",
    siteName: "StockAlert",
    title: "StockAlert - Real-Time Stock Alerts for Windows",
    description:
      "Real-time stock price alerts and market monitoring for Windows. Get instant notifications when stocks hit your target prices.",
    images: [
      {
        url: "https://stockalert.app/images/ticker_tab.jpg",
        width: 1200,
        height: 630,
        alt: "AI StockAlert - Stock Price Monitoring Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StockAlert - Real-Time Stock Alerts for Windows",
    description:
      "Real-time stock price alerts and market monitoring for Windows.",
    creator: "@StockAlertApp",
    images: ["https://stockalert.app/images/ticker_tab.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://stockalert.app",
    languages: {
      en: "https://stockalert.app/en",
      es: "https://stockalert.app/es",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
