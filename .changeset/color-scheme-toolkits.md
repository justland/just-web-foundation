---
'@just-web/toolkits': minor
---

Add support for the CSS `color-scheme` property.

- `getColorScheme()`, `observeColorScheme()`, and `useColorScheme()` (from `@just-web/toolkits/react`) report the scheme an element renders in: `'light'` or `'dark'`.
  They follow `color-scheme`, so they reflect a theme the user picked, which `prefers-color-scheme` does not.
- `ColorSchemePropertyValue` types the values of the property (`'normal'`, `'light dark'`, `'only light'`, and others).
  `ColorScheme` is unchanged.

The `prefers-color-scheme` helpers now say in their docs that they report the OS preference, not the scheme the page renders in, and inside an iframe the scheme of the `<iframe>` element.
A new Storybook page shows theme switching with `color-scheme`: set it in CSS (or with Tailwind CSS v4 `scheme-*` classes) keyed on the `data-theme` attribute the theme stores write.
