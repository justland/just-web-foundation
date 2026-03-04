---
"@just-web/toolkits": major
---

Refactor data attribute theme store to use pure parse and stringify.

- Remove `retrieveThemeFromDataAttribute` and `applyThemeToDataAttribute`.
- Add `parseDataAttribute` and `stringifyDataAttribute` with `options.separator` for space or comma-separated values.
- `dataAttributeThemeStore` now uses `ParseStoredTheme` and `StringifyStoredTheme` types. Default parse/stringify use space separator; curry with `{ separator: ',' }` for comma-separated.
- Write logic aligns with `applyThemeToClassName`: remove all theme values from existing, add entry's value.

Migration:
- Replace `retrieveThemeFromDataAttribute(themes, element, attr, { separator })` with `parseDataAttribute(themes, element.getAttribute(attr) ?? undefined, { separator })`.
- Replace `applyThemeToDataAttribute(themes, element, attr, entry, { separator })` with `element.setAttribute(attr, stringifyDataAttribute(themes, element.getAttribute(attr) ?? undefined, entry, { separator }))` (or use `dataAttributeThemeStore` with curried parse/stringify).
