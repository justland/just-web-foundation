/**
 * A map of theme keys to their class name values.
 *
 * When the value is an array, the first value is expected to be the main value.
 * The rest of the values are expected to be additional values that are used along with the main value.
 */
export type ThemeMap = Record<string, string | readonly string[]>

export type ThemeStorageOptions<Themes extends ThemeMap = ThemeMap> = {
	storageKey: string
	themes: Themes
	theme?: keyof Themes | null | undefined
}
