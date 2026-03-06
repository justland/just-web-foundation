# @just-web/toolkits

## 3.0.0

### Major Changes

- bce34d6: `observeAttributes` and `observeDataAttributes` now return an unsubscribe function instead of `MutationObserver`. The functions also support SSR by returning a no-op function when `document` is unavailable.

## 2.1.0

### Minor Changes

- 86d98b1: Add `ColorScheme` type.
- 7f576b3: Accept `null` as input where values originate from DOM/browser (e.g. `getAttribute`, `getItem`, refs). Unify higher-level API outputs to `undefined`.

  - **Input**: `element`, `value`, `entry`, and `id` parameters now accept `null` (e.g. from refs, `getAttribute()`).
  - **Output**: `useAttribute` returns `[string | undefined, setter]` (was `[string | null, ...]`). Theme store subscribe handlers receive `ThemeEntry | undefined` (was `ThemeEntry | undefined | null`).
  - **Migration**: `useAttribute` consumers using `value === null` should use `value === undefined` or optional chaining. Theme store handlers: remove `| null` from handler param type.
  - DOM-proximate APIs (`getAttribute`, `getDataAttribute`, `observeAttributes`) remain unchanged and continue to return/pass `null` per DOM spec.

## 2.0.0

### Major Changes

- e81d0ca: Refactor data attribute theme store to use pure parse and stringify.

  - Remove `retrieveThemeFromDataAttribute` and `applyThemeToDataAttribute`.
  - Add `parseDataAttribute` and `stringifyDataAttribute` with `options.separator` for space or comma-separated values.
  - `dataAttributeThemeStore` now uses `ParseStoredTheme` and `StringifyStoredTheme` types. Default parse/stringify use space separator; curry with `{ separator: ',' }` for comma-separated.
  - Write logic aligns with `stringifyClassName`: remove all theme values from existing, add entry's value.

  Migration:

  - Replace `retrieveThemeFromDataAttribute(themes, element, attr, { separator })` with `parseDataAttribute(themes, element.getAttribute(attr) ?? undefined, { separator })`.
  - Replace `applyThemeToDataAttribute(themes, element, attr, entry, { separator })` with `element.setAttribute(attr, stringifyDataAttribute(themes, element.getAttribute(attr) ?? undefined, entry, { separator }))` (or use `dataAttributeThemeStore` with curried parse/stringify).

### Minor Changes

- cfffaa4: Export `parseClassName`, `stringifyClassName`, `readClassName`, `writeClassName`, and `subscribeClassName` for className theme handling. `classNameThemeStore` now delegates to these functions and supports optional `parse` and `stringify` options for customization.
- 7e6e9d2: Add functional form for cookie and prefers-color-scheme theme stores. Export `readCookieTheme`, `writeCookieTheme`, `readPrefersColorSchemeTheme`, and `subscribePrefersColorSchemeTheme` for composable theme handling. `cookieThemeStore` and `prefersColorSchemeThemeStore` now delegate to these functions.
- dd65b13: Add optional `parse` option to `cookieThemeStore`, `localStorageThemeStore`, and `sessionStorageThemeStore` for custom parsing of stored theme strings. Export `ParseStoredTheme` type from theme entry point for typing custom parsers.
- f49019d: Add functional web storage decomposition and optional `onError` callback for theme persistence.

  - Export `readWebStorage`, `writeWebStorage`, `readLocalStorage`, `writeLocalStorage`, `readSessionStorage`, and `writeSessionStorage` for composable theme storage operations.
  - `localStorageThemeStore` and `sessionStorageThemeStore` now delegate to these functions.
  - Add optional `onError?: (error: unknown) => void` to both stores and write functions. Invoked when `setItem`/`removeItem` throws (e.g. quota exceeded, `SecurityError` in private mode). Silent failure when not provided.

## 1.0.0

### Major Changes

- de53da6: Simplify `observePrefersColorScheme` API from an object of theme handlers to a single callback.

  Migration:

  - Replace `observePrefersColorScheme({ light: (v) => ..., dark: (v) => ... })` with `observePrefersColorScheme((value) => ...)` where `value` is `'light'` or `'dark'`.

- d08ce79: Rename `defaultTheme` to `theme` across theme utilities for consistency.

  Migration:

  - Replace `defaultTheme` with `theme` in options for `getThemeByClassName`, `getThemeByDataAttribute`, `observeThemeByClassName`, `observeThemeByDataAttributes`, `useThemeByClassName`, `classNameThemeStore` get/subscribe, and `dataAttributeThemeStore` get/subscribe.

