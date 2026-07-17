import { NextResponse, type NextRequest } from "next/server";

/**
 * 301/302 redirecti iz FuturaOS admina (Sites → Redirecti).
 * Mapa se kešira 60s u memoriji — pad API-ja nikad ne ruši sajt.
 */

const API = process.env.FUTURAOS_API_URL;

type RedirectRow = { fromPath: string; toPath: string; permanent: boolean };

let cache: { map: Map<string, RedirectRow>; at: number } | null = null;

async function redirectsMap(): Promise<Map<string, RedirectRow>> {
  if (cache && Date.now() - cache.at < 60_000) return cache.map;
  const map = new Map<string, RedirectRow>();
  if (API) {
    try {
      const res = await fetch(`${API}/v1/content/futura/redirects`, {
        signal: AbortSignal.timeout(3000),
      });
      if (res.ok) {
        for (const r of (await res.json()) as RedirectRow[]) map.set(r.fromPath, r);
      }
    } catch {
      /* sajt živi i bez mape */
    }
  }
  cache = { map, at: Date.now() };
  return map;
}

export async function middleware(req: NextRequest) {
  const map = await redirectsMap();
  if (map.size === 0) return NextResponse.next();
  const hit = map.get(req.nextUrl.pathname);
  if (hit) {
    const dest = hit.toPath.startsWith("http")
      ? hit.toPath
      : new URL(hit.toPath, req.url);
    return NextResponse.redirect(dest, hit.permanent ? 301 : 302);
  }
  return NextResponse.next();
}

export const config = {
  // sve osim Next internals, fajlova sa ekstenzijom i api ruta
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
