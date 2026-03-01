import type { ThemeStore } from '../../theme/theme-store/theme-store.types.ts'

export const dummyThemeStore = {
	read: () => undefined,
	write: () => {},
	subscribe: () => () => {}
} satisfies ThemeStore
