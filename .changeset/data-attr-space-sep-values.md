---
"@just-web/toolkits": minor
---

Add `retrieveThemeFromDataAttribute` and export `applyThemeToDataAttribute` with `options.separator` for space-separated or custom-separated data attribute values. Remove `resolveThemeFromDataAttribute` in favor of `retrieveThemeFromDataAttribute`, which returns a `ThemeEntry` and supports separator-based parsing. `dataAttributeThemeStore` now uses these utilities internally when `parse` and `stringify` are not provided.
