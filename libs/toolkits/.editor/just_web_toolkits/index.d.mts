import { ReactNode } from "react";
import { AnyRecord, CreateTuple } from "type-plus";
import clsx from "clsx";
import { Properties } from "csstype";

//#region src/attributes/data-attribute.d.ts

/**
 * Well-known data attribute names used in web development.
 * Includes testing, analytics, Radix/shadcn-style component state,
 * positioning, and common UI/design-system attributes.
 * The `data-${string}` tail allows any custom data attribute.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-* MDN: data-* (HTML)}
 * @see {@link https://testing-library.com/docs/queries/bytestid/ Testing Library: ByTestId}
 * @see {@link https://css-tricks.com/a-complete-guide-to-data-attributes/ CSS-Tricks: A Complete Guide to Data Attributes}
 * @see {@link https://www.components.build/data-attributes Components.build: Data Attributes}
 * @see {@link https://www.radix-ui.com/primitives/docs/guides/styling Radix UI: Styling (data attributes)}
 */
type DataAttribute = 'data-testid' | 'data-metrics' | 'data-state' | 'data-orientation' | 'data-side' | 'data-align' | 'data-placement' | 'data-loading' | 'data-disabled' | 'data-selected' | 'data-checked' | 'data-expanded' | 'data-highlighted' | 'data-active' | 'data-open' | 'data-pressed' | 'data-value' | 'data-id' | 'data-name' | 'data-type' | 'data-label' | 'data-key' | 'data-index' | 'data-position' | 'data-variant' | 'data-size' | 'data-theme' | 'data-color' | 'data-intent' | (`data-${string}` & {});
//#endregion
//#region src/attributes/get-attribute.d.ts
/**
 * Gets the value of an attribute from an element.
 *
 * @param qualifiedName - The name of the attribute to get
 * @param element - The element to get the attribute from. Defaults to `document.documentElement`
 * @returns The attribute value cast to type T, or null if the attribute doesn't exist
 *
 * @example
 * ```ts
 * // Get theme from document root
 * const theme = getAttribute('data-theme')
 *
 * // Get data-testid from a specific element
 * const testId = getAttribute('data-testid', element)
 * ```
 */
declare function getAttribute<T extends string>(qualifiedName: T, element: Element | null | undefined): string | null;
//#endregion
//#region src/attributes/get-data-attribute.d.ts
/**
 * Gets the value of a data attribute from an element.
 *
 * @param qualifiedName - The name of the data attribute to get
 * @param element - The element to get the data attribute from. Defaults to `document.documentElement`
 * @returns The data attribute value, or null if the attribute doesn't exist
 *
 * @example
 */
declare function getDataAttribute(qualifiedName: DataAttribute, element?: Element | null | undefined): string | null;
//#endregion
//#region src/attributes/observe-attribute.d.ts
/**
 * Observes attributes changes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping attribute names to handler functions.
 * @param element - The element to observe. Defaults to `document.documentElement`.
 * @returns {MutationObserver} The observer instance, which can be used to disconnect the observer.
 *
 * @example
 * ```ts
 * const observer = observeAttributes({
 *   'data-theme': (attr, value) => console.log(`Theme changed to: ${value}`),
 *   'class': (attr, value) => console.log(`class changed to: ${value}`)
 * });
 *
 * // Later, to stop observing:
 * observer.disconnect();
 * ```
 */
declare function observeAttributes<T extends string>(handlers: Record<string, (value: T | null) => void>, element: Element | null | undefined): MutationObserver;
//#endregion
//#region src/attributes/observe-data-attribute.d.ts
/**
 * Observes changes to `data-*` attributes on an element and calls corresponding handlers.
 *
 * @param options - Configuration options
 * @param options.handlers - An object mapping `data-*` attribute names to handler functions.
 * @param options.element - The element to observe. Defaults to `document.documentElement`
 * @returns {MutationObserver} The observer instance, which can be used to disconnect the observer
 *
 * @example
 * ```ts
 * const observer = observeDataAttributes({
 *   handlers: {
 *     'data-theme': (value) => console.log(`Theme changed to: ${value}`),
 *     'data-mode': (value) => console.log(`Mode changed to: ${value}`)
 *   }
 * });
 *
 * // Later, to stop observing:
 * observer.disconnect();
 * ```
 */
declare function observeDataAttributes<T extends string, K extends `data-${string}`>(handlers: Record<K, (value: T | null) => void>, element?: Element | null | undefined): MutationObserver;
//#endregion
//#region src/children/just-children.d.ts
/**
 * Props interface for components that accept a render-props-aware `children`.
 *
 * Use this when defining component props that support the same `children` contract as {@link JustChildren}:
 * a static value, a resolver function that receives render props (including existing `children`), or `undefined`.
 *
 * @typeParam RenderProps - Record type for render props. When `children` is a function, it receives `RenderProps` merged with `{ children?: ReactNode }`.
 */
interface JustChildrenProps<RenderProps extends AnyRecord = AnyRecord> {
  children?: JustChildren<RenderProps> | undefined;
}
/**
 * A `children` type that can be static or computed from render props.
 *
 * - `ReactNode`: The value is used as the children (replaces existing `children` in render props when provided).
 * - `undefined`: Uses the existing `children` from render props as-is.
 * - `function`: Process the render props and return the desired `children`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ children?: ReactNode }`.
 */
type JustChildren<RenderProps extends AnyRecord = AnyRecord> = ((renderProps: JustChildrenFnProps<RenderProps>) => ReactNode | undefined) | ReactNode | undefined;
/**
 * The props type for `JustChildren` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 */
type JustChildrenFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {
  children?: ReactNode | undefined;
};
//#endregion
//#region src/children/resolve-children.d.ts
declare function resolveChildren<RenderProps extends AnyRecord = AnyRecord>(renderProps: JustChildrenFnProps<RenderProps>, children?: JustChildren<RenderProps>): ReactNode | undefined;
//#endregion
//#region src/class-name/class-name-props.d.ts
/**
 * Interface for component props that include a className property.
 * The className property accepts a string value for CSS class names.
 */
interface ClassNameProps {
  className?: string | undefined;
}
//#endregion
//#region src/class-name/just-class-name.d.ts
/**
 * Props interface for components that accept a render-props-aware `className`.
 *
 * Use this when defining component props that support the same `className` contract as {@link JustClassName}:
 * a static string, a resolver function that receives render props (including existing `className`), or `undefined`.
 *
 * @typeParam RenderProps - Record type for render props. When `className` is a function, it receives `RenderProps` merged with `{ className?: string }`.
 */
interface JustClassNameProps<RenderProps extends AnyRecord = AnyRecord> {
  className?: JustClassName<RenderProps> | undefined;
}
/**
 * A `className` type that can be static or computed from render props.
 *
 * - `string`: The value is appended to the existing `className` in render props.
 * - `undefined`: Resets the `className` to `undefined`, removing existing `className`.
 * - `function`: Process the render props and return the desired `className`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ className?: string }`.
 */
type JustClassName<RenderProps extends AnyRecord = AnyRecord> = ((renderProps: JustClassNameFnProps<RenderProps>) => string | undefined) | string | undefined;
/**
 * The props type for `JustClassName` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 */
type JustClassNameFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {
  className?: string | undefined;
};
//#endregion
//#region src/class-name/resolve-class-name.d.ts
declare function resolveClassName<RenderProps extends AnyRecord = AnyRecord>(renderProps: JustClassNameFnProps<RenderProps>, className?: JustClassName<RenderProps>): string | undefined;
//#endregion
//#region src/color-scheme/get-prefers-color-scheme.d.ts
/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Even if the browser preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * @returns 'light' or 'dark'
 */
declare function getPrefersColorScheme(): "light" | "dark";
//#endregion
//#region src/color-scheme/observe-prefers-color-scheme.d.ts
/**
 * Observes system color scheme preference changes and calls handlers when they occur.
 *
 * @param handler - A function that is called when the color scheme preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * // Observe light/dark mode changes
 * const cleanup = observePrefersColorScheme((value) => console.log('Color scheme changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
declare function observePrefersColorScheme(handler: (value: 'light' | 'dark') => void): () => void;
//#endregion
//#region src/style/css-properties.d.ts
/** Custom CSS properties (variables) with `--` prefix. */
type CustomProperties = {
  [k: `--${string}`]: string;
};
/**
 * Widens CSS properties to support custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 * Defined as a union so plain Properties (e.g. from React) are assignable.
 */
interface CSSProperties<TLength = string | number, TTime = string & {}> extends Properties<TLength, TTime>, CustomProperties {}
//#endregion
//#region src/style/define-css-properties.d.ts
/**
 * Defines CSS properties including custom properties.
 * This function is used to properly type CSS properties when defining styles,
 * especially when using CSS custom properties (variables).
 *
 * @param style - CSS properties object that can include both standard and custom properties
 * @returns The same style object with proper typing
 *
 * @example
 * ```ts
 * defineCSSProperties({
 *   color: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * ```
 */
declare function defineCSSProperties<TLength = 0 | (string & {}), TTime = string & {}>(style: CSSProperties<TLength, TTime>): CSSProperties;
//#endregion
//#region src/style/get-css-variable-value.d.ts
/**
 * Retrieves CSS custom property values from the specified element.
 *
 * @param element - The HTML element to get property values from
 * @param props - CSS custom property names to retrieve, must be in the format `--property-name`
 * @returns Array of property values corresponding to the requested custom properties
 */
declare function getCSSVariableValue<Props extends Array<`--${string}`>>(element: HTMLElement, ...props: Props): CreateTuple<Props['length'], string>;
/**
 * Retrieves CSS custom property values from `document.body`.
 *
 * @param props - CSS custom property names to retrieve, must be in the format `--property-name`
 * @returns Array of property values corresponding to the requested custom properties
 */
declare function getCSSVariableValue<Props extends Array<`--${string}`>>(...props: Props): CreateTuple<Props['length'], string>;
//#endregion
//#region src/style/just-style.d.ts
type DefaultLength$1 = 0 | (string & {});
type DefaultTime$1 = string & {};
/**
 * Props interface for components that accept a render-props-aware `style`.
 *
 * Use this when defining component props that support the same `style` contract as {@link JustStyle}:
 * a static object, a resolver function that receives render props (including existing `style`), or `undefined`.
 *
 * @typeParam RenderProps - Record type for render props. When `style` is a function, it receives `RenderProps` merged with `{ style?: CSSProperties }`.
 * @typeParam TLength - CSS length type (default: `0 | (string & {})`).
 * @typeParam TTime - CSS time type (default: `string & {}`).
 */
interface JustStyleProps<RenderProps extends AnyRecord = AnyRecord, TLength = DefaultLength$1, TTime = DefaultTime$1> {
  style?: JustStyle<RenderProps, TLength, TTime> | undefined;
}
/**
 * A `style` type that can be static or computed from render props.
 *
 * - `CSSProperties`: The value is merged with the existing `style` in render props (override wins).
 * - `undefined`: Uses the existing `style` from render props as-is.
 * - `function`: Process the render props and return the desired `style`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ style?: CSSProperties }`.
 * @typeParam TLength - CSS length type (default: `0 | (string & {})`).
 * @typeParam TTime - CSS time type (default: `string & {}`).
 */
