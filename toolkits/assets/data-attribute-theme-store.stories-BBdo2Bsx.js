import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-C-caXvtV.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{a as d,l as f,o as p,u as m}from"./write-data-attribute-C8NT32Vv.js";import{n as h,t as g}from"./data-attribute-theme-store-DqRsPjhr.js";import{n as _,t as v}from"./button-BQi9n5XX.js";import{n as y,t as b}from"./theme-result-card-CJBN2MES.js";import{n as x,t as S}from"./theme-store-demo-Bb76mXKJ.js";var C;function w(){return(w=e((()=>{C=`import { SEPARATOR_SPACE } from '../../data-attribute/_constant.ts'
import { parseDataAttribute } from '../../data-attribute/parse-data-attribute.ts'
import { readDataAttribute } from '../../data-attribute/read-data-attribute.ts'
import { stringifyDataAttribute } from '../../data-attribute/stringify-data-attribute.ts'
import { subscribeDataAttribute } from '../../data-attribute/subscribe-data-attribute.ts'
import { writeDataAttribute } from '../../data-attribute/write-data-attribute.ts'
import type { ParseStoredTheme, StringifyStoredTheme } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * read: parse(themes, getDataAttribute(element, attribute)) → ThemeEntry
 * write: setAttribute(attribute, stringify(themes, getDataAttribute(element, attribute), entry))
 *
 * Supports space-separated attribute values by default. Use \`parse\` and \`stringify\` to customize
 * (e.g. comma-separated via curried parseDataAttribute/stringifyDataAttribute).
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param options.attributeName - Data attribute name (e.g. \`data-theme\`)
 * @param options.element - Element to operate on (accepts null e.g. from refs). Defaults to document.documentElement.
 * @param options.parse - Custom parser (default: parseDataAttribute with space separator)
 * @param options.stringify - Custom serializer (default: stringifyDataAttribute with space separator)
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'current', grayscale: 'grayscale' }
 * const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
 * store.read() // returns ThemeEntry from data attribute
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((entry) => {})
 * \`\`\`
 *
 * @example
 * \`\`\`ts
 * // Comma-separated
 * const store = dataAttributeThemeStore(themes, {
 *   attributeName: 'data-theme',
 *   parse: (t, v) => parseDataAttribute(t, v, { separator: ',' }),
 *   stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
 * })
 * \`\`\`
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		attributeName: \`data-\${string}\`
		element?: Element | null | undefined
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
	}
) {
	const element = options.element ?? document?.documentElement
	const {
		attributeName,
		parse = (t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_SPACE }),
		stringify = (t, x, e) => stringifyDataAttribute(t, x, e, { separator: SEPARATOR_SPACE })
	} = options

	return {
		read() {
			return readDataAttribute(themes, attributeName, { element, parse })
		},
		write(entry) {
			writeDataAttribute(themes, attributeName, entry, { element, stringify })
		},
		subscribe(handler) {
			return subscribeDataAttribute(themes, attributeName, handler, { element, parse })
		}
	} satisfies ThemeStore<Themes>
}
`})))()}function T(e){return g(P,{attributeName:F,...e})}function E(e){return g(V,{attributeName:F,...e})}function D(e,t,n){return g(e,{attributeName:t,element:n,parse:(e,t)=>m(e,t,{separator:K}),stringify:(e,t,n)=>p(e,t,n,{separator:K})})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{h(),f(),d(),s(),c(),O=t(),_(),y(),x(),w(),k=n(),{expect:A,userEvent:j,waitFor:M}=__STORYBOOK_MODULE_TEST__,N={title:`theme/theme-store/dataAttributeThemeStore`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Theme store that reads and writes theme via a data attribute. Bakes themes at creation; read/write/subscribe use theme keys only.`}}),render:()=>(0,k.jsx)(k.Fragment,{})},P={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},F=`data-theme`,I={tags:[`playground`],parameters:r({description:{story:`Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.`}}),decorators:[o(),i({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{let e=T();return(0,k.jsx)(S,{store:e,themes:P})},play:async({canvas:e})=>{T().write(u(P,`grayscale`)),await M(()=>A(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await A(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},L={name:`element: html (default)`,tags:[`use-case`,`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Theme is applied to `,(0,k.jsx)(`code`,{children:`document.documentElement`}),` (html) via data attribute by default when `,(0,k.jsx)(`code`,{children:`options.element`}),` is not specified.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(T().write(u(P,`current`)),{})],render:()=>{let e=T().read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.documentElement.getAttribute(F)??`(empty)`:``})}),(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},R={name:`element: body`,tags:[`use-case`,`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Theme is applied to `,(0,k.jsx)(`code`,{children:`document.body`}),` via data attribute when passing it in`,` `,(0,k.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: document.body
                })
            `})],loaders:[()=>(T({element:document.body}).write(u(P,`high-contrast`)),{})],render:()=>{let e=T({element:document.body}).read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`body[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.body.getAttribute(F)??`(empty)`:``})}),(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`high-contrast`,value:P[`high-contrast`]}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: high-contrast`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-high-contrast`)}},z={name:`element: custom element`,tags:[`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Theme is applied to a custom element via data attribute by passing it in`,` `,(0,k.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: targetElement
                })
            `})],render:()=>{let e=(0,O.useRef)(null),[t,n]=(0,O.useState)(null);(0,O.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let r=T({element:t});r.write(u(P,`grayscale`)),n(r)},[]);let r=t?.read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,k.jsx)(`div`,{ref:e,id:`target`,"data-testid":`target-element`,className:`rounded border border-gray-300 p-4`,children:`Target element (theme data attribute is observed here)`}),t?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a,{title:`target[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{children:e.current?.getAttribute(F)??`(empty)`})}),(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:r??{theme:`grayscale`,value:P.grayscale}})]}):(0,k.jsx)(`p`,{children:`Loading…`})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},B={name:`themes: string value`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,k.jsx)(`p`,{children:`Each theme maps to one string value (attribute value).`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(T().write(u(P,`current`)),{})],render:()=>{let e=T().read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.documentElement.getAttribute(`data-theme`)??`(none)`:``})}),(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},V={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},H={name:`themes: array values`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be string[]. dataAttributeThemeStore uses only the first value for the attribute.`}}),decorators:[o({content:(0,k.jsxs)(`p`,{children:[`With `,(0,k.jsx)(`code`,{children:`string[]`}),` values, only the first value is used for the data attribute.`,` `,(0,k.jsx)(`code`,{children:`ThemeResult.value`}),` remains the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(E().write(u(V,`grayscale`)),{})],render:()=>{let e=E().read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.documentElement.getAttribute(`data-theme`)??`(none)`:``})}),(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:V.grayscale}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},U={name:`read`,tags:[`props`],parameters:r({description:{story:`store.read() reads the current theme from the element data attribute.`}}),decorators:[o(),i({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                const result = store.read()
            `})],loaders:[()=>(T().write(u(P,`grayscale`)),{})],render:()=>{let e=T().read();return(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:P.grayscale}})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},W={name:`write`,tags:[`props`],parameters:r({description:{story:`store.write() applies the theme value to the element data attribute.`}}),decorators:[o(),i({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],render:()=>{let e=T(),[t,n]=(0,O.useState)(()=>e.read()?.theme??null);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(P).map(t=>(0,k.jsxs)(v,{"data-testid":`write-${t}`,onClick:()=>{e.write(u(P,t)),n(t)},children:[`write(`,t,`)`]},t))}),(0,k.jsx)(b,{title:`store.read() after write`,"data-testid":`store-write-result`,result:t?{theme:t,value:P[t]}:{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`write-grayscale`)),await A(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},G={name:`subscribe`,tags:[`props`],parameters:r({description:{story:`store.subscribe() calls the handler when the data attribute changes (no initial notify).`}}),decorators:[o(),i({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{let[e,t]=(0,O.useState)(void 0);(0,O.useEffect)(()=>T().subscribe(t),[]);let n=e?.theme??`current`;return(0,k.jsx)(b,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:u(P,n)})},play:async({canvas:e})=>{T().write(u(P,`high-contrast`)),await M(()=>A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`))}},K=`,`,q={name:`space-separated (default)`,tags:[`use-case`,`props`],parameters:r({description:{story:`By default, the data attribute is treated as space-separated. Read uses first value; write removes all theme tokens and adds the new one (className-style).`}}),decorators:[o({content:(0,k.jsxs)(`p`,{children:[`When `,(0,k.jsx)(`code`,{children:`data-theme`}),` has multiple values like`,` `,(0,k.jsx)(`code`,{children:`theme-current theme-grayscale`}),`, read returns the first matching theme. Write removes all theme tokens and adds the new one.`]})}),i({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.read()  // from "theme-current theme-grayscale" returns current
                store.write(themeEntry(themes, 'grayscale'))  // removes theme tokens, adds grayscale
            `})],loaders:[()=>(T().write(u(P,`current`)),typeof document<`u`&&document.documentElement.setAttribute(F,`theme-current theme-high-contrast`),{})],render:()=>{let e=T(),t=e.read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{"data-testid":`space-attr-value`,children:typeof document<`u`?document.documentElement.getAttribute(F)??`(empty)`:``})}),(0,k.jsx)(b,{title:`store.read() - first value`,"data-testid":`space-read-result`,result:t??{theme:`current`,value:P.current}}),(0,k.jsx)(S,{store:e,themes:P,setThemeKeys:[`current`,`grayscale`,`high-contrast`],"data-testid":`space-demo`})]})},play:async({canvas:e})=>{let t=T();document.documentElement.setAttribute(F,`theme-current theme-next`),await A(e.getByTestId(`space-read-result`)).toHaveTextContent(`theme: current`),t.write(u(P,`grayscale`)),await M(()=>{let e=document.documentElement.getAttribute(F)??``;A(e).toContain(`theme-grayscale`)}),await A(e.getByTestId(`space-demo-observe`)).toHaveTextContent(`grayscale`)}},J={name:`separator: comma`,tags:[`use-case`,`props`],parameters:r({description:{story:`Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one.`}}),decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Curry `,(0,k.jsx)(`code`,{children:`parseDataAttribute`}),` and `,(0,k.jsx)(`code`,{children:`stringifyDataAttribute`}),` with`,` `,(0,k.jsx)(`code`,{children:`options.separator = ','`}),` for comma-separated attribute values.`]})}),i({source:l`
                const store = dataAttributeThemeStore(themes, {
                    attributeName,
                    element: target,
                    parse: (t, v) => parseDataAttribute(t, v, { separator: ',' }),
                    stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
                })
            `})],render:()=>{let[e,t]=(0,O.useState)(null);return(0,O.useLayoutEffect)(()=>{let e=document.getElementById(`comma-target`);if(!e)return;e.setAttribute(F,`theme-current`);let n=D(P,F,e);t(n)},[]),(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(`div`,{id:`comma-target`,"data-testid":`comma-target`,className:`rounded border border-gray-300 p-4`,children:`Target element (data-theme uses comma-separated values)`}),e&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a,{title:`target[data-theme]`,appearance:`output`,children:(0,k.jsx)(`code`,{"data-testid":`comma-attr-value`,children:typeof document<`u`?document.getElementById(`comma-target`)?.getAttribute(F)??`(empty)`:``})}),(0,k.jsx)(S,{store:e,themes:P,setThemeKeys:[`current`,`grayscale`,`high-contrast`],"data-testid":`comma-demo`})]})]})},play:async({canvas:e})=>{let t=document.getElementById(`comma-target`);if(!t)return;let n=D(P,F,t);t.setAttribute(F,`theme-current`),n.write(u(P,`grayscale`)),await M(()=>{let e=t.getAttribute(F)??``;A(e).toContain(`theme-grayscale`)}),await A(e.getByTestId(`comma-demo-observe`)).toHaveTextContent(`grayscale`)}},Y={tags:[`source`],parameters:r({source:{code:C}}),decorators:[i()]},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
  })],
  render: () => {
    const store = createStore();
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    const store = createStore();
    store.write(themeEntry(themes, 'grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('theme-grayscale');
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'element: html (default)',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to <code>document.documentElement</code> (html) via data attribute by
                    default when <code>options.element</code> is not specified.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            \`
  })],
  loaders: [() => {
    const store = createStore();
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = createStore();
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute(attributeName) ?? '(empty)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current');
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'element: body',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to <code>document.body</code> via data attribute when passing it in{' '}
                    <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: document.body
                })
            \`
  })],
  loaders: [() => {
    const store = createStore({
      element: document.body
    });
    store.write(themeEntry(themes, 'high-contrast'));
    return {};
  }],
  render: () => {
    const store = createStore({
      element: document.body
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="body[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.body.getAttribute(attributeName) ?? '(empty)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'high-contrast',
        value: themes['high-contrast']
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: high-contrast');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-high-contrast');
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'element: custom element',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to a custom element via data attribute by passing it in{' '}
                    <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: targetElement
                })
            \`
  })],
  render: () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [store, setStore] = useState<Required<ThemeStore<typeof themes>> | null>(null);
    useLayoutEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      const s = createStore({
        element: el
      });
      s.write(themeEntry(themes, 'grayscale'));
      setStore(s);
    }, []);
    const result = store?.read();
    return <div className="flex flex-col gap-2">
                <div ref={targetRef} id="target" data-testid="target-element" className="rounded border border-gray-300 p-4">
                    Target element (theme data attribute is observed here)
                </div>
                {store ? <>
                        <StoryCard title="target[data-theme]" appearance="output">
                            <code>{targetRef.current?.getAttribute(attributeName) ?? '(empty)'}</code>
                        </StoryCard>
                        <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
          theme: 'grayscale',
          value: themes.grayscale
        }} />
                    </> : <p>Loading…</p>}
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be a single string per theme.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>Each theme maps to one string value (attribute value).</p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            \`
  })],
  loaders: [() => {
    const store = createStore();
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = createStore();
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') ?? '(none)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current');
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[]. dataAttributeThemeStore uses only the first value for the attribute.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    With <code>string[]</code> values, only the first value is used for the data attribute.{' '}
                    <code>ThemeResult.value</code> remains the full array.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            \`
  })],
  loaders: [() => {
    const store = createStoreArray();
    store.write(themeEntry(themesArray, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = createStoreArray();
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') ?? '(none)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'grayscale',
        value: themesArray.grayscale
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: [theme-grayscale, app:bg-gray-100]');
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'read',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() reads the current theme from the element data attribute.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                const result = store.read()
            \`
  })],
  loaders: [() => {
    const store = createStore();
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = createStore();
    const result = store.read();
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
      theme: 'grayscale',
      value: themes.grayscale
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'write',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.write() applies the theme value to the element data attribute.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            \`
  })],
  render: () => {
    const store = createStore();
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = store.read();
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onClick={() => {
          store.write(themeEntry(themes, theme));
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="store.read() after write" data-testid="store-write-result" result={currentTheme ? {
        theme: currentTheme,
        value: themes[currentTheme]
      } : {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-grayscale'));
    await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'subscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler when the data attribute changes (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            \`
  })],
  render: () => {
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => {
      const store = createStore();
      return store.subscribe!(setResult);
    }, []);
    const displayTheme = result?.theme ?? 'current';
    return <ThemeResultCard title="store.subscribe() receives" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />;
  },
  play: async ({
    canvas
  }) => {
    const store = createStore();
    store.write(themeEntry(themes, 'high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast'));
  }
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'space-separated (default)',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'By default, the data attribute is treated as space-separated. Read uses first value; write removes all theme tokens and adds the new one (className-style).'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    When <code>data-theme</code> has multiple values like{' '}
                    <code>theme-current theme-grayscale</code>, read returns the first matching theme. Write
                    removes all theme tokens and adds the new one.
                </p>
  }), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.read()  // from "theme-current theme-grayscale" returns current
                store.write(themeEntry(themes, 'grayscale'))  // removes theme tokens, adds grayscale
            \`
  })],
  loaders: [() => {
    const store = createStore();
    store.write(themeEntry(themes, 'current'));
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute(attributeName, 'theme-current theme-high-contrast');
    }
    return {};
  }],
  render: () => {
    const store = createStore();
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code data-testid="space-attr-value">
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute(attributeName) ?? '(empty)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="store.read() - first value" data-testid="space-read-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
                <ThemeStoreDemo store={store} themes={themes} setThemeKeys={['current', 'grayscale', 'high-contrast']} data-testid="space-demo" />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const store = createStore();
    document.documentElement.setAttribute(attributeName, 'theme-current theme-next');
    await expect(canvas.getByTestId('space-read-result')).toHaveTextContent('theme: current');
    store.write(themeEntry(themes, 'grayscale'));
    await waitFor(() => {
      const attr = document.documentElement.getAttribute(attributeName) ?? '';
      expect(attr).toContain('theme-grayscale');
    });
    await expect(canvas.getByTestId('space-demo-observe')).toHaveTextContent('grayscale');
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'separator: comma',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Curry <code>parseDataAttribute</code> and <code>stringifyDataAttribute</code> with{' '}
                    <code>options.separator = ','</code> for comma-separated attribute values.
                </p>
  }), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore(themes, {
                    attributeName,
                    element: target,
                    parse: (t, v) => parseDataAttribute(t, v, { separator: ',' }),
                    stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
                })
            \`
  })],
  render: () => {
    const [store, setStore] = useState<Required<ThemeStore<typeof themes>> | null>(null);
    useLayoutEffect(() => {
      const el = document.getElementById('comma-target');
      if (!el) return;
      el.setAttribute(attributeName, 'theme-current');
      const s = createCommaSeparatedStore(themes, attributeName, el);
      setStore(s);
    }, []);
    return <div className="flex flex-col gap-4">
                <div id="comma-target" data-testid="comma-target" className="rounded border border-gray-300 p-4">
                    Target element (data-theme uses comma-separated values)
                </div>
                {store && <>
                        <StoryCard title="target[data-theme]" appearance="output">
                            <code data-testid="comma-attr-value">
                                {typeof document !== 'undefined' ? document.getElementById('comma-target')?.getAttribute(attributeName) ?? '(empty)' : ''}
                            </code>
                        </StoryCard>
                        <ThemeStoreDemo store={store} themes={themes} setThemeKeys={['current', 'grayscale', 'high-contrast']} data-testid="comma-demo" />
                    </>}
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const target = document.getElementById('comma-target');
    if (!target) return;
    const store = createCommaSeparatedStore(themes, attributeName, target);
    target.setAttribute(attributeName, 'theme-current');
    store.write(themeEntry(themes, 'grayscale'));
    await waitFor(() => {
      const attrValue = target.getAttribute(attributeName) ?? '';
      expect(attrValue).toContain('theme-grayscale');
    });
    await expect(canvas.getByTestId('comma-demo-observe')).toHaveTextContent('grayscale');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...Y.parameters?.docs?.source}}},X=[`Playground`,`ElementDefault`,`ElementBody`,`ElementCustom`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`Read`,`WriteStory`,`Subscribe`,`SpaceSeparatedDefault`,`ParseStringifyCommaSeparated`,`Source`]})))()}Z();export{R as ElementBody,z as ElementCustom,L as ElementDefault,J as ParseStringifyCommaSeparated,I as Playground,U as Read,Y as Source,q as SpaceSeparatedDefault,G as Subscribe,H as ThemeMapArrayValues,B as ThemeMapStringValue,W as WriteStory,X as __namedExportsOrder,N as default};