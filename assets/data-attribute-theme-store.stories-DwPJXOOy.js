import{j as t,d as i,w as d,s as c,S as y,r as h}from"./iframe-C_U-moo6.js";import{d as u}from"./dedent-BuYMbVyj.js";import{t as n}from"./theme-entry-D4S_RAMB.js";import{d as I}from"./data-attribute-theme-store-DvdjS3fC.js";import{B as D}from"./button-DneSEyY1.js";import{T as l}from"./theme-result-card-B1AduhOD.js";import{T as k}from"./theme-store-demo-Dk8oBi7r.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-theme-map-value-6BKppRxh.js";import"./findKey-BZZwGHNT.js";const P=`import type { Required } from 'type-plus'
import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { applyThemeToDataAttribute } from '../../data-attribute/apply-theme-to-data-attribute.ts'
import { resolveThemeFromDataAttribute } from '../../data-attribute/resolve-theme-from-data-attribute.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param options.attributeName - Data attribute name (e.g. \`data-theme\`)
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'current', grayscale: 'grayscale' }
 * const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
 * store.read() // returns themeResult from data attribute
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * \`\`\`
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: { attributeName: \`data-\${string}\`; element?: Element | undefined }
) {
	const element = options.element ?? document?.documentElement
	const { attributeName } = options

	if (!element) return dummyThemeStore as Required<ThemeStore<Themes>>

	return {
		read() {
			const value = getDataAttribute(attributeName, element)
			const theme = resolveThemeFromDataAttribute(themes, value)
			if (theme === undefined) return undefined
			return themeEntry(themes, theme)
		},
		write(entry) {
			applyThemeToDataAttribute(element, attributeName, entry)
		},
		subscribe(handler) {
			const observer = observeDataAttributes<string, \`data-\${string}\`>(
				{
					[attributeName]: (value) => {
						const theme = value ? resolveThemeFromDataAttribute(themes, value) : undefined
						handler(theme ? themeEntry(themes, theme) : undefined)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
`,{expect:s,userEvent:F,waitFor:H}=__STORYBOOK_MODULE_TEST__,Q={title:"theme/theme-store/dataAttributeThemeStore",tags:["func","version:1.0"],parameters:i({description:{component:"Theme store that reads and writes theme via a data attribute. Bakes themes at creation; read/write/subscribe use theme keys only."}}),render:()=>t.jsx(t.Fragment,{})},a={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},g="data-theme";function o(e){return I(a,{attributeName:g,...e})}const b={tags:["playground"],parameters:i({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[d(),c({source:u`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{const e=o();return t.jsx(k,{store:e,themes:a})},play:async({canvas:e})=>{o().write(n(a,"grayscale")),await H(()=>s(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await s(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},v={name:"element: html (default)",tags:["use-case","props"],decorators:[d({content:t.jsxs("p",{children:["Theme is applied to ",t.jsx("code",{children:"document.documentElement"})," (html) via data attribute by default when ",t.jsx("code",{children:"options.element"})," is not specified."]})}),c({source:u`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(o().write(n(a,"current")),{})],render:()=>{const r=o().read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(y,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute(g)??"(empty)":""})}),t.jsx(l,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},T={name:"element: body",tags:["use-case","props"],decorators:[d({content:t.jsxs("p",{children:["Theme is applied to ",t.jsx("code",{children:"document.body"})," via data attribute when passing it in"," ",t.jsx("code",{children:"options.element"}),"."]})}),c({source:u`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: document.body
                })
            `})],loaders:[()=>(o({element:document.body}).write(n(a,"high-contrast")),{})],render:()=>{const r=o({element:document.body}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(y,{title:"body[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.body.getAttribute(g)??"(empty)":""})}),t.jsx(l,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"high-contrast",value:a["high-contrast"]}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: high-contrast"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-high-contrast")}},x={name:"element: custom element",tags:["props"],decorators:[d({content:t.jsxs("p",{children:["Theme is applied to a custom element via data attribute by passing it in"," ",t.jsx("code",{children:"options.element"}),"."]})}),c({source:u`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, {
                    attributeName: 'data-theme',
                    element: targetElement
                })
            `})],render:()=>{const e=h.useRef(null),[r,p]=h.useState(null);h.useLayoutEffect(()=>{const N=e.current;if(!N)return;const B=o({element:N});B.write(n(a,"grayscale")),p(B)},[]);const m=r?.read();return t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{ref:e,id:"target","data-testid":"target-element",className:"rounded border border-gray-300 p-4",children:"Target element (theme data attribute is observed here)"}),r?t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"target[data-theme]",appearance:"output",children:t.jsx("code",{children:e.current?.getAttribute(g)??"(empty)"})}),t.jsx(l,{title:"store.read() result","data-testid":"store-read-result",result:m??{theme:"grayscale",value:a.grayscale}})]}):t.jsx("p",{children:"Loading…"})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},f={name:"themes: string value",tags:["use-case","props"],parameters:i({description:{story:"themes values can be a single string per theme."}}),decorators:[d({content:t.jsx("p",{children:"Each theme maps to one string value (attribute value)."})}),c({source:u`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(o().write(n(a,"current")),{})],render:()=>{const r=o().read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(y,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute("data-theme")??"(none)":""})}),t.jsx(l,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},j={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"};function R(e){return I(j,{attributeName:g,...e})}const S={name:"themes: array values",tags:["use-case","props"],parameters:i({description:{story:"themes values can be string[]. dataAttributeThemeStore uses only the first value for the attribute."}}),decorators:[d({content:t.jsxs("p",{children:["With ",t.jsx("code",{children:"string[]"})," values, only the first value is used for the data attribute."," ",t.jsx("code",{children:"ThemeResult.value"})," remains the full array."]})}),c({source:u`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
            `})],loaders:[()=>(R().write(n(j,"grayscale")),{})],render:()=>{const r=R().read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(y,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute("data-theme")??"(none)":""})}),t.jsx(l,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"grayscale",value:j.grayscale}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},w={name:"read",tags:["props"],parameters:i({description:{story:"store.read() reads the current theme from the element data attribute."}}),decorators:[d(),c({source:u`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                const result = store.read()
            `})],loaders:[()=>(o().write(n(a,"grayscale")),{})],render:()=>{const r=o().read();return t.jsx(l,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"grayscale",value:a.grayscale}})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},C={name:"write",tags:["props"],parameters:i({description:{story:"store.write() applies the theme value to the element data attribute."}}),decorators:[d(),c({source:u`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],render:()=>{const e=o(),[r,p]=h.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(a).map(m=>t.jsxs(D,{"data-testid":`write-${m}`,onClick:()=>{e.write(n(a,m)),p(m)},children:["write(",m,")"]},m))}),t.jsx(l,{title:"store.read() after write","data-testid":"store-write-result",result:r?{theme:r,value:a[r]}:{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await F.click(e.getByTestId("write-grayscale")),await s(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},E={name:"subscribe",tags:["props"],parameters:i({description:{story:"store.subscribe() calls the handler when the data attribute changes (no initial notify)."}}),decorators:[d(),c({source:u`
                const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{const[e,r]=h.useState(void 0);h.useEffect(()=>o().subscribe(r),[]);const p=e?.theme??"current";return t.jsx(l,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:n(a,p)})},play:async({canvas:e})=>{o().write(n(a,"high-contrast")),await H(()=>s(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast"))}},A={tags:["source"],parameters:i({source:{code:P}}),decorators:[c()]};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...A.parameters?.docs?.source}}};const X=["Playground","ElementDefault","ElementBody","ElementCustom","ThemeMapStringValue","ThemeMapArrayValues","Read","WriteStory","Subscribe","Source"];export{T as ElementBody,x as ElementCustom,v as ElementDefault,b as Playground,w as Read,A as Source,E as Subscribe,S as ThemeMapArrayValues,f as ThemeMapStringValue,C as WriteStory,X as __namedExportsOrder,Q as default};
