# @just-web/toolkits

## 1.0.0

### Major Changes

- 85aac53: Simplify `observePrefersColorScheme` API from an object of theme handlers to a single callback.

  Migration:

  - Replace `observePrefersColorScheme({ light: (v) => ..., dark: (v) => ... })` with `observePrefersColorScheme((value) => ...)` where `value` is `'light'` or `'dark'`.

### Minor Changes

- 00db983: Add `JustClassName<States>` type.

### Patch Changes

- 9fd5a2a: Change `ClassNameProps` from type alias to interface.
- d1c78e6: Improve `DataAttribute` type so custom `data-*` attributes have better type inference.
