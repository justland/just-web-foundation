import type { ThemeStore } from '../theme.types.ts'

export const dummyThemeStore = {
	get: () => undefined,
	set: () => {},
	subscribe: () => () => {}
} satisfies ThemeStore<Record<string, string>>
