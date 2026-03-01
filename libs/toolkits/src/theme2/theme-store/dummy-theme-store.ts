import type { ThemeStore } from '../types/theme-store.types.ts'

export const dummyThemeStore = {
	read: () => undefined,
	write: () => {},
	subscribe: () => () => {}
} satisfies ThemeStore
