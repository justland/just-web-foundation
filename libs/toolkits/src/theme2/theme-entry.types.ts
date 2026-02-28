import type { ThemeMap } from './theme.types.ts'

export type ThemeEntry<Themes extends ThemeMap = ThemeMap> = {
	theme: keyof Themes
	value: Themes[keyof Themes]
}
