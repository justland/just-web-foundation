---
"@just-web/toolkits": major
---

Rename `defaultTheme` to `theme` across theme utilities for consistency.

Migration:
- Replace `defaultTheme` with `theme` in options for `getThemeByClassName`, `getThemeByDataAttribute`, `observeThemeByClassName`, `observeThemeByDataAttributes`, `useThemeByClassName`, `classNameThemeStore` get/subscribe, and `dataAttributeThemeStore` get/subscribe.