type JustStyle<RenderProps extends AnyRecord = AnyRecord, TLength = DefaultLength$1, TTime = DefaultTime$1> = ((renderProps: JustStyleFnProps<RenderProps, TLength, TTime>) => CSSProperties<TLength, TTime> | undefined) | CSSProperties<TLength, TTime> | undefined;
/**
 * The props type for `JustStyle` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 * @typeParam TLength - CSS length type (default: `0 | (string & {})`).
 * @typeParam TTime - CSS time type (default: `string & {}`).
 */
type JustStyleFnProps<RenderProps extends AnyRecord = AnyRecord, TLength = DefaultLength$1, TTime = DefaultTime$1> = RenderProps & {
  style?: CSSProperties<TLength, TTime> | undefined;
};
//#endregion
//#region src/style/resolve-style.d.ts
type DefaultLength = 0 | (string & {});
type DefaultTime = string & {};
declare function resolveStyle<RenderProps extends AnyRecord = AnyRecord, TLength = DefaultLength, TTime = DefaultTime>(renderProps: JustStyleFnProps<RenderProps, TLength, TTime>, style?: JustStyle<RenderProps, TLength, TTime>): CSSProperties<TLength, TTime> | undefined;
//#endregion
//#region src/style/style-props.d.ts
/**
 * Interface for component props that include a style property.
 */
type StyleProps<TLength = 0 | (string & {}), TTime = string & {}> = {
  style?: CSSProperties<TLength, TTime> | undefined;
};
//#endregion
//#region src/style/to-dom-style.d.ts
/**
 * Converts React-style CSS properties to DOM style properties.
 * This function handles both standard CSS properties and custom properties,
 * ensuring proper formatting for DOM style application.
 *
 * @param style - React-style CSS properties object
 * @returns DOM style properties object
 *
 * @example
 * ```ts
 * const domStyle = toDomStyle({
 *   backgroundColor: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * if (domStyle && element.style) {
 *   for (const [key, value] of Object.entries(domStyle)) {
 *     element.style.setProperty(key, value)
 *   }
 * }
 * ```
 */
declare function toDomStyle(style: CSSProperties | undefined): Record<string, string | null> | undefined;
//#endregion
//#region src/theme/theme.types.d.ts
/**
 * A map of theme keys to their class name values.
 *
 * When the value is an array, the first value is expected to be the main value.
 * The rest of the values are expected to be additional values that are used along with the main value.
 */
type ThemeMap$1 = Record<string, string | readonly string[]>;
type ThemeResult$1<Themes extends ThemeMap$1> = {
  theme: keyof Themes;
  value: Themes[keyof Themes];
} | undefined;
type ThemeStore$1<Themes extends ThemeMap$1> = {
  get(): ThemeResult$1<Themes> | Promise<ThemeResult$1<Themes>>;
  set?(result: ThemeResult$1<Themes>): void | Promise<void>;
  subscribe?(handler: () => void): () => void;
};
/** Options for store get(): themes map and optional fallback theme key. */
type ThemeStoreGetOptions<Themes extends ThemeMap$1> = {
  themes: Themes;
  theme?: keyof Themes | undefined;
};
/** Options for store set(): themes map and theme key to set. */
type ThemeStoreSetOptions<Themes extends ThemeMap$1> = {
  themes: Themes;
  theme: keyof Themes;
};
type ThemeStorageOptions<Themes extends ThemeMap$1 = ThemeMap$1> = {
  storageKey: string;
  themes: Themes;
  theme?: keyof Themes | null | undefined;
};
//#endregion
//#region src/theme/class-name-theme-store.d.ts
type ClassNameThemeStoreSubscribeOptions<Themes extends ThemeMap$1> = {
  themes: Themes;
  theme?: (keyof Themes | (string & {})) | undefined;
  handler: (value: string | undefined) => void;
};
type ClassNameThemeStore<Themes extends ThemeMap$1> = {
  get(options: ThemeStoreGetOptions<Themes>): keyof Themes | undefined;
  set(options: ThemeStoreSetOptions<Themes>): void;
  subscribe(options: ClassNameThemeStoreSubscribeOptions<Themes>): {
    disconnect: () => void;
  };
};
/**
 * Theme store that reads and writes theme via element class names.
 *
 * The returned store provides `get`, `set`, and `subscribe` that operate on the
 * given element (or document.documentElement when omitted). Callers pass `themes`
 * and optional `theme` (fallback) when calling get/set/subscribe.
 *
 * @param element - Element to read/write class names on (defaults to document.documentElement)
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * ```ts
 * const store = classNameThemeStore()
 * const theme = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (t) => console.log(t) })
 * observer.disconnect()
 * ```
 */
declare function classNameThemeStore<Themes extends ThemeMap$1>(element?: Element | null | undefined): ClassNameThemeStore<Themes>;
//#endregion
//#region src/theme/data-attribute-theme-store.d.ts
type DataAttributeThemeStoreGetOptions<Themes extends ThemeMap$1> = ThemeStoreGetOptions<Themes> & {
  allowCustom?: boolean | undefined;
};
type DataAttributeThemeStoreSubscribeOptions<Themes extends ThemeMap$1> = {
  themes: Themes;
  theme?: string | undefined;
  allowCustom?: true | undefined;
  handler: (value: string | null) => void;
};
type DataAttributeThemeStore<Themes extends ThemeMap$1> = {
  get(options: DataAttributeThemeStoreGetOptions<Themes>): keyof Themes | string | undefined;
  set(options: ThemeStoreSetOptions<Themes>): void;
  subscribe(options: DataAttributeThemeStoreSubscribeOptions<Themes>): {
    disconnect: () => void;
  };
};
/**
 * Theme store that reads and writes theme via a data attribute on an element.
 *
 * The returned store provides `get`, `set`, and `subscribe` for the given
 * attribute name and element (or document.documentElement when element is omitted).
 *
 * @param attributeName - Data attribute name (e.g. `'data-theme'`)
 * @param element - Element to read/write (defaults to document.documentElement)
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * ```ts
 * const store = dataAttributeThemeStore('data-theme')
 * const theme = store.get({ themes: { light: 'light', dark: 'dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (t) => console.log(t) })
 * observer.disconnect()
 * ```
 */
