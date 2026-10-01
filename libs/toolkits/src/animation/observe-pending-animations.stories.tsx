import { observePendingAnimations } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useRef, useState } from 'react'
import { LogPanel } from '../testing/log-panel.tsx'
import code from './observe-pending-animations.ts?raw'

const meta: Meta<FnToArgTypes<typeof observePendingAnimations>> = {
	title: 'animation/observePendingAnimations',
	tags: ['func', 'rc', 'version:3.6'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes an element (or document) for changes to its finite, pending animations and invokes a callback with the updated list whenever one starts, finishes, or is canceled. Returns a cleanup function that stops observing.'
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: `const stop = observePendingAnimations((pending) => {
  closeButton.disabled = pending.length > 0
}, dialog)
// later
stop()`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observePendingAnimations(callback, el)</code> calls <code>callback</code>{' '}
						immediately with the current pending animations, then again whenever one starts,
						finishes, or is canceled.
					</p>
					<p>
						Use it to react to animation state over time instead of polling with{' '}
						<code>getPendingAnimations</code>. Toggle watching on, then click{' '}
						<strong>Start animation</strong> to see each notification.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: function BasicUsageStory() {
		const boxRef = useRef<HTMLDivElement>(null)
		const stopRef = useRef<(() => void) | null>(null)
		const [watching, setWatching] = useState(false)
		const [count, setCount] = useState(0)
		const [log, setLog] = useState<string[]>([])

		const toggleWatching = () => {
			if (watching) {
				stopRef.current?.()
				stopRef.current = null
				setWatching(false)
				setLog((prev) => [...prev, 'stopped watching'])
				return
			}

			const el = boxRef.current
			if (!el) return
			stopRef.current = observePendingAnimations((pending) => {
				setCount(pending.length)
				setLog((prev) => [...prev, `pending: ${pending.length}`])
			}, el)
			setWatching(true)
		}

		const startAnimation = () => {
			const el = boxRef.current
			if (!el) return
			el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(100px)' }], {
				duration: 1000
			})
		}

		return (
			<StoryCard title="Observe pending animations" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						<button
							type="button"
							onClick={toggleWatching}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							{watching ? 'Stop watching' : 'Start watching'}
						</button>
						<button
							type="button"
							onClick={startAnimation}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Start animation
						</button>
					</div>
					<div
						ref={boxRef}
						style={{
							width: '4rem',
							height: '4rem',
							borderRadius: '0.5rem',
							background: '#0066cc'
						}}
					/>
					<div>
						Pending animations: <strong>{count}</strong>
					</div>
					<LogPanel title="Events:" log={log} />
				</div>
			</StoryCard>
		)
	}
}

export const Target: Story = {
	name: 'target',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'`target` scopes observation to a specific element (and its descendants). Omit it to observe the whole document.'
		},
		source: {
			code: `observePendingAnimations(callback, panel) // panel and its descendants only
observePendingAnimations(callback) // the whole document`
		}
	}),
	decorators: [showSource()],
	render: function TargetStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const outsideRef = useRef<HTMLDivElement>(null)
		const stopRef = useRef<(() => void) | null>(null)
		const [watching, setWatching] = useState(false)
		const [log, setLog] = useState<string[]>([])

		const toggleWatching = () => {
			if (watching) {
				stopRef.current?.()
				stopRef.current = null
				setWatching(false)
				setLog((prev) => [...prev, 'stopped watching'])
				return
			}

			const el = panelRef.current
			if (!el) return
			stopRef.current = observePendingAnimations((pending) => {
				setLog((prev) => [...prev, `panel pending: ${pending.length}`])
			}, el)
			setWatching(true)
		}

		const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
			ref.current?.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(100px)' }], {
				duration: 1000
			})
		}

		return (
			<StoryCard title="Scope observation with target" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
					<div
						ref={panelRef}
						style={{
							display: 'flex',
							gap: '0.5rem',
							border: '1px dashed currentColor',
							padding: '0.5rem'
						}}
					>
						<div
							style={{
								width: '3rem',
								height: '3rem',
								borderRadius: '0.5rem',
								background: '#0066cc'
							}}
						/>
						<span>panel (target)</span>
					</div>
					<div
						ref={outsideRef}
						style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: '#cc3300' }}
					/>
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						<button
							type="button"
							onClick={toggleWatching}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							{watching ? 'Stop watching panel' : 'Start watching panel'}
						</button>
						<button
							type="button"
							onClick={() => animate(panelRef)}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Animate inside panel
						</button>
						<button
							type="button"
							onClick={() => animate(outsideRef)}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Animate outside panel
						</button>
					</div>
					<LogPanel title="Events (only panel is observed):" log={log} />
				</div>
			</StoryCard>
		)
	}
}

export const Options: Story = {
	name: 'options',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'`options.subtree` (default `true`) includes descendant animations; set it to `false` to only observe animations on `target` itself. `options.filter` skips animations the caller does not care about.'
		},
		source: {
			code: `observePendingAnimations(callback, panel, { subtree: false })
observePendingAnimations(callback, panel, { filter: (a) => isOpacityAnimation(a) })`
		}
	}),
	decorators: [showSource()],
	render: function OptionsStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const childRef = useRef<HTMLDivElement>(null)
		const stopRef = useRef<(() => void) | null>(null)
		const [subtree, setSubtree] = useState(true)
		const [opacityOnly, setOpacityOnly] = useState(false)
		const [count, setCount] = useState(0)

		const restart = () => {
			stopRef.current?.()
			const el = panelRef.current
			if (!el) return
			stopRef.current = observePendingAnimations((pending) => setCount(pending.length), el, {
				subtree,
				filter: opacityOnly
					? (a) => {
							const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.()
							return keyframes?.some((k) => 'opacity' in k) ?? false
						}
					: undefined
			})
		}

		useEffect(() => {
			restart()
			return () => stopRef.current?.()
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [subtree, opacityOnly])

		const animateChild = () => {
			childRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000 })
			childRef.current?.animate([{ transform: 'scale(0.5)' }, { transform: 'scale(1)' }], {
				duration: 2000
			})
		}

		return (
			<StoryCard title="subtree and filter options" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
					<div style={{ display: 'flex', gap: '1rem' }}>
						<label>
							<input
								type="checkbox"
								checked={subtree}
								onChange={(e) => setSubtree(e.target.checked)}
							/>{' '}
							subtree
						</label>
						<label>
							<input
								type="checkbox"
								checked={opacityOnly}
								onChange={(e) => setOpacityOnly(e.target.checked)}
							/>{' '}
							filter: opacity only
						</label>
					</div>
					<div ref={panelRef} style={{ border: '1px dashed currentColor', padding: '0.5rem' }}>
						panel (target)
						<div
							ref={childRef}
							style={{
								marginTop: '0.5rem',
								width: '3rem',
								height: '3rem',
								borderRadius: '0.5rem',
								background: '#0066cc'
							}}
						/>
					</div>
					<button
						type="button"
						onClick={animateChild}
						style={{
							alignSelf: 'flex-start',
							padding: '0.25rem 0.75rem',
							border: '1px solid currentColor',
							borderRadius: '0.25rem',
							cursor: 'pointer'
						}}
					>
						Animate descendant (opacity + transform)
					</button>
					<div>
						Pending animations: <strong>{count}</strong>
					</div>
				</div>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
