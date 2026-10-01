import { waitForAnimations } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useRef, useState } from 'react'
import code from './wait-for-animations.ts?raw'

const meta: Meta<FnToArgTypes<typeof waitForAnimations>> = {
	title: 'animation/waitForAnimations',
	tags: ['func', 'rc', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Resolves when no finite animation on the target is pending. Uses the Web Animations API (`element.getAnimations()` and `Animation.finished`) to detect CSS transitions, CSS animations, and Web Animations. Infinite animations (e.g. `animate-spin`) are ignored. Resolves immediately when `getAnimations` is unavailable (jsdom, SSR).'
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
			code: `el.classList.add('exit')
await waitForAnimations(el)
el.remove()`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>waitForAnimations(el)</code> resolves when all finite animations on the element
						(and its descendants) have finished.
					</p>
					<p>
						Use it to run logic after an enter or exit animation ends: unmount after an exit
						animation, move focus after a panel opens, or measure layout after a transition.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: function BasicUsageStory() {
		const boxRef = useRef<HTMLDivElement>(null)
		const [status, setStatus] = useState<'idle' | 'animating' | 'done'>('idle')

		const run = async () => {
			const el = boxRef.current
			if (!el) return

			setStatus('animating')
			el.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], { duration: 600 })
			await waitForAnimations(el)
			setStatus('done')
		}

		return (
			<StoryCard title="Wait for animation to finish" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
					<div
						ref={boxRef}
						style={{
							width: '4rem',
							height: '4rem',
							borderRadius: '0.5rem',
							background: '#0066cc'
						}}
					/>
					<button
						type="button"
						onClick={run}
						style={{
							padding: '0.25rem 0.75rem',
							border: '1px solid currentColor',
							borderRadius: '0.25rem',
							cursor: 'pointer',
							alignSelf: 'flex-start'
						}}
					>
						Animate & wait
					</button>
					<div>
						Status: <strong>{status}</strong>
					</div>
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
				'`target` scopes the wait to a specific element (and its descendants). Omit it to wait on the whole document.'
		},
		source: {
			code: `await waitForAnimations(panel) // panel and its descendants only
await waitForAnimations() // the whole document`
		}
	}),
	decorators: [showSource()],
	render: function TargetStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const outsideRef = useRef<HTMLDivElement>(null)
		const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle')

		const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
			ref.current?.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], { duration: 600 })
		}

		const waitOnPanel = async () => {
			const el = panelRef.current
			if (!el) return
			setStatus('waiting')
			await waitForAnimations(el)
			setStatus('done')
		}

		return (
			<StoryCard title="Scope the wait with target" appearance="output">
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
						<button
							type="button"
							onClick={waitOnPanel}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							waitForAnimations(panel)
						</button>
					</div>
					<div>
						Status: <strong>{status}</strong>
					</div>
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
				'`options.subtree` (default `true`) includes descendant animations; set it to `false` to only wait on `target` itself. `options.filter` skips animations the caller does not care about. See `WaitForAnimationsOptions` for the full list, including `settleFrames`, `timeout`, and `signal`.'
		},
		source: {
			code: `await waitForAnimations(panel, { subtree: false }) // panel only, not its descendant
await waitForAnimations(panel, { filter: (a) => isOpacityAnimation(a) })`
		}
	}),
	decorators: [showSource()],
	render: function OptionsStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const childRef = useRef<HTMLDivElement>(null)
		const [subtree, setSubtree] = useState(true)
		const [opacityOnly, setOpacityOnly] = useState(false)
		const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle')

		const animateChild = () => {
			childRef.current?.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], { duration: 600 })
			childRef.current?.animate(
				[{ transform: 'scale(1)' }, { transform: 'scale(0.5)' }, { transform: 'scale(1)' }],
				{ duration: 1200 }
			)
		}

		const run = async () => {
			const el = panelRef.current
			if (!el) return
			setStatus('waiting')
			await waitForAnimations(el, {
				subtree,
				filter: opacityOnly
					? (a) => {
							const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.()
							return keyframes?.some((k) => 'opacity' in k) ?? false
						}
					: undefined
			})
			setStatus('done')
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
							filter: opacity only (600ms) — unchecked also waits for the 1200ms transform
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
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						<button
							type="button"
							onClick={animateChild}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Animate descendant (opacity 600ms + transform 1200ms)
						</button>
						<button
							type="button"
							onClick={run}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							waitForAnimations(panel, options)
						</button>
					</div>
					<div>
						Status: <strong>{status}</strong>
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
