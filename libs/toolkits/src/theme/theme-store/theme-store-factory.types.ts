import type { ThemeMap } from '../theme-map.types.ts'
import type { AsyncThemeStore } from './async-theme-store.types.ts'
import type { ThemeStore } from './theme-store.types.ts'

/** Factory signature for theme stores. */
export type ThemeStoreFactory<Themes extends ThemeMap> = (
	themes: Themes,
	...args: any[]
) => ThemeStore<Themes> | AsyncThemeStore<Themes>
