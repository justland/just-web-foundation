import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-lHA9G3CN.js";import{n as s}from"./observe-color-scheme-CPpi6BS3.js";import{t as c}from"./src-BN_nq8F-.js";import{n as l,t as u}from"./log-panel-C0YTAovk.js";import{n as d,t as f}from"./dedent-DQaCLeUO.js";import{n as p,t as m}from"./button-AW1k6hjA.js";import{n as h,t as g}from"./scheme-sample-DOE5jIVP.js";var _;function v(){return(v=e((()=>{_=`import type { ColorScheme } from './color-scheme.types.ts'
import { getColorScheme } from './get-color-scheme.ts'
import { observePrefersColorScheme } from './observe-prefers-color-scheme.ts'

/**
 * Observes the color scheme an element renders in, and calls \`handler\` when it changes.
 *
 * See \`getColorScheme()\` for how the scheme is resolved.
 * Unlike \`observePrefersColorScheme()\`, this follows a \`color-scheme\` override,
 * such as a theme the user picked.
 *
 * It re-checks the scheme when:
 *
 * - an attribute (\`class\`, \`style\`, \`data-*\`, ...) changes on the element or one of its ancestors,
 * - anything changes in \`<head>\` (the \`color-scheme\` meta tag, added or edited stylesheets),
 * - the \`prefers-color-scheme\` preference changes.
 *
 * Changes it does not see: stylesheets added or edited outside \`<head>\`,
 * rules that depend on other elements (e.g. \`:has()\` or sibling selectors),
 * and the element moving to a new parent after the call.
 *
 * The handler is not called with the initial value; use \`getColorScheme()\` for that.
 *
 * @param handler - Called with \`'light'\` or \`'dark'\` when the scheme changes
 * @param options.element - Element to observe (accepts null e.g. from refs). Defaults to \`document.documentElement\`.
 * @returns A cleanup function that stops observing. A no-op when there is no DOM (e.g. SSR).
 *
 * @example
 * \`\`\`ts
 * const cleanup = observeColorScheme((scheme) => chart.setTheme(scheme))
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observeColorScheme(
	handler: (value: ColorScheme) => void,
	options?: { element?: Element | null | undefined } | undefined
): () => void {
	const element = options?.element ?? globalThis.document?.documentElement
	if (!element || typeof MutationObserver === 'undefined') return () => {}

	let current = getColorScheme({ element })
	const check = () => {
		const next = getColorScheme({ element })
		if (next === current) return
		current = next
		handler(next)
	}

	const observer = new MutationObserver(check)
	for (let node: Element | null = element; node; node = node.parentElement) {
		observer.observe(node, { attributes: true })
	}
	const head = element.ownerDocument.head
	if (head) {
		observer.observe(head, {
			attributes: true,
			characterData: true,
			childList: true,
			subtree: true
		})
	}
	const stopPrefers =
		typeof matchMedia === 'undefined' ? () => {} : observePrefersColorScheme(check)

	return () => {
		observer.disconnect()
		stopPrefers()
	}
}
`})))()}var y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c(),o(),d(),y=t(),p(),l(),h(),v(),b=n(),{expect:x,userEvent:S,waitFor:C}=__STORYBOOK_MODULE_TEST__,w={title:`color-scheme/observeColorScheme`,tags:[`func`,`version:4.1`],parameters:r({description:{component:"Observes the color scheme an element renders in, and calls the handler when it changes. Unlike `observePrefersColorScheme()`, it follows a `color-scheme` override such as a theme the user picked."}}),render:()=>(0,b.jsx)(b.Fragment,{})},T={tags:[`use-case`],parameters:r({source:{code:f`
                // CSS: [data-theme=light] { color-scheme: light } [data-theme=dark] { color-scheme: dark }
                const cleanup = observeColorScheme((scheme) => log(scheme), { element })
            `}}),decorators:[a({content:(0,b.jsxs)(`p`,{children:[`The buttons set `,(0,b.jsx)(`code`,{children:`data-theme`}),` on the panel. A stylesheet maps it to`,` `,(0,b.jsx)(`code`,{children:`color-scheme`}),`, and the observer reports the scheme the panel renders in.`]})}),i()],render:()=>{let e=(0,y.useRef)(null),[t,n]=(0,y.useState)([]);(0,y.useEffect)(()=>s(e=>n(t=>[...t,e]),{element:e.current}),[]);let r=t=>{e.current&&(t?e.current.setAttribute(`data-theme`,t):e.current.removeAttribute(`data-theme`))};return(0,b.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,b.jsxs)(`div`,{className:`flex gap-2`,children:[(0,b.jsx)(m,{onPress:()=>r(`light`),children:`Light`}),(0,b.jsx)(m,{onPress:()=>r(`dark`),children:`Dark`}),(0,b.jsx)(m,{onPress:()=>r(),children:`System`})]}),(0,b.jsx)(g,{ref:e,"data-theme":`light`,className:`scheme-light-dark data-[theme=dark]:scheme-dark data-[theme=light]:scheme-light`}),(0,b.jsx)(u,{title:`observeColorScheme`,log:t})]})},play:async({canvas:e})=>{await S.click(e.getByRole(`button`,{name:`Dark`})),await C(()=>x(e.getByText(`dark`,{selector:`pre`})).toBeInTheDocument()),await S.click(e.getByRole(`button`,{name:`Light`})),await C(()=>x(e.getByText(`light`,{selector:`pre`})).toBeInTheDocument())}},E={tags:[`source`],parameters:r({source:{code:_}}),decorators:[i()]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                // CSS: [data-theme=light] { color-scheme: light } [data-theme=dark] { color-scheme: dark }
                const cleanup = observeColorScheme((scheme) => log(scheme), { element })
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    The buttons set <code>data-theme</code> on the panel. A stylesheet maps it to{' '}
                    <code>color-scheme</code>, and the observer reports the scheme the panel renders in.
                </p>
  }), showSource()],
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => observeColorScheme(scheme => setLog(l => [...l, scheme]), {
      element: ref.current
    }), []);
    const setTheme = (theme?: string) => {
      if (!ref.current) return;
      if (theme) ref.current.setAttribute('data-theme', theme);else ref.current.removeAttribute('data-theme');
    };
    return <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <Button onPress={() => setTheme('light')}>Light</Button>
                    <Button onPress={() => setTheme('dark')}>Dark</Button>
                    <Button onPress={() => setTheme()}>System</Button>
                </div>
                <SchemeSample ref={ref} data-theme="light" className="scheme-light-dark data-[theme=dark]:scheme-dark data-[theme=light]:scheme-light" />
                <LogPanel title="observeColorScheme" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dark'
    }));
    await waitFor(() => expect(canvas.getByText('dark', {
      selector: 'pre'
    })).toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Light'
    }));
    await waitFor(() => expect(canvas.getByText('light', {
      selector: 'pre'
    })).toBeInTheDocument());
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...E.parameters?.docs?.source}}},D=[`BasicUsage`,`Source`]})))()}O();export{T as BasicUsage,E as Source,D as __namedExportsOrder,w as default};