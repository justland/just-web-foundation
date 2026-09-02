---
'@just-web/toolkits': patch
'@just-web/css': patch
---

Depend on `type-plus@^8.0.0-beta.10` — a range on the 8.x line, not an exact pin.

These packages previously pinned an exact `type-plus` 8 prerelease, so the dependency could
never resolve forward and consumers were stuck on `8.0.0-beta.8`, which has a CJS packaging
defect: the package is `"type": "module"` and its `cjs/` build carries no `{"type":"commonjs"}`
marker, so `require()` fails with `ReferenceError: exports is not defined in ES module scope`.
The previous release moved to `^7.6.2` to escape that, which was the wrong fix — the 8.x line is
where these packages belong.

`^8.0.0-beta.10` resolves to `>=8.0.0-beta.10 <9.0.0-0`, so the CJS fix in `beta.10` and every
later 8.x release — prerelease or stable — flow in without another pin. The emitted declarations
and JavaScript are unchanged.
