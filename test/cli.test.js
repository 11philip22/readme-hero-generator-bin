import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const binPath = path.resolve("bin/hero-generator.js");

test("CLI writes a PNG to the requested output path", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "hero-generator-"));
  const outputPath = path.join(tempDir, "banner.png");
  const result = spawnSync(process.execPath, [binPath, "--name", "Smoke Test", "--seed", "smoke", "--out", outputPath], {
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr);
  assert.ok(fs.existsSync(outputPath));
  assert.ok(fs.statSync(outputPath).size > 1024);
});

test("CLI exits non-zero for invalid input", () => {
  const result = spawnSync(process.execPath, [binPath, "--mode", "sepia"], { encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Invalid mode/);
});
