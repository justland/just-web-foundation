---
"@just-web/toolkits": minor
---

Add `classNameThemeStore(element?)` for a theme store that reads and writes theme via element class names. Refactor `getThemeByClassName`, `setThemeByClassName`, and `observeThemeByClassName` to use the store internally. Export `ClassNameThemeStore`, `ClassNameThemeStoreGetOptions`, `ClassNameThemeStoreSetOptions`, and `ClassNameThemeStoreSubscribeOptions` types. `observeThemeByClassName` now returns `{ disconnect }` instead of a `MutationObserver`.
