import { chromium } from "playwright-core";
import { readFileSync, writeFileSync } from "fs";
const [, , src, out, sx, sy, sw, sh] = process.argv;
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const dataUrl = "data:image/png;base64," + readFileSync(src).toString("base64");
const b = await chromium.launch({ executablePath: CHROME, headless: true });
const p = await b.newPage();
const result = await p.evaluate(async ({ url, sx, sy, sw, sh }) => {
  const img = new Image();
  await new Promise((r) => { img.onload = r; img.src = url; });
  const c = document.createElement("canvas");
  c.width = sw; c.height = sh;
  const ctx = c.getContext("2d");
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
  return c.toDataURL("image/png");
}, { url: dataUrl, sx: +sx, sy: +sy, sw: +sw, sh: +sh });
writeFileSync(out, Buffer.from(result.split(",")[1], "base64"));
await b.close();
console.log("cropped", out, sw + "x" + sh);
