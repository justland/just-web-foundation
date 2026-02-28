/**
 * A map of theme keys to their class name values.
 *
 * When the value is an array, the first value is expected to be the main value.
 * The rest of the values are expected to be additional values that are used along with the main value.
 */
export type ThemeMap = Record<string, string | readonly string[]>

export type ThemeResult<Themes extends ThemeMap> =
	| { theme: keyof Themes; value: Themes[keyof Themes] }
	| undefined

export type ThemeStore<Themes extends ThemeMap> = {
	get(): ThemeResult<Themes> | Promise<ThemeResult<Themes>>
	set?(result: ThemeResult<Themes>): void | Promise<void>
	subscribe?(handler: () => void): () => void
}

export type ThemeStorageOptions<Themes extends ThemeMap = ThemeMap> = {
	storageKey: string
	themes: Themes
	theme?: keyof Themes | null | undefined
}
