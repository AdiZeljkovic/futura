import "server-only";

/**
 * FuturaOS settings for the FUTURA site — analytics IDs, verification tags
 * and per-page SEO overrides, managed from the admin panel. Fails soft: when
 * the OS is unreachable everything returns empty and the site uses its
 * built-in values.
 */

const API = process.env.FUTURAOS_API_URL;
const REVALIDATE = 120;

async function cms<T>(path: string): Promise<T | null> {
  if (!API) return null;
  try {
    const res = await fetch(`${API}/v1/content/futura${path}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export type CmsSettings = Partial<
  Record<
    | "ga4Id"
    | "gtmId"
    | "googleVerification"
    | "bingVerification"
    | "titleSuffix"
    | "homeTitle"
    | "homeDescription",
    string
  >
>;

export async function getCmsSettings(): Promise<CmsSettings> {
  return (await cms<CmsSettings>("/settings")) ?? {};
}

type CmsPageSeo = {
  title: string | null;
  description: string | null;
  noindex: boolean;
} | null;

/** Merges an admin-defined per-path override into base metadata. */
export async function withPageSeo(
  path: string,
  base: { title?: string; description?: string }
): Promise<{
  title?: string;
  description?: string;
  robots?: { index: boolean; follow: boolean };
}> {
  const seo = await cms<CmsPageSeo>(`/seo?path=${encodeURIComponent(path)}`);
  if (!seo) return base;
  return {
    title: seo.title || base.title,
    description: seo.description || base.description,
    ...(seo.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
