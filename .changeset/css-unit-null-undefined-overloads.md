---
"@just-web/toolkits": patch
---

Add function overloads for null/undefined inputs in CSS unit utilities to preserve literal return types. `convertCssUnit`, `createCssUnitConverter`, `getCssUnit`, `isEffectivelyZero`, `parseCssNumber`, `parseCssValue`, `px2rem`, and `rem2px` now narrow correctly when given `null` or `undefined`.
