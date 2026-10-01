import { getPendingAnimations } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useRef, useState } from 'react'
import code from './get-pending-animations.ts?raw'

const meta: Meta<FnToArgTypes<typeof getPendingAnimations>> = {
	title: 'animation/getPendingAnimations',
	tags: ['func', 'rc', 'version:3.6'],
	parameters: defineDocsParam({
		description: {
			component:
				'Lists the finite, pending animations on an element (or document), for custom logic. Infinite animations are excluded because they never finish.'
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
			code: `const pending = getPendingAnimations(dialog)
if (pending.length === 0) unmount()`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPendingAnimations(el)</code> returns an array of <code>Animation</code> objects
						that are still running and have a finite duration.
					</p>
					<p>
						Use it to check whether any animations are still in progress before taking action, or to
						build custom waiting logic.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: function BasicUsageStory() {
		const squareColors = ['#0066cc', '#cc3300', '#009933', '#9933cc', '#ff9900']
		const squareCount = squareColors.length
		const boxRefs = useRef<(HTMLDivElement | null)[]>([])
		const nextIndexRef = useRef(0)
		const [count, setCount] = useState(0)

		const check = () => {
			const total = boxRefs.current.reduce(
				(sum, el) => sum + (el ? getPendingAnimations(el).length : 0),
				0
			)
			setCount(total)
		}

		const startAnimation = () => {
			const el = boxRefs.current[nextIndexRef.current]
			nextIndexRef.current = (nextIndexRef.current + 1) % squareCount
			if (!el) return
			el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(100px)' }], {
				duration: 2000
			})
			check()
		}

		return (
			<StoryCard title="Query pending animations" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
					<div style={{ display: 'flex', gap: '0.5rem' }}>
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
						<button
							type="button"
							onClick={check}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Check pending
						</button>
					</div>
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						{Array.from({ length: squareCount }, (_, index) => (
							<div
								key={index}
								ref={(el) => {
									boxRefs.current[index] = el
								}}
								style={{
									width: '4rem',
									height: '4rem',
									borderRadius: '0.5rem',
									background: squareColors[index]
								}}
							/>
						))}
					</div>
					<div>
						Pending animations: <strong>{count}</strong>
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
				'`target` scopes the query to a specific element (and its descendants). Omit it to query the whole document.'
		},
		source: {
			code: `getPendingAnimations(panel) // panel and its descendants only
getPendingAnimations() // the whole document`
		}
	}),
	decorators: [showSource()],
	render: function TargetStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const outsideRef = useRef<HTMLDivElement>(null)
		const [panelCount, setPanelCount] = useState(0)
		const [documentCount, setDocumentCount] = useState(0)

		const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
			ref.current?.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(100px)' }], {
				duration: 2000
			})
		}

		const check = () => {
			setPanelCount(panelRef.current ? getPendingAnimations(panelRef.current).length : 0)
			setDocumentCount(getPendingAnimations().length)
		}

		return (
			<StoryCard title="Scope the query with target" appearance="output">
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
							onClick={check}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Check pending
						</button>
					</div>
					<div>
						getPendingAnimations(panel): <strong>{panelCount}</strong>
					</div>
					<div>
						getPendingAnimations(): <strong>{documentCount}</strong>
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
				'`options.subtree` (default `true`) includes descendant animations; set it to `false` to only match animations on `target` itself. `options.filter` skips animations the caller does not care about.'
		},
		source: {
			code: `getPendingAnimations(panel, { subtree: false }) // panel only, not its descendant
getPendingAnimations(panel, { filter: (a) => isOpacityAnimation(a) })`
		}
	}),
	decorators: [showSource()],
	render: function OptionsStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const childRef = useRef<HTMLDivElement>(null)
		const [subtree, setSubtree] = useState(true)
		const [opacityOnly, setOpacityOnly] = useState(false)
		const [count, setCount] = useState(0)

		const animateChild = () => {
			childRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000 })
			childRef.current?.animate([{ transform: 'scale(0.5)' }, { transform: 'scale(1)' }], {
				duration: 2000
			})
		}

		const check = () => {
			const el = panelRef.current
			if (!el) return
			setCount(
				getPendingAnimations(el, {
					subtree,
					filter: opacityOnly
						? (a) => {
								const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.()
								return keyframes?.some((k) => 'opacity' in k) ?? false
							}
						: undefined
				}).length
			)
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
							Animate descendant (opacity + transform)
						</button>
						<button
							type="button"
							onClick={check}
							style={{
								padding: '0.25rem 0.75rem',
								border: '1px solid currentColor',
								borderRadius: '0.25rem',
								cursor: 'pointer'
							}}
						>
							Check pending on panel
						</button>
					</div>
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
