---
'@just-web/css': patch
---

Document that `getPrefersColorTheme()` and `observePrefersColorScheme()` report the OS preference, not the scheme the page renders in.
They do not change when the page sets `color-scheme`, and inside an iframe they report the scheme of the `<iframe>` element.
For the rendered scheme, use `getColorScheme()` or `observeColorScheme()` from `@just-web/toolkits`.
