import type { Metadata, Viewport } from "next";
import { Michroma, Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import Analytics from "@/components/Analytics";
import { getCmsSettings } from "@/lib/cms";
import { site } from "@/lib/data/site";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getCmsSettings();
  const suffix = settings.titleSuffix?.trim() || "— FUTURA";
  return {
    metadataBase: new URL(site.domain),
    title: {
      default:
        settings.homeTitle?.trim() || "FUTURA — We're Building the Future",
      template: `%s ${suffix}`,
    },
    description: settings.homeDescription?.trim() || site.description,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: { index: true, follow: true },
    verification: {
      ...(settings.googleVerification?.trim()
        ? { google: settings.googleVerification.trim() }
        : {}),
      ...(settings.bingVerification?.trim()
        ? { other: { "msvalidate.01": settings.bingVerification.trim() } }
        : {}),
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04070d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${michroma.variable} ${inter.variable}`}>
      <body>
        <Cursor />
        <div className="grain" aria-hidden="true" />
        {children}
        <Analytics />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
