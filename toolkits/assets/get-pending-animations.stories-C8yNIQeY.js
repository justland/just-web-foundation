import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-B88KUkXU.js";import{t as c}from"./get-pending-animations-DvuzG82U.js";import{t as l}from"./src-Dk3aeKFw.js";var u;function d(){return(d=e((()=>{u=`import type { WaitForAnimationsOptions } from './animation.types.ts'

/**
 * Lists the finite, pending animations on \`target\`, for custom logic.
 *
 * Returns animations whose \`effect.getComputedTiming().endTime\` is finite
 * and whose \`playState\` is neither \`'finished'\` nor \`'idle'\`. Infinite
 * animations (e.g. \`animate-spin\`) are excluded because they never finish.
 *
 * @param target - Element or Document to query. Defaults to \`document\`.
 * @param options - \`subtree\` (default \`true\`) includes descendants and pseudo-elements.
 *   \`filter\` skips animations the caller does not care about.
 * @returns The pending \`Animation\` objects.
 *
 * @example
 * \`\`\`ts
 * const pending = getPendingAnimations(dialog)
 * if (pending.length === 0) unmount()
 * \`\`\`
 *
 * @rc
 */
export function getPendingAnimations(
	target?: Element | Document | undefined,
	options?: Pick<WaitForAnimationsOptions, 'subtree' | 'filter'> | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) return []

	const subtree = options?.subtree ?? true
	const all = el.getAnimations({ subtree })

	return all.filter((a) => {
		if (a.playState === 'finished' || a.playState === 'idle') return false

		const timing = a.effect?.getComputedTiming()
		if (timing && !Number.isFinite(timing.endTime)) return false

		if (options?.filter && !options.filter(a)) return false
		return true
	})
}
`})))()}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l(),s(),f=t(),d(),p=n(),m={title:`animation/getPendingAnimations`,tags:[`func`,`rc`,`version:next`],parameters:r({description:{component:`Lists the finite, pending animations on an element (or document), for custom logic. Infinite animations are excluded because they never finish.`}}),render:()=>(0,p.jsx)(p.Fragment,{})},h={tags:[`use-case`],parameters:r({source:{code:`const pending = getPendingAnimations(dialog)
if (pending.length === 0) unmount()`}}),decorators:[o({content:(0,p.jsxs)(`div`,{className:`space-y-2`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`getPendingAnimations(el)`}),` returns an array of `,(0,p.jsx)(`code`,{children:`Animation`}),` objects that are still running and have a finite duration.`]}),(0,p.jsx)(`p`,{children:`Use it to check whether any animations are still in progress before taking action, or to build custom waiting logic.`})]})}),i()],render:function(){let e=[`#0066cc`,`#cc3300`,`#009933`,`#9933cc`,`#ff9900`],t=e.length,n=(0,f.useRef)([]),r=(0,f.useRef)(0),[i,o]=(0,f.useState)(0),s=()=>{let e=n.current.reduce((e,t)=>e+(t?c(t).length:0),0);o(e)};return(0,p.jsx)(a,{title:`Query pending animations`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>{let e=n.current[r.current];r.current=(r.current+1)%t,e&&(e.animate([{transform:`translateX(0)`},{transform:`translateX(100px)`}],{duration:2e3}),s())},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Start animation`}),(0,p.jsx)(`button`,{type:`button`,onClick:s,style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Check pending`})]}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:Array.from({length:t},(t,r)=>(0,p.jsx)(`div`,{ref:e=>{n.current[r]=e},style:{width:`4rem`,height:`4rem`,borderRadius:`0.5rem`,background:e[r]}},r))}),(0,p.jsxs)(`div`,{children:[`Pending animations: `,(0,p.jsx)(`strong`,{children:i})]})]})})}},g={name:`target`,tags:[`props`],parameters:r({description:{story:"`target` scopes the query to a specific element (and its descendants). Omit it to query the whole document."},source:{code:`getPendingAnimations(panel) // panel and its descendants only
getPendingAnimations() // the whole document`}}),decorators:[i()],render:function(){let e=(0,f.useRef)(null),t=(0,f.useRef)(null),[n,r]=(0,f.useState)(0),[i,o]=(0,f.useState)(0),s=e=>{e.current?.animate([{transform:`translateX(0)`},{transform:`translateX(100px)`}],{duration:2e3})};return(0,p.jsx)(a,{title:`Scope the query with target`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,p.jsxs)(`div`,{ref:e,style:{display:`flex`,gap:`0.5rem`,border:`1px dashed currentColor`,padding:`0.5rem`},children:[(0,p.jsx)(`div`,{style:{width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#0066cc`}}),(0,p.jsx)(`span`,{children:`panel (target)`})]}),(0,p.jsx)(`div`,{ref:t,style:{width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#cc3300`}}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>s(e),style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate inside panel`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>s(t),style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate outside panel`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>{r(e.current?c(e.current).length:0),o(c().length)},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Check pending`})]}),(0,p.jsxs)(`div`,{children:[`getPendingAnimations(panel): `,(0,p.jsx)(`strong`,{children:n})]}),(0,p.jsxs)(`div`,{children:[`getPendingAnimations(): `,(0,p.jsx)(`strong`,{children:i})]})]})})}},_={name:`options`,tags:[`props`],parameters:r({description:{story:"`options.subtree` (default `true`) includes descendant animations; set it to `false` to only match animations on `target` itself. `options.filter` skips animations the caller does not care about."},source:{code:`getPendingAnimations(panel, { subtree: false }) // panel only, not its descendant
getPendingAnimations(panel, { filter: (a) => isOpacityAnimation(a) })`}}),decorators:[i()],render:function(){let e=(0,f.useRef)(null),t=(0,f.useRef)(null),[n,r]=(0,f.useState)(!0),[i,o]=(0,f.useState)(!1),[s,l]=(0,f.useState)(0);return(0,p.jsx)(a,{title:`subtree and filter options`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,p.jsxs)(`label`,{children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),` `,`subtree`]}),(0,p.jsxs)(`label`,{children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:i,onChange:e=>o(e.target.checked)}),` `,`filter: opacity only`]})]}),(0,p.jsxs)(`div`,{ref:e,style:{border:`1px dashed currentColor`,padding:`0.5rem`},children:[`panel (target)`,(0,p.jsx)(`div`,{ref:t,style:{marginTop:`0.5rem`,width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#0066cc`}})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>{t.current?.animate([{opacity:0},{opacity:1}],{duration:2e3}),t.current?.animate([{transform:`scale(0.5)`},{transform:`scale(1)`}],{duration:2e3})},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate descendant (opacity + transform)`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;t&&l(c(t,{subtree:n,filter:i?e=>(e.effect?.getKeyframes?.())?.some(e=>`opacity`in e)??!1:void 0}).length)},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Check pending on panel`})]}),(0,p.jsxs)(`div`,{children:[`Pending animations: `,(0,p.jsx)(`strong`,{children:s})]})]})})}},v={tags:[`source`],parameters:r({source:{code:u}}),decorators:[i()]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: \`const pending = getPendingAnimations(dialog)
if (pending.length === 0) unmount()\`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPendingAnimations(el)</code> returns an array of <code>Animation</code> objects
                        that are still running and have a finite duration.
                    </p>
                    <p>
                        Use it to check whether any animations are still in progress before taking action, or to
                        build custom waiting logic.
                    </p>
                </div>
  }), showSource()],
  render: function BasicUsageStory() {
    const squareColors = ['#0066cc', '#cc3300', '#009933', '#9933cc', '#ff9900'];
    const squareCount = squareColors.length;
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
    const nextIndexRef = useRef(0);
    const [count, setCount] = useState(0);
    const check = () => {
      const total = boxRefs.current.reduce((sum, el) => sum + (el ? getPendingAnimations(el).length : 0), 0);
      setCount(total);
    };
    const startAnimation = () => {
      const el = boxRefs.current[nextIndexRef.current];
      nextIndexRef.current = (nextIndexRef.current + 1) % squareCount;
      if (!el) return;
      el.animate([{
        transform: 'translateX(0)'
      }, {
        transform: 'translateX(100px)'
      }], {
        duration: 2000
      });
      check();
    };
    return <StoryCard title="Query pending animations" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        <button type="button" onClick={startAnimation} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Start animation
                        </button>
                        <button type="button" onClick={check} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Check pending
                        </button>
                    </div>
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        {Array.from({
            length: squareCount
          }, (_, index) => <div key={index} ref={el => {
            boxRefs.current[index] = el;
          }} style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '0.5rem',
            background: squareColors[index]
          }} />)}
                    </div>
                    <div>
                        Pending animations: <strong>{count}</strong>
                    </div>
                </div>
            </StoryCard>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'target',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`target\` scopes the query to a specific element (and its descendants). Omit it to query the whole document.'
    },
    source: {
      code: \`getPendingAnimations(panel) // panel and its descendants only
getPendingAnimations() // the whole document\`
    }
  }),
  decorators: [showSource()],
  render: function TargetStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const [panelCount, setPanelCount] = useState(0);
    const [documentCount, setDocumentCount] = useState(0);
    const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
      ref.current?.animate([{
        transform: 'translateX(0)'
      }, {
        transform: 'translateX(100px)'
      }], {
        duration: 2000
      });
    };
    const check = () => {
      setPanelCount(panelRef.current ? getPendingAnimations(panelRef.current).length : 0);
      setDocumentCount(getPendingAnimations().length);
    };
    return <StoryCard title="Scope the query with target" appearance="output">
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
                        <button type="button" onClick={check} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
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
            </StoryCard>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'options',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`options.subtree\` (default \`true\`) includes descendant animations; set it to \`false\` to only match animations on \`target\` itself. \`options.filter\` skips animations the caller does not care about.'
    },
    source: {
      code: \`getPendingAnimations(panel, { subtree: false }) // panel only, not its descendant
getPendingAnimations(panel, { filter: (a) => isOpacityAnimation(a) })\`
    }
  }),
  decorators: [showSource()],
  render: function OptionsStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [subtree, setSubtree] = useState(true);
    const [opacityOnly, setOpacityOnly] = useState(false);
    const [count, setCount] = useState(0);
    const animateChild = () => {
      childRef.current?.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 2000
      });
      childRef.current?.animate([{
        transform: 'scale(0.5)'
      }, {
        transform: 'scale(1)'
      }], {
        duration: 2000
      });
    };
    const check = () => {
      const el = panelRef.current;
      if (!el) return;
      setCount(getPendingAnimations(el, {
        subtree,
        filter: opacityOnly ? a => {
          const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.();
          return keyframes?.some(k => 'opacity' in k) ?? false;
        } : undefined
      }).length);
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
                            filter: opacity only
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
                            Animate descendant (opacity + transform)
                        </button>
                        <button type="button" onClick={check} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Check pending on panel
                        </button>
                    </div>
                    <div>
                        Pending animations: <strong>{count}</strong>
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