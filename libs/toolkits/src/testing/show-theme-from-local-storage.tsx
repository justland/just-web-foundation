import {
	getThemeFromLocalStorage,
	type ThemeMap,
	type ThemeStorageOptions
} from '#just-web/toolkits'
import { ThemeResultCard } from './theme-result-card.tsx'

export function ShowThemeFromLocalStorage<Themes extends ThemeMap>({
	storageKey,
	themes,
	theme
}: ThemeStorageOptions<Themes>) {
	const result = getThemeFromLocalStorage({
		storageKey,
		theme,
		themes
	})
	return <ThemeResultCard title="Theme from localStorage" result={result} />
}
