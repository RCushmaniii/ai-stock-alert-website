import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#F97316] to-[#FB923C] bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/en"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
