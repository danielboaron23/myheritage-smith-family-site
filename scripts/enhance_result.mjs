import { chromium } from "playwright-core";
const out = process.argv[2] ?? "/tmp/enhance_result.png";
const width = Number(process.argv[3] ?? 1280);
const CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await chromium.launch({executablePath:CHROME, headless:true});
const p = await b.newPage({viewport:{width,height:1000}, deviceScaleFactor:2});
await p.goto("http://localhost:3000/enhance", {waitUntil:"networkidle"});
// click first sample thumbnail
await p.locator('button:has(img[alt="Sample photo"])').first().click();
await p.waitForTimeout(2600); // processing -> result
await p.screenshot({path:out, fullPage:false});
await b.close(); console.log("saved", out);
