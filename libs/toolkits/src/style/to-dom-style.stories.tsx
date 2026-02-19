import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useRef } from 'react'
import type { CSSProperties } from '#just-web/toolkits'
import { toDomStyle } from '#just-web/toolkits'
import source from './to-dom-style.ts?raw'

const meta = {
	title: 'style/toDomStyle',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Converts React-style CSS properties to DOM style properties (camelCase → kebab-case). Handles standard and custom properties (--*).',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function StyleDemo({
	style,
	domStyle,
	title,
}: {
	style: CSSProperties | undefined
	domStyle: Record<string, string | null> | undefined
	title: string
}) {
	const element = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (element.current && domStyle) {
			requestAnimationFrame(() => {
				if (element.current) {
					for (const [key, value] of Object.entries(domStyle)) {
						element.current.style.setProperty(key, value)
					}
				}
			})
		}
	}, [domStyle])

	return (
		<div className="m-4 p-4 border border-gray-300 rounded">
			<h3 className="m-0 mb-4">{title}</h3>
			<div className="flex gap-4 items-start">
				<div className="flex-1">
					<h4 className="m-0 mb-2 text-sm">Input (React-style):</h4>
					<pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto">
						{JSON.stringify(style, null, 2)}
					</pre>
				</div>
				<div className="flex-1">
					<h4 className="m-0 mb-2 text-sm">Output (DOM-style):</h4>
					<pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto">
						{JSON.stringify(domStyle, null, 2)}
					</pre>
				</div>
			</div>
			<div>
				<h4 className="m-0 mb-2 text-sm">Visual Result:</h4>
				<div ref={element} className="demo-element">
					Sample Element
				</div>
			</div>
		</div>
	)
}

export const BasicUsage: Story = {
	name: 'Basic usage',
	decorators: [
		withStoryCard({
			content: (
				<p>
					Given a React-style CSS object, returns a DOM-style object suitable for use with{' '}
					<code>element.style.setProperty(key, value)</code> or similar.
				</p>
			),
		}),
	],
	render() {
		const style: CSSProperties = {
			backgroundColor: 'lightblue',
			color: 'darkblue',
			padding: '1rem',
			borderRadius: '8px',
		}
		const domStyle = toDomStyle(style)
		return <StyleDemo style={style} domStyle={domStyle} title="React-style → DOM style" />
	},
}

export const CamelCaseToKebabCase: Story = {
	name: 'CamelCase to kebab-case',
	decorators: [
		withStoryCard({
			content: (
				<p>
					Standard CSS property keys are converted from React camelCase to DOM kebab-case (e.g.{' '}
					<code>backgroundColor</code> → <code>background-color</code>).
				</p>
			),
		}),
	],
	render() {
		const style: CSSProperties = {
			backgroundColor: 'lightgreen',
			fontSize: '1.2rem',
			fontWeight: 'bold',
			marginTop: '0.5rem',
			paddingLeft: '1rem',
		}
		const domStyle = toDomStyle(style)
		return (
			<StyleDemo
				style={style}
				domStyle={domStyle}
				title="CamelCase keys become kebab-case in output"
			/>
		)
	},
}

export const CustomPropertiesPreserved: Story = {
	name: 'Custom properties preserved',
	decorators: [
		withStoryCard({
			content: (
				<p>
					Keys that start with <code>--</code> are custom properties; they are left unchanged and
					not converted to kebab-case.
				</p>
			),
		}),
	],
	render() {
		const style: CSSProperties = {
			'--primary-color': '#ff6b6b',
			'--secondary-color': '#4ecdc4',
			'--border-width': '3px',
			backgroundColor: 'var(--primary-color)',
			borderColor: 'var(--secondary-color)',
			borderWidth: 'var(--border-width)',
			borderStyle: 'solid',
			padding: '1rem',
			color: 'white',
		}
		const domStyle = toDomStyle(style)
		return (
			<StyleDemo
				style={style}
				domStyle={domStyle}
				title="--* keys unchanged; standard keys still converted"
			/>
		)
	},
}

export const StandardAndCustomInOneObject: Story = {
	name: 'Mixed standard and custom',
	decorators: [
		withStoryCard({
			content: (
				<p>
					A single style object can contain both standard properties (converted to kebab-case) and
					custom properties (kept as-is).
				</p>
			),
		}),
	],
	render() {
		const style: CSSProperties = {
			'--theme-color': '#9c88ff',
			'--spacing': '1.5rem',
			backgroundColor: 'var(--theme-color)',
			padding: 'var(--spacing)',
			borderRadius: '12px',
			fontSize: '1.1rem',
			fontWeight: '600',
			color: 'white',
			boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		}
		const domStyle = toDomStyle(style)
		return (
			<StyleDemo
				style={style}
				domStyle={domStyle}
				title="One object: standard + custom properties"
			/>
		)
	},
}

export const UndefinedInput: Story = {
	name: 'Undefined input',
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When the style argument is <code>undefined</code>, the function returns{' '}
					<code>undefined</code> (no object).
				</p>
			),
		}),
	],
	render() {
		const domStyle = toDomStyle(undefined)
		return (
			<StyleDemo
				style={undefined}
				domStyle={domStyle}
				title="Input: undefined → Output: undefined"
			/>
		)
	},
}

export const EmptyObject: Story = {
	name: 'Empty object',
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When the style argument is an empty object <code>{'{}'}</code>, the function returns an
					empty object.
				</p>
			),
		}),
	],
	render() {
		const style: CSSProperties = {}
		const domStyle = toDomStyle(style)
		return <StyleDemo style={style} domStyle={domStyle} title="Input: {} → Output: {}" />
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [showDocSource()],
}
