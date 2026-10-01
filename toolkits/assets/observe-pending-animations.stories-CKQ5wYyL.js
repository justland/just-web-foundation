import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-DnccW5KZ.js";import{n as c}from"./observe-pending-animations-BbDH3NIR.js";import{t as l}from"./src-BE393voD.js";import{n as u,t as d}from"./log-panel-D4pYBK8w.js";var f;function p(){return(p=e((()=>{f=`import type { WaitForAnimationsOptions } from './animation.types.ts'
import { getPendingAnimations } from './get-pending-animations.ts'

const TRIGGER_EVENTS = [
	'animationstart',
	'animationend',
	'animationcancel',
	'transitionstart',
	'transitionend',
	'transitioncancel'
] as const

/**
 * Observes \`target\` for changes to its finite, pending animations and
 * invokes \`callback\` with the updated list whenever one starts, finishes,
 * or is canceled. Calls \`callback\` once immediately with the current
 * pending animations.
 *
 * Uses the same detection as {@link getPendingAnimations}: a
 * \`MutationObserver\` for DOM changes (new elements, class/attribute
 * changes), plus start/end/cancel listeners for CSS animations and
 * transitions. An animation started imperatively via \`element.animate()\`
 * is only picked up once one of the above triggers a re-check.
 *
 * @param callback - Invoked with the current pending \`Animation[]\` whenever it may have changed.
 * @param target - Element or Document to observe. Defaults to \`document\`.
 * @param options - \`subtree\` (default \`true\`) includes descendants and pseudo-elements.
 *   \`filter\` skips animations the caller does not care about.
 * @returns A cleanup function that stops observing.
 *
 * @example
 * \`\`\`ts
 * const stop = observePendingAnimations((pending) => {
 *   closeButton.disabled = pending.length > 0
 * }, dialog)
 * // later
 * stop()
 * \`\`\`
 *
 * @rc
 */
