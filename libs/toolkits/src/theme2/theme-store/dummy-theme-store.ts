import type { ThemeStore } from './theme-store.types.ts'

export const dummyThemeStore = {
	get: () => undefined,
	set: () => {},
	subscribe: () => () => {}
} satisfies ThemeStore
