import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

// Stable "last modified" date for static pages — bumped by hand when content
// actually changes, so it stays a trustworthy signal instead of resetting to
// "today" on every deploy.
const STATIC_UPDATED = new Date("2026-07-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.domain}${path}`;

  return [
    {
      url: url("/"),
      lastModified: STATIC_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/about", "/contact"].map((path) => ({
      url: url(path),
      lastModified: STATIC_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...[
      "/privacy-policy",
      "/terms-of-use",
      "/cookie-policy",
      "/accessibility-policy",
    ].map((path) => ({
      url: url(path),
      lastModified: STATIC_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
