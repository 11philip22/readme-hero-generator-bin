# hero-generator-bin

Command-line PNG banner generator matching the behavior of `../hero-generator`.

## Install

```bash
npm install
```

## Usage

```bash
node ./bin/hero-generator.js --name "My Project" --tags "cli, png, node"
```

The command prints the written PNG path on success.

## Options

- `--name <text>`
- `--subtitle <text>`
- `--description <text>`
- `--tags <csv>`
- `--accent <preset-or-hex>`
- `--bg <style>`
- `--mode <dark|light>`
- `--seed <value>`
- `--out <path>`

Use `--help` to see the supported accent presets and background styles.