declare function dataAttributeThemeStore$1<Themes extends ThemeMap$1>(attributeName: `data-${string}`, element?: Element | null | undefined): DataAttributeThemeStore<Themes>;
//#endregion
//#region src/theme/define-theme-storage-options.d.ts
declare function defineThemeStorageOptions<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes>): ThemeStorageOptions<Themes>;
//#endregion
//#region src/theme/get-theme-by-class-name.d.ts
/**
 * Gets the current theme by checking element class names against a themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Fallback theme key if no matching class is found
 * @param options.element - Element to check classes on (defaults to document.documentElement)
 * @returns The matching theme key or options.theme if no match found
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * }
 *
 * // Get current theme from document.documentElement
 * const theme = getThemeByClassName({
 *   themes,
 *   theme: 'light'
 * })
 *
 * // Get theme from specific element
 * const theme = getThemeByClassName({
 *   themes,
 *   element: myElement,
 *   theme: 'light'
 * })
 * ```
 */
declare function getThemeByClassName<Themes extends ThemeMap$1>(options: {
  themes: Themes;
  theme?: keyof Themes | undefined;
  element?: Element | null | undefined;
}): keyof Themes | undefined;
//#endregion
//#region src/theme/get-theme-by-data-attribute.d.ts
/**
 * Gets the theme based on a data attribute value.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.theme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to check (must start with 'data-')
 * @param options.allowCustom - Whether to allow custom themes value
 * @returns The matching theme key, or options.theme if no match found
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark',
 *   system: 'system'
 * }
 *
 * // Get theme from data-theme attribute
 * const theme = getThemeByDataAttribute({
 *   themes,
 *   theme: 'system',
 *   attributeName: 'data-theme'
 * })
 * ```
 */
declare function getThemeByDataAttribute<Themes extends ThemeMap$1>(options: {
  attributeName: `data-${string}`;
  theme?: keyof Themes | undefined;
  themes: Themes;
  element?: Element | undefined;
}): keyof Themes | undefined;
declare function getThemeByDataAttribute<Themes extends ThemeMap$1>(options: {
  attributeName: `data-${string}`;
  allowCustom: true;
  theme?: keyof Themes | undefined;
  themes: Themes;
  element?: Element | undefined;
}): string | undefined;
//#endregion
//#region src/theme/get-theme-from-local-storage.d.ts
/**
 * Gets the theme key stored in localStorage, validated against a themes map.
 *
 * Reads the value at the given storage key and returns it only if it is a valid theme key.
 * Returns `theme` when not in a browser, when the key is missing, or when the stored value is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the stored key)
 * @param options.theme - Fallback theme key when storage is unavailable or value is invalid
 * @param options.storageKey - localStorage key to read (defaults to `'theme'`)
 * @returns The stored theme key if valid, otherwise `theme`
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const theme = getThemeFromLocalStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
declare function getThemeFromLocalStorage<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes>): {
  theme: keyof Themes;
  value: Themes[keyof Themes];
} | undefined;
//#endregion
//#region src/theme/get-theme-from-session-storage.d.ts
/**
 * Gets the theme key stored in sessionStorage, validated against a themes map.
 *
 * Reads the value at the given storage key and returns it only if it is a valid theme key.
 * Returns `theme` when not in a browser, when the key is missing, or when the stored value is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the stored key)
 * @param options.theme - Fallback theme key when storage is unavailable or value is invalid
 * @param options.storageKey - sessionStorage key to read (defaults to `'theme'`)
 * @returns The stored theme key if valid, otherwise `theme`
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const theme = getThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
declare function getThemeFromSessionStorage<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes>): {
  theme: keyof Themes;
  value: Themes[keyof Themes];
} | undefined;
//#endregion
//#region src/theme/get-theme-from-store.d.ts
type GetThemeFromStoreOptions<Themes extends ThemeMap$1> = {
  store: ThemeStore$1<Themes>;
  themes: Themes;
  theme?: keyof Themes | null | undefined;
};
/**
 * Gets the theme from a generic store (sync or async).
 *
 * Validates the store result against the themes map; uses the default theme when the stored value is missing or invalid.
 *
 * @param options - Store, themes map, and optional default theme
 * @returns Promise of the current theme result
 *
 * @example
 * ```ts
 * const store = { get: () => ({ theme: 'dark', value: 'theme-dark' }), set: () => {} }
 * const result = await getThemeFromStore({ store, themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * ```
 */
