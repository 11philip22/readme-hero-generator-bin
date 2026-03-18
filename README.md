<p align="center">
  <img src="assets/hero-banner.png" alt="hero pane" width="980">
</p>

<p align="center">
  <a href="#package-and-install"><img src="https://img.shields.io/badge/npm-pack-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm pack"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-CLI-5FA04E?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js CLI"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-8B5CF6?style=for-the-badge" alt="MIT License"></a>
  <a href="#package-and-install"><img src="https://img.shields.io/badge/CLI-Ready-F59E0B?style=for-the-badge&logo=gnubash&logoColor=white" alt="CLI Ready"></a>
</p>

<p align="center">
  <a href="#local-development">Local Development</a> · <a href="#package-and-install">Package And Install</a> · <a href="#options">Options</a> · <a href="#contributing">Contributing</a> · <a href="#support">Support</a> · <a href="#license">License</a>
</p>

---

Command-line PNG banner generator for creating README hero images.

## Local Development

```bash
npm install
```

Run directly from the repo:

```bash
node ./bin/hero-generator.js --name "My Project" --tags "cli, png, node"
```

The command prints the written PNG path on success.

## Package And Install

Create a tarball:

```bash
npm pack
```

Install the packed CLI globally:

```bash
npm install -g ./hero-generator-bin-0.1.0.tgz
```

Then run it as:

```bash
hero-generator --name "My Project" --tags "cli, png, node"
```

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
