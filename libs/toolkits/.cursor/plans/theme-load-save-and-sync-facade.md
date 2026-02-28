# Theme load/save callbacks and multi-source sync facade

**Status:** Draft. Some issues still to be resolved. Implementing **API for saving theme to custom store** first, then returning to this plan.

---

## Current state

- **Storage (local/session)**: Sync get/set/observe; storage format is fixed (JSON `{ theme, value }` at a key). [theme.types.ts](../../src/theme/theme.types.ts), [get-theme-from-local-storage.ts](../../src/theme/get-theme-from-local-storage.ts), [set-theme-to-local-storage.ts](../../src/theme/set-theme-to-local-storage.ts).
- **ClassName / DataAttribute**: Sync get/set/observe; DOM is the source of truth (no persistence). [get-theme-by-class-name.ts](../../src/theme/get-theme-by-class-name.ts), [set-theme-by-class-name.ts](../../src/theme/set-theme-by-class-name.ts), [observe-theme-by-data-attributes.ts](../../src/theme/observe-theme-by-data-attributes.ts).

Storage and DOM serve different roles: **persistence** (where to store theme across reloads) vs **reflection** (how to apply theme to the UI). The facade will treat both as "sources" that can be read from and written to.

---

## 1. Load/save for storage-backed theme

Goal: let the user control **where** and **how** theme data is stored (e.g. different key, different format, or backend).

### Option A: Sync load/save callbacks (recommended baseline)

- Extend options with optional:
  - `load?: () => ThemeResult<Themes> | undefined`
  - `save?: (result: ThemeResult<Themes>) => void`
- If `load` is provided, getters use it instead of reading from `localStorage`/`sessionStorage`; otherwise keep current behavior.
- If `save` is provided, setters use it instead of writing to storage; otherwise keep current behavior.
- **API stays sync.** Backend use case: user's `save` can fire a request and ignore the result ("fire and forget"), or they accept that the API does not wait for the server.

**Pros:** No breaking change; simple; works with existing observe (handler still sync).
**Cons:** No built-in way to "wait for backend save" from the API.

### Option B: Async load/save

- `load?: () => Promise<ThemeResult<Themes> | undefined>`
- `save?: (result) => Promise<void>`
- Getters become async (`getThemeFromLocalStorageAsync` or return `Promise<...>`). Observe needs an async initial load and a way to handle in-flight updates.

**Pros:** Backend can be awaited.
**Cons:** All consumers become async; observe pattern is trickier (ordering, cancellation); breaking change if we replace sync get/set.

### Option C: Hybrid (callbacks may return Promises)

- `load?: () => ThemeResult<Themes> | undefined | Promise<...>`
- `save?: (result) => void | Promise<void>`
- Internally `await` when a Promise is returned; otherwise run sync.

**Pros:** Sync storage stays sync; backend can return Promise.
**Cons:** Two code paths; observe must support both (e.g. "when load resolves, call handler"); type complexity.

**Recommendation:** Start with **Option A (sync callbacks)**. Keep the API sync and document that for backends the app should call `setTheme*(...)` and then perform the async save (e.g. in the same event handler). If demand appears for first-class async (e.g. "disable UI until theme loaded"), add a separate async helper or a small "async storage adapter" that wraps the sync API and returns Promises.

---

## 2. API shape for load/save

Introduce a shared type for the value passed to save and returned from load (already effectively exists as the getter return type):

```ts
// theme.types.ts
export type ThemeResult<Themes extends ThemeMap> =
  | { theme: keyof Themes; value: Themes[keyof Themes] }
  | undefined
```

Extend `ThemeStorageOptions` (or a new type used by get/set/observe) with optional callbacks:

```ts
export type ThemeStorageOptions<Themes extends ThemeMap> = {
  storageKey: string
  themes: Themes
  theme?: keyof Themes | null | undefined
  // Optional: override where/how data is read/written
  load?: () => ThemeResult<Themes>
  save?: (result: ThemeResult<Themes>) => void
}
```

- **getThemeFromLocalStorage** / **getThemeFromSessionStorage**: if `options.load` is set, call it and validate against `themes` (and fallback to `theme`); otherwise use current `localStorage`/`sessionStorage` + `storageKey` logic.
- **setThemeToLocalStorage** / **setThemeToSessionStorage**: if `options.save` is set, call it with the same `ThemeResult` shape; otherwise use current storage write. Validation (theme in map, etc.) stays in the setter; it only calls `save` with a valid result (or undefined for "clear").
- **observeThemeFromLocalStorage** / **observeThemeFromSessionStorage**: no change to handler signature; `notify()` still calls the existing getter, which now may use `load()`. For **cross-tab** behavior: when using custom `load`/`save`, storage events no longer apply; document that "observe" only re-runs when the app calls the getter (e.g. no built-in cross-tab for custom storage unless the user implements it).

