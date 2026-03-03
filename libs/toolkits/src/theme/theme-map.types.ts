/**
 * Polymorphic theme value: string, array, or object with themeValue.
 * The object form allows storing extra user metadata in persistent stores (localStorage, etc.).
 */
export type ThemeMapValue = string | readonly string[] | { themeValue: string | readonly string[] }

/**
 * Record mapping theme keys to their values.
 * Each value can be a single string, readonly string[] (e.g. multiple CSS classes),
 * or { themeValue: string | string[] } for polymorphic values with extra metadata.
 * Used by all ThemeStore factories via the themes option.
 */
export type ThemeMap<Theme extends string = string> = Record<Theme, ThemeMapValue>
