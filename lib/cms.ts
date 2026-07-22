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
    | "homeDescription"
    | "ogImage"
    | "socialLinkedin"
    | "socialInstagram"
    | "socialFacebook"
    | "socialX",
    string
  >
>;

export async function getCmsSettings(): Promise<CmsSettings> {
  return (await cms<CmsSettings>("/settings")) ?? {};
}

/**
 * Social links, set from FuturaOS (Sites → FUTURA → Društvene mreže).
 * FUTURA has no built-in defaults (unlike the brand sites) — a platform
 * only appears once a URL is entered in the admin.
 */
export async function getSocials(): Promise<{ label: string; href: string }[]> {
  const s = await getCmsSettings();
  const entries: [string, string | undefined][] = [
    ["LinkedIn", s.socialLinkedin],
    ["Instagram", s.socialInstagram],
    ["Facebook", s.socialFacebook],
    ["X / Twitter", s.socialX],
  ];
  return entries
    .filter(([, href]) => href?.trim())
    .map(([label, href]) => ({ label, href: href!.trim() }));
}

type CmsPageSeo = {
  ogImage?: string;
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
  const [seo, settings] = await Promise.all([
    cms<CmsPageSeo>(`/seo?path=${encodeURIComponent(path)}`),
    getCmsSettings(),
  ]);

  const title = seo?.title || base.title;
  const description = seo?.description || base.description;

  // OG slika: prvo ona zadana za ovu stranicu, pa podrazumijevana sajta.
  // Bez ijedne, podijeljen link izgleda kao prazna kartica — zato se
  // openGraph blok uopste ne postavlja ako slike nema.
  const img = seo?.ogImage || settings.ogImage;
  const shared = img
    ? {
        openGraph: {
          title,
          description,
          images: [{ url: img, width: 1200, height: 630, alt: title ?? "" }],
        },
        twitter: {
          card: "summary_large_image" as const,
          title,
          description,
          images: [img],
        },
      }
    : {};

  return {
    title,
    description,
    ...shared,
    ...(seo?.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Sve stranice označene kao noindex — sitemap ih ne smije nuditi Googleu. */
export async function getNoindexPaths(): Promise<Set<string>> {
  const list = await cms<{ path: string; noindex: boolean }[]>("/seo");
  return new Set((list ?? []).filter((r) => r.noindex).map((r) => r.path));
}
