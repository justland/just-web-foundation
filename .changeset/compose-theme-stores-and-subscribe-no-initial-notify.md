---
"@just-web/toolkits": minor
---

Add `composeThemeStores(stores, defaultTheme, themes)` for composing multiple theme stores into one. Waterfall read (first non-empty value), write-to-all, no initial notify on subscribe.

Theme store `subscribe(handler)` no longer calls the handler immediately. Handler is only invoked when the theme actually changes. Consumers needing the current value on mount must call `read()` explicitly. `observeThemeFromStores` and `createThemeHook` keep their initial sync for React integration.