Serialization is implicit: `load` returns already-deserialized `ThemeResult`; `save` receives it. If the user wants a different wire format, they serialize in `save` and deserialize in `load` (e.g. to a backend or a different JSON shape).

---

## 3. ClassName and DataAttribute in the picture

They are **reflection** mechanisms, not persistence:

- **ClassName**: get/set/observe read and write `element.className`; no load/save needed.
- **DataAttribute**: same for a `data-*` attribute.

So:

- **No load/save callbacks** for class name or data attribute APIs; they already expose get/set/observe and don't persist.
- In the **facade**, they act as **sources** and **targets**: the facade can "read current theme" from one of them and "apply theme" by calling the existing setThemeByClassName / setThemeByDataAttribute. No API change required for those modules.

---

## 4. Facade: sync theme across multiple sources

Goal: one place to "get" theme, "set" theme, and "observe" theme while keeping multiple backends in sync.

### 4.1 Abstract "theme source" contract

Define a small interface that both storage and DOM can implement:

```ts
// Concept (to be placed in theme.types.ts or a new theme-source.types.ts)
export type ThemeSource<Themes extends ThemeMap> = {
  getTheme: (options: { themes: Themes; defaultTheme?: keyof Themes }) => ThemeResult<Themes>
  setTheme: (options: { themes: Themes; result: ThemeResult<Themes> }) => void
  subscribe?: (handler: (result: ThemeResult<Themes>) => void) => () => void
}
```

- **Storage adapter** (local/session): `getTheme` = current get logic (or `load`); `setTheme` = current set logic (or `save`); `subscribe` = current observe (storage event → handler). With custom `load`/`save`, subscribe can be no-op or user-provided.
- **ClassName adapter**: `getTheme` wraps `getThemeByClassName` (and maps to `ThemeResult`); `setTheme` wraps `setThemeByClassName`; `subscribe` wraps `observeThemeByClassName`.
- **DataAttribute adapter**: same with get/set/observe by data attribute.

Adapters can be thin wrappers in the same theme folder (e.g. `adapters/theme-source-local-storage.ts`) that take options (storageKey, themes, load, save) and return `ThemeSource<Themes>`.

### 4.2 Facade API

Single entry point, e.g. `createThemeSync` or `syncTheme`:

- **Config**: list of sources (e.g. "localStorage", "sessionStorage", "className", "dataAttribute", or custom `ThemeSource`).
- **Behavior**:
  - **getTheme()**: optionally take a "preferred" source or priority; return one source's getTheme() result (e.g. first that has a value, or explicit priority).
  - **setTheme(result)**: call setTheme on **all** configured sources so they stay in sync.
  - **subscribe(handler)**: register handler; subscribe to all sources that support subscribe; on any source's notification, optionally re-read and then call handler once (and optionally write to other sources to keep them in sync, depending on "single source of truth" semantics).

Conflict resolution (e.g. two sources report different values) can be doc-only at first: e.g. "first source wins" or "setTheme is the source of truth after init." Later, a small policy (e.g. "preferred source for reads") can be added without changing the facade shape.

### 4.3 Where this lives

- New file(s) under `libs/toolkits/src/theme/`, e.g.:
  - `theme-source.types.ts` – `ThemeSource`, `ThemeResult` (if not in theme.types.ts)
  - `adapters/` or inline – localStorage, session storage, class name, data attribute adapters
  - `create-theme-sync.ts` (or `theme-sync.ts`) – facade factory
- Export from main toolkits index.

---

## 5. Implementation order

1. **Types**: Add `ThemeResult` and extend options with optional `load`/`save` in theme.types.ts.
2. **Storage get/set**: Implement load/save in get/set for local and session storage (and their observe still use the getter, so they automatically use `load`).
3. **Tests + stories**: Extend existing stories or add ones for "custom load/save" (e.g. in-memory object, or mock backend that stores in a variable).
4. **Facade**: Define `ThemeSource`, implement adapters for local storage, session storage, class name, data attribute; add `createThemeSync`; document behavior (sync order, subscribe semantics, no built-in cross-tab for custom storage).
5. **Docs**: Document that for backend, use sync `save` and perform async in the app; optionally add a short "async adapter" example.

---

## 6. Summary

| Aspect                        | Recommendation                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Load/save**                 | Optional sync `load`/`save` on storage options; keep API sync.                                                                                          |
| **Async**                     | Not required for v1; app can do async after set; add async helper later if needed.                                                                       |
| **ClassName / DataAttribute** | No load/save; they remain get/set/observe as reflection; used as sources/targets in the facade.                                                        |
| **Facade**                    | `ThemeSource` contract + adapters for local, session, class, data-attr + `createThemeSync` to get/set/subscribe and sync across all configured sources. |

This keeps the current API stable, adds flexibility for custom storage and format via callbacks, and unifies multi-source sync behind a single facade without forcing async.
