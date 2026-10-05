import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,f as a,i as o,l as s,p as c,s as l}from"./iframe-Bl0V_0SD.js";import{n as u}from"./settle-animations-DPtFUeFD.js";import{t as d}from"./src-wPkKOXUl.js";import{n as f,t as p}from"./log-panel-OPG7Kxv5.js";var m;function h(){return(h=e((()=>{m=`import type { WaitForAnimationsOptions } from './animation.types.ts'

/**
 * Quickly settles animations on the target into a stable, no-longer-moving
 * state: finite animations jump to their end, infinite ones pause in place.
 * The visual effect lines up with Playwright's \`animations: 'disabled'' for
 * screenshot purposes, though the mechanism differs — this reacts to each
 * \`Animation\` individually instead of forcing all durations to zero, so a
 * newly started animation can run for a sub-frame instant before it is caught.
 *
 * It also observes the target for new animations that start later (e.g. from
 * a \`transitionstart\` or \`animationstart\` firing after a style flush) and
 * settles them as they appear.
 *
 * Returns a cleanup function that stops observing and resumes any infinite
 * animations that were paused.
 *
 * @param target - Element or Document to operate on. Defaults to \`document\`.
 * @param options - \`subtree\` (default \`true\`) includes descendants and pseudo-elements.
 * @returns A cleanup function.
 *
 * @example
 * \`\`\`ts
 * const restore = settleAnimations(dialog)
 * // ...take a screenshot or assert layout...
 * restore()
 * \`\`\`
 *
 * @rc
 */
export function settleAnimations(
	target?: Element | Document | undefined,
	options?: Pick<WaitForAnimationsOptions, 'subtree'> | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) return () => {}

	const subtree = options?.subtree ?? true
	const pausedInfinite: Animation[] = []
	let active = true

	processAnimations(el, subtree, pausedInfinite)

	const observer = new MutationObserver(() => {
		if (active) processAnimations(el, subtree, pausedInfinite)
	})

	if (el instanceof Element) {
		observer.observe(el, { subtree, childList: true, attributes: true })
	} else {
		observer.observe(el.documentElement, { subtree, childList: true, attributes: true })
	}

	const onAnimationStart = () => {
		if (active) processAnimations(el, subtree, pausedInfinite)
	}
	el.addEventListener('animationstart', onAnimationStart, true)
	el.addEventListener('transitionstart', onAnimationStart, true)

	return () => {
		active = false
		observer.disconnect()
		el.removeEventListener('animationstart', onAnimationStart, true)
		el.removeEventListener('transitionstart', onAnimationStart, true)

		for (const a of pausedInfinite) {
			if (a.playState === 'paused') a.play()
		}
	}
}

function processAnimations(el: Element | Document, subtree: boolean, pausedInfinite: Animation[]) {
	const animations = el.getAnimations({ subtree })

	for (const a of animations) {
		if (a.playState === 'finished' || a.playState === 'idle') continue

		const timing = a.effect?.getComputedTiming()
		const isInfinite = timing && !Number.isFinite(timing.endTime)

		if (isInfinite) {
			if (!pausedInfinite.includes(a)) {
				a.pause()
				pausedInfinite.push(a)
			}
		} else {
			a.finish()
		}
	}
}
`})))()}var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{d(),l(),c(),g=t(),f(),h(),_=n(),v={title:`animation/settleAnimations`,tags:[`func`,`rc`,`version:3.6`],parameters:r({description:{component:`Quickly settles animations on the target into a stable, no-longer-moving state: finite animations jump to their end, infinite ones pause in place. Returns a cleanup function that stops observing and resumes paused infinite animations.`}}),render:()=>(0,_.jsx)(_.Fragment,{})},y={tags:[`use-case`],parameters:r({source:{code:`settleAnimations(dialog)()
// every finite animation on dialog just jumped to its end state`}}),decorators:[s({content:(0,_.jsxs)(`div`,{className:`space-y-2`,children:[(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`code`,{children:`settleAnimations(el)`}),` immediately jumps every finite animation on`,` `,(0,_.jsx)(`code`,{children:`el`}),` to its end state. Use it right before a screenshot or an assertion so you don't have to wait out the real duration.`]}),(0,_.jsxs)(`p`,{children:[`It also returns a cleanup function (unused above, since there's nothing left to clean up once a one-off call finishes). See `,(0,_.jsx)(`strong`,{children:`Watches for New Animations`}),` for why you'd hold on to it instead.`]}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`strong`,{children:`Start 5s pulse`}),` runs a single opacity pulse with`,` `,(0,_.jsx)(`code`,{children:`duration: 5000`}),`, which is slow enough to click `,(0,_.jsx)(`strong`,{children:`Settle now`}),` `,`while it is still in flight. Watch the elapsed time jump straight to 5000ms.`]})]})}),i()],render:function(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),[n,r]=(0,g.useState)(0),[i,a]=(0,g.useState)(`none`);return(0,g.useEffect)(()=>{let e=requestAnimationFrame(function n(){let i=t.current;a(i?.playState??`none`),r(Math.round(Number(i?.currentTime??0))),e=requestAnimationFrame(n)});return()=>cancelAnimationFrame(e)},[]),(0,_.jsx)(o,{title:`Fast-forward a running animation`,appearance:`output`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(`div`,{ref:e,className:`size-16 rounded-lg bg-[#0066cc]`}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>{let n=e.current;n&&(t.current?.cancel(),t.current=n.animate([{opacity:1},{opacity:.2},{opacity:1}],{duration:5e3}))},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Start 5s pulse`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;t&&u(t)()},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Settle now`})]}),(0,_.jsxs)(`dl`,{className:`grid grid-cols-[auto_1fr] gap-x-4 font-mono`,children:[(0,_.jsx)(`dt`,{children:`elapsed`}),(0,_.jsxs)(`dd`,{children:[n,`ms / 5000ms`]}),(0,_.jsx)(`dt`,{children:`playState`}),(0,_.jsx)(`dd`,{children:i})]})]})})}},b={name:`Watches for New Animations`,tags:[`use-case`],parameters:r({description:{story:"`settleAnimations` keeps observing the target until its cleanup function is called. Any transition or animation that starts later — e.g. triggered by a class toggled well after the initial call — is settled immediately too, with no need to call `settleAnimations` again. This is the whole reason it returns a cleanup function: call it only once you want new animations to play normally again."},source:{code:`const stopWatching = settleAnimations(panel)
// every transition that starts on panel from here on settles instantly...
panel.classList.toggle('dimmed')
// ...until cleanup runs
stopWatching()
panel.classList.toggle('dimmed') // now this one plays out normally`}}),decorators:[i()],render:function(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),[n,r]=(0,g.useState)(!1),[i,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)([]);return(0,_.jsx)(o,{title:`Settle animations that start later`,appearance:`output`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(`div`,{ref:e,className:a(`size-16 rounded-lg bg-[#0066cc] transition-opacity duration-2000`,i&&`opacity-20`)}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>{if(n)t.current?.(),t.current=null,r(!1),l(e=>[...e,`stopped watching`]);else{let n=e.current;if(!n)return;t.current=u(n),r(!0),l(e=>[...e,`started watching`])}},className:`cursor-pointer rounded border border-current px-3 py-1`,children:n?`Stop watching`:`Start watching`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;if(!t)return;let r=performance.now(),i=()=>{let e=Math.round(performance.now()-r);l(t=>[...t,`transition took ${e}ms (watching: ${n})`]),t.removeEventListener(`transitionend`,i)};t.addEventListener(`transitionend`,i),s(e=>!e)},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Toggle opacity (2s transition)`})]}),(0,_.jsx)(p,{title:`Events:`,log:c})]})})}},x={tags:[`use-case`],parameters:r({description:{story:"Infinite animations can never reach an end time, so `settleAnimations` pauses them in place instead of finishing them. The cleanup function resumes them from where they stopped."},source:{code:`const restore = settleAnimations(spinner)
// spinner is now frozen mid-rotation
restore()
// spinner resumes from where it stopped`}}),decorators:[i()],render:function(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),n=(0,g.useRef)(null),[r,i]=(0,g.useState)(`none`);return(0,g.useEffect)(()=>{let r=e.current;if(!r)return;t.current=r.animate([{transform:`rotate(0deg)`},{transform:`rotate(360deg)`}],{duration:2e3,iterations:1/0});let a=requestAnimationFrame(function e(){i(t.current?.playState??`none`),a=requestAnimationFrame(e)});return()=>{cancelAnimationFrame(a),n.current?.(),t.current?.cancel()}},[]),(0,_.jsx)(o,{title:`Pause infinite animations`,appearance:`output`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(`div`,{ref:e,className:`size-16 rounded-lg bg-[#0066cc]`}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;t&&(n.current=u(t))},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`settleAnimations`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>{n.current?.(),n.current=null},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Restore`})]}),(0,_.jsxs)(`dl`,{className:`grid grid-cols-[auto_1fr] gap-x-4 font-mono`,children:[(0,_.jsx)(`dt`,{children:`playState`}),(0,_.jsx)(`dd`,{children:r})]})]})})}},S={name:`target`,tags:[`props`],parameters:r({description:{story:"`target` scopes settling to a specific element (and its descendants). Omit it to settle the whole document."},source:{code:`settleAnimations(panel)() // panel and its descendants only
settleAnimations()() // the whole document`}}),decorators:[i()],render:function(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),n=e=>{e.current?.animate([{opacity:1},{opacity:.2},{opacity:1}],{duration:5e3})};return(0,_.jsx)(o,{title:`Scope settling with target`,appearance:`output`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsxs)(`div`,{className:`flex gap-2 border border-dashed border-current p-2`,children:[(0,_.jsx)(`div`,{ref:e,className:`size-16 rounded-lg bg-[#0066cc]`}),(0,_.jsx)(`span`,{children:`panel (target)`})]}),(0,_.jsx)(`div`,{ref:t,className:`size-16 rounded-lg bg-[#cc3300]`}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>n(e),className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Start 5s pulse inside panel`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>n(t),className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Start 5s pulse outside panel`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;t&&u(t)()},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Settle panel`})]})]})})}},C={name:`options`,tags:[`props`],parameters:r({description:{story:"`options.subtree` (default `true`) settles descendant animations too; set it to `false` to only settle animations on `target` itself."},source:{code:`settleAnimations(panel, { subtree: false })() // panel only, not its descendant`}}),decorators:[i()],render:function(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),[n,r]=(0,g.useState)(!0);return(0,_.jsx)(o,{title:`subtree option`,appearance:`output`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsxs)(`label`,{children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),` `,`subtree`]}),(0,_.jsxs)(`div`,{ref:e,className:`border border-dashed border-current p-2`,children:[`panel (target)`,(0,_.jsx)(`div`,{ref:t,className:`mt-2 size-16 rounded-lg bg-[#0066cc]`})]}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>{t.current?.animate([{opacity:1},{opacity:.2},{opacity:1}],{duration:5e3})},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Start 5s pulse on descendant`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;t&&u(t,{subtree:n})()},className:`cursor-pointer rounded border border-current px-3 py-1`,children:`Settle panel`})]})]})})}},w={tags:[`source`],parameters:r({source:{code:m}}),decorators:[i()]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: \`settleAnimations(dialog)()
// every finite animation on dialog just jumped to its end state\`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
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
  }), showSource()],
  render: function BasicUsageStory() {
    const boxRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<Animation>(null);
    const [elapsed, setElapsed] = useState(0);
    const [playState, setPlayState] = useState<AnimationPlayState | 'none'>('none');
    useEffect(() => {
      let frame = requestAnimationFrame(function tick() {
        const animation = animationRef.current;
        setPlayState(animation?.playState ?? 'none');
        setElapsed(Math.round(Number(animation?.currentTime ?? 0)));
        frame = requestAnimationFrame(tick);
      });
      return () => cancelAnimationFrame(frame);
    }, []);
    const startAnimation = () => {
      const el = boxRef.current;
      if (!el) return;
      animationRef.current?.cancel();
      animationRef.current = el.animate([{
        opacity: 1
      }, {
        opacity: 0.2
      }, {
        opacity: 1
      }], {
        duration: 5000
      });
    };
    const settle = () => {
      const el = boxRef.current;
      if (!el) return;
      settleAnimations(el)(); // call, then immediately clean up: a one-shot "settle what's running now"
    };
    return <StoryCard title="Fast-forward a running animation" appearance="output">
                <div className="flex flex-col gap-3">
                    <div ref={boxRef} className="size-16 rounded-lg bg-[#0066cc]" />
                    <div className="flex gap-2">
                        <button type="button" onClick={startAnimation} className="cursor-pointer rounded border border-current px-3 py-1">
                            Start 5s pulse
                        </button>
                        <button type="button" onClick={settle} className="cursor-pointer rounded border border-current px-3 py-1">
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
            </StoryCard>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Watches for New Animations',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: '\`settleAnimations\` keeps observing the target until its cleanup function is called. Any transition or animation that starts later — e.g. triggered by a class toggled well after the initial call — is settled immediately too, with no need to call \`settleAnimations\` again. This is the whole reason it returns a cleanup function: call it only once you want new animations to play normally again.'
    },
    source: {
      code: \`const stopWatching = settleAnimations(panel)
// every transition that starts on panel from here on settles instantly...
panel.classList.toggle('dimmed')
// ...until cleanup runs
stopWatching()
panel.classList.toggle('dimmed') // now this one plays out normally\`
    }
  }),
  decorators: [showSource()],
  render: function WatchesForNewAnimationsStory() {
    const boxRef = useRef<HTMLDivElement>(null);
    const stopWatchingRef = useRef<(() => void) | null>(null);
    const [watching, setWatching] = useState(false);
    const [dimmed, setDimmed] = useState(false);
    const [log, setLog] = useState<string[]>([]);
    const toggleWatching = () => {
      if (watching) {
        stopWatchingRef.current?.();
        stopWatchingRef.current = null;
        setWatching(false);
        setLog(prev => [...prev, 'stopped watching']);
      } else {
        const el = boxRef.current;
        if (!el) return;
        stopWatchingRef.current = settleAnimations(el);
        setWatching(true);
        setLog(prev => [...prev, 'started watching']);
      }
    };
    const toggleTransition = () => {
      const el = boxRef.current;
      if (!el) return;
      const start = performance.now();
      const onEnd = () => {
        const elapsed = Math.round(performance.now() - start);
        setLog(prev => [...prev, \`transition took \${elapsed}ms (watching: \${watching})\`]);
        el.removeEventListener('transitionend', onEnd);
      };
      el.addEventListener('transitionend', onEnd);
      setDimmed(prev => !prev);
    };
    return <StoryCard title="Settle animations that start later" appearance="output">
                <div className="flex flex-col gap-3">
                    <div ref={boxRef} className={clsx('size-16 rounded-lg bg-[#0066cc] transition-opacity duration-2000', dimmed && 'opacity-20')} />
                    <div className="flex gap-2">
                        <button type="button" onClick={toggleWatching} className="cursor-pointer rounded border border-current px-3 py-1">
                            {watching ? 'Stop watching' : 'Start watching'}
                        </button>
                        <button type="button" onClick={toggleTransition} className="cursor-pointer rounded border border-current px-3 py-1">
                            Toggle opacity (2s transition)
                        </button>
                    </div>
                    <LogPanel title="Events:" log={log} />
                </div>
            </StoryCard>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Infinite animations can never reach an end time, so \`settleAnimations\` pauses them in place instead of finishing them. The cleanup function resumes them from where they stopped.'
    },
    source: {
      code: \`const restore = settleAnimations(spinner)
// spinner is now frozen mid-rotation
restore()
// spinner resumes from where it stopped\`
    }
  }),
  decorators: [showSource()],
  render: function InfiniteAnimationStory() {
    const boxRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<Animation>(null);
    const cleanupRef = useRef<() => void>(null);
    const [playState, setPlayState] = useState<AnimationPlayState | 'none'>('none');
    useEffect(() => {
      const el = boxRef.current;
      if (!el) return;
      animationRef.current = el.animate([{
        transform: 'rotate(0deg)'
      }, {
        transform: 'rotate(360deg)'
      }], {
        duration: 2000,
        iterations: Number.POSITIVE_INFINITY
      });
      let frame = requestAnimationFrame(function tick() {
        setPlayState(animationRef.current?.playState ?? 'none');
        frame = requestAnimationFrame(tick);
      });
      return () => {
        cancelAnimationFrame(frame);
        cleanupRef.current?.();
        animationRef.current?.cancel();
      };
    }, []);
    const pause = () => {
      const el = boxRef.current;
      if (!el) return;
      cleanupRef.current = settleAnimations(el);
    };
    const restore = () => {
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
    return <StoryCard title="Pause infinite animations" appearance="output">
                <div className="flex flex-col gap-3">
                    <div ref={boxRef} className="size-16 rounded-lg bg-[#0066cc]" />
                    <div className="flex gap-2">
                        <button type="button" onClick={pause} className="cursor-pointer rounded border border-current px-3 py-1">
                            settleAnimations
                        </button>
                        <button type="button" onClick={restore} className="cursor-pointer rounded border border-current px-3 py-1">
                            Restore
                        </button>
                    </div>
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 font-mono">
                        <dt>playState</dt>
                        <dd>{playState}</dd>
                    </dl>
                </div>
            </StoryCard>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'target',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`target\` scopes settling to a specific element (and its descendants). Omit it to settle the whole document.'
    },
    source: {
      code: \`settleAnimations(panel)() // panel and its descendants only
settleAnimations()() // the whole document\`
    }
  }),
  decorators: [showSource()],
  render: function TargetStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
      ref.current?.animate([{
        opacity: 1
      }, {
        opacity: 0.2
      }, {
        opacity: 1
      }], {
        duration: 5000
      });
    };
    const settlePanel = () => {
      const el = panelRef.current;
      if (!el) return;
      settleAnimations(el)();
    };
    return <StoryCard title="Scope settling with target" appearance="output">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 border border-dashed border-current p-2">
                        <div ref={panelRef} className="size-16 rounded-lg bg-[#0066cc]" />
                        <span>panel (target)</span>
                    </div>
                    <div ref={outsideRef} className="size-16 rounded-lg bg-[#cc3300]" />
                    <div className="flex gap-2">
                        <button type="button" onClick={() => animate(panelRef)} className="cursor-pointer rounded border border-current px-3 py-1">
                            Start 5s pulse inside panel
                        </button>
                        <button type="button" onClick={() => animate(outsideRef)} className="cursor-pointer rounded border border-current px-3 py-1">
                            Start 5s pulse outside panel
                        </button>
                        <button type="button" onClick={settlePanel} className="cursor-pointer rounded border border-current px-3 py-1">
                            Settle panel
                        </button>
                    </div>
                </div>
            </StoryCard>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'options',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`options.subtree\` (default \`true\`) settles descendant animations too; set it to \`false\` to only settle animations on \`target\` itself.'
    },
    source: {
      code: 'settleAnimations(panel, { subtree: false })() // panel only, not its descendant'
    }
  }),
  decorators: [showSource()],
  render: function OptionsStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [subtree, setSubtree] = useState(true);
    const animateChild = () => {
      childRef.current?.animate([{
        opacity: 1
      }, {
        opacity: 0.2
      }, {
        opacity: 1
      }], {
        duration: 5000
      });
    };
    const settle = () => {
      const el = panelRef.current;
      if (!el) return;
      settleAnimations(el, {
        subtree
      })();
    };
    return <StoryCard title="subtree option" appearance="output">
                <div className="flex flex-col gap-3">
                    <label>
                        <input type="checkbox" checked={subtree} onChange={e => setSubtree(e.target.checked)} />{' '}
                        subtree
                    </label>
                    <div ref={panelRef} className="border border-dashed border-current p-2">
                        panel (target)
                        <div ref={childRef} className="mt-2 size-16 rounded-lg bg-[#0066cc]" />
                    </div>
                    <div className="flex gap-2">
                        <button type="button" onClick={animateChild} className="cursor-pointer rounded border border-current px-3 py-1">
                            Start 5s pulse on descendant
                        </button>
                        <button type="button" onClick={settle} className="cursor-pointer rounded border border-current px-3 py-1">
                            Settle panel
                        </button>
                    </div>
                </div>
            </StoryCard>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...w.parameters?.docs?.source}}},T=[`BasicUsage`,`WatchesForNewAnimations`,`InfiniteAnimation`,`Target`,`Options`,`Source`]})))()}E();export{y as BasicUsage,x as InfiniteAnimation,C as Options,w as Source,S as Target,b as WatchesForNewAnimations,T as __namedExportsOrder,v as default};