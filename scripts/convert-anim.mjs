// Re-encode the animated hero webp to a web-friendly size.
// Usage: node scripts/convert-anim.mjs

import sharp from "sharp";
import { statSync } from "fs";

const src = "public/img/ezgif-17e5a3757a65c30e.webp";
const out = "public/img/hero-anim.webp";

const meta = await sharp(src, { animated: true }).metadata();
console.log(`source: ${meta.width}x${meta.pageHeight ?? meta.height}, ${meta.pages} frames`);

await sharp(src, { animated: true })
  .resize({ width: 1280, withoutEnlargement: true })
  .webp({ quality: 42, effort: 6 })
  .toFile(out);

console.log(`${out}: ${Math.round(statSync(out).size / 1024)} KB`);
