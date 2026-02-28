---
"@just-web/toolkits": minor
---

Add `dataAttributeThemeStore(attributeName, element?)` for a theme store that reads and writes theme via a data attribute. Refactor `getThemeByDataAttribute`, `setThemeByDataAttribute`, and `observeThemeByDataAttributes` to use the store internally. Export `DataAttributeThemeStore` and related option types. `observeThemeByDataAttributes` now returns `{ disconnect }` instead of a `MutationObserver`.
