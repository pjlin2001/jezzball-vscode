# Contributing to JezzBall for VS Code

Thanks for your interest in improving this little game! 🎉

## Getting set up

1. Fork and clone the repo.
2. Open the folder in VS Code: `code .`
3. Press <kbd>F5</kbd> to launch the **Extension Development Host**.
4. Run **JezzBall: Play** (or <kbd>Ctrl/Cmd</kbd> + <kbd>Alt</kbd> + <kbd>J</kbd>) in that window.

No build step or `npm install` is required to run the extension. `npm install` only
pulls in the optional packaging tools (`@vscode/vsce`) if you want to build a `.vsix`.

## Where the code lives

| Path | What it is |
| --- | --- |
| `extension.js` | The VS Code extension entry point (registers the view + command). |
| `media/jezzball.html` | **The entire game** — HTML, CSS, and JS in one self-contained file. |
| `media/jezzball-icon.*` | Marketplace icon (`.png`) and source (`.svg`). |
| `package.json` | Extension manifest (commands, views, keybindings, metadata). |

Most gameplay changes happen in `media/jezzball.html`. After editing, reload the
webview by re-running the command (or reload the dev-host window).

## Building a package

```bash
npm run package   # -> jezzball-<version>.vsix
```

## Submitting changes

1. Create a branch: `git checkout -b my-change`.
2. Make your change and test it in the Extension Development Host.
3. Update `CHANGELOG.md` under an `## [Unreleased]` heading.
4. Open a pull request with a clear description and, ideally, a screenshot or GIF.

## Reporting bugs / requesting features

Please use the [issue templates](https://github.com/YOUR_GITHUB_USERNAME/jezzball-vscode/issues/new/choose).

## Code style

Keep it simple and dependency-free. This is a fun, single-file game — let's keep it
easy for anyone to read and hack on.
