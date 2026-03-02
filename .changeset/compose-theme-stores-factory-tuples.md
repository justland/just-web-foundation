---
"@just-web/toolkits": minor
---

Add store factory tuple support to `composeThemeStores`. Each store position can now be a concrete store or a factory config `[factory]` or `[factory, options]`. Factories receive `themes` and optional options, enabling inline store creation with proper options autocomplete per position.

New exports: `ThemeStoreFactory`, `ComposeThemeStoreEntry`.
