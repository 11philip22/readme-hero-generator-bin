import path from "node:path";
import { fileURLToPath } from "node:url";
import { GlobalFonts } from "@napi-rs/canvas";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONT_DIR = path.resolve(__dirname, "../assets/fonts");

let registered = false;

export function registerFonts() {
  if (registered) return;

  const regular = path.join(FONT_DIR, "JetBrainsMono-Regular.ttf");
  const bold = path.join(FONT_DIR, "JetBrainsMono-Bold.ttf");

  const regularOk = GlobalFonts.registerFromPath(regular, "JetBrains Mono");
  const boldOk = GlobalFonts.registerFromPath(bold, "JetBrains Mono");

  if (!regularOk || !boldOk) {
    throw new Error(`Failed to register bundled fonts from ${FONT_DIR}.`);
  }

  registered = true;
}
