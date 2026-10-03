---
"@just-web/toolkits": minor
---

Add `@just-web/toolkits/env` with an `isDev` constant resolved through export conditions

`isDev` lets libraries write development-only code that bundlers drop from production builds and that does not throw where `process` is undefined:

- `development` condition → `true`
- `production` condition → `false`
- no condition → `true` only when `process.env.NODE_ENV` is set and does not start with `prod` (a browser with no `process` gets `false`)

Every condition has both an `import` and a `require` entry, so CommonJS consumers get it too, which `esm-env` does not offer.
Libraries that use it must keep `@just-web/toolkits/env` external rather than bundling it into their own `dist`.
