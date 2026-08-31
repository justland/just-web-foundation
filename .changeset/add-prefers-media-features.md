---
'@just-web/toolkits': minor
---

Add the remaining CSS user-preference media features alongside `prefers-color-scheme`

New `get*` / `observe*` pairs, following `getPrefersColorScheme` / `observePrefersColorScheme`:

- `getPrefersContrast`, `observePrefersContrast` — `no-preference | less | more | custom`
- `getPrefersReducedData`, `observePrefersReducedData` — `no-preference | reduce`
- `getPrefersReducedMotion`, `observePrefersReducedMotion` — `no-preference | reduce`
- `getPrefersReducedTransparency`, `observePrefersReducedTransparency` — `no-preference | reduce`

Each ships its value type: `Contrast`, `ReducedData`, `ReducedMotion`, `ReducedTransparency`.

Unlike `prefers-color-scheme`, which always resolves to `light` or `dark`, these features have a
real `no-preference` state, so it is returned as a value rather than collapsed into a default. The
optional first parameter is only the fallback used when `matchMedia` is unavailable (e.g. SSR).
