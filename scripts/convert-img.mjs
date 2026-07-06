// Convert raw Midjourney PNGs in public/img/ to optimized WebP backgrounds.
// Usage: node scripts/convert-img.mjs
// Matches source files by keywords from the prompt in their filename.

import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "img");
const files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".png"));

const map = [
  { match: /cathedral/i, out: "hero.webp" },
  { match: /obsidian|flowing|smooth|architectural_landscape/i, out: "luminor.webp" },
  { match: /highway/i, out: "techplay.webp" },
  { match: /minimal_dark_abstract.*_\d\.png$/i, out: "footer.webp" },
];

for (const { match, out } of map) {
  const src = files.find((f) => match.test(f));
  if (!src) {
    console.log(`MISSING source for ${out} — no PNG matches ${match}`);
    continue;
  }
  const outPath = join(dir, out);
  await sharp(join(dir, src))
    .resize({ width: 2560, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outPath);
  const kb = Math.round(statSync(outPath).size / 1024);
  console.log(`${out} <- ${src} (${kb} KB)`);
}
