---
name: hero-generator-cli
description: Generate new README banner PNGs with the published hero-generator-bin npm package. Use when you need to install or run the `hero-generator` command, build a banner from a project's name, subtitle, description, and tags, choose valid accent/background/mode combinations, or keep output stable with `--seed`. Do not use this skill to edit an existing PNG in place because the tool only creates new files.
---

# Hero Generator CLI

Use the published npm package and the `hero-generator` command to create a new banner PNG from text inputs.

Use the option rules in [references/cli-reference.md](references/cli-reference.md) instead of rediscovering valid presets from source every time.

## Quick Start

- Install the package globally: `npm install -g hero-generator-bin`
- Run the published command: `hero-generator ...`
- Prefer an explicit `--out <path>` so the caller knows where the PNG lands.
- Treat stdout as the written file path.
- After generating a banner, verify the file exists and is non-empty before concluding success.

Example:

```bash
hero-generator \
  --name "My Project" \
  --subtitle "Command-line PNG banner generator" \
  --description "Generate deterministic README hero images from the terminal." \
  --tags "node.js, cli, png" \
  --accent ORANGE \
  --bg ZEBRA \
  --mode dark \
  --seed readme-hero \
  --out ./hero-banner.png
```

## Banner Workflow

1. Gather the text for the banner: `name`, optional `subtitle`, optional `description`, optional comma-separated `tags`.
2. Choose styling from the allowed values in [references/cli-reference.md](references/cli-reference.md).
3. Set `--seed` whenever reproducibility matters. The same seed produces the same procedural background.
4. Run the CLI and inspect the written PNG.
5. If the request is to edit an existing PNG in place, do not use this tool for that. Generate a replacement banner instead.
6. If the command is missing, install `hero-generator-bin` before trying again.

## Common Uses

- Create a first banner for a project README.
- Recreate a banner with a fixed `--seed` so the background stays stable.
- Swap accents, backgrounds, or light/dark mode to generate alternatives.
- Generate a replacement banner when an older banner should be replaced.

## Troubleshooting

- If `hero-generator` is not found, install the package with `npm install -g hero-generator-bin`.
- If the command exits with a validation error, compare the provided accent, background, and mode values against [references/cli-reference.md](references/cli-reference.md).
- If you need the same result again later, always pass `--seed`; without it, procedural backgrounds can vary between runs.
- If the output path is omitted, look for `<normalized-name>-hero-banner.png` in the current working directory.

## Constraints

- Use only the documented accent presets or a `#RRGGBB` hex accent.
- Use only the documented background styles and `dark|light` modes.
- Omit `--out` only when the default filename based on the project name is acceptable.
- Do not claim the CLI can update or extend an existing banner PNG; it only renders a new file.
- Keep the skill lean; load [references/cli-reference.md](references/cli-reference.md) when exact values or defaults matter.
