<p align="center">
  <img src="assets/hero-banner.png" alt="hero pane" width="980">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/hero-generator-bin"><img src="https://img.shields.io/npm/v/hero-generator-bin?style=for-the-badge&logo=npm&logoColor=white&color=CB3837" alt="npm version"></a>
  <a href="#installation"><img src="https://img.shields.io/badge/Install%20with-npm%20i%20--g%20hero--generator--bin-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="Install from npm"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-CLI-5FA04E?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js CLI"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-3B82F6?style=for-the-badge" alt="MIT License"></a>
</p>

<p align="center">
  <a href="#installation">Installation</a> · <a href="#quickstart">Quickstart</a> · <a href="#local-development">Local Development</a> · <a href="#options">Options</a> · <a href="#contributing">Contributing</a> · <a href="#support">Support</a> · <a href="#license">License</a>
</p>

---

Command-line PNG banner generator for creating README hero images.

## Installation

Install the published CLI from npm:

```bash
npm install -g hero-generator-bin
```

## Quickstart

Generate a banner PNG:

```bash
hero-generator --name "My Project" --subtitle "Command-line PNG banner generator" --description "Generate deterministic README hero images from the terminal." --tags "node.js, cli, png" --accent ORANGE --bg ZEBRA --mode dark --out ./hero-banner.png
```

Open the CLI help:

```bash
hero-generator --help
```

## Local Development

```bash
npm install
```

Run directly from the repo:

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/cool-feature`)
3. Commit your changes (`git commit -m 'Add some cool feature'`)
4. Push to the branch (`git push origin feature/cool-feature`)
5. Open a Pull Request

## Support

If this crate saves you time or helps your work, support is appreciated:

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/11philip22)

## License

This project is licensed under the MIT License; see the [license](https://opensource.org/licenses/MIT) for details.
