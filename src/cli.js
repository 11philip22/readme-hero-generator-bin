import fs from "node:fs/promises";
import path from "node:path";
import { ACCENTS, BACKGROUNDS, DEFAULTS } from "./config.js";
import { registerFonts } from "./fonts.js";
import { normalizeRenderOptions } from "./options.js";
import { renderBannerToBuffer } from "./renderer.js";

export async function runCli(rawOptions) {
  registerFonts();
  const options = normalizeRenderOptions(rawOptions);
  const png = renderBannerToBuffer(options);
  await fs.mkdir(path.dirname(options.out), { recursive: true });
  await fs.writeFile(options.out, png);
  return options.out;
}

export function buildHelpText() {
  return [
    `Accent presets: ${ACCENTS.map((accent) => accent.name).join(", ")}`,
    `Backgrounds: ${BACKGROUNDS.join(", ")}`,
    `Defaults: bg=${DEFAULTS.bg}, mode=${DEFAULTS.mode}, accent=${DEFAULTS.accent}`,
  ].join("\n");
}
