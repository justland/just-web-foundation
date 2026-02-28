---
"@just-web/toolkits": minor
---

Add `createDataAttributeThemeStore(attributeName, element?)` to create a theme store that reads and writes theme via a data attribute. Refactor `getThemeByDataAttribute`, `setThemeByDataAttribute`, and `observeThemeByDataAttributes` to use the store internally. Export `DataAttributeThemeStore` and related option types. `observeThemeByDataAttributes` now returns `{ disconnect }` instead of a `MutationObserver`.
