import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

export function defineThemeStorageOptions<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
): ThemeStorageOptions<Themes> {
	return options
}
