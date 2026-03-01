---
"@just-web/toolkits": major
---

Simplify `observePrefersColorScheme` API from an object of theme handlers to a single callback.

Migration:
- Replace `observePrefersColorScheme({ light: (v) => ..., dark: (v) => ... })` with `observePrefersColorScheme((value) => ...)` where `value` is `'light'` or `'dark'`.