declare function getThemeFromStore<Themes extends ThemeMap$1>(options: GetThemeFromStoreOptions<Themes>): Promise<ThemeResult$1<Themes>>;
//#endregion
//#region src/theme/local-storage-theme-store.d.ts
type LocalStorageThemeStoreOptions<Themes extends ThemeMap$1> = Omit<ThemeStorageOptions<Themes>, 'storageKey'>;
type LocalStorageThemeStore<Themes extends ThemeMap$1> = {
  get(options: LocalStorageThemeStoreOptions<Themes>): ThemeResult$1<Themes>;
  set(options: LocalStorageThemeStoreOptions<Themes> & {
    theme?: keyof Themes | null | undefined;
  }): void;
  subscribe(options: LocalStorageThemeStoreOptions<Themes> & {
    handler: (result: ThemeResult$1<Themes>) => void;
  }): {
    disconnect: () => void;
  };
};
declare function localStorageThemeStore$1<Themes extends ThemeMap$1>(storageKey: string): LocalStorageThemeStore<Themes>;
//#endregion
//#region src/theme/observe-theme-by-class-name.d.ts
/**
 * Observes changes to element class names and calls a handler when the theme (based on class) changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.handler - Callback called with the current theme key or options.theme when class is cleared
 * @param options.theme - Fallback theme key when no matching class is found
 * @param options.element - Element to observe (defaults to document.documentElement)
 * @returns An object with disconnect() to stop observing
 *
 * @example
 * ```ts
 * const observer = observeThemeByClassName({
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   handler: (theme) => console.log('Theme:', theme),
 *   theme: 'light',
 * })
 * observer.disconnect()
 * ```
 */
declare function observeThemeByClassName<Themes extends ThemeMap$1>(options: {
  themes: Themes;
  handler: (value: string | undefined) => void;
  theme?: (keyof Themes | (string & {})) | undefined;
  element?: Element | null | undefined;
}): {
  disconnect: () => void;
};
//#endregion
//#region src/theme/observe-theme-by-data-attributes.d.ts
/**
 * Observes changes to a theme data attribute and calls a handler when it changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.handler - Callback function called with the new theme value or null when removed
 * @param options.theme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to observe (must start with 'data-')
 * @returns An object with disconnect() to stop observing
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark'
 * }
 *
 * // Observe data-theme attribute changes
 * const observer = observeThemeByDataAttributes({
 *   themes,
 *   handler: (theme) => console.log('Theme changed to:', theme),
 *   theme: 'light',
 *   attributeName: 'data-theme'
 * })
 *
 * // Stop observing
 * observer.disconnect()
 * ```
 */
declare function observeThemeByDataAttributes<Themes extends ThemeMap$1>(options: {
  attributeName: `data-${string}`;
  themes: Themes;
  handler: (value: string | null) => void;
  allowCustom?: true | undefined;
  theme?: string | undefined;
  element?: Element | undefined;
}): {
  disconnect: () => void;
};
//#endregion
//#region src/theme/observe-theme-from-local-storage.d.ts
type ObserveThemeFromLocalStorageResult<Themes extends ThemeMap$1> = ThemeResult$1<Themes>;
/**
 * Observes changes to the theme stored in localStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser `storage` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromLocalStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromLocalStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * ```
 */
declare function observeThemeFromLocalStorage<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes> & {
  handler: (result: ObserveThemeFromLocalStorageResult<Themes>) => void;
}): {
  disconnect: () => void;
};
//#endregion
//#region src/theme/observe-theme-from-session-storage.d.ts
type ObserveThemeFromSessionStorageResult<Themes extends ThemeMap$1> = ThemeResult$1<Themes>;
/**
 * Observes changes to the theme stored in sessionStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser `storage` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromSessionStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * ```
 */
declare function observeThemeFromSessionStorage<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes> & {
  handler: (result: ObserveThemeFromSessionStorageResult<Themes>) => void;
}): {
  disconnect: () => void;
};
//#endregion
//#region src/theme/observe-theme-from-store.d.ts
type ObserveThemeFromStoreOptions<Themes extends ThemeMap$1> = {
  store: ThemeStore$1<Themes>;
  themes: Themes;
  theme?: keyof Themes | null | undefined;
  handler: (result: ThemeResult$1<Themes>) => void;
};
/**
 * Observes theme from a generic store and calls a handler with the current result.
 *
 * Calls the handler once immediately (after the initial get resolves), then again whenever the store notifies (if it provides subscribe).
 *
 * @param options - Store, themes, optional default theme, and handler
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const observer = observeThemeFromStore({
 *   store,
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   theme: 'light',
 *   handler: (result) => console.log('Theme:', result?.theme),
 * })
 * observer.disconnect()
 * ```
 */
declare function observeThemeFromStore<Themes extends ThemeMap$1>(options: ObserveThemeFromStoreOptions<Themes>): {
  disconnect: () => void;
};
//#endregion
//#region src/theme/session-storage-theme-store.d.ts
type SessionStorageThemeStoreOptions<Themes extends ThemeMap$1> = Omit<ThemeStorageOptions<Themes>, 'storageKey'>;
type SessionStorageThemeStore<Themes extends ThemeMap$1> = {
  get(options: SessionStorageThemeStoreOptions<Themes>): ThemeResult$1<Themes>;
  set(options: SessionStorageThemeStoreOptions<Themes> & {
    theme?: keyof Themes | null | undefined;
  }): void;
  subscribe(options: SessionStorageThemeStoreOptions<Themes> & {
    handler: (result: ThemeResult$1<Themes>) => void;
  }): {
    disconnect: () => void;
  };
};
declare function sessionStorageThemeStore$1<Themes extends ThemeMap$1>(storageKey: string): SessionStorageThemeStore<Themes>;
//#endregion
//#region src/theme/set-theme-by-class-name.d.ts
/**
 * Sets the theme by applying the theme's class name(s) to an element.
 *
 * Removes all theme-related classes from the element, then adds the classes
 * for the given theme key.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Theme key to apply
 * @param options.element - Element to set classes on (defaults to document.documentElement)
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * }
 *
 * // Set theme on document.documentElement
 * setThemeByClassName({
 *   themes,
 *   theme: 'dark'
 * })
 *
 * // Set theme on specific element
 * setThemeByClassName({
 *   themes,
 *   theme: 'light',
 *   element: myElement
 * })
 * ```
 */
