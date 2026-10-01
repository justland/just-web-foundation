import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-DnccW5KZ.js";import{n as c}from"./wait-for-animations-B048tPvb.js";import{t as l}from"./src-BE393voD.js";var u;function d(){return(d=e((()=>{u=`import type { WaitForAnimationsOptions } from './animation.types.ts'
import { getPendingAnimations } from './get-pending-animations.ts'

/**
 * Resolves when no finite animation on \`target\` is pending.
 *
 * Uses the Web Animations API (\`element.getAnimations()\` and
 * \`Animation.finished\`) to detect CSS transitions, CSS animations,
 * Web Animations, and pseudo-element animations. Infinite animations
 * (e.g. \`animate-spin\`, \`animate-pulse\`) are ignored.
 *
 * When \`getAnimations\` is unavailable (jsdom, happy-dom, SSR), resolves
 * immediately — the same graceful fallback used by React Aria, Headless UI,
 * and Base UI.
 *
 * @param target - Element or Document to watch. Defaults to \`document\`.
 * @param options - See {@link WaitForAnimationsOptions}.
 * @returns A promise that resolves when all finite animations have finished.
 *
 * @example
 * \`\`\`ts
 * el.classList.add('exit')
 * await waitForAnimations(el)
 * el.remove()
 * \`\`\`
 *
 * @rc
 */
export async function waitForAnimations(
	target?: Element | Document | undefined,
	options?: WaitForAnimationsOptions | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) return

	options?.signal?.throwIfAborted()

	const settleFrames = options?.settleFrames ?? 1
	await waitFrames(settleFrames)

	const timeoutId = setupTimeout(options)

	try {
		await drainAnimations(el, options)
	} finally {
		if (timeoutId !== undefined) clearTimeout(timeoutId)
	}
}

async function drainAnimations(
	el: Element | Document,
	options: WaitForAnimationsOptions | undefined
) {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	while (true) {
		options?.signal?.throwIfAborted()

		const pending = getPendingAnimations(el, options)
		if (pending.length === 0) {
			await waitFrames(1)
			const recheck = getPendingAnimations(el, options)
			if (recheck.length === 0) return
		}

		const current = pending.length > 0 ? pending : getPendingAnimations(el, options)
		if (current.length === 0) return

		await Promise.allSettled(current.map((a) => a.finished))
	}
}

