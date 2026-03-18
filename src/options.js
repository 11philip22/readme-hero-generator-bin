import path from "node:path";
import { ACCENTS, BACKGROUNDS, DEFAULTS } from "./config.js";
import { createPatternSeed } from "./patterns.js";
import { createRandomSource } from "./prng.js";

const HEX_RE = /^#(?:[0-9a-fA-F]{6})$/;

export function parseTags(input) {
  return String(input)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function normalizeFilename(name) {
  const normalizedName = String(name ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return `${normalizedName || "banner"}-hero-banner.png`;
}

export function normalizeAccent(input) {
  const raw = String(input ?? DEFAULTS.accent).trim();
  const upper = raw.toUpperCase();
  const preset = ACCENTS.find((accent) => accent.name === upper);
  if (preset) return { name: preset.name, color: preset.color };
  if (HEX_RE.test(raw)) return { name: "CUSTOM", color: raw.toLowerCase() };
  throw new Error(
    `Invalid accent "${input}". Use one of ${ACCENTS.map((accent) => accent.name).join(", ")} or a #RRGGBB color.`,
  );
}

export function normalizeBackground(input) {
  const value = String(input ?? DEFAULTS.bg).trim().toUpperCase();
  if (!BACKGROUNDS.includes(value)) {
    throw new Error(`Invalid background "${input}". Use one of ${BACKGROUNDS.join(", ")}.`);
  }
  return value;
}

export function normalizeMode(input) {
  const value = String(input ?? DEFAULTS.mode).trim().toLowerCase();
  if (value !== "dark" && value !== "light") {
    throw new Error(`Invalid mode "${input}". Use "dark" or "light".`);
  }
  return value;
}

export function normalizeRenderOptions(input = {}) {
  const name = input.name ?? DEFAULTS.name;
  const subtitle = input.subtitle ?? DEFAULTS.subtitle;
  const description = input.description ?? DEFAULTS.description;
  const bgStyle = normalizeBackground(input.bg);
  const colorMode = normalizeMode(input.mode);
  const accent = normalizeAccent(input.accent);
  const tagsInput = input.tags ?? DEFAULTS.tags;
  const tags = parseTags(tagsInput);
  const out = input.out ? path.resolve(input.out) : path.resolve(normalizeFilename(name));
  const random = createRandomSource(input.seed);
  const patternSeed = createPatternSeed(random);

  return {
    name,
    subtitle,
    description,
    tagsInput,
    tags,
    accent,
    bgStyle,
    colorMode,
    patternSeed,
    seed: input.seed,
    out,
  };
}
