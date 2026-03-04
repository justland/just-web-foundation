---
"@just-web/toolkits": minor
---

Accept `null` as input where values originate from DOM/browser (e.g. `getAttribute`, `getItem`, refs). Unify higher-level API outputs to `undefined`.

- **Input**: `element`, `value`, `entry`, and `id` parameters now accept `null` (e.g. from refs, `getAttribute()`).
- **Output**: `useAttribute` returns `[string | undefined, setter]` (was `[string | null, ...]`). Theme store subscribe handlers receive `ThemeEntry | undefined` (was `ThemeEntry | undefined | null`).
- **Migration**: `useAttribute` consumers using `value === null` should use `value === undefined` or optional chaining. Theme store handlers: remove `| null` from handler param type.
- DOM-proximate APIs (`getAttribute`, `getDataAttribute`, `observeAttributes`) remain unchanged and continue to return/pass `null` per DOM spec.
