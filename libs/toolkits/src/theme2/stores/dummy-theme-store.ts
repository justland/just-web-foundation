import type { ThemeStore } from '../theme.types.ts'

export const dummyThemeStore = {
	get: () => undefined,
	set: (_entry) => {},
	subscribe: () => () => {}
} satisfies ThemeStore<any>
