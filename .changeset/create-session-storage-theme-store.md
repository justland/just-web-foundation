---
"@just-web/toolkits": minor
---

Add `createSessionStorageThemeStore(storageKey)` to create a theme store backed by sessionStorage for a fixed key. Refactor `getThemeFromSessionStorage`, `setThemeToSessionStorage`, and `observeThemeFromSessionStorage` to use the store internally. Export `SessionStorageThemeStore` and `SessionStorageThemeStoreOptions` types.
