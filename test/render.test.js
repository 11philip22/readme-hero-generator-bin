import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { registerFonts } from "../src/fonts.js";
import { normalizeRenderOptions } from "../src/options.js";
import { renderBannerToBuffer } from "../src/renderer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

registerFonts();

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

test("seeded procedural backgrounds render deterministically", () => {
  for (const bg of ["WAVE", "VOID", "ZEBRA"]) {
    const first = renderBannerToBuffer(normalizeRenderOptions({ bg, seed: `seed-${bg}` }));
    const second = renderBannerToBuffer(normalizeRenderOptions({ bg, seed: `seed-${bg}` }));
    assert.equal(sha256(first), sha256(second), `${bg} should be stable for the same seed`);
  }
});

test("unseeded output is still a valid PNG", () => {
  const png = renderBannerToBuffer(normalizeRenderOptions({ bg: "WAVE" }));
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.ok(png.length > 1024);
});

test("golden fixtures remain byte-for-byte stable", () => {
  const fixtures = JSON.parse(fs.readFileSync(path.join(__dirname, "fixtures/golden-fixtures.json"), "utf8"));

  for (const fixture of fixtures) {
    const expected = fs.readFileSync(path.join(__dirname, `goldens/${fixture.name}.png`));
    const actual = renderBannerToBuffer(normalizeRenderOptions(fixture.options));
    assert.equal(sha256(actual), sha256(expected), `${fixture.name} drifted from its golden image`);
  }
});
