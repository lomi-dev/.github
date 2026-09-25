<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.png" />
  <source media="(prefers-color-scheme: light)" srcset="assets/hero-light.png" />
  <img src="assets/hero-dark.png" width="100%" alt="lomi. Tools for people who build with AI. Create at your own pace. lomi.dev" />
</picture>

<p align="center">
  <a href="https://lomi.dev"><b>Website</b></a> ·
  <a href="https://github.com/lomi-dev/lomi/releases/latest"><b>Download lomi</b></a> ·
  <a href="#build-on-lomi"><b>Build a plugin</b></a> ·
  <a href="#get-involved"><b>Get involved</b></a>
</p>

We make open-source tools for people who build software with AI. Friendly
form makes it easy to start; precision helps finish the work. Our desktop apps
run on your machine, with no account and no telemetry.

## <img src="assets/lomi-icon.png" width="32" height="32" align="top" alt="" /> lomi

**The open-source desktop workspace for terminal-driven development.**

<p>
  <a href="https://github.com/lomi-dev/lomi/releases/latest"><img src="https://img.shields.io/github/v/release/lomi-dev/lomi?label=release&color=C8FF3D&labelColor=0B0D0C" alt="Latest release" /></a>
  <a href="https://github.com/lomi-dev/lomi/releases"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Flomi-dev%2Flomi%2Fbadges%2Fdownloads.json&color=C8FF3D&labelColor=0B0D0C" alt="Package downloads" /></a>
  <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Linux%20%7C%20Windows-C8FF3D?labelColor=0B0D0C" alt="macOS, Linux and Windows" />
  <a href="https://github.com/lomi-dev/lomi/blob/main/LICENSE"><img src="https://img.shields.io/github/license/lomi-dev/lomi?color=C8FF3D&labelColor=0B0D0C" alt="Apache-2.0 license" /></a>
</p>

<a href="https://github.com/lomi-dev/lomi">
  <img src="assets/workspace.png" width="100%" alt="lomi: terminals, code and agents in one window. The Explorer, a TypeScript file in the editor and a native terminal with passing tests." />
</a>

Open a project folder and arrange real shells, a code editor, browser previews,
Git and AI chat side by side. Run Claude Code, Codex, Gemini CLI or any other
CLI agent in a lomi terminal, and let it work with your workspace over MCP once
you approve it.

- **Workspaces.** Dock terminals, editors, browsers and chats in any split layout.
  Terminals keep running while you switch between tasks.
- **Native terminals.** Real shells through `portable-pty`, rendered by xterm.js
  with WebGL. Bash, Zsh, Fish, PowerShell and WSL.
- **Coding agents.** lomi recognizes more than 30 CLI agents on macOS and Linux.
  Agent control gives a paired agent only the workspaces and permissions you
  approve.
- **Git.** Stage, commit, pull and push, browse history and review diffs. Nothing
  is committed or pushed without an explicit action.
- **Make it yours.** Light and dark themes, VS Code theme import, custom
  keybinds and trusted local plugins.

<details>
<summary><b>See more of lomi</b></summary>
<br />
<table>
  <tr>
    <td width="50%"><img src="assets/browser.png" alt="See the running app next to the agent: a browser panel previews a local dev server next to its terminal." /></td>
    <td width="50%"><img src="assets/agent-control.png" alt="Agents do the work. You set the limits: the Agent control settings page listing MCP clients." /></td>
  </tr>
  <tr>
    <td width="50%"><img src="assets/source-control.png" alt="Review every change. Then decide: Source Control history beside a commit and its diff." /></td>
    <td width="50%"><img src="assets/themes.png" alt="Light or dark. Or your own theme: lomi in its light theme." /></td>
  </tr>
</table>
<sub>Agent control currently requires a Mac with Apple Silicon.</sub>
</details>

