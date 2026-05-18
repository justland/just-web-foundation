---
'@just-web/toolkits': minor
---

Add locale utilities: `getLocale`, `setLocale`, `observeLocale`

New `locale/` module providing get/set/observe for the document's `lang` attribute:

- `getLocale(defaultLocale?, element?)` — reads locale from `element.lang` > `navigator.language` > `defaultLocale`
- `setLocale(locale, element?)` — sets the `lang` attribute on an element
- `observeLocale(callback, element?)` — observes `lang` attribute changes via MutationObserver
