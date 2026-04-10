import{j as t,d as u,w as i,s as d,S as g,r as n}from"./iframe-iPCJU1fP.js";import{t as l}from"./theme-entry-D4S_RAMB.js";import{c as o}from"./class-name-theme-store-Czqv1IHK.js";import{d as h}from"./dedent-BuYMbVyj.js";import{B as v}from"./button-DDGFppnV.js";import{T as p}from"./theme-result-card-BxAmkwyv.js";import{T as M}from"./theme-store-demo-DUQ1n2zP.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-class-name-CewN__EB.js";import"./observe-attribute-CZKLLp6I.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-BQzT_ya6.js";import"./append-id-Vsg144gU.js";const _=`import type { Required } from 'type-plus'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseClassName } from '../../class-name/parse-class-name.ts'
import { readClassName } from '../../class-name/read-class-name.ts'
import { stringifyClassName } from '../../class-name/stringify-class-name.ts'
import { subscribeClassName } from '../../class-name/subscribe-class-name.ts'
import { writeClassName } from '../../class-name/write-class-name.ts'
import type { ParseStoredTheme, StringifyStoredTheme } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store that reads and writes via element class names.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param options.element - Element to operate on (accepts null e.g. from refs). Defaults to document.documentElement.
 * @param options.parse - Custom parser (default: parseClassName)
 * @param options.stringify - Custom serializer (default: stringifyClassName)
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = classNameThemeStore(themes)
 * store.read() // returns themeResult from element.className
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * \`\`\`
 */
export function classNameThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options?: {
		element?: Element | null | undefined
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
	}
): Required<ThemeStore<Themes>> {
	const element = options?.element ?? document?.documentElement

	if (!element) return dummyThemeStore

	const parse = options?.parse ?? parseClassName
	const stringify = options?.stringify ?? stringifyClassName

	return {
		read() {
			return readClassName(themes, { element, parse })
		},
		write(entry) {
			writeClassName(themes, entry, { element, stringify })
		},
		subscribe(handler) {
			return subscribeClassName(themes, handler, { element, parse })
		}
	}
}
`,{expect:a,userEvent:k,waitFor:D}=__STORYBOOK_MODULE_TEST__,te={title:"theme/theme-store/classNameThemeStore",tags:["func","version:2.0"],parameters:u({description:{component:"Theme store that reads and writes theme via element class names. Bakes themes at creation; read/write/subscribe use theme keys only."}}),render:()=>t.jsx(t.Fragment,{})},s={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},x={tags:["playground"],parameters:u({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[i(),d({source:h`
                const store = classNameThemeStore(themes)
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{const e=o(s);return t.jsx(M,{store:e,themes:s})},play:async({canvas:e})=>{await k.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await D(()=>a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},w={name:"element: html (default)",tags:["use-case","props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to ",t.jsx("code",{children:"document.documentElement"})," (html) by default when"," ",t.jsx("code",{children:"options.element"})," is not specified."]})}),d({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            `})],loaders:[()=>(o(s).write(l(s,"current")),{})],render:()=>{const r=o(s).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.className:""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},b={name:"element: body",tags:["use-case","props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to ",t.jsx("code",{children:"document.body"})," when passing it in"," ",t.jsx("code",{children:"options.element"}),"."]})}),d({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes, { element: document.body })
            `})],loaders:[()=>(o(s,{element:document.body}).write(l(s,"high-contrast")),{})],render:()=>{const r=o(s,{element:document.body}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"body.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.body.className:""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"high-contrast",value:s["high-contrast"]}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: high-contrast"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-high-contrast")}},S={name:"element: custom element",tags:["props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to a custom element by passing it in ",t.jsx("code",{children:"options.element"}),"."]})}),d({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes, { element: targetElement })
            `})],render:()=>{const e=n.useRef(null),[r,y]=n.useState(null);n.useLayoutEffect(()=>{const m=e.current;if(!m)return;const f=o(s,{element:m});f.write(l(s,"grayscale")),y(f)},[]);const c=r?.read();return t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{ref:e,id:"target","data-testid":"target-element",className:"rounded border border-gray-300 p-4",children:"Target element (theme class is observed here)"}),r?t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"target.className",appearance:"output",children:t.jsx("code",{children:e.current?.className})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:c??{theme:"grayscale",value:s.grayscale}})]}):t.jsx("p",{children:"Loading…"})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},C={name:"themes: string value",tags:["use-case","props"],parameters:u({description:{story:"themes values can be a single string per theme."}}),decorators:[i({content:t.jsx("p",{children:"Each theme maps to one string value (one class name)."})}),d({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            `})],loaders:[()=>(o(s).write(l(s,"current")),{})],render:()=>{const r=o(s).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.className:""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},N={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},E={name:"themes: array values",tags:["use-case","props"],parameters:u({description:{story:"themes values can be string[] for multiple CSS classes. All classes are applied to the element."}}),decorators:[i({content:t.jsxs("p",{children:["Each theme can map to multiple class names. Setting ",t.jsx("code",{children:"grayscale"})," adds both"," ",t.jsx("code",{children:"theme-grayscale"})," and ",t.jsx("code",{children:"app:bg-gray-100"})," to the element."]})}),d({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            `})],loaders:[()=>(o(N).write(l(N,"grayscale")),{})],render:()=>{const r=o(N).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.className:""})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"grayscale",value:N.grayscale}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},B={name:"read",tags:["props"],parameters:u({description:{story:"store.read() reads the current theme from the element class names."}}),decorators:[i(),d({source:h`
                const store = classNameThemeStore(themes)
                const result = store.read()
            `})],loaders:[()=>(o(s).write(l(s,"grayscale")),{})],render:()=>{const r=o(s).read();return t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:r??{theme:"grayscale",value:s.grayscale}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},j={name:"write",tags:["props"],parameters:u({description:{story:"store.write() applies the theme class to the element."}}),decorators:[i(),d({source:h`
                const store = classNameThemeStore(themes)
                store.write(themeResult('high-contrast', themes))
            `})],render:()=>{const e=o(s),[r,y]=n.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(s).map(c=>t.jsxs(v,{"data-testid":`write-${c}`,onClick:()=>{e.write(l(s,c)),y(c)},children:["write(",c,")"]},c))}),t.jsx(p,{title:"store.read() after write","data-testid":"store-write-result",result:r?{theme:r,value:s[r]}:{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await k.click(e.getByTestId("write-grayscale")),await a(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},R={name:"subscribe",tags:["props"],parameters:u({description:{story:"store.subscribe() calls the handler when the class attribute changes (no initial notify)."}}),decorators:[i(),d({source:h`
                const store = classNameThemeStore(themes)
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{const e=n.useRef(null),[r,y]=n.useState(void 0);n.useLayoutEffect(()=>{e.current=o(s)},[]),n.useEffect(()=>{const m=e.current;if(m)return m.subscribe(y)},[]);const c=r?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(s).map(m=>t.jsxs(v,{"data-testid":`write-${m}`,onClick:()=>e.current?.write(l(s,m)),children:["write(",m,")"]},m))}),t.jsx(p,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:l(s,c)})]})},play:async({canvas:e})=>{await k.click(e.getByTestId("write-high-contrast")),await D(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast"))}},I={name:"subscribe: only when themeEntry changes",tags:["props"],parameters:u({description:{story:"The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler."}}),decorators:[i(),d({source:h`
                const store = classNameThemeStore(themes, { element: targetElement })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                // Adding element.classList.add('app-other') does NOT invoke handler
                // store.write(themeEntry('grayscale')) DOES invoke when theme changes
            `})],render:()=>{const e=n.useRef(null),r=n.useRef(null),[y,c]=n.useState(0),[m,f]=n.useState(null);n.useLayoutEffect(()=>{const T=e.current;if(!T)return;const O=o(s,{element:T});r.current=O},[]),n.useEffect(()=>{const T=r.current;if(!T)return;const O=T.subscribe(L=>{c(A=>A+1),f(L)});return T.write(l(s,"grayscale")),O},[]);const P=m?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx("div",{ref:e,"data-testid":"target-element",className:"rounded border border-gray-300 p-2",children:"Target element"}),t.jsx(g,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:y})}),t.jsx(g,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:P})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(v,{"data-testid":"add-non-theme-class",onPress:()=>e.current?.classList.add("app-other"),children:"Add non-theme class"}),t.jsx(v,{"data-testid":"change-to-high-contrast",onPress:()=>r.current?.write(l(s,"high-contrast")),children:"Change to high-contrast"}),t.jsx(v,{"data-testid":"change-to-current",onPress:()=>r.current?.write(l(s,"current")),children:"Change to current"})]})]})},play:async({canvas:e})=>{await a(e.getByTestId("invocation-count")).toHaveTextContent("1"),await a(e.getByTestId("observed-theme")).toHaveTextContent("grayscale"),await k.click(e.getByTestId("change-to-high-contrast")),await D(()=>a(e.getByTestId("invocation-count")).toHaveTextContent("2")),await a(e.getByTestId("observed-theme")).toHaveTextContent("high-contrast")}},H={tags:["source"],parameters:u({source:{code:_}}),decorators:[d()]};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore(themes)
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
  })],
  render: () => {
    const store = classNameThemeStore(themes);
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('theme-grayscale');
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'element: html (default)',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to <code>document.documentElement</code> (html) by default when{' '}
                    <code>options.element</code> is not specified.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            \`
  })],
  loaders: [() => {
    const store = classNameThemeStore(themes);
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = classNameThemeStore(themes);
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'element: body',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to <code>document.body</code> when passing it in{' '}
                    <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes, { element: document.body })
            \`
  })],
  loaders: [() => {
    const store = classNameThemeStore(themes, {
      element: document.body
    });
    store.write(themeEntry(themes, 'high-contrast'));
    return {};
  }],
  render: () => {
    const store = classNameThemeStore(themes, {
      element: document.body
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="body.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.body.className : ''}</code>
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'element: custom element',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to a custom element by passing it in <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes, { element: targetElement })
            \`
  })],
  render: () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [store, setStore] = useState<Required<ThemeStore<typeof themes>> | null>(null);
    useLayoutEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      const s = classNameThemeStore(themes, {
        element: el
      });
      s.write(themeEntry(themes, 'grayscale'));
      setStore(s);
    }, []);
    const result = store?.read();
    return <div className="flex flex-col gap-2">
                <div ref={targetRef} id="target" data-testid="target-element" className="rounded border border-gray-300 p-4">
                    Target element (theme class is observed here)
                </div>
                {store ? <>
                        <StoryCard title="target.className" appearance="output">
                            <code>{targetRef.current?.className}</code>
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be a single string per theme.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>Each theme maps to one string value (one class name).</p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            \`
  })],
  loaders: [() => {
    const store = classNameThemeStore(themes);
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = classNameThemeStore(themes);
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[] for multiple CSS classes. All classes are applied to the element.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Each theme can map to multiple class names. Setting <code>grayscale</code> adds both{' '}
                    <code>theme-grayscale</code> and <code>app:bg-gray-100</code> to the element.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            \`
  })],
  loaders: [() => {
    const store = classNameThemeStore(themesArray);
    store.write(themeEntry(themesArray, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = classNameThemeStore(themesArray);
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="html.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'read',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() reads the current theme from the element class names.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore(themes)
                const result = store.read()
            \`
  })],
  loaders: [() => {
    const store = classNameThemeStore(themes);
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = classNameThemeStore(themes);
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
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'write',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.write() applies the theme class to the element.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore(themes)
                store.write(themeResult('high-contrast', themes))
            \`
  })],
  render: () => {
    const store = classNameThemeStore(themes);
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
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'subscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler when the class attribute changes (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore(themes)
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            \`
  })],
  render: () => {
    const storeRef = useRef<ReturnType<typeof classNameThemeStore<typeof themes>> | null>(null);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useLayoutEffect(() => {
      storeRef.current = classNameThemeStore(themes);
    }, []);
    useEffect(() => {
      const store = storeRef.current;
      if (!store) return;
      return store.subscribe!(setResult);
    }, []);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onClick={() => storeRef.current?.write(themeEntry(themes, theme))}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="store.subscribe() receives" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast'));
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'subscribe: only when themeEntry changes',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore(themes, { element: targetElement })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                // Adding element.classList.add('app-other') does NOT invoke handler
                // store.write(themeEntry('grayscale')) DOES invoke when theme changes
            \`
  })],
  render: () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const storeRef = useRef<ReturnType<typeof classNameThemeStore<typeof themes>> | null>(null);
    const [invocationCount, setInvocationCount] = useState(0);
    const [observed, setObserved] = useState<ThemeEntry<typeof themes> | undefined | null>(null);
    useLayoutEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      const store = classNameThemeStore(themes, {
        element: el
      });
      storeRef.current = store;
    }, []);
    useEffect(() => {
      const store = storeRef.current;
      if (!store) return;
      const unSub = store.subscribe!(entry => {
        setInvocationCount(c => c + 1);
        setObserved(entry);
      });
      store.write(themeEntry(themes, 'grayscale'));
      return unSub;
    }, []);
    const displayTheme = observed?.theme ?? '(none)';
    return <div className="flex flex-col gap-4" data-testid="subscribe-only-when-theme-changes">
                <div ref={targetRef} data-testid="target-element" className="rounded border border-gray-300 p-2">
                    Target element
                </div>
                <StoryCard title="Handler invocations" appearance="output">
                    <pre data-testid="invocation-count" className="font-mono">
                        {invocationCount}
                    </pre>
                </StoryCard>
                <StoryCard title="Observed theme" appearance="output">
                    <pre data-testid="observed-theme" className="font-mono">
                        {displayTheme}
                    </pre>
                </StoryCard>
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="add-non-theme-class" onPress={() => targetRef.current?.classList.add('app-other')}>
                        Add non-theme class
                    </Button>
                    <Button data-testid="change-to-high-contrast" onPress={() => storeRef.current?.write(themeEntry(themes, 'high-contrast'))}>
                        Change to high-contrast
                    </Button>
                    <Button data-testid="change-to-current" onPress={() => storeRef.current?.write(themeEntry(themes, 'current'))}>
                        Change to current
                    </Button>
                </div>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    // write(grayscale) in useEffect triggers mutation → handler runs (MutationObserver only fires on changes)
    await expect(canvas.getByTestId('invocation-count')).toHaveTextContent('1');
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('grayscale');

    // Change theme: handler SHOULD run again
    await userEvent.click(canvas.getByTestId('change-to-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('invocation-count')).toHaveTextContent('2'));
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('high-contrast');
  }
}`,...I.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...H.parameters?.docs?.source}}};const se=["Playground","ElementDefault","ElementBody","ElementCustom","ThemeMapStringValue","ThemeMapArrayValues","Read","WriteStory","Subscribe","SubscribeOnlyWhenThemeChanges","Source"];export{b as ElementBody,S as ElementCustom,w as ElementDefault,x as Playground,B as Read,H as Source,R as Subscribe,I as SubscribeOnlyWhenThemeChanges,E as ThemeMapArrayValues,C as ThemeMapStringValue,j as WriteStory,se as __namedExportsOrder,te as default};
