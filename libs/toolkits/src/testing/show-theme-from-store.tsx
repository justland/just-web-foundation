import { StoryCard } from '@repobuddy/storybook'
import { useEffect, useState } from 'react'
import { getThemeFromStore, type ThemeMap, type ThemeStore } from '#just-web/toolkits'

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

	return (
		<StoryCard title="Theme from store" appearance="output">
			<p data-testid="theme-from-store">
				theme: {result?.theme === undefined ? '(undefined)' : String(result?.theme)}
			</p>
			<p>
				value:{' '}
				{result?.value === null
					? '(missing)'
					: result?.value === ''
						? '(empty)'
						: Array.isArray(result?.value)
							? `[${result?.value.join(', ')}]`
							: result?.value}
			</p>
		</StoryCard>
	)
}
