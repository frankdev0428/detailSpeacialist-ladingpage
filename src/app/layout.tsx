import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Move-Out & Deep Cleaning in Hayward, CA | Same-Day Service",
  description:
    "Professional move-out and deep cleaning in Hayward, Castro Valley, and San Leandro. Family-owned, reliable, and affordable. Call for same-day availability.",
  keywords:
    "move out cleaning Hayward, deep cleaning Castro Valley, cleaning service San Leandro, deposit cleaning, move out cleaners",
  openGraph: {
    title: "Move-Out & Deep Cleaning in Hayward, CA | Same-Day Service",
    description:
      "Family-owned cleaning service. Move-out & deep cleaning. Serving Hayward, Castro Valley, San Leandro. Call now for same-day availability.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Hayward, California" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
      <GoogleAnalytics gaId="G-J0PCT2FG4M" />
    </html>
  );
}
