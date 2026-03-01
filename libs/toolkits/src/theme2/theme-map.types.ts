/**
 * Record mapping theme keys to their values.
 * Each value can be a single string or readonly string[] (e.g. multiple CSS classes).
 * Used by all ThemeStore factories via the themeMap option.
 */
export type ThemeMap<Theme extends string = string> = Record<Theme, string | readonly string[]>
