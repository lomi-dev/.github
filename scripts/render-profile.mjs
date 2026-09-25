import { readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "../../lomi/node_modules/@playwright/test/index.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const out = resolve(here, "../profile/assets");
const fonts = join(root, "brandbook/fonts");
const url = (path) => pathToFileURL(path).href;

// The dark primary logo keeps the Lime capsule; the light variant is Ink only.
const wordmark = readFileSync(join(root, "brandbook/assets/logos/lomi-wordmark-transparent-tight.svg"), "utf8")
  .replace(/<title>.*?<\/title>/, "");
const logo = (theme) =>
  theme === "light" ? wordmark : wordmark.replace(/fill="currentColor"(?![\s\S]*fill="currentColor")/, 'fill="#C8FF3D"');

const heroHtml = (theme) => `
<section class="hero ${theme}" id="hero-${theme}">
  <div class="copy">
    <span class="logo">${logo(theme)}</span>
    <span class="eyebrow">Tools for people who build with AI</span>
    <h1>Create at your own pace.</h1>
    <span class="site">lomi.dev</span>
  </div>
  <div class="module back"></div>
  <div class="module front"><span class="capsule"></span></div>
</section>`;

const weights = [400, 500, 600, 700, 800]
  .map((w) => `@font-face{font-family:Manrope;font-weight:${w};src:url("${url(join(fonts, `Manrope-${w}.ttf`))}")}`)
  .join("\n");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
${weights}
* { box-sizing: border-box; margin: 0; }
body { background: transparent; font-family: Manrope, Arial, sans-serif; }
.hero { position: relative; width: 1280px; height: 440px; overflow: hidden; border-radius: 24px;
  background: var(--bg); color: var(--text); }
.dark { --bg: #0B0D0C; --text: #F7F8F3; --muted: #BEC3CC; --outline: #343943; --capsule: #C8FF3D; }
.light { --bg: #F7F8F3; --text: #0B0D0C; --muted: #535C56; --outline: #D5DAD2; --capsule: #C8FF3D; }
.copy { position: absolute; top: 72px; bottom: 64px; left: 80px; display: flex; flex-direction: column;
  align-items: flex-start; }
.logo svg { display: block; width: 156px; height: auto; color: var(--text); }
.eyebrow { margin-top: 64px; font-size: 16px; line-height: 20px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); }
h1 { margin-top: 16px; font-size: 64px; line-height: 68px; font-weight: 700; letter-spacing: -0.02em; }
.site { margin-top: auto; font-size: 20px; line-height: 24px; font-weight: 500; color: var(--muted); }
.module { position: absolute; border: 1.5px solid var(--outline); border-radius: 64px; }
.back { left: 1048px; top: 72px; width: 400px; height: 480px; }
.front { left: 928px; top: 208px; width: 520px; height: 400px; background: var(--bg); }
.capsule { position: absolute; left: 176px; top: -84px; width: 81px; height: 48px; border-radius: 999px;
  background: var(--capsule); }
.light .capsule { box-shadow: inset 0 0 0 1.5px #0B0D0C; }
</style></head><body>${["dark", "light"].map(heroHtml).join("\n")}</body></html>`;

const page_ = join(tmpdir(), "lomi-profile.html");
writeFileSync(page_, html);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 440 }, deviceScaleFactor: 2 });
await page.goto(url(page_));
await page.evaluate(() => document.fonts.ready);
for (const theme of ["dark", "light"]) {
  await page.locator(`#hero-${theme}`).screenshot({ path: join(out, `hero-${theme}.png`), omitBackground: true });
  console.log(`hero-${theme}.png`);
}
await browser.close();
