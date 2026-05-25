import { chromium } from "playwright-core";
import { readFileSync } from "fs";
const CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const file = process.argv[2];
const b64 = readFileSync(file).toString("base64");
const dataUrl = "data:image/png;base64,"+b64;
const browser = await chromium.launch({executablePath:CHROME, headless:true});
const p = await browser.newPage();
await p.setContent("<canvas id=c></canvas>");
const samples = await p.evaluate(async (url)=>{
  const img = new Image();
  await new Promise((res,rej)=>{img.onload=res;img.onerror=rej;img.src=url;});
  const c=document.getElementById("c");c.width=img.width;c.height=img.height;
  const ctx=c.getContext("2d");ctx.drawImage(img,0,0);
  const pts=[[0.08,0.3],[0.5,0.5],[0.9,0.5]];
  return pts.map(([fx,fy])=>{const x=Math.floor(img.width*fx),y=Math.floor(img.height*fy);const d=ctx.getImageData(x,y,1,1).data;return "#"+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,"0")).join("");});
}, dataUrl);
console.log("samples:", samples.join(" "));
await browser.close();