- 1ec767e: Change `themeEntry` signature to `(themes, theme)`. `themes` is now the first parameter; the theme key is the second. Aligns with other theme APIs like `composeThemeStores`.

  Migration:

  - `themeEntry(theme, themes)` → `themeEntry(themes, theme)`
  - `themeEntry('grayscale', themes)` → `themeEntry(themes, 'grayscale')`

- c4b247a: Change theme store creation functions to `fn(themes, options)` signature. `themes` is now the first parameter; store-specific config (element, storageKey, cookieName, etc.) is the second.

  Affected: `classNameThemeStore`, `dataAttributeThemeStore`, `localStorageThemeStore`, `sessionStorageThemeStore`, `cookieThemeStore`, `inMemoryThemeStore`, `composeThemeStores`.

  Migration:

  - `classNameThemeStore({ themes, element? })` → `classNameThemeStore(themes, { element? })`
  - `dataAttributeThemeStore({ themes, attributeName, element? })` → `dataAttributeThemeStore(themes, { attributeName, element? })`
  - `localStorageThemeStore({ themes, storageKey })` → `localStorageThemeStore(themes, { storageKey })`
  - `sessionStorageThemeStore({ themes, storageKey })` → `sessionStorageThemeStore(themes, { storageKey })`
  - `cookieThemeStore({ themes, cookieName, path?, ... })` → `cookieThemeStore(themes, { cookieName, path?, ... })`
  - `inMemoryThemeStore<Themes>()` → `inMemoryThemeStore(themes)`
  - `composeThemeStores(stores, themes, defaultTheme?)` → `composeThemeStores(themes, [store1, ...], { defaultTheme? })`

### Minor Changes

- 0fe533b: Add `clsx` re-export for constructing class names conditionally.
- 11a1d8e: Add `CSSProperties` type and `defineCSSProperties` utility for typing CSS properties including custom properties (`--*`) when defining styles.
- d7c7177: Add `getRemToPxScale` utility to read the current document's rem-to-px scale (root font size). Returns 16 in non-browser environments.
- 8a752c5: Add `JustClassName<RenderProps>` type.
- bb12ac5: Add `usePrefersColorScheme` React hook for subscribing to system color scheme preference.

  Returns `'light'` or `'dark'` based on the `prefers-color-scheme` media query and re-renders when the user changes their OS or browser light/dark setting.

- 9c1f583: Add `JustChildrenProps`, `JustChildren`, `JustChildrenFnProps` types and `resolveChildren` utility for render-props-aware `children` handling, mirroring the existing style and class-name APIs.
- 24d20a8: Add `classNameThemeStore(element?)` for a theme store that reads and writes theme via element class names. Refactor `getThemeByClassName`, `setThemeByClassName`, and `observeThemeByClassName` to use the store internally. Export `ClassNameThemeStore`, `ClassNameThemeStoreGetOptions`, `ClassNameThemeStoreSetOptions`, and `ClassNameThemeStoreSubscribeOptions` types. `observeThemeByClassName` now returns `{ disconnect }` instead of a `MutationObserver`.
- 9dabe0a: Add `getPrefersColorScheme` and `observePrefersColorScheme` utilities.
- 35e13e2: Add `composeThemeStores(stores, themes, defaultTheme)` for composing multiple theme stores into one. Waterfall read (first non-empty value), write-to-all, no initial notify on subscribe.

  Theme store `subscribe(handler)` no longer calls the handler immediately. Handler is only invoked when the theme actually changes. Consumers needing the current value on mount must call `read()` explicitly. `observeThemeFromStores` and `createThemeHook` keep their initial sync for React integration.

- 131e4fd: Add store factory tuple support to `composeThemeStores`. Each store position can now be a concrete store or a factory config `[factory]` or `[factory, options]`. Factories receive `themes` and optional options, enabling inline store creation with proper options autocomplete per position.

  New exports: `ThemeStoreFactory`, `ComposeThemeStoreEntry`.

