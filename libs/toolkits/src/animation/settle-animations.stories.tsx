import { settleAnimations } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { LogPanel } from '../testing/log-panel.tsx'
import code from './settle-animations.ts?raw'

const meta: Meta<FnToArgTypes<typeof settleAnimations>> = {
	title: 'animation/settleAnimations',
	tags: ['func', 'rc', 'version:3.6'],
	parameters: defineDocsParam({
		description: {
			component:
				'Quickly settles animations on the target into a stable, no-longer-moving state: finite animations jump to their end, infinite ones pause in place. Returns a cleanup function that stops observing and resumes paused infinite animations.'
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
			code: `settleAnimations(dialog)()
// every finite animation on dialog just jumped to its end state`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>settleAnimations(el)</code> immediately jumps every finite animation on{' '}
						<code>el</code> to its end state. Use it right before a screenshot or an assertion so
						you don't have to wait out the real duration.
					</p>
					<p>
						It also returns a cleanup function (unused above, since there's nothing left to clean up
						once a one-off call finishes). See <strong>Watches for New Animations</strong> for why
						you'd hold on to it instead.
					</p>
					<p>
						<strong>Start 5s pulse</strong> runs a single opacity pulse with{' '}
						<code>duration: 5000</code>, which is slow enough to click <strong>Settle now</strong>{' '}
						while it is still in flight. Watch the elapsed time jump straight to 5000ms.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: function BasicUsageStory() {
		const boxRef = useRef<HTMLDivElement>(null)
		const animationRef = useRef<Animation>(null)
		const [elapsed, setElapsed] = useState(0)
		const [playState, setPlayState] = useState<AnimationPlayState | 'none'>('none')

		useEffect(() => {
			let frame = requestAnimationFrame(function tick() {
				const animation = animationRef.current
				setPlayState(animation?.playState ?? 'none')
				setElapsed(Math.round(Number(animation?.currentTime ?? 0)))
				frame = requestAnimationFrame(tick)
			})
			return () => cancelAnimationFrame(frame)
		}, [])

		const startAnimation = () => {
			const el = boxRef.current
			if (!el) return
			animationRef.current?.cancel()
			animationRef.current = el.animate([{ opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }], {
				duration: 5000
			})
		}

		const settle = () => {
			const el = boxRef.current
			if (!el) return
			settleAnimations(el)() // call, then immediately clean up: a one-shot "settle what's running now"
		}

		return (
			<StoryCard title="Fast-forward a running animation" appearance="output">
				<div className="flex flex-col gap-3">
					<div ref={boxRef} className="size-16 rounded-lg bg-[#0066cc]" />
					<div className="flex gap-2">
						<button
							type="button"
							onClick={startAnimation}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Start 5s pulse
						</button>
						<button
							type="button"
							onClick={settle}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Settle now
						</button>
					</div>
					<dl className="grid grid-cols-[auto_1fr] gap-x-4 font-mono">
						<dt>elapsed</dt>
						<dd>{elapsed}ms / 5000ms</dd>
						<dt>playState</dt>
						<dd>{playState}</dd>
					</dl>
				</div>
			</StoryCard>
		)
	}
}

export const WatchesForNewAnimations: Story = {
	name: 'Watches for New Animations',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'`settleAnimations` keeps observing the target until its cleanup function is called. Any transition or animation that starts later — e.g. triggered by a class toggled well after the initial call — is settled immediately too, with no need to call `settleAnimations` again. This is the whole reason it returns a cleanup function: call it only once you want new animations to play normally again.'
		},
		source: {
			code: `const stopWatching = settleAnimations(panel)
// every transition that starts on panel from here on settles instantly...
panel.classList.toggle('dimmed')
// ...until cleanup runs
stopWatching()
panel.classList.toggle('dimmed') // now this one plays out normally`
		}
	}),
	decorators: [showSource()],
	render: function WatchesForNewAnimationsStory() {
		const boxRef = useRef<HTMLDivElement>(null)
		const stopWatchingRef = useRef<(() => void) | null>(null)
		const [watching, setWatching] = useState(false)
		const [dimmed, setDimmed] = useState(false)
		const [log, setLog] = useState<string[]>([])

		const toggleWatching = () => {
			if (watching) {
				stopWatchingRef.current?.()
				stopWatchingRef.current = null
				setWatching(false)
				setLog((prev) => [...prev, 'stopped watching'])
			} else {
				const el = boxRef.current
				if (!el) return
				stopWatchingRef.current = settleAnimations(el)
				setWatching(true)
				setLog((prev) => [...prev, 'started watching'])
			}
		}

		const toggleTransition = () => {
			const el = boxRef.current
			if (!el) return
			const start = performance.now()
			const onEnd = () => {
				const elapsed = Math.round(performance.now() - start)
				setLog((prev) => [...prev, `transition took ${elapsed}ms (watching: ${watching})`])
				el.removeEventListener('transitionend', onEnd)
			}
			el.addEventListener('transitionend', onEnd)
			setDimmed((prev) => !prev)
		}

		return (
			<StoryCard title="Settle animations that start later" appearance="output">
				<div className="flex flex-col gap-3">
					<div
						ref={boxRef}
						className={clsx(
							'size-16 rounded-lg bg-[#0066cc] transition-opacity duration-2000',
							dimmed && 'opacity-20'
						)}
					/>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={toggleWatching}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							{watching ? 'Stop watching' : 'Start watching'}
						</button>
						<button
							type="button"
							onClick={toggleTransition}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Toggle opacity (2s transition)
						</button>
					</div>
					<LogPanel title="Events:" log={log} />
				</div>
			</StoryCard>
		)
	}
}

