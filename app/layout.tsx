import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
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

export const metadata: Metadata = {
  title: {
    default: "FUTURA — We're Building the Future",
    template: "%s — FUTURA",
  },
  description:
    "FUTURA — parent company behind digital brands in software, media and technology.",
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
      </body>
    </html>
  );
}