- f31f7a3: Add `cookieThemeStore` and `getThemeFromCookie` for theme persistence in cookies. Enables SSR-readable theme (avoid flash of wrong theme in Next.js, Remix, etc.). Supports options: `cookieName`, `path`, `maxAge`, `sameSite`, `secure`. Cross-tab sync is not supported.
- a670afb: Augment `Properties` type to support custom CSS properties (variables) with `--` prefix via `csstype` module augmentation.
- 4212673: Add `toDomStyle`
- 24d20a8: Add `dataAttributeThemeStore(attributeName, element?)` for a theme store that reads and writes theme via a data attribute. Refactor `getThemeByDataAttribute`, `setThemeByDataAttribute`, and `observeThemeByDataAttributes` to use the store internally. Export `DataAttributeThemeStore` and related option types. `observeThemeByDataAttributes` now returns `{ disconnect }` instead of a `MutationObserver`.
- 2a581a0: Add `JustClassNameProps` and `JustClassNameFnProps` types.
- ff819f0: Add `JustStyleProps`, `JustStyle`, `JustStyleFnProps` types and `resolveStyle` utility for render-props-aware `style` handling, mirroring the existing class-name API.
- 24d20a8: Add `localStorageThemeStore(storageKey)` for a theme store backed by localStorage for a fixed key. Refactor `getThemeFromLocalStorage`, `setThemeToLocalStorage`, and `observeThemeFromLocalStorage` to use the store internally. Export `LocalStorageThemeStore` and `LocalStorageThemeStoreOptions` types.
- 16eaa69: Add `prefersColorSchemeThemeStore` for color-scheme-only theme composition.

  Read-only theme store that reads from `prefers-color-scheme`. Themes must include only `light` and `dark` keys. Use in `composeThemeStores` as system preference fallback when user has not chosen a theme.

- 19551af: Add `getCSSVariableValue`.
- 4ec3deb: Add `resolveClassName`.
- 24d20a8: Add `sessionStorageThemeStore(storageKey)` for a theme store backed by sessionStorage for a fixed key. Refactor `getThemeFromSessionStorage`, `setThemeToSessionStorage`, and `observeThemeFromSessionStorage` to use the store internally. Export `SessionStorageThemeStore` and `SessionStorageThemeStoreOptions` types.
- f017c9e: Add theme storage utilities and `ThemeStorageOptions` type for persisting theme in localStorage or sessionStorage.

  - Add `ThemeStorageOptions` type and `defineThemeStorageOptions()` for typed theme storage configuration.
  - Add `getThemeFromLocalStorage()` and `setThemeToLocalStorage()` to read and write the theme key in localStorage at a configurable key.
  - Add `getThemeFromSessionStorage()` and `setThemeToSessionStorage()` to read and write the theme key in sessionStorage at a configurable key.
  - Add `observeThemeFromLocalStorage()` to observe theme changes in localStorage (e.g. from other tabs) with a handler and `disconnect()` to stop observing.
  - Add `observeThemeFromSessionStorage()` to observe theme changes in sessionStorage with a handler and `disconnect()` to stop observing.

- 4dd565d: Add `appendId`.
- 908c49e: Widen `CSSProperties` to a union type so plain `Properties` (e.g. `React.CSSProperties`) are assignable.
- 5a61a07: Add React hooks and theme setter utilities.

  - **React** (`@just-web/toolkits/react`): Add `useAttribute` and `useThemeByClassName` hooks for subscribing to element attributes and theme-by-class-name in React.
  - **Theme**: Add `setThemeByClassName` and `setThemeByDataAttribute` for applying theme to a root element. Export `theme.types` for theme type definitions.
  - Add support of `null` for `element` parameters.

### Patch Changes

- 4852fe6: Change `ClassNameProps` from type alias to interface.
- 4e30251: Improve `DataAttribute` type so custom `data-*` attributes have better type inference.
- 186a10d: Fix `createThemeHook` / `useThemeStores` to unsubscribe from composed theme stores when the last React listener unmounts. Previously, subscriptions were never cleaned up, causing orphaned listeners and wasted work when switching views or stories. The hook now re-subscribes when a new listener mounts after a full unsubscribe.
- 03c7683: Fix CSSProperties to support type params
- 3e71a5e: Support `ThemeMap` (array theme values) in `observeThemeByClassName` and call the handler with `defaultTheme` when no theme class matches.
- 6b4e901: Simplify `observeThemeByDataAttributes` options type: single signature with `allowCustom?: true` and `defaultTheme?: string`. Removes overload duplication; behavior unchanged.
- 10052bc: Make `ThemeStore.set` optional to support read-only stores and add a console warning in `getThemeFromStore` when the stored theme value is invalid.
