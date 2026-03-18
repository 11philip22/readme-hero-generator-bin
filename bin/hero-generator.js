#!/usr/bin/env node

import { Command } from "commander";
import { runCli, buildHelpText } from "../src/cli.js";

const program = new Command();

program
  .name("hero-generator")
  .description("Generate a README hero banner PNG from the command line.")
  .option("--name <text>", "Project name")
  .option("--subtitle <text>", "Subtitle or tagline")
  .option("--description <text>", "Project description")
  .option("--tags <csv>", "Comma-separated tags")
  .option("--accent <preset-or-hex>", "Accent preset name or #RRGGBB color")
  .option("--bg <style>", "Background style")
  .option("--mode <dark|light>", "Color mode")
  .option("--seed <value>", "Deterministic background seed")
  .option("--out <path>", "Output PNG path")
  .addHelpText("after", `\n${buildHelpText()}`);

program.parse();

try {
  const outputPath = await runCli(program.opts());
  process.stdout.write(`${outputPath}\n`);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
