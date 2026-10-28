import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionRoot } from "@/components/MotionRoot";
import { site, siteUrl } from "@/content/site";

const body = Jost({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Tam Custom Tailor | Custom clothing and alterations in Winnipeg", template: "%s | Tam Custom Tailor" },
  description:
    "Custom suits, shirts, dresses and formalwear, expert alterations, fur and leather repair, and adaptive clothing. Tam Custom Tailor, 802 Ellice Avenue, Winnipeg, Manitoba.",
  openGraph: { siteName: site.name, locale: "en_CA", type: "website" },
};

export const viewport: Viewport = { themeColor: "#6f0d00" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  url: siteUrl,
  telephone: `+1-${site.phone}`,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: site.street, addressLocality: site.city, addressRegion: site.regionShort, postalCode: site.postal, addressCountry: "CA" },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
