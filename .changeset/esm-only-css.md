---
'@just-web/css': minor
---

Drop the CommonJS build. The package is now ESM only.

This follows `type-plus` 8.0.0, which is ESM only.
`main` and `types` now point to `./esm/index.mjs` and `./esm/index.d.mts`, and the `cjs` folder is no longer published.
`engines.node` is now `^20.19.0 || >=22.12.0`.
It is a minor bump because the package is still `0.x`.

Migration:

- `import` from ESM code works as before.
- `require('@just-web/css')` still works on Node.js 20.19+ and 22.12+, which load ES modules through `require()` without a flag.
- On older Node.js, upgrade Node.js, or load the package with `await import('@just-web/css')`.
