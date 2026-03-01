import type { ThemeStore } from './theme-store.types.ts'

export const dummyThemeStore = {
	read: () => undefined,
	write: () => {},
	subscribe: () => () => {}
} satisfies ThemeStore
