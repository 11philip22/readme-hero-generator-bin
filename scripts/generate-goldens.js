import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { registerFonts } from "../src/fonts.js";
import { normalizeRenderOptions } from "../src/options.js";
import { renderBannerToBuffer } from "../src/renderer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const fixtures = JSON.parse(fs.readFileSync(path.join(rootDir, "test/fixtures/golden-fixtures.json"), "utf8"));

registerFonts();
fs.mkdirSync(path.join(rootDir, "test/goldens"), { recursive: true });

for (const fixture of fixtures) {
  const png = renderBannerToBuffer(normalizeRenderOptions(fixture.options));
  fs.writeFileSync(path.join(rootDir, `test/goldens/${fixture.name}.png`), png);
}
