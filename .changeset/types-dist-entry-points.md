---
"@just-web/types": patch
---

Point package `exports`, `main`, and `types` at compiled `dist` artifacts and add a `build` script using `tsconfig.build.json`. Consumers should build the package so `dist` exists before publish or when dependents resolve these entry points.
