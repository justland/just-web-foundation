---
"@just-web/toolkits": minor
---

Add functional form for cookie and prefers-color-scheme theme stores. Export `readCookieTheme`, `writeCookieTheme`, `readPrefersColorSchemeTheme`, and `subscribePrefersColorSchemeTheme` for composable theme handling. `cookieThemeStore` and `prefersColorSchemeThemeStore` now delegate to these functions.
