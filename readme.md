# just-web-foundation

Monorepo for shared web foundation libraries used across Justland projects.

## Table of Contents

- [Libraries](#libraries)
- [Development](#development)

## Libraries

Projects under [`libs/`](libs/) are published packages in the `@just-web` scope:

| Package | Description |
| ------- | ----------- |
| [**@just-web/types**](libs/types/) | Common types for web applications. See [libs/types/readme.md](libs/types/readme.md). |
| [**@just-web/css**](libs/css/) | CSS types and utilities. See [libs/css/readme.md](libs/css/readme.md). |
| [**@just-web/toolkits**](libs/toolkits/) | Toolkits for web applications (class names, styles, theme, units). See [libs/toolkits/readme.md](libs/toolkits/readme.md). |

## Development

- **Scripts**: From the repo root, use `pnpm run <script>` (e.g. `pnpm run build`, `pnpm run test`). Filter by package with `pnpm --filter ./libs/<name>` or the shortcuts `pnpm types`, `pnpm css`, `pnpm tk` (toolkits).
- **Tooling**: pnpm workspaces, Turborepo, Changesets, Biome, Vitest.

License: MIT.