declare function setThemeByClassName<Themes extends ThemeMap$1>(options: {
  themes: Themes;
  theme: keyof Themes;
  element?: Element | null | undefined;
}): void;
//#endregion
//#region src/theme/set-theme-by-data-attribute.d.ts
/**
 * Sets the theme by applying the theme's value to a data attribute on an element.
 *
 * If the theme key exists in the themes map, sets the attribute to that value.
 * Otherwise removes the attribute.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.theme - Theme key to apply
 * @param options.attributeName - Name of the data attribute to set (must start with 'data-')
 * @param options.element - Element to set the attribute on (defaults to document.documentElement)
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark'
 * }
 *
 * // Set theme on document.documentElement
 * setThemeByDataAttribute({
 *   themes,
 *   theme: 'dark',
 *   attributeName: 'data-theme'
 * })
 *
 * // Set theme on specific element
 * setThemeByDataAttribute({
 *   themes,
 *   theme: 'light',
 *   attributeName: 'data-theme',
 *   element: myElement
 * })
 * ```
 */
declare function setThemeByDataAttribute<Themes extends ThemeMap$1>(options: {
  attributeName: `data-${string}`;
  element?: Element | null | undefined;
  theme: keyof Themes;
  themes: Themes;
}): void;
//#endregion
//#region src/theme/set-theme-to-local-storage.d.ts
/**
 * Sets the theme key in localStorage.
 *
 * Writes the theme key at the given storage key only when in a browser and when the theme is in the themes map.
 * Removes the storage item when the theme is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the theme key)
 * @param options.theme - Theme key to store
 * @param options.storageKey - localStorage key to write (defaults to `'theme'`)
 *
 * @example
 * ```ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 *
 * setThemeToLocalStorage({
 *   themes,
 *   theme: 'dark',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
declare function setThemeToLocalStorage<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes>): void;
//#endregion
//#region src/theme/set-theme-to-session-storage.d.ts
/**
 * Sets the theme key in sessionStorage.
 *
 * Writes the theme key at the given storage key only when in a browser and when the theme is in the themes map.
 * Removes the storage item when the theme is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the theme key)
 * @param options.theme - Theme key to store
 * @param options.storageKey - sessionStorage key to write (defaults to `'theme'`)
 *
 * @example
 * ```ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 *
 * setThemeToSessionStorage({
 *   themes,
 *   theme: 'dark',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
declare function setThemeToSessionStorage<Themes extends ThemeMap$1>(options: ThemeStorageOptions<Themes>): void;
//#endregion
//#region src/theme/set-theme-to-store.d.ts
type SetThemeToStoreOptions<Themes extends ThemeMap$1> = {
  store: ThemeStore$1<Themes>;
  themes: Themes;
  theme?: keyof Themes | null | undefined;
};
/**
 * Sets the theme in a generic store (sync or async).
 *
 * Writes the theme result when the theme key is in the themes map; clears (undefined) when theme is null or undefined.
 *
 * @param options - Store, themes map, and theme key to write (or null to clear)
 * @returns Promise that resolves when the store has been updated
 *
 * @example
 * ```ts
 * await setThemeToStore({
 *   store,
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   theme: 'dark',
 * })
 * ```
 */
declare function setThemeToStore<Themes extends ThemeMap$1>(options: SetThemeToStoreOptions<Themes>): Promise<void>;
//#endregion
//#region src/theme2/theme-result.types.d.ts
type ThemeResult<Themes extends ThemeMap> = {
  theme: keyof Themes;
  value: Themes[keyof Themes];
};
//#endregion
//#region src/theme2/theme.types.d.ts
type ThemeMap<Theme extends string = string> = Record<Theme, string | readonly string[]>;
/**
 * Optional store methods. Data flow participation is inferred from which methods exist:
 * - get: participates in waterfall read
 * - set: receives writes from setTheme
 * - subscribe: observed for external changes
 */