Download lomi for macOS (signed and notarized), Windows or Linux (AppImage,
`.deb` or `.rpm`) from the [latest release](https://github.com/lomi-dev/lomi/releases/latest).
Built with Tauri 2, Rust, React and TypeScript.

## Build on lomi

Plugins add views, sidebars, commands, status bar items and themes to lomi. The
toolchain is in alpha, and each part lives in its own repository.

<table>
  <tr>
    <td width="33%" valign="top">
      <a href="https://github.com/lomi-dev/plugin-sdk"><b>plugin-sdk</b></a>
      <p>The plugin contract: TypeScript APIs, the shared React runtime, manifest validation and build helpers.</p>
      <a href="https://www.npmjs.com/package/@lomi-dev/plugin-sdk"><img src="https://img.shields.io/npm/v/@lomi-dev/plugin-sdk?label=npm&color=C8FF3D&labelColor=0B0D0C" alt="npm version of @lomi-dev/plugin-sdk" /></a>
    </td>
    <td width="33%" valign="top">
      <a href="https://github.com/lomi-dev/plugin-tools"><b>plugin-tools</b></a>
      <p>The <code>lomi-plugin</code> CLI: <code>check</code>, <code>build</code>, <code>doctor</code> and <code>package</code>, with testing helpers and an example plugin.</p>
      <a href="https://www.npmjs.com/package/@lomi-dev/plugin-cli"><img src="https://img.shields.io/npm/v/@lomi-dev/plugin-cli?label=npm&color=C8FF3D&labelColor=0B0D0C" alt="npm version of @lomi-dev/plugin-cli" /></a>
    </td>
    <td width="33%" valign="top">
      <a href="https://github.com/lomi-dev/create-lomi-plugin"><b>create-lomi-plugin</b></a>
      <p>The project generator, with panel, sidebar, command and theme templates and pinned SDK and CLI versions.</p>
      <a href="https://www.npmjs.com/package/create-lomi-plugin"><img src="https://img.shields.io/npm/v/create-lomi-plugin?label=npm&color=C8FF3D&labelColor=0B0D0C" alt="npm version of create-lomi-plugin" /></a>
    </td>
  </tr>
</table>

Plugins run as trusted local code. Importing a package never runs it: you review
it and choose **Trust and enable** first. Start `lomi --safe-mode` to skip
third-party plugins and themes.

## <img src="assets/simplevoice-icon.png" width="32" height="32" align="top" alt="" /> Simplevoice

**Local speech-to-text and voice typing for macOS, Linux and Windows.**

<p>
  <a href="https://github.com/lomi-dev/simplevoice/releases/latest"><img src="https://img.shields.io/github/v/release/lomi-dev/simplevoice?label=release&color=C8FF3D&labelColor=0B0D0C" alt="Latest Simplevoice release" /></a>
  <a href="https://github.com/lomi-dev/simplevoice/blob/main/LICENSE"><img src="https://img.shields.io/github/license/lomi-dev/simplevoice?color=C8FF3D&labelColor=0B0D0C" alt="Apache-2.0 license" /></a>
</p>

Speak anywhere, and the text lands in the active app. Transcribe offline with
Whisper, Parakeet or Zipformer models, or connect your own cloud provider key.
Recordings and history are stored on your device.
[Get Simplevoice](https://github.com/lomi-dev/simplevoice) or visit
[simplevoice.app](https://simplevoice.app).

## How we build

<table>
  <tr>
    <td width="50%" valign="top">
      <b>Local by default</b>
      <p>No account and no telemetry. API keys stay in your system credential store, and history stays on your device.</p>
    </td>
    <td width="50%" valign="top">
      <b>Visible agency</b>
      <p>Agents get only the workspaces and permissions you approve. Agent configuration changes only after a click, and lomi keeps a backup.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <b>Native where it counts</b>
      <p>Real shells through <code>portable-pty</code>, a Rust core on Tauri 2 and the system webview, packaged for macOS, Linux and Windows.</p>
    </td>
    <td width="50%" valign="top">
      <b>Open source</b>
      <p>Our apps and the plugin toolchain are Apache-2.0. Issues and pull requests are welcome.</p>
    </td>
  </tr>
</table>

## Get involved

- **Try lomi.** Download the [latest release](https://github.com/lomi-dev/lomi/releases/latest)
  and open your first project folder.
- **Report an issue.** Open it in the repository it concerns, for example
  [lomi issues](https://github.com/lomi-dev/lomi/issues).
- **Contribute.** Start with the [contributing notes](https://github.com/lomi-dev/lomi#contributing)
  in lomi. Each repository's README explains how to build and test it.
- **Follow along.** Sign up for the newsletter at [lomi.dev](https://lomi.dev).
  The site's source is in [lomi-web](https://github.com/lomi-dev/lomi-web).

<br />

<p align="center">
  <a href="https://lomi.dev"><img src="assets/lomi-mark.svg" width="48" height="48" alt="lomi" /></a>
  <br />
  <sub>Create at your own pace.</sub>
</p>
