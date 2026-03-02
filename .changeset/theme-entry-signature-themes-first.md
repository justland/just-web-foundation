---
"@just-web/toolkits": major
---

Change `themeEntry` signature to `(themes, theme)`. `themes` is now the first parameter; the theme key is the second. Aligns with other theme APIs like `composeThemeStores`.

Migration:
- `themeEntry(theme, themes)` → `themeEntry(themes, theme)`
- `themeEntry('grayscale', themes)` → `themeEntry(themes, 'grayscale')`
