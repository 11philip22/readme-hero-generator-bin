import test from "node:test";
import assert from "node:assert/strict";
import { ACCENTS } from "../src/config.js";
import {
  normalizeAccent,
  normalizeBackground,
  normalizeFilename,
  normalizeMode,
  normalizeRenderOptions,
  parseTags,
} from "../src/options.js";

test("parseTags trims whitespace and drops empty entries", () => {
  assert.deepEqual(parseTags(" one, two ,, three "), ["one", "two", "three"]);
});

test("normalizeAccent resolves preset names", () => {
  assert.deepEqual(normalizeAccent("cyan"), ACCENTS[1]);
});

test("normalizeAccent accepts hex values", () => {
  assert.deepEqual(normalizeAccent("#ABCDEF"), { name: "CUSTOM", color: "#abcdef" });
});

test("normalizeAccent rejects invalid values", () => {
  assert.throws(() => normalizeAccent("cyan-ish"), /Invalid accent/);
});

test("normalizeBackground validates allowed values", () => {
  assert.equal(normalizeBackground("grid"), "GRID");
  assert.throws(() => normalizeBackground("plaid"), /Invalid background/);
});

test("normalizeMode validates allowed values", () => {
  assert.equal(normalizeMode("LIGHT"), "light");
  assert.throws(() => normalizeMode("sepia"), /Invalid mode/);
});

test("normalizeFilename mirrors the browser filename behavior", () => {
  assert.equal(normalizeFilename("  Project Title  "), "project-title-hero-banner.png");
  assert.equal(normalizeFilename(""), "banner-hero-banner.png");
});

test("normalizeRenderOptions fills defaults", () => {
  const options = normalizeRenderOptions({ seed: "defaults" });
  assert.equal(options.name, "Project Title");
  assert.equal(options.subtitle, "Short project tagline");
  assert.equal(options.description, "A brief description of your project and what it does.");
  assert.equal(options.bgStyle, "WAVE");
  assert.equal(options.colorMode, "dark");
  assert.deepEqual(options.tags, ["TAG1", "TAG2", "TAG3"]);
  assert.deepEqual(options.accent, ACCENTS[0]);
});

test("normalizeRenderOptions creates deterministic pattern seeds for identical seeds", () => {
  const left = normalizeRenderOptions({ bg: "VOID", seed: "same-seed" });
  const right = normalizeRenderOptions({ bg: "VOID", seed: "same-seed" });
  assert.deepEqual(left.patternSeed, right.patternSeed);
});
