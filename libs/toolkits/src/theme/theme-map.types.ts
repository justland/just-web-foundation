/**
 * Record mapping theme keys to their values.
 * Each value is an object with `themeValue` (string or readonly string[]); polymorphic stores
 * can add extra fields (e.g. `timestamp`, `value`). Used by all ThemeStore factories.
 */
export type ThemeMap<Theme extends string = string> = Record<
	Theme,
	{ themeValue: string | readonly string[] }
>
