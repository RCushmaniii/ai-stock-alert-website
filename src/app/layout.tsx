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
  },
  twitter: {
    card: "summary_large_image",
    title: "StockAlert - Real-Time Stock Alerts for Windows",
    description:
      "Real-time stock price alerts and market monitoring for Windows.",
    creator: "@StockAlertApp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
