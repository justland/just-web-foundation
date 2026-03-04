import{j as t,d as h,w as i,s as u,S as g,r as y}from"./iframe-CKOu7oIT.js";import{d as l}from"./dedent-BuYMbVyj.js";import{t as d}from"./theme-entry-D4S_RAMB.js";import{s as M,p as F}from"./write-data-attribute-BP8-yn58.js";import{d as H}from"./data-attribute-theme-store-ydRrn9wN.js";import{B as L}from"./button-D0LdEWMh.js";import{T as p}from"./theme-result-card-DK6W5yz6.js";import{T as P}from"./theme-store-demo-Dh70N_wh.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-BZZwGHNT.js";const W=`import { SEPARATOR_SPACE } from '../../data-attribute/_constant.ts'
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
`,{expect:s,userEvent:V,waitFor:I}=__STORYBOOK_MODULE_TEST__,se={title:"theme/theme-store/dataAttributeThemeStore",tags:["func","version:1.0"],parameters:h({description:{component:"Theme store that reads and writes theme via a data attribute. Bakes themes at creation; read/write/subscribe use theme keys only."}}),render:()=>t.jsx(t.Fragment,{})},a={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},m="data-theme";function n(e){return H(a,{attributeName:m,...e})}const f={tags:["playground"],parameters:h({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[i(),u({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{const e=n();return t.jsx(P,{store:e,themes:a})},play:async({canvas:e})=>{n().write(d(a,"grayscale")),await I(()=>s(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await s(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},T={name:"element: html (default)",tags:["use-case","props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to ",t.jsx("code",{children:"document.documentElement"})," (html) via data attribute by default when ",t.jsx("code",{children:"options.element"})," is not specified."]})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(n().write(d(a,"current")),{})],render:()=>{const r=n().read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute(m)??"(empty)":""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},x={name:"element: body",tags:["use-case","props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to ",t.jsx("code",{children:"document.body"})," via data attribute when passing it in"," ",t.jsx("code",{children:"options.element"}),"."]})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: document.body
                })
            `})],loaders:[()=>(n({element:document.body}).write(d(a,"high-contrast")),{})],render:()=>{const r=n({element:document.body}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"body[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.body.getAttribute(m)??"(empty)":""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"high-contrast",value:a["high-contrast"]}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: high-contrast"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-high-contrast")}},S={name:"element: custom element",tags:["props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to a custom element via data attribute by passing it in"," ",t.jsx("code",{children:"options.element"}),"."]})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: targetElement
                })
            `})],render:()=>{const e=y.useRef(null),[r,c]=y.useState(null);y.useLayoutEffect(()=>{const b=e.current;if(!b)return;const v=n({element:b});v.write(d(a,"grayscale")),c(v)},[]);const o=r?.read();return t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{ref:e,id:"target","data-testid":"target-element",className:"rounded border border-gray-300 p-4",children:"Target element (theme data attribute is observed here)"}),r?t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"target[data-theme]",appearance:"output",children:t.jsx("code",{children:e.current?.getAttribute(m)??"(empty)"})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:o??{theme:"grayscale",value:a.grayscale}})]}):t.jsx("p",{children:"Loading…"})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},w={name:"themes: string value",tags:["use-case","props"],parameters:h({description:{story:"themes values can be a single string per theme."}}),decorators:[i({content:t.jsx("p",{children:"Each theme maps to one string value (attribute value)."})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(n().write(d(a,"current")),{})],render:()=>{const r=n().read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute("data-theme")??"(none)":""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},R={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"};function k(e){return H(R,{attributeName:m,...e})}const A={name:"themes: array values",tags:["use-case","props"],parameters:h({description:{story:"themes values can be string[]. dataAttributeThemeStore uses only the first value for the attribute."}}),decorators:[i({content:t.jsxs("p",{children:["With ",t.jsx("code",{children:"string[]"})," values, only the first value is used for the data attribute."," ",t.jsx("code",{children:"ThemeResult.value"})," remains the full array."]})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(k().write(d(R,"grayscale")),{})],render:()=>{const r=k().read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute("data-theme")??"(none)":""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"grayscale",value:R.grayscale}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},C={name:"read",tags:["props"],parameters:h({description:{story:"store.read() reads the current theme from the element data attribute."}}),decorators:[i(),u({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                const result = store.read()
            `})],loaders:[()=>(n().write(d(a,"grayscale")),{})],render:()=>{const r=n().read();return t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"grayscale",value:a.grayscale}})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},E={name:"write",tags:["props"],parameters:h({description:{story:"store.write() applies the theme value to the element data attribute."}}),decorators:[i(),u({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],render:()=>{const e=n(),[r,c]=y.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(a).map(o=>t.jsxs(L,{"data-testid":`write-${o}`,onClick:()=>{e.write(d(a,o)),c(o)},children:["write(",o,")"]},o))}),t.jsx(p,{title:"store.read() after write","data-testid":"store-write-result",result:r?{theme:r,value:a[r]}:{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await V.click(e.getByTestId("write-grayscale")),await s(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},N={name:"subscribe",tags:["props"],parameters:h({description:{story:"store.subscribe() calls the handler when the data attribute changes (no initial notify)."}}),decorators:[i(),u({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{const[e,r]=y.useState(void 0);y.useEffect(()=>n().subscribe(r),[]);const c=e?.theme??"current";return t.jsx(p,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:d(a,c)})},play:async({canvas:e})=>{n().write(d(a,"high-contrast")),await I(()=>s(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast"))}},_=",";function O(e,r,c){return H(e,{attributeName:r,element:c,parse:(o,b)=>F(o,b,{separator:_}),stringify:(o,b,v)=>M(o,b,v,{separator:_})})}const j={name:"space-separated (default)",tags:["use-case","props"],parameters:h({description:{story:"By default, the data attribute is treated as space-separated. Read uses first value; write removes all theme tokens and adds the new one (className-style)."}}),decorators:[i({content:t.jsxs("p",{children:["When ",t.jsx("code",{children:"data-theme"})," has multiple values like"," ",t.jsx("code",{children:"theme-current theme-grayscale"}),", read returns the first matching theme. Write removes all theme tokens and adds the new one."]})}),u({source:l`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.read()  // from "theme-current theme-grayscale" returns current
                store.write(themeEntry(themes, 'grayscale'))  // removes theme tokens, adds grayscale
            `})],loaders:[()=>(n().write(d(a,"current")),typeof document<"u"&&document.documentElement.setAttribute(m,"theme-current theme-high-contrast"),{})],render:()=>{const e=n(),r=e.read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{"data-testid":"space-attr-value",children:typeof document<"u"?document.documentElement.getAttribute(m)??"(empty)":""})}),t.jsx(p,{title:"store.read() - first value","data-testid":"space-read-result",result:r??{theme:"current",value:a.current}}),t.jsx(P,{store:e,themes:a,setThemeKeys:["current","grayscale","high-contrast"],"data-testid":"space-demo"})]})},play:async({canvas:e})=>{const r=n();document.documentElement.setAttribute(m,"theme-current theme-next"),await s(e.getByTestId("space-read-result")).toHaveTextContent("theme: current"),r.write(d(a,"grayscale")),await I(()=>{const c=document.documentElement.getAttribute(m)??"";s(c).toContain("theme-grayscale")}),await s(e.getByTestId("space-demo-observe")).toHaveTextContent("grayscale")}},B={name:"separator: comma",tags:["use-case","props"],parameters:h({description:{story:"Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one."}}),decorators:[i({content:t.jsxs("p",{children:["Curry ",t.jsx("code",{children:"parseDataAttribute"})," and ",t.jsx("code",{children:"stringifyDataAttribute"})," with"," ",t.jsx("code",{children:"options.separator = ','"})," for comma-separated attribute values."]})}),u({source:l`
                const store = dataAttributeThemeStore(themes, {
                    attributeName,
                    element: target,
                    parse: (t, v) => parseDataAttribute(t, v, { separator: ',' }),
                    stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
                })
            `})],render:()=>{const[e,r]=y.useState(null);return y.useLayoutEffect(()=>{const c=document.getElementById("comma-target");if(!c)return;c.setAttribute(m,"theme-current");const o=O(a,m,c);r(o)},[]),t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{id:"comma-target","data-testid":"comma-target",className:"rounded border border-gray-300 p-4",children:"Target element (data-theme uses comma-separated values)"}),e&&t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"target[data-theme]",appearance:"output",children:t.jsx("code",{"data-testid":"comma-attr-value",children:typeof document<"u"?document.getElementById("comma-target")?.getAttribute(m)??"(empty)":""})}),t.jsx(P,{store:e,themes:a,setThemeKeys:["current","grayscale","high-contrast"],"data-testid":"comma-demo"})]})]})},play:async({canvas:e})=>{const r=document.getElementById("comma-target");if(!r)return;const c=O(a,m,r);r.setAttribute(m,"theme-current"),c.write(d(a,"grayscale")),await I(()=>{const o=r.getAttribute(m)??"";s(o).toContain("theme-grayscale")}),await s(e.getByTestId("comma-demo-observe")).toHaveTextContent("grayscale")}},D={tags:["source"],parameters:h({source:{code:W}}),decorators:[u()]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...D.parameters?.docs?.source}}};const oe=["Playground","ElementDefault","ElementBody","ElementCustom","ThemeMapStringValue","ThemeMapArrayValues","Read","WriteStory","Subscribe","SpaceSeparatedDefault","ParseStringifyCommaSeparated","Source"];export{x as ElementBody,S as ElementCustom,T as ElementDefault,B as ParseStringifyCommaSeparated,f as Playground,C as Read,D as Source,j as SpaceSeparatedDefault,N as Subscribe,A as ThemeMapArrayValues,w as ThemeMapStringValue,E as WriteStory,oe as __namedExportsOrder,se as default};
