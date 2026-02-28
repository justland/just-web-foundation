---
"@just-web/toolkits": minor
---

Add theme storage utilities and `ThemeStorageOptions` type for persisting theme in localStorage or sessionStorage.

- Add `ThemeStorageOptions` type and `defineThemeStorageOptions()` for typed theme storage configuration.
- Add `getThemeFromLocalStorage()` and `setThemeToLocalStorage()` to read and write the theme key in localStorage at a configurable key.
- Add `getThemeFromSessionStorage()` and `setThemeToSessionStorage()` to read and write the theme key in sessionStorage at a configurable key.
- Add `observeThemeFromLocalStorage()` to observe theme changes in localStorage (e.g. from other tabs) with a handler and `disconnect()` to stop observing.
