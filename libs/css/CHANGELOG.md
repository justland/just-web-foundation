# @just-web/css

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