export const InfiniteAnimation: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Infinite animations can never reach an end time, so `settleAnimations` pauses them in place instead of finishing them. The cleanup function resumes them from where they stopped.'
		},
		source: {
			code: `const restore = settleAnimations(spinner)
// spinner is now frozen mid-rotation
restore()
// spinner resumes from where it stopped`
		}
	}),
	decorators: [showSource()],
	render: function InfiniteAnimationStory() {
		const boxRef = useRef<HTMLDivElement>(null)
		const animationRef = useRef<Animation>(null)
		const cleanupRef = useRef<() => void>(null)
		const [playState, setPlayState] = useState<AnimationPlayState | 'none'>('none')

		useEffect(() => {
			const el = boxRef.current
			if (!el) return
			animationRef.current = el.animate(
				[{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
				{ duration: 2000, iterations: Number.POSITIVE_INFINITY }
			)

			let frame = requestAnimationFrame(function tick() {
				setPlayState(animationRef.current?.playState ?? 'none')
				frame = requestAnimationFrame(tick)
			})
			return () => {
				cancelAnimationFrame(frame)
				cleanupRef.current?.()
				animationRef.current?.cancel()
			}
		}, [])

		const pause = () => {
			const el = boxRef.current
			if (!el) return
			cleanupRef.current = settleAnimations(el)
		}

		const restore = () => {
			cleanupRef.current?.()
			cleanupRef.current = null
		}

		return (
			<StoryCard title="Pause infinite animations" appearance="output">
				<div className="flex flex-col gap-3">
					<div ref={boxRef} className="size-16 rounded-lg bg-[#0066cc]" />
					<div className="flex gap-2">
						<button
							type="button"
							onClick={pause}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							settleAnimations
						</button>
						<button
							type="button"
							onClick={restore}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Restore
						</button>
					</div>
					<dl className="grid grid-cols-[auto_1fr] gap-x-4 font-mono">
						<dt>playState</dt>
						<dd>{playState}</dd>
					</dl>
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
				'`target` scopes settling to a specific element (and its descendants). Omit it to settle the whole document.'
		},
		source: {
			code: `settleAnimations(panel)() // panel and its descendants only
settleAnimations()() // the whole document`
		}
	}),
	decorators: [showSource()],
	render: function TargetStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const outsideRef = useRef<HTMLDivElement>(null)

		const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
			ref.current?.animate([{ opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }], { duration: 5000 })
		}

		const settlePanel = () => {
			const el = panelRef.current
			if (!el) return
			settleAnimations(el)()
		}

		return (
			<StoryCard title="Scope settling with target" appearance="output">
				<div className="flex flex-col gap-3">
					<div className="flex gap-2 border border-dashed border-current p-2">
						<div ref={panelRef} className="size-16 rounded-lg bg-[#0066cc]" />
						<span>panel (target)</span>
					</div>
					<div ref={outsideRef} className="size-16 rounded-lg bg-[#cc3300]" />
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => animate(panelRef)}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Start 5s pulse inside panel
						</button>
						<button
							type="button"
							onClick={() => animate(outsideRef)}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Start 5s pulse outside panel
						</button>
						<button
							type="button"
							onClick={settlePanel}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Settle panel
						</button>
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
				'`options.subtree` (default `true`) settles descendant animations too; set it to `false` to only settle animations on `target` itself.'
		},
		source: {
			code: 'settleAnimations(panel, { subtree: false })() // panel only, not its descendant'
		}
	}),
	decorators: [showSource()],
	render: function OptionsStory() {
		const panelRef = useRef<HTMLDivElement>(null)
		const childRef = useRef<HTMLDivElement>(null)
		const [subtree, setSubtree] = useState(true)

		const animateChild = () => {
			childRef.current?.animate([{ opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }], {
				duration: 5000
			})
		}

		const settle = () => {
			const el = panelRef.current
			if (!el) return
			settleAnimations(el, { subtree })()
		}

		return (
			<StoryCard title="subtree option" appearance="output">
				<div className="flex flex-col gap-3">
					<label>
						<input
							type="checkbox"
							checked={subtree}
							onChange={(e) => setSubtree(e.target.checked)}
						/>{' '}
						subtree
					</label>
					<div ref={panelRef} className="border border-dashed border-current p-2">
						panel (target)
						<div ref={childRef} className="mt-2 size-16 rounded-lg bg-[#0066cc]" />
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={animateChild}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Start 5s pulse on descendant
						</button>
						<button
							type="button"
							onClick={settle}
							className="cursor-pointer rounded border border-current px-3 py-1"
						>
							Settle panel
						</button>
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
