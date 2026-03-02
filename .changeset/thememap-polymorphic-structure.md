---
"@just-web/toolkits": major
---

Update `ThemeMap` to polymorphic structure to support metadata in stores.

Theme config values are now objects with `themeValue` instead of raw strings or arrays. `ThemeEntry.value` is the full object; use `entry.value.themeValue` for the theme value.

Migration:
- Update theme config from `{ light: 'theme-light' }` to `{ light: { themeValue: 'theme-light' } }`
- For arrays: `{ grayscale: ['a','b'] }` → `{ grayscale: { themeValue: ['a','b'] } }`
- Use `createThemeMap({ light: 'theme-light', dark: 'theme-dark' })` to wrap flat configs
- When reading `ThemeEntry`, use `entry.value.themeValue` instead of `entry.value` for the theme value
