// Usage: node scripts/shot.mjs <out.png> [width] [url] [full|viewport]
import { chromium } from "playwright-core";

const out = process.argv[2] ?? "shot.png";
const width = Number(process.argv[3] ?? 1680);
const url = process.argv[4] ?? "http://localhost:3000/";
const mode = process.argv[5] ?? "full";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({
  viewport: { width, height: 1000 },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(600);
await page.screenshot({ path: out, fullPage: mode === "full" });
await browser.close();
console.log("saved", out, "@", width);
