import type { ThemeMap } from './theme.types.ts'

export type ThemeResult<Themes extends ThemeMap> = {
	theme: keyof Themes
	value: Themes[keyof Themes]
}
