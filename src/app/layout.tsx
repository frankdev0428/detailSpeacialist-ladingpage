import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bayshinecleaning.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bay Shine Cleaning | Move-Out & Deep Cleaning in Hayward, CA",
    template: "%s | Bay Shine Cleaning",
  },
  description:
    "Professional move-out and deep cleaning in Hayward, Castro Valley, and San Leandro. Family-owned, reliable, and affordable. Call (510) 999-1514 for same-day availability.",
  keywords:
    "move out cleaning Hayward, deep cleaning Castro Valley, cleaning service San Leandro, deposit cleaning, move out cleaners east bay, Bay Shine Cleaning",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Bay Shine Cleaning | Move-Out & Deep Cleaning in Hayward, CA",
    description:
      "Family-owned cleaning service. Move-out & deep cleaning. Serving Hayward, Castro Valley, San Leandro. Call now for same-day availability.",
    url: SITE_URL,
    siteName: "Bay Shine Cleaning",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bay Shine Cleaning | Move-Out & Deep Cleaning in Hayward, CA",
    description:
      "Same-day move-out and deep cleaning in the East Bay. Family-owned. Call (510) 999-1514.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bay Shine Cleaning",
  description:
    "Professional move-out and deep cleaning service serving Hayward, Castro Valley, San Leandro, and surrounding East Bay cities.",
  url: SITE_URL,
  telephone: "+15109991514",
  priceRange: "$$",
  image: `${SITE_URL}/opengraph-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hayward",
    addressRegion: "CA",
    postalCode: "94541",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.6688,
    longitude: -122.0808,
  },
  areaServed: [
    { "@type": "City", name: "Hayward" },
    { "@type": "City", name: "Castro Valley" },
    { "@type": "City", name: "San Leandro" },
    { "@type": "City", name: "San Lorenzo" },
    { "@type": "City", name: "Union City" },
    { "@type": "City", name: "Fremont" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-Out Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Hayward, California" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
      <GoogleAnalytics gaId="G-J0PCT2FG4M" />
    </html>
  );
}