type ThemeStore<Themes extends ThemeMap> = {
  get?: (() => ThemeResult<Themes> | undefined | null) | undefined;
  set?: ((theme: keyof Themes) => void) | undefined;
  subscribe?: ((handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void) | undefined;
};
type AsyncThemeStore<Themes extends ThemeMap> = {
  get?: (() => ThemeResult<Themes> | undefined | null | Promise<ThemeResult<Themes> | undefined | null>) | undefined;
  set?: ((theme: keyof Themes) => void | Promise<void>) | undefined;
  subscribe?: ((handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void) | undefined;
};
/** Union of sync and async stores; use for APIs that accept both. */
type StoreEntry<Themes extends ThemeMap> = ThemeStore<Themes> | AsyncThemeStore<Themes>;
//#endregion
//#region src/theme2/create-theme-hook.d.ts
declare function createThemeHook<Themes extends ThemeMap>(options: {
  stores: StoreEntry<Themes>[];
  defaultTheme?: keyof Themes | undefined;
  themeMap: Themes;
}): (overrideDefaultTheme?: keyof Themes | undefined) => [keyof Themes | undefined, (theme: keyof Themes) => void];
//#endregion
//#region src/theme2/get-theme-from-stores.d.ts
/**
 * Reads theme from stores using waterfall strategy.
 *
 * Iterates stores in order; returns first non-empty result.
 * Only includes stores that have a `get` method.
 *
 * @param stores - Array of theme stores
 * @param defaultTheme - Fallback when all stores return empty
 * @returns Resolved theme key or defaultTheme
 */
declare function getThemeFromStores<Themes extends ThemeMap>(stores: StoreEntry<Themes>[], defaultTheme: keyof Themes | undefined): Promise<keyof Themes | undefined>;
//#endregion
//#region src/theme2/observe-theme-from-stores.d.ts
/**
 * Subscribes to stores that have a subscribe method.
 *
 * When any store emits, runs coalesced handler (getThemeFromStores + callback).
 * Skips handler if resolved theme equals last emitted (value equality).
 *
 * @param stores - Array of theme stores
 * @param defaultTheme - Fallback when all stores return empty
 * @param handler - Callback with resolved theme key
 * @returns Unsubscribe function
 */
declare function observeThemeFromStores<Themes extends ThemeMap>(stores: StoreEntry<Themes>[], defaultTheme: keyof Themes | undefined, handler: (theme: keyof Themes | undefined) => void): () => void;
//#endregion
//#region src/theme2/set-theme-to-stores.d.ts
/**
 * Writes theme to all stores that have a set method.
 *
 * @param stores - Array of theme stores
 * @param theme - Theme key to write
 */
declare function setThemeToStores<Themes extends ThemeMap>(stores: StoreEntry<Themes>[], theme: keyof Themes): Promise<void>;
//#endregion
//#region src/theme2/stores/async-theme-store.d.ts
/**
 * Creates a theme store from user-provided get/set/subscribe.
 * Useful for remote persistence, polling, or WebSocket-based sync.
 *
 * @param options - Optional get, set, and/or subscribe implementations
 * @returns AsyncThemeStore with only the provided methods
 *
 * @example
 * ```ts
 * const store = createAsyncThemeStore({
 *   get: async () => {
 *     const res = await fetch('/api/theme')
 *     return (await res.json()).theme
 *   },
 *   set: async (theme) => {
 *     await fetch('/api/theme', { method: 'PUT', body: JSON.stringify({ theme }) })
 *   },
 * })
 * ```
 */
declare function asyncThemeStore<Themes extends ThemeMap>(options: AsyncThemeStore<Themes>): AsyncThemeStore<Themes>;
//#endregion
//#region src/theme2/stores/class-name-theme-store.d.ts
type ClassNameThemeStoreOptions<Themes extends ThemeMap> = {
  element?: Element | null;
  themeMap: Themes;
};
/**
 * Creates a theme store that reads and writes via element class names.
 *
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.themeMap - Record mapping theme keys to class name(s)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = createClassNameThemeStore({
 *   themeMap: { current: 'theme-current', grayscale: 'theme-grayscale' },
 * })
 * store.get() // from element.className
 * store.set('grayscale')
 * store.subscribe?.(() => {})
 * ```
 */
declare function classNameThemeStore$1<Themes extends ThemeMap>(options: ClassNameThemeStoreOptions<Themes>): {
  get: () => ThemeResult<Themes> | undefined | null;
  set: (theme: keyof Themes) => void;
  subscribe: (handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void;
};
//#endregion
//#region src/theme2/stores/data-attribute-theme-store.d.ts
type DataAttributeThemeStoreOptions<Themes extends ThemeMap> = {
  attributeName: `data-${string}`;
  element?: Element | null;
  themeMap: Themes;
};
/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * @param options.attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.themeMap - Record mapping theme keys to attribute values
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = createDataAttributeThemeStore({
 *   attributeName: 'data-theme',
 *   themeMap: { current: 'current', grayscale: 'grayscale' },
 * })
 * ```
 */
declare function dataAttributeThemeStore<Themes extends ThemeMap>(options: DataAttributeThemeStoreOptions<Themes>): {
  get: () => ThemeResult<Themes> | undefined | null;
  set: (theme: keyof Themes) => void;
  subscribe: (handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void;
};
//#endregion
//#region src/theme2/stores/in-memory-theme-store.d.ts
/**
 * In-memory theme store. Transient state; no persistence.
 * Implements get, set, subscribe. Useful for tests or as primary store.
 */
declare function inMemoryThemeStore<Themes extends ThemeMap>({
  themeMap
}: {
  themeMap: Themes;
}): {
  get: () => ThemeResult<Themes> | undefined | null;
  set: (theme: keyof Themes) => void;
  subscribe: (handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void;
};
//#endregion
//#region src/theme2/stores/local-storage-theme-store.d.ts
type LocalStorageThemeStoreOptions$1<Themes extends ThemeMap> = {
  storageKey: string;
  themeMap: Themes;
};
/**
 * Creates a theme store backed by localStorage.
 *
 * Persists across sessions; cross-tab sync via StorageEvent.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param options.storageKey - localStorage key
 * @param options.themeMap - Record mapping theme keys to values (for validation)
 * @returns ThemeStore
 */
declare function localStorageThemeStore<Themes extends ThemeMap>(options: LocalStorageThemeStoreOptions$1<Themes>): {
  get: () => ThemeResult<Themes> | undefined | null;
  set: (theme: keyof Themes) => void;
  subscribe: (handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void;
};
//#endregion
//#region src/theme2/stores/session-storage-theme-store.d.ts
type SessionStorageThemeStoreOptions$1<Themes extends ThemeMap> = {
  storageKey: string;
  themeMap: Themes;
};
/**
 * Creates a theme store backed by sessionStorage.
 *
 * Persists per tab; cross-tab sync via StorageEvent when available.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param options.storageKey - sessionStorage key
 * @param options.themeMap - Record mapping theme keys to values (for validation)
 * @returns ThemeStore
 */
declare function sessionStorageThemeStore<Themes extends ThemeMap>(options: SessionStorageThemeStoreOptions$1<Themes>): {
  get: () => ThemeResult<Themes> | undefined | null;
  set: (theme: keyof Themes) => void;
  subscribe: (handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void;
};
//#endregion
//#region src/theme2/theme-result.d.ts
/** Creates ThemeResult from theme key and theme map. */
declare function themeResult<Themes extends ThemeMap>(theme: keyof Themes, themeMap: Themes): ThemeResult<Themes>;
//#endregion
//#region src/units/get-rem-to-px-scale.d.ts
/**
 * Returns the current document's rem-to-px scale (the pixel value of 1rem).
 *
 * Reads the computed font size of the root element (`html`), which is the value
 * the browser uses to resolve rem units. In non-browser environments (e.g. SSR,
 * Node), returns {@link DEFAULT_REM_TO_PX_SCALE} as a fallback.
 *
 * @returns The number of pixels that 1rem equals in the current document,
 * or {@link DEFAULT_REM_TO_PX_SCALE} when not in a browser.
 *
 * @example
 * ```ts
 * getRemToPxScale() // e.g. 16 (or 20 if user increased default font size)
 * rem2px(1, { base: getRemToPxScale() }) // matches actual 1rem in the document
 * ```
 */
declare function getRemToPxScale(): number;
//#endregion
//#region src/units/px-2-num.d.ts
/**
 * Converts pixel values to numbers.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @returns The numeric value
 *
 * @example
 * ```ts
 * px2num(16) // 16
 * px2num('32px') // 32
 * px2num('12.5px') // 12.5
 * px2num('0px') // 0
 * ```
 */
declare function px2num(px: number | string | undefined): number;
//#endregion
//#region src/units/px-2-rem.d.ts
/**
 * Converts pixel values to rem units.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate rem units from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value as a string with 'rem' units
 *
 * @example
 * ```ts
 * px2rem(16) // '1.0000'
 * px2rem('32px') // '2.0000'
 * px2rem(20, { base: 20 }) // '1.0000'
 * px2rem(13, { precision: 2 }) // '0.81'
 * ```
 */
declare function px2rem(px: number | string, options?: {
  base?: number | undefined;
  precision?: number | undefined;
}): number;
//#endregion
//#region src/units/rem-2-px.d.ts
/**
 * Converts rem values to pixel units.
 *
 * @param rem - The rem value to convert. Can be a number or string (e.g. '1rem' or '1')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate pixels from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value as a string with 'px' units
 *
 * @example
 * ```ts
 * rem2px(1) // '16.0000'
 * rem2px('2rem') // '32.0000'
 * rem2px(1, { base: 20 }) // '20.0000'
 * rem2px(0.8125, { precision: 2 }) // '13.00'
 * ```
 */
declare function rem2px(rem: number | string, options?: {
  base?: number | undefined;
  precision?: number | undefined;
}): number;
//#endregion
//#region src/utils/append-id.d.ts
/**
 * Appends a suffix to an ID if the ID is defined.
 *
 * @param id - The ID to append the suffix to.
 * @param suffix - The suffix to append to the ID.
 * @returns The ID with the suffix appended, or undefined if the ID is undefined.
 */
declare function appendId(id: string | undefined, suffix: string): string | undefined;
//#endregion
export { AsyncThemeStore, CSSProperties, ClassNameProps, ClassNameThemeStore, ClassNameThemeStoreSubscribeOptions, DataAttribute, DataAttributeThemeStore, DataAttributeThemeStoreGetOptions, DataAttributeThemeStoreSubscribeOptions, GetThemeFromStoreOptions, JustChildren, JustChildrenFnProps, JustChildrenProps, JustClassName, JustClassNameFnProps, JustClassNameProps, JustStyle, JustStyleFnProps, JustStyleProps, LocalStorageThemeStore, LocalStorageThemeStoreOptions, ObserveThemeFromLocalStorageResult, ObserveThemeFromSessionStorageResult, ObserveThemeFromStoreOptions, SessionStorageThemeStore, SessionStorageThemeStoreOptions, SetThemeToStoreOptions, StoreEntry, StyleProps, ThemeStorageOptions, ThemeStoreGetOptions, ThemeStoreSetOptions, appendId, classNameThemeStore, clsx, asyncThemeStore as createAsyncThemeStore, classNameThemeStore$1 as createClassNameThemeStore, dataAttributeThemeStore as createDataAttributeThemeStore, inMemoryThemeStore as createInMemoryThemeStore, localStorageThemeStore as createLocalStorageThemeStore, sessionStorageThemeStore as createSessionStorageThemeStore, createThemeHook, themeResult as createThemeResult, dataAttributeThemeStore$1 as dataAttributeThemeStore, defineCSSProperties, defineThemeStorageOptions, getAttribute, getCSSVariableValue, getDataAttribute, getPrefersColorScheme, getRemToPxScale, getThemeByClassName, getThemeByDataAttribute, getThemeFromLocalStorage, getThemeFromSessionStorage, getThemeFromStore, getThemeFromStores, localStorageThemeStore$1 as localStorageThemeStore, observeAttributes, observeDataAttributes, observePrefersColorScheme, observeThemeByClassName, observeThemeByDataAttributes, observeThemeFromLocalStorage, observeThemeFromSessionStorage, observeThemeFromStore, observeThemeFromStores, px2num, px2rem, rem2px, resolveChildren, resolveClassName, resolveStyle, sessionStorageThemeStore$1 as sessionStorageThemeStore, setThemeByClassName, setThemeByDataAttribute, setThemeToLocalStorage, setThemeToSessionStorage, setThemeToStore, setThemeToStores, toDomStyle };
//# sourceMappingURL=index.d.mts.map