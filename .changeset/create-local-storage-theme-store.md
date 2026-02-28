---
"@just-web/toolkits": minor
---

Add `createLocalStorageThemeStore(storageKey)` to create a theme store backed by localStorage for a fixed key. Refactor `getThemeFromLocalStorage`, `setThemeToLocalStorage`, and `observeThemeFromLocalStorage` to use the store internally. Export `LocalStorageThemeStore` and `LocalStorageThemeStoreOptions` types.
