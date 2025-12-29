import type { Properties } from '#just-web/css'
import { toDOMStyle } from '#just-web/css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef } from 'react'

const meta = {
	title: 'CSS Properties/toDOMStyle',
	tags: ['new', 'version:0.4'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const DemoComponent = ({ style, title }: { style: Properties | undefined; title: string }) => {
	const domStyle = toDOMStyle(style)

	const element = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (element.current && domStyle) {
			requestAnimationFrame(() => {
				if (element.current) {
					for (const [key, value] of Object.entries(domStyle)) {
						element.current.style.setProperty(key, value as any)
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
			<div className="flex-1">
				<h4 className="m-0 mb-2 text-sm">Visual Result:</h4>
				<div ref={element} className="demo-element">
					Sample Element
				</div>
			</div>
		</div>
	)
}

export const BasicUsage: Story = {
	render() {
		const style: Properties = {
			backgroundColor: 'lightblue',
			color: 'darkblue',
			padding: '1rem',
			borderRadius: '8px',
		}

		return <DemoComponent style={style} title="Basic CSS Properties" />
	},
}

export const CamelCaseConversion: Story = {
	render() {
		const style: Properties = {
			backgroundColor: 'lightgreen',
			fontSize: '1.2rem',
			fontWeight: 'bold',
			textAlign: 'center',
			marginTop: '0.5rem',
			paddingLeft: '1rem',
		}

		return <DemoComponent style={style} title="CamelCase to kebab-case Conversion" />
	},
}

export const CustomProperties: Story = {
	render() {
		const style: Properties = {
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

		return <DemoComponent style={style} title="Custom CSS Properties (CSS Variables)" />
	},
}

export const MixedProperties: Story = {
	render() {
		const style: Properties = {
			'--theme-color': '#9c88ff',
			'--spacing': '1.5rem',
			backgroundColor: 'var(--theme-color)',
			padding: 'var(--spacing)',
			borderRadius: '12px',
			fontSize: '1.1rem',
			fontWeight: '600',
			textAlign: 'center',
			color: 'white',
			boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		}

		return <DemoComponent style={style} title="Mixed Standard and Custom Properties" />
	},
}

export const UndefinedInput: Story = {
	render() {
		return <DemoComponent style={undefined} title="Undefined Input" />
	},
}

export const EmptyObject: Story = {
	render() {
		return <DemoComponent style={{}} title="Empty Style Object" />
	},
}
