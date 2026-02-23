---
"@just-web/css": patch
---

Widen `CSSProperties` and `Properties` to union types so plain `Properties` (e.g. from React or csstype) are assignable.
Remove deprecation from `@just-web/css` `CSSProperties` (will be the name of the type in `@just-web/toolkits`).
