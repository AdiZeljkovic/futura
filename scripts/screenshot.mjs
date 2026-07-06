// Screenshot the landing page: one shot per section + full page.
// Usage: node scripts/screenshot.mjs <outDir> [url]

import { chromium } from "playwright";

const outDir = process.argv[2] ?? ".";
const url = process.argv[3] ?? "http://localhost:3000";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewportSize: { width: 1440, height: 900 } });

const errors = [];
page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle" });

// Scroll through each section so whileInView reveals trigger, shoot each.
for (const id of ["hero", "luminor", "techplay", "contact"]) {
  await page.locator(`#${id}`).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${outDir}/section-${id}.png` });
}

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
await page.screenshot({ path: `${outDir}/full-page.png`, fullPage: true });

console.log(errors.length ? `CONSOLE ERRORS:\n${errors.join("\n")}` : "NO CONSOLE ERRORS");
await browser.close();
