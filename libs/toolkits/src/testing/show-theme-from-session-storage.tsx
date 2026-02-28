import {
	getThemeFromSessionStorage,
	type ThemeMap,
	type ThemeStorageOptions,
} from '#just-web/toolkits'
import { ThemeResultCard } from './theme-result-card.tsx'

export function ShowThemeFromSessionStorage<Themes extends ThemeMap>({
	storageKey,
	themes,
	theme,
}: ThemeStorageOptions<Themes>) {
	const result = getThemeFromSessionStorage({
		storageKey,
		theme,
		themes,
	})
	return <ThemeResultCard title="Theme from sessionStorage" result={result} />
}
