---
"@just-web/toolkits": minor
---

Add theme storage utilities and `ThemeStorageOptions` type for persisting theme in localStorage.

- Add `ThemeStorageOptions` type and `defineThemeStorageOptions()` for typed theme storage configuration.
- Add `getThemeFromLocalStorage()` to read and validate the stored theme key against a themes map.
- Add `setThemeToLocalStorage()` to write the theme key (and value) to localStorage at a configurable key.
