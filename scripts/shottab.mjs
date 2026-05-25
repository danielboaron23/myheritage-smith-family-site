import { chromium } from "playwright-core";
const out = process.argv[2], tab = process.argv[3], width = Number(process.argv[4] ?? 1680);
const CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const b = await chromium.launch({executablePath:CHROME, headless:true});
const p = await b.newPage({viewport:{width,height:1000}, deviceScaleFactor:2});
await p.goto("http://localhost:3000/profile", {waitUntil:"networkidle"});
if (tab && tab !== "Details") { await p.getByRole("button", {name:new RegExp("^"+tab)}).first().click(); await p.waitForTimeout(500); }
await p.waitForTimeout(400);
await p.screenshot({path:out, fullPage:true});
await b.close(); console.log("saved", out, tab);
