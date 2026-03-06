---
"@just-web/toolkits": major
---

`observeAttributes` and `observeDataAttributes` now return an unsubscribe function instead of `MutationObserver`. The functions also support SSR by returning a no-op function when `document` is unavailable.
