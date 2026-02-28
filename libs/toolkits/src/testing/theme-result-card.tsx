import { StoryCard } from '@repobuddy/storybook'

export type ThemeResult = {
	theme?: unknown
	value?: unknown
}

export type ThemeResultCardProps = {
	result: ThemeResult | undefined
	title: string
	'data-testid'?: string
}

function formatValue(value: unknown): string {
	if (value === null) return '(missing)'
	if (value === '') return '(empty)'
	if (Array.isArray(value)) return `[${value.join(', ')}]`
	return String(value)
}

export function ThemeResultCard({
	result,
	title,
	'data-testid': themeTestId,
}: ThemeResultCardProps) {
	return (
		<StoryCard title={title} appearance="output">
			<p data-testid={themeTestId}>
				theme: {result?.theme === undefined ? '(undefined)' : String(result?.theme)}
			</p>
			<p>value: {result?.value === undefined ? '(undefined)' : formatValue(result?.value)}</p>
		</StoryCard>
	)
}