function setupTimeout(options: WaitForAnimationsOptions | undefined) {
	if (options?.timeout === undefined) return undefined

	const controller = options.signal ? undefined : new AbortController()
	const signal = options.signal

	return setTimeout(() => {
		const error = new DOMException(
			\`waitForAnimations timed out after \${options.timeout}ms\`,
			'TimeoutError'
		)
		if (signal) {
			throw error
		}
		if (controller) {
			controller.abort(error)
		}
	}, options.timeout)
}

function waitFrames(n: number) {
	return new Promise<void>((resolve) => {
		let remaining = n
		function tick() {
			remaining--
			if (remaining <= 0) {
				resolve()
			} else {
				requestAnimationFrame(tick)
			}
		}
		requestAnimationFrame(tick)
	})
}
`})))()}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l(),s(),f=t(),d(),p=n(),m={title:`animation/waitForAnimations`,tags:[`func`,`rc`,`version:3.6`],parameters:r({description:{component:"Resolves when no finite animation on the target is pending. Uses the Web Animations API (`element.getAnimations()` and `Animation.finished`) to detect CSS transitions, CSS animations, and Web Animations. Infinite animations (e.g. `animate-spin`) are ignored. Resolves immediately when `getAnimations` is unavailable (jsdom, SSR)."}}),render:()=>(0,p.jsx)(p.Fragment,{})},h={tags:[`use-case`],parameters:r({source:{code:`el.classList.add('exit')
await waitForAnimations(el)
el.remove()`}}),decorators:[o({content:(0,p.jsxs)(`div`,{className:`space-y-2`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`waitForAnimations(el)`}),` resolves when all finite animations on the element (and its descendants) have finished.`]}),(0,p.jsx)(`p`,{children:`Use it to run logic after an enter or exit animation ends: unmount after an exit animation, move focus after a panel opens, or measure layout after a transition.`})]})}),i()],render:function(){let e=(0,f.useRef)(null),[t,n]=(0,f.useState)(`idle`);return(0,p.jsx)(a,{title:`Wait for animation to finish`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,p.jsx)(`div`,{ref:e,style:{width:`4rem`,height:`4rem`,borderRadius:`0.5rem`,background:`#0066cc`}}),(0,p.jsx)(`button`,{type:`button`,onClick:async()=>{let t=e.current;t&&(n(`animating`),t.animate([{opacity:1},{opacity:0},{opacity:1}],{duration:600}),await c(t),n(`done`))},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`,alignSelf:`flex-start`},children:`Animate & wait`}),(0,p.jsxs)(`div`,{children:[`Status: `,(0,p.jsx)(`strong`,{children:t})]})]})})}},g={name:`target`,tags:[`props`],parameters:r({description:{story:"`target` scopes the wait to a specific element (and its descendants). Omit it to wait on the whole document."},source:{code:`await waitForAnimations(panel) // panel and its descendants only
await waitForAnimations() // the whole document`}}),decorators:[i()],render:function(){let e=(0,f.useRef)(null),t=(0,f.useRef)(null),[n,r]=(0,f.useState)(`idle`),i=e=>{e.current?.animate([{opacity:1},{opacity:0},{opacity:1}],{duration:600})};return(0,p.jsx)(a,{title:`Scope the wait with target`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,p.jsxs)(`div`,{ref:e,style:{display:`flex`,gap:`0.5rem`,border:`1px dashed currentColor`,padding:`0.5rem`},children:[(0,p.jsx)(`div`,{style:{width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#0066cc`}}),(0,p.jsx)(`span`,{children:`panel (target)`})]}),(0,p.jsx)(`div`,{ref:t,style:{width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#cc3300`}}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>i(e),style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate inside panel`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>i(t),style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate outside panel`}),(0,p.jsx)(`button`,{type:`button`,onClick:async()=>{let t=e.current;t&&(r(`waiting`),await c(t),r(`done`))},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`waitForAnimations(panel)`})]}),(0,p.jsxs)(`div`,{children:[`Status: `,(0,p.jsx)(`strong`,{children:n})]})]})})}},_={name:`options`,tags:[`props`],parameters:r({description:{story:"`options.subtree` (default `true`) includes descendant animations; set it to `false` to only wait on `target` itself. `options.filter` skips animations the caller does not care about. See `WaitForAnimationsOptions` for the full list, including `settleFrames`, `timeout`, and `signal`."},source:{code:`await waitForAnimations(panel, { subtree: false }) // panel only, not its descendant
await waitForAnimations(panel, { filter: (a) => isOpacityAnimation(a) })`}}),decorators:[i()],render:function(){let e=(0,f.useRef)(null),t=(0,f.useRef)(null),[n,r]=(0,f.useState)(!0),[i,o]=(0,f.useState)(!1),[s,l]=(0,f.useState)(`idle`);return(0,p.jsx)(a,{title:`subtree and filter options`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,p.jsxs)(`label`,{children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),` `,`subtree`]}),(0,p.jsxs)(`label`,{children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:i,onChange:e=>o(e.target.checked)}),` `,`filter: opacity only (600ms) — unchecked also waits for the 1200ms transform`]})]}),(0,p.jsxs)(`div`,{ref:e,style:{border:`1px dashed currentColor`,padding:`0.5rem`},children:[`panel (target)`,(0,p.jsx)(`div`,{ref:t,style:{marginTop:`0.5rem`,width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#0066cc`}})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>{t.current?.animate([{opacity:1},{opacity:0},{opacity:1}],{duration:600}),t.current?.animate([{transform:`scale(1)`},{transform:`scale(0.5)`},{transform:`scale(1)`}],{duration:1200})},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate descendant (opacity 600ms + transform 1200ms)`}),(0,p.jsx)(`button`,{type:`button`,onClick:async()=>{let t=e.current;t&&(l(`waiting`),await c(t,{subtree:n,filter:i?e=>(e.effect?.getKeyframes?.())?.some(e=>`opacity`in e)??!1:void 0}),l(`done`))},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`waitForAnimations(panel, options)`})]}),(0,p.jsxs)(`div`,{children:[`Status: `,(0,p.jsx)(`strong`,{children:s})]})]})})}},v={tags:[`source`],parameters:r({source:{code:u}}),decorators:[i()]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: \`el.classList.add('exit')
await waitForAnimations(el)
el.remove()\`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>waitForAnimations(el)</code> resolves when all finite animations on the element
                        (and its descendants) have finished.
                    </p>
                    <p>
                        Use it to run logic after an enter or exit animation ends: unmount after an exit
                        animation, move focus after a panel opens, or measure layout after a transition.
                    </p>
                </div>
  }), showSource()],
  render: function BasicUsageStory() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<'idle' | 'animating' | 'done'>('idle');
    const run = async () => {
      const el = boxRef.current;
      if (!el) return;
      setStatus('animating');
      el.animate([{
        opacity: 1
      }, {
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 600
      });
      await waitForAnimations(el);
      setStatus('done');
    };
    return <StoryCard title="Wait for animation to finish" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
                    <div ref={boxRef} style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '0.5rem',
          background: '#0066cc'
        }} />
                    <button type="button" onClick={run} style={{
          padding: '0.25rem 0.75rem',
          border: '1px solid currentColor',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          alignSelf: 'flex-start'
        }}>
                        Animate & wait
                    </button>
                    <div>
                        Status: <strong>{status}</strong>
                    </div>
                </div>
            </StoryCard>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'target',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`target\` scopes the wait to a specific element (and its descendants). Omit it to wait on the whole document.'
    },
    source: {
      code: \`await waitForAnimations(panel) // panel and its descendants only
await waitForAnimations() // the whole document\`
    }
  }),
  decorators: [showSource()],
  render: function TargetStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle');
    const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
      ref.current?.animate([{
        opacity: 1
      }, {
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 600
      });
    };
    const waitOnPanel = async () => {
      const el = panelRef.current;
      if (!el) return;
      setStatus('waiting');
      await waitForAnimations(el);
      setStatus('done');
    };
    return <StoryCard title="Scope the wait with target" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
                    <div ref={panelRef} style={{
          display: 'flex',
          gap: '0.5rem',
          border: '1px dashed currentColor',
          padding: '0.5rem'
        }}>
                        <div style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '0.5rem',
            background: '#0066cc'
          }} />
                        <span>panel (target)</span>
                    </div>
                    <div ref={outsideRef} style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '0.5rem',
          background: '#cc3300'
        }} />
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        <button type="button" onClick={() => animate(panelRef)} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Animate inside panel
                        </button>
                        <button type="button" onClick={() => animate(outsideRef)} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Animate outside panel
                        </button>
                        <button type="button" onClick={waitOnPanel} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            waitForAnimations(panel)
                        </button>
                    </div>
                    <div>
                        Status: <strong>{status}</strong>
                    </div>
                </div>
            </StoryCard>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'options',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`options.subtree\` (default \`true\`) includes descendant animations; set it to \`false\` to only wait on \`target\` itself. \`options.filter\` skips animations the caller does not care about. See \`WaitForAnimationsOptions\` for the full list, including \`settleFrames\`, \`timeout\`, and \`signal\`.'
    },
    source: {
      code: \`await waitForAnimations(panel, { subtree: false }) // panel only, not its descendant
await waitForAnimations(panel, { filter: (a) => isOpacityAnimation(a) })\`
    }
  }),
  decorators: [showSource()],
  render: function OptionsStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [subtree, setSubtree] = useState(true);
    const [opacityOnly, setOpacityOnly] = useState(false);
    const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle');
    const animateChild = () => {
      childRef.current?.animate([{
        opacity: 1
      }, {
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 600
      });
      childRef.current?.animate([{
        transform: 'scale(1)'
      }, {
        transform: 'scale(0.5)'
      }, {
        transform: 'scale(1)'
      }], {
        duration: 1200
      });
    };
    const run = async () => {
      const el = panelRef.current;
      if (!el) return;
      setStatus('waiting');
      await waitForAnimations(el, {
        subtree,
        filter: opacityOnly ? a => {
          const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.();
          return keyframes?.some(k => 'opacity' in k) ?? false;
        } : undefined
      });
      setStatus('done');
    };
    return <StoryCard title="subtree and filter options" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
                    <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
                        <label>
                            <input type="checkbox" checked={subtree} onChange={e => setSubtree(e.target.checked)} />{' '}
                            subtree
                        </label>
                        <label>
                            <input type="checkbox" checked={opacityOnly} onChange={e => setOpacityOnly(e.target.checked)} />{' '}
                            filter: opacity only (600ms) — unchecked also waits for the 1200ms transform
                        </label>
                    </div>
                    <div ref={panelRef} style={{
          border: '1px dashed currentColor',
          padding: '0.5rem'
        }}>
                        panel (target)
                        <div ref={childRef} style={{
            marginTop: '0.5rem',
            width: '3rem',
            height: '3rem',
            borderRadius: '0.5rem',
            background: '#0066cc'
          }} />
                    </div>
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        <button type="button" onClick={animateChild} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Animate descendant (opacity 600ms + transform 1200ms)
                        </button>
                        <button type="button" onClick={run} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            waitForAnimations(panel, options)
                        </button>
                    </div>
                    <div>
                        Status: <strong>{status}</strong>
                    </div>
                </div>
            </StoryCard>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}},y=[`BasicUsage`,`Target`,`Options`,`Source`]})))()}b();export{h as BasicUsage,_ as Options,v as Source,g as Target,y as __namedExportsOrder,m as default};