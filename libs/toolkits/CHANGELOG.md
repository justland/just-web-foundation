# @just-web/toolkits

## 1.0.0

### Major Changes

- 85aac53: Simplify `observePrefersColorScheme` API from an object of theme handlers to a single callback.

  Migration:

  - Replace `observePrefersColorScheme({ light: (v) => ..., dark: (v) => ... })` with `observePrefersColorScheme((value) => ...)` where `value` is `'light'` or `'dark'`.

### Minor Changes

- cd67ad4: Add `clsx` re-export for constructing class names conditionally.
- d6543d6: Add `CSSProperties` type and `defineCSSProperties` utility for typing CSS properties including custom properties (`--*`) when defining styles.
- 00db983: Add `JustClassName<RenderProps>` type.
- c99013c: Add `JustChildrenProps`, `JustChildren`, `JustChildrenFnProps` types and `resolveChildren` utility for render-props-aware `children` handling, mirroring the existing style and class-name APIs.
- 23ed7eb: Add `getPrefersColorScheme` and `observePrefersColorScheme` utilities.
- 128d599: Add `toDomStyle`
- a732880: Add `JustClassNameProps` and `JustClassNameFnProps` types.
- 21a8062: Add `JustStyleProps`, `JustStyle`, `JustStyleFnProps` types and `resolveStyle` utility for render-props-aware `style` handling, mirroring the existing class-name API.
- e09da01: Add `getCSSVariableValue`.
- 965ace5: Add `resolveClassName`.

### Patch Changes

- 9fd5a2a: Change `ClassNameProps` from type alias to interface.
- d1c78e6: Improve `DataAttribute` type so custom `data-*` attributes have better type inference.
