import { useEffect, useState } from 'react'
import { getThemeFromStore, type ThemeMap, type ThemeStore } from '#just-web/toolkits'
import { ThemeResultCard } from './theme-result-card.tsx'

export function ShowThemeFromStore<Themes extends ThemeMap>({
	store,
	themes,
	theme,
}: {
	store: ThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null
}) {
	const [result, setResult] = useState<
		{ theme: keyof Themes; value: Themes[keyof Themes] } | undefined
	>(undefined)

	useEffect(() => {
		getThemeFromStore({ store, themes, theme }).then(setResult)
	}, [store, themes, theme])

	return <ThemeResultCard title="Theme from store" data-testid="theme-from-store" result={result} />
}
