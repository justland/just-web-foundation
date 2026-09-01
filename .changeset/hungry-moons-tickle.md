---
'@just-web/toolkits': patch
'@just-web/css': patch
---

Depend on `type-plus@^7.6.2` instead of an `8.0.0-beta` prerelease.

Both packages pinned an exact `type-plus` 8 prerelease as a runtime dependency — `8.0.0-beta.7`
in `@just-web/css` and `8.0.0-beta.8` in `@just-web/toolkits` — so every consumer of a `latest`
release was pulled onto a prerelease, and a consumer of both got two copies of it. `type-plus`
`latest` is 7.6.2; its 8.x line is still in prerelease and its current beta has a CJS packaging
defect. The emitted declarations and JavaScript are unchanged.
