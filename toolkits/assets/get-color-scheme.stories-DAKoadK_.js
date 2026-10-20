import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-Cc1HABEZ.js";import{t as c}from"./get-prefers-color-scheme-BYJ-yK6c.js";import{t as l}from"./get-color-scheme-URDVFswh.js";import{t as u}from"./src-CWTHGR1p.js";import{n as d,t as f}from"./dedent-DQaCLeUO.js";import{n as p,t as m}from"./scheme-sample-DOE5jIVP.js";var h;function g(){return(g=e((()=>{h=`import type { ColorScheme } from './color-scheme.types.ts'
import { getPrefersColorScheme } from './get-prefers-color-scheme.ts'

/**
 * Gets the color scheme an element renders in: \`'light'\` or \`'dark'\`.
 *
 * This is the scheme that form controls, scrollbars, system colors such as \`Canvas\`,
 * and \`light-dark()\` use on the element.
 * It follows the CSS \`color-scheme\` property, so it reflects a theme the user picked
 * (for example \`:root[data-theme='dark'] { color-scheme: dark }\`).
 * \`getPrefersColorScheme()\` does not: it reports the OS preference only.
 *
 * It resolves the scheme the way the browser does
 * ({@link https://drafts.csswg.org/css-color-adjust-1/#resolving-schemes CSS Color Adjustment Level 1 § 2.3}):
 *
 * 1. Read the computed \`color-scheme\` of the element.
 *    When it is \`normal\`, read the \`<meta name="color-scheme">\` tag of its document instead.
 * 2. Without \`light\` or \`dark\` in that value, the scheme is \`'light'\`.
 * 3. With only one of them, that one.
 * 4. With both, the preferred scheme (\`prefers-color-scheme\`) if listed, otherwise the first one.
 *
 * Inside an iframe, the preferred scheme is the \`color-scheme\` of the \`<iframe>\` element.
 *
 * When there is no DOM (e.g. SSR), returns \`defaultColorScheme\`.
 *
 * @param options.element - Element to read (accepts null e.g. from refs). Defaults to \`document.documentElement\`.
 * @param options.defaultColorScheme - Returned when there is no DOM (default: \`'light'\`)
 * @returns \`'light'\` or \`'dark'\`
 *
 * @example
 * \`\`\`ts
 * // :root { color-scheme: light dark }  :root[data-theme='dark'] { color-scheme: dark }
 * document.documentElement.dataset.theme = 'dark'
 * getColorScheme() // 'dark', even when the OS prefers light
 * getColorScheme({ element: dialog }) // the scheme of a subtree
 * \`\`\`
 */
export function getColorScheme(
	options?:
		| { element?: Element | null | undefined; defaultColorScheme?: ColorScheme | undefined }
		| undefined
): ColorScheme {
	const defaultColorScheme = options?.defaultColorScheme ?? 'light'
	const element = options?.element ?? globalThis.document?.documentElement
	if (!element || typeof getComputedStyle === 'undefined') return defaultColorScheme

	const value = getComputedStyle(element).colorScheme
	const schemes = parseColorSchemes(
		value === 'normal' || value === ''
			? element.ownerDocument.querySelector('meta[name="color-scheme"]')?.getAttribute('content')
			: value
	)
	if (schemes.length <= 1) return schemes[0] ?? 'light'

	const preferred = getPrefersColorScheme(schemes[0])
	return schemes.includes(preferred) ? preferred : schemes[0]!
}

/** Reads the known schemes from a \`color-scheme\` value, in order. Custom idents and \`only\` are ignored. */
function parseColorSchemes(value: string | null | undefined): ColorScheme[] {
	const schemes: ColorScheme[] = []
	for (const token of value?.trim().split(/\\s+/) ?? []) {
		if ((token === 'light' || token === 'dark') && !schemes.includes(token)) schemes.push(token)
	}
	return schemes
}
`})))()}function _(e){let t=(0,v.useRef)(null),[n,r]=(0,v.useState)();return(0,v.useEffect)(()=>r(l({element:t.current})),[]),(0,y.jsxs)(m,{ref:t,className:e.className,children:[(0,y.jsx)(`code`,{children:e.label}),(0,y.jsxs)(`span`,{children:[`getColorScheme(): `,(0,y.jsx)(`strong`,{"data-testid":e.id,children:n})]})]})}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{u(),s(),d(),v=t(),p(),g(),y=n(),{expect:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S={title:`color-scheme/getColorScheme`,tags:[`func`,`version:4.1`],parameters:r({description:{component:'Gets the color scheme an element renders in: "light" or "dark". It follows the CSS `color-scheme` property, so it reflects a theme the user picked. `getPrefersColorScheme()` reports the OS preference only.'}}),render:()=>(0,y.jsx)(y.Fragment,{})},C={tags:[`use-case`],parameters:r({source:{code:f`
                getColorScheme() // <html>
                getColorScheme({ element }) // 'light' | 'dark'
            `}}),decorators:[o({content:(0,y.jsxs)(`div`,{className:`space-y-2`,children:[(0,y.jsxs)(`p`,{children:[`Each panel sets its own `,(0,y.jsx)(`code`,{children:`color-scheme`}),`. `,(0,y.jsx)(`code`,{children:`getColorScheme`}),` reads the scheme it renders in. Only the `,(0,y.jsx)(`code`,{children:`light dark`}),` panel follows the OS preference.`]}),(0,y.jsxs)(`p`,{children:[(0,y.jsx)(`code`,{children:`getPrefersColorScheme()`}),` returns `,(0,y.jsx)(`strong`,{children:c()}),` `,`for all three.`]})]})}),i()],render:()=>(0,y.jsx)(a,{appearance:`output`,children:(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,y.jsx)(_,{id:`light`,className:`scheme-light`,label:`color-scheme: light`}),(0,y.jsx)(_,{id:`dark`,className:`scheme-dark`,label:`color-scheme: dark`}),(0,y.jsx)(_,{id:`light-dark`,className:`scheme-light-dark`,label:`color-scheme: light dark`})]})}),play:async({canvas:e})=>{await x(()=>b(e.getByTestId(`light`)).toHaveTextContent(`light`)),await b(e.getByTestId(`dark`)).toHaveTextContent(`dark`),await b(e.getByTestId(`light-dark`)).toHaveTextContent(c())}},w={tags:[`source`],parameters:r({source:{code:h}}),decorators:[i()]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                getColorScheme() // <html>
                getColorScheme({ element }) // 'light' | 'dark'
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        Each panel sets its own <code>color-scheme</code>. <code>getColorScheme</code> reads the
                        scheme it renders in. Only the <code>light dark</code> panel follows the OS preference.
                    </p>
                    <p>
                        <code>getPrefersColorScheme()</code> returns <strong>{getPrefersColorScheme()}</strong>{' '}
                        for all three.
                    </p>
                </div>
  }), showSource()],
  render: () => <StoryCard appearance="output">
            <div className="flex flex-wrap gap-3">
                <Panel id="light" className="scheme-light" label="color-scheme: light" />
                <Panel id="dark" className="scheme-dark" label="color-scheme: dark" />
                <Panel id="light-dark" className="scheme-light-dark" label="color-scheme: light dark" />
            </div>
        </StoryCard>,
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('light')).toHaveTextContent('light'));
    await expect(canvas.getByTestId('dark')).toHaveTextContent('dark');
    await expect(canvas.getByTestId('light-dark')).toHaveTextContent(getPrefersColorScheme());
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...w.parameters?.docs?.source}}},T=[`BasicUsage`,`Source`]})))()}E();export{C as BasicUsage,w as Source,T as __namedExportsOrder,S as default};