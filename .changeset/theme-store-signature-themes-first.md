---
"@just-web/toolkits": major
---

Change theme store creation functions to `fn(themes, options)` signature. `themes` is now the first parameter; store-specific config (element, storageKey, cookieName, etc.) is the second.

Affected: `classNameThemeStore`, `dataAttributeThemeStore`, `localStorageThemeStore`, `sessionStorageThemeStore`, `cookieThemeStore`, `inMemoryThemeStore`, `composeThemeStores`.

Migration:
- `classNameThemeStore({ themes, element? })` → `classNameThemeStore(themes, { element? })`
- `dataAttributeThemeStore({ themes, attributeName, element? })` → `dataAttributeThemeStore(themes, { attributeName, element? })`
- `localStorageThemeStore({ themes, storageKey })` → `localStorageThemeStore(themes, { storageKey })`
- `sessionStorageThemeStore({ themes, storageKey })` → `sessionStorageThemeStore(themes, { storageKey })`
- `cookieThemeStore({ themes, cookieName, path?, ... })` → `cookieThemeStore(themes, { cookieName, path?, ... })`
- `inMemoryThemeStore<Themes>()` → `inMemoryThemeStore(themes)`
- `composeThemeStores(stores, themes, defaultTheme?)` → `composeThemeStores(themes, [store1, ...], { defaultTheme? })`
