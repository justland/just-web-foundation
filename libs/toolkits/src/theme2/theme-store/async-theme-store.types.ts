import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

export type AsyncThemeStore<Themes extends ThemeMap = ThemeMap> = {
	read?:
		| (() => ThemeEntry<Themes> | undefined | null | Promise<ThemeEntry<Themes> | undefined | null>)
		| undefined
	write?: ((entry: ThemeEntry<Themes> | undefined) => void | Promise<void>) | undefined
	subscribe?:
		| ((handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}
