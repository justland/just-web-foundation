---
'@just-web/toolkits': major
---

Drop the CommonJS build. The package is now ESM only.

This follows `type-plus` 8.0.0, which is ESM only.
The `require` conditions are removed from `exports`, `main` and `types` now point to `./dist/index.js` and `./dist/index.d.ts`, and `dist` no longer contains `.cjs` or `.d.cts` files.
`@just-web/toolkits/env` keeps its `development` and `production` conditions, now resolving to ES modules.
`engines.node` is now `^20.19.0 || >=22.12.0`.

Migration:

- `import` from ESM code works as before.
- `require('@just-web/toolkits')` still works on Node.js 20.19+ and 22.12+, which load ES modules through `require()` without a flag.
- On older Node.js, upgrade Node.js, or load the package with `await import('@just-web/toolkits')`.
- Tools that read `dist/*.cjs` paths directly must switch to the `dist/*.js` files.
