import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import Analytics from "@/components/Analytics";
import { getCmsSettings } from "@/lib/cms";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getCmsSettings();
  const suffix = settings.titleSuffix?.trim() || "— FUTURA";
  return {
    title: {
      default:
        settings.homeTitle?.trim() || "FUTURA — We're Building the Future",
      template: `%s ${suffix}`,
    },
    description:
      settings.homeDescription?.trim() ||
      "FUTURA — parent company behind digital brands in software, media and technology.",
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
      </body>
    </html>
  );
}
