---
"@just-web/toolkits": minor
---

Add `prefersColorSchemeThemeStore` for color-scheme-only theme composition.

Read-only theme store that reads from `prefers-color-scheme`. Themes must include only `light` and `dark` keys. Use in `composeThemeStores` as system preference fallback when user has not chosen a theme.
