# @just-web/css

## 0.8.3

### Patch Changes

- 1303f62: Fix `Properties` the same way as `CSSProperties`.

## 0.8.2

### Patch Changes

- 8ac9f2d: Fix `CSSProperties` to support type param usage

## 0.8.1

### Patch Changes

- 534a4b7: Widen `CSSProperties` and `Properties` to union types so plain `Properties` (e.g. from React or csstype) are assignable.
  Remove deprecation from `@just-web/css` `CSSProperties` (will be the name of the type in `@just-web/toolkits`).

## 0.8.0

### Minor Changes

- 08f72f4: Add new `Properties` interface and `defineProperties` function with improved type parameters for CSS properties. The old `CSSProperties` interface and `defineCSSProperties` function are now deprecated but remain available for backward compatibility.

  Re-export other types from `csstype` package.

- 3b79e92: Build with `tsdown`
- 59a92f4: Add `defineProperties`, deprecated `defineCSSProperties`.
  Add `Properties` type, deprecated `CSSProperties` type.

  Update `StyleProps` type to include generic type parameters using `Properties` type instead of `CSSProperties` type.

  These changes improve alignment with the `csstype` package.

## 0.7.0

### Minor Changes

- c411967: Add `px2num` converter utility.

### Patch Changes

- 1d4c1db: Convert interface to type.
  Atomic, composable, and not extendable types are better defined as type.
  It allows tools like `docgen` to generate documentation for the types.

## 0.6.1

### Patch Changes

- 29f32cc: The return type of `px2rem` and `rem2px` should be `number` instead of `string`.

## 0.6.0

### Minor Changes

- 4a5ac34: Add `px2rem` convertor.
- fe03e6d: Add `rem2px` convertor.

## 0.5.0

### Minor Changes

- f73df8d: Add `allowCustom` option to `getThemeByDataAttribute` and `observeThemeByDataAttributes` to allow custom themes.

  Fix `getAttribute` return type.

## 0.4.0

### Minor Changes

- 1773699: Add `toDOMStyle()`

## 0.3.0

### Minor Changes

- fb4c174: Add CJS support.

## 0.2.0

### Minor Changes

- ba555ea: Added `getCSSPropValues` and `defineCSSProperties`

## 0.1.0

### Minor Changes

- 7056524: Support `className`, `data-*` and `prefers-color-scheme` for theming.
  Add utilities

  - `getAttribute` and `observeAttributes`
  - `getDataAttribute` and `observeDataAttribute`

- 4c1b218: Move `ClassNameProps`, `CSSProperties`, and `StyleProps` to `@just-web/css`