export function observePendingAnimations(
	callback: (pending: Animation[]) => void,
	target?: Element | Document | undefined,
	options?: Pick<WaitForAnimationsOptions, 'subtree' | 'filter'> | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) {
		callback([])
		return () => {}
	}

	const notify = () => callback(getPendingAnimations(el, options))

	notify()

	const observer = new MutationObserver(notify)
	observer.observe(el instanceof Element ? el : el.documentElement, {
		subtree: true,
		childList: true,
		attributes: true
	})

	for (const type of TRIGGER_EVENTS) {
		el.addEventListener(type, notify, true)
	}

	return () => {
		observer.disconnect()
		for (const type of TRIGGER_EVENTS) {
			el.removeEventListener(type, notify, true)
		}
	}
}
`})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l(),s(),m=t(),u(),p(),h=n(),g={title:`animation/observePendingAnimations`,tags:[`func`,`rc`,`version:3.6`],parameters:r({description:{component:`Observes an element (or document) for changes to its finite, pending animations and invokes a callback with the updated list whenever one starts, finishes, or is canceled. Returns a cleanup function that stops observing.`}}),render:()=>(0,h.jsx)(h.Fragment,{})},_={tags:[`use-case`],parameters:r({source:{code:`const stop = observePendingAnimations((pending) => {
  closeButton.disabled = pending.length > 0
}, dialog)
// later
stop()`}}),decorators:[o({content:(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`code`,{children:`observePendingAnimations(callback, el)`}),` calls `,(0,h.jsx)(`code`,{children:`callback`}),` `,`immediately with the current pending animations, then again whenever one starts, finishes, or is canceled.`]}),(0,h.jsxs)(`p`,{children:[`Use it to react to animation state over time instead of polling with`,` `,(0,h.jsx)(`code`,{children:`getPendingAnimations`}),`. Toggle watching on, then click`,` `,(0,h.jsx)(`strong`,{children:`Start animation`}),` to see each notification.`]})]})}),i()],render:function(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),[n,r]=(0,m.useState)(!1),[i,o]=(0,m.useState)(0),[s,l]=(0,m.useState)([]);return(0,h.jsx)(a,{title:`Observe pending animations`,appearance:`output`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,h.jsx)(`button`,{type:`button`,onClick:()=>{if(n){t.current?.(),t.current=null,r(!1),l(e=>[...e,`stopped watching`]);return}let i=e.current;i&&(t.current=c(e=>{o(e.length),l(t=>[...t,`pending: ${e.length}`])},i),r(!0))},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:n?`Stop watching`:`Start watching`}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current;t&&t.animate([{transform:`translateX(0)`},{transform:`translateX(100px)`}],{duration:1e3})},style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Start animation`})]}),(0,h.jsx)(`div`,{ref:e,style:{width:`4rem`,height:`4rem`,borderRadius:`0.5rem`,background:`#0066cc`}}),(0,h.jsxs)(`div`,{children:[`Pending animations: `,(0,h.jsx)(`strong`,{children:i})]}),(0,h.jsx)(d,{title:`Events:`,log:s})]})})}},v={name:`target`,tags:[`props`],parameters:r({description:{story:"`target` scopes observation to a specific element (and its descendants). Omit it to observe the whole document."},source:{code:`observePendingAnimations(callback, panel) // panel and its descendants only
observePendingAnimations(callback) // the whole document`}}),decorators:[i()],render:function(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),n=(0,m.useRef)(null),[r,i]=(0,m.useState)(!1),[o,s]=(0,m.useState)([]),l=()=>{if(r){n.current?.(),n.current=null,i(!1),s(e=>[...e,`stopped watching`]);return}let t=e.current;t&&(n.current=c(e=>{s(t=>[...t,`panel pending: ${e.length}`])},t),i(!0))},u=e=>{e.current?.animate([{transform:`translateX(0)`},{transform:`translateX(100px)`}],{duration:1e3})};return(0,h.jsx)(a,{title:`Scope observation with target`,appearance:`output`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,h.jsxs)(`div`,{ref:e,style:{display:`flex`,gap:`0.5rem`,border:`1px dashed currentColor`,padding:`0.5rem`},children:[(0,h.jsx)(`div`,{style:{width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#0066cc`}}),(0,h.jsx)(`span`,{children:`panel (target)`})]}),(0,h.jsx)(`div`,{ref:t,style:{width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#cc3300`}}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,h.jsx)(`button`,{type:`button`,onClick:l,style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:r?`Stop watching panel`:`Start watching panel`}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>u(e),style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate inside panel`}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>u(t),style:{padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate outside panel`})]}),(0,h.jsx)(d,{title:`Events (only panel is observed):`,log:o})]})})}},y={name:`options`,tags:[`props`],parameters:r({description:{story:"`options.subtree` (default `true`) includes descendant animations; set it to `false` to only observe animations on `target` itself. `options.filter` skips animations the caller does not care about."},source:{code:`observePendingAnimations(callback, panel, { subtree: false })
observePendingAnimations(callback, panel, { filter: (a) => isOpacityAnimation(a) })`}}),decorators:[i()],render:function(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),n=(0,m.useRef)(null),[r,i]=(0,m.useState)(!0),[o,s]=(0,m.useState)(!1),[l,u]=(0,m.useState)(0),d=()=>{n.current?.();let t=e.current;t&&(n.current=c(e=>u(e.length),t,{subtree:r,filter:o?e=>(e.effect?.getKeyframes?.())?.some(e=>`opacity`in e)??!1:void 0}))};return(0,m.useEffect)(()=>(d(),()=>n.current?.()),[r,o]),(0,h.jsx)(a,{title:`subtree and filter options`,appearance:`output`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,h.jsxs)(`label`,{children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:r,onChange:e=>i(e.target.checked)}),` `,`subtree`]}),(0,h.jsxs)(`label`,{children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:o,onChange:e=>s(e.target.checked)}),` `,`filter: opacity only`]})]}),(0,h.jsxs)(`div`,{ref:e,style:{border:`1px dashed currentColor`,padding:`0.5rem`},children:[`panel (target)`,(0,h.jsx)(`div`,{ref:t,style:{marginTop:`0.5rem`,width:`3rem`,height:`3rem`,borderRadius:`0.5rem`,background:`#0066cc`}})]}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>{t.current?.animate([{opacity:0},{opacity:1}],{duration:2e3}),t.current?.animate([{transform:`scale(0.5)`},{transform:`scale(1)`}],{duration:2e3})},style:{alignSelf:`flex-start`,padding:`0.25rem 0.75rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`},children:`Animate descendant (opacity + transform)`}),(0,h.jsxs)(`div`,{children:[`Pending animations: `,(0,h.jsx)(`strong`,{children:l})]})]})})}},b={tags:[`source`],parameters:r({source:{code:f}}),decorators:[i()]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: \`const stop = observePendingAnimations((pending) => {
  closeButton.disabled = pending.length > 0
}, dialog)
// later
stop()\`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
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
  }), showSource()],
  render: function BasicUsageStory() {
    const boxRef = useRef<HTMLDivElement>(null);
    const stopRef = useRef<(() => void) | null>(null);
    const [watching, setWatching] = useState(false);
    const [count, setCount] = useState(0);
    const [log, setLog] = useState<string[]>([]);
    const toggleWatching = () => {
      if (watching) {
        stopRef.current?.();
        stopRef.current = null;
        setWatching(false);
        setLog(prev => [...prev, 'stopped watching']);
        return;
      }
      const el = boxRef.current;
      if (!el) return;
      stopRef.current = observePendingAnimations(pending => {
        setCount(pending.length);
        setLog(prev => [...prev, \`pending: \${pending.length}\`]);
      }, el);
      setWatching(true);
    };
    const startAnimation = () => {
      const el = boxRef.current;
      if (!el) return;
      el.animate([{
        transform: 'translateX(0)'
      }, {
        transform: 'translateX(100px)'
      }], {
        duration: 1000
      });
    };
    return <StoryCard title="Observe pending animations" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        <button type="button" onClick={toggleWatching} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            {watching ? 'Stop watching' : 'Start watching'}
                        </button>
                        <button type="button" onClick={startAnimation} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            Start animation
                        </button>
                    </div>
                    <div ref={boxRef} style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '0.5rem',
          background: '#0066cc'
        }} />
                    <div>
                        Pending animations: <strong>{count}</strong>
                    </div>
                    <LogPanel title="Events:" log={log} />
                </div>
            </StoryCard>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'target',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`target\` scopes observation to a specific element (and its descendants). Omit it to observe the whole document.'
    },
    source: {
      code: \`observePendingAnimations(callback, panel) // panel and its descendants only
observePendingAnimations(callback) // the whole document\`
    }
  }),
  decorators: [showSource()],
  render: function TargetStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const stopRef = useRef<(() => void) | null>(null);
    const [watching, setWatching] = useState(false);
    const [log, setLog] = useState<string[]>([]);
    const toggleWatching = () => {
      if (watching) {
        stopRef.current?.();
        stopRef.current = null;
        setWatching(false);
        setLog(prev => [...prev, 'stopped watching']);
        return;
      }
      const el = panelRef.current;
      if (!el) return;
      stopRef.current = observePendingAnimations(pending => {
        setLog(prev => [...prev, \`panel pending: \${pending.length}\`]);
      }, el);
      setWatching(true);
    };
    const animate = (ref: React.RefObject<HTMLDivElement | null>) => {
      ref.current?.animate([{
        transform: 'translateX(0)'
      }, {
        transform: 'translateX(100px)'
      }], {
        duration: 1000
      });
    };
    return <StoryCard title="Scope observation with target" appearance="output">
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
                        <button type="button" onClick={toggleWatching} style={{
            padding: '0.25rem 0.75rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
                            {watching ? 'Stop watching panel' : 'Start watching panel'}
                        </button>
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
                    </div>
                    <LogPanel title="Events (only panel is observed):" log={log} />
                </div>
            </StoryCard>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'options',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: '\`options.subtree\` (default \`true\`) includes descendant animations; set it to \`false\` to only observe animations on \`target\` itself. \`options.filter\` skips animations the caller does not care about.'
    },
    source: {
      code: \`observePendingAnimations(callback, panel, { subtree: false })
observePendingAnimations(callback, panel, { filter: (a) => isOpacityAnimation(a) })\`
    }
  }),
  decorators: [showSource()],
  render: function OptionsStory() {
    const panelRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const stopRef = useRef<(() => void) | null>(null);
    const [subtree, setSubtree] = useState(true);
    const [opacityOnly, setOpacityOnly] = useState(false);
    const [count, setCount] = useState(0);
    const restart = () => {
      stopRef.current?.();
      const el = panelRef.current;
      if (!el) return;
      stopRef.current = observePendingAnimations(pending => setCount(pending.length), el, {
        subtree,
        filter: opacityOnly ? a => {
          const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.();
          return keyframes?.some(k => 'opacity' in k) ?? false;
        } : undefined
      });
    };
    useEffect(() => {
      restart();
      return () => stopRef.current?.();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subtree, opacityOnly]);
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
                    <button type="button" onClick={animateChild} style={{
          alignSelf: 'flex-start',
          padding: '0.25rem 0.75rem',
          border: '1px solid currentColor',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>
                        Animate descendant (opacity + transform)
                    </button>
                    <div>
                        Pending animations: <strong>{count}</strong>
                    </div>
                </div>
            </StoryCard>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...b.parameters?.docs?.source}}},x=[`BasicUsage`,`Target`,`Options`,`Source`]})))()}S();export{_ as BasicUsage,y as Options,b as Source,v as Target,x as __namedExportsOrder,g as default};