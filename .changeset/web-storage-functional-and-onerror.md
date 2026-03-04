---
"@just-web/toolkits": minor
---

Add functional web storage decomposition and optional `onError` callback for theme persistence.

- Export `readWebStorage`, `writeWebStorage`, `readLocalStorage`, `writeLocalStorage`, `readSessionStorage`, and `writeSessionStorage` for composable theme storage operations.
- `localStorageThemeStore` and `sessionStorageThemeStore` now delegate to these functions.
- Add optional `onError?: (error: unknown) => void` to both stores and write functions. Invoked when `setItem`/`removeItem` throws (e.g. quota exceeded, `SecurityError` in private mode). Silent failure when not provided.
