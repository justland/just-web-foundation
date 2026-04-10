# @just-web/types

## 0.2.2

### Patch Changes

- 059cb4f: Add missing dist files.

## 0.2.1

### Patch Changes

- 9b11ec4: Point package `exports`, `main`, and `types` at compiled `dist` artifacts and add a `build` script using `tsconfig.build.json`. Consumers should build the package so `dist` exists before publish or when dependents resolve these entry points.

## 0.2.0

### Minor Changes

- e46cb69: Add new `DataTestIdProps` and `DataMetricsProps` types for more granular data attribute type definitions.

## 0.1.1

### Patch Changes

- 70eba0c: Remove `rewriteRelativeImportExtensions` setting.

  Exporting `src` directly requires consumer to use the same setting.

## 0.1.0

### Minor Changes

- 4c1b218: Move `ClassNameProps`, `CSSProperties`, and `StyleProps` to `@just-web/css`

### Patch Changes

- fec5e9a: Migrate to `just-web-foundation`.
