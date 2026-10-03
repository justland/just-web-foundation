# @just-web/toolkits

[@just-web/toolkits][@just-web/toolkits] is a toolkit for working with web technologies.

## Install

```sh
npm install @just-web/toolkits

yarn add @just-web/toolkits

pnpm add @just-web/toolkits
```

## `@just-web/toolkits/env`

`isDev` is a constant that tells whether the code runs in development.
Use it for development-only code, such as warnings about misuse:

```ts
import { isDev } from '@just-web/toolkits/env'

if (isDev) {
  console.warn('...')
}
```

It is resolved through the package's export conditions, so bundlers can drop the branch from production builds:

| Condition     | `isDev`                                                                |
| ------------- | ---------------------------------------------------------------------- |
| `development` | `true`                                                                 |
| `production`  | `false`                                                                |
| none          | `true` only when `process.env.NODE_ENV` is set and does not start with `prod` |

Vite and webpack 5 set the `development` / `production` condition from the build mode.
In Node.js, pass `--conditions=development` or `--conditions=production`.
A browser with no `process` and no condition gets `false`, so development-only code stays quiet.

Every condition has an `import` (ESM) and a `require` (CJS) entry, and they share one type declaration.
This is the technique [`esm-env`](https://github.com/benmccann/esm-env) uses, with the CommonJS half that `esm-env` lacks.

> [!IMPORTANT]
> If you publish a library that uses `isDev`, keep `@just-web/toolkits/env` external.
> Do not bundle or inline it into your library's `dist`.
> Otherwise the condition is resolved when your library is built, not when the app that uses it is built.

[@just-web/toolkits]: https://github.com/justland/just-web-foundation/tree/main/libs/toolkits
