import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{n as d,t as f}from"./class-name-theme-store-DxMBjZh1.js";import{n as p,t as m}from"./button-BlO48FDB.js";import{n as h,t as g}from"./theme-result-card-DmTK1KKZ.js";import{n as _,t as v}from"./theme-store-demo-CxcbzR8_.js";var y;function b(){return(b=e((()=>{y=`import type { Required } from 'type-plus'
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
`})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{d(),s(),c(),x=t(),p(),h(),_(),b(),S=n(),{expect:C,userEvent:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E={title:`theme/theme-store/classNameThemeStore`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Theme store that reads and writes theme via element class names. Bakes themes at creation; read/write/subscribe use theme keys only.`}}),render:()=>(0,S.jsx)(S.Fragment,{})},D={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},O={tags:[`playground`],parameters:r({description:{story:`Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.`}}),decorators:[o(),i({source:l`
                const store = classNameThemeStore(themes)
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{let e=f(D);return(0,S.jsx)(v,{store:e,themes:D})},play:async({canvas:e})=>{await w.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await T(()=>C(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await C(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},k={name:`element: html (default)`,tags:[`use-case`,`props`],decorators:[o({content:(0,S.jsxs)(`p`,{children:[`Theme is applied to `,(0,S.jsx)(`code`,{children:`document.documentElement`}),` (html) by default when`,` `,(0,S.jsx)(`code`,{children:`options.element`}),` is not specified.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            `})],loaders:[()=>(f(D).write(u(D,`current`)),{})],render:()=>{let e=f(D).read();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(a,{title:`html.className`,appearance:`output`,children:(0,S.jsx)(`code`,{children:typeof document<`u`?document.documentElement.className:``})}),(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:D.current}})]})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},A={name:`element: body`,tags:[`use-case`,`props`],decorators:[o({content:(0,S.jsxs)(`p`,{children:[`Theme is applied to `,(0,S.jsx)(`code`,{children:`document.body`}),` when passing it in`,` `,(0,S.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes, { element: document.body })
            `})],loaders:[()=>(f(D,{element:document.body}).write(u(D,`high-contrast`)),{})],render:()=>{let e=f(D,{element:document.body}).read();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(a,{title:`body.className`,appearance:`output`,children:(0,S.jsx)(`code`,{children:typeof document<`u`?document.body.className:``})}),(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`high-contrast`,value:D[`high-contrast`]}})]})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: high-contrast`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-high-contrast`)}},j={name:`element: custom element`,tags:[`props`],decorators:[o({content:(0,S.jsxs)(`p`,{children:[`Theme is applied to a custom element by passing it in `,(0,S.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes, { element: targetElement })
            `})],render:()=>{let e=(0,x.useRef)(null),[t,n]=(0,x.useState)(null);(0,x.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let r=f(D,{element:t});r.write(u(D,`grayscale`)),n(r)},[]);let r=t?.read();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsx)(`div`,{ref:e,id:`target`,"data-testid":`target-element`,className:`rounded border border-gray-300 p-4`,children:`Target element (theme class is observed here)`}),t?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:`target.className`,appearance:`output`,children:(0,S.jsx)(`code`,{children:e.current?.className})}),(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:r??{theme:`grayscale`,value:D.grayscale}})]}):(0,S.jsx)(`p`,{children:`Loading…`})]})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},M={name:`themes: string value`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,S.jsx)(`p`,{children:`Each theme maps to one string value (one class name).`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            `})],loaders:[()=>(f(D).write(u(D,`current`)),{})],render:()=>{let e=f(D).read();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(a,{title:`html.className`,appearance:`output`,children:(0,S.jsx)(`code`,{children:typeof document<`u`?document.documentElement.className:``})}),(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:D.current}})]})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},N={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},P={name:`themes: array values`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be string[] for multiple CSS classes. All classes are applied to the element.`}}),decorators:[o({content:(0,S.jsxs)(`p`,{children:[`Each theme can map to multiple class names. Setting `,(0,S.jsx)(`code`,{children:`grayscale`}),` adds both`,` `,(0,S.jsx)(`code`,{children:`theme-grayscale`}),` and `,(0,S.jsx)(`code`,{children:`app:bg-gray-100`}),` to the element.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = classNameThemeStore(themes)
            `})],loaders:[()=>(f(N).write(u(N,`grayscale`)),{})],render:()=>{let e=f(N).read();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(a,{title:`html.className`,appearance:`output`,children:(0,S.jsx)(`code`,{children:typeof document<`u`?document.documentElement.className:``})}),(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:N.grayscale}})]})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},F={name:`read`,tags:[`props`],parameters:r({description:{story:`store.read() reads the current theme from the element class names.`}}),decorators:[o(),i({source:l`
                const store = classNameThemeStore(themes)
                const result = store.read()
            `})],loaders:[()=>(f(D).write(u(D,`grayscale`)),{})],render:()=>{let e=f(D).read();return(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:D.grayscale}})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},I={name:`write`,tags:[`props`],parameters:r({description:{story:`store.write() applies the theme class to the element.`}}),decorators:[o(),i({source:l`
                const store = classNameThemeStore(themes)
                store.write(themeResult('high-contrast', themes))
            `})],render:()=>{let e=f(D),[t,n]=(0,x.useState)(()=>e.read()?.theme??null);return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(D).map(t=>(0,S.jsxs)(m,{"data-testid":`write-${t}`,onClick:()=>{e.write(u(D,t)),n(t)},children:[`write(`,t,`)`]},t))}),(0,S.jsx)(g,{title:`store.read() after write`,"data-testid":`store-write-result`,result:t?{theme:t,value:D[t]}:{theme:`current`,value:D.current}})]})},play:async({canvas:e})=>{await w.click(e.getByTestId(`write-grayscale`)),await C(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},L={name:`subscribe`,tags:[`props`],parameters:r({description:{story:`store.subscribe() calls the handler when the class attribute changes (no initial notify).`}}),decorators:[o(),i({source:l`
                const store = classNameThemeStore(themes)
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{let e=(0,x.useRef)(null),[t,n]=(0,x.useState)(void 0);(0,x.useLayoutEffect)(()=>{e.current=f(D)},[]),(0,x.useEffect)(()=>{let t=e.current;if(t)return t.subscribe(n)},[]);let r=t?.theme??`current`;return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(D).map(t=>(0,S.jsxs)(m,{"data-testid":`write-${t}`,onClick:()=>e.current?.write(u(D,t)),children:[`write(`,t,`)`]},t))}),(0,S.jsx)(g,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:u(D,r)})]})},play:async({canvas:e})=>{await w.click(e.getByTestId(`write-high-contrast`)),await T(()=>C(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`))}},R={name:`subscribe: only when themeEntry changes`,tags:[`props`],parameters:r({description:{story:`The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler.`}}),decorators:[o(),i({source:l`
                const store = classNameThemeStore(themes, { element: targetElement })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                // Adding element.classList.add('app-other') does NOT invoke handler
                // store.write(themeEntry('grayscale')) DOES invoke when theme changes
            `})],render:()=>{let e=(0,x.useRef)(null),t=(0,x.useRef)(null),[n,r]=(0,x.useState)(0),[i,o]=(0,x.useState)(null);(0,x.useLayoutEffect)(()=>{let n=e.current;if(!n)return;let r=f(D,{element:n});t.current=r},[]),(0,x.useEffect)(()=>{let e=t.current;if(!e)return;let n=e.subscribe(e=>{r(e=>e+1),o(e)});return e.write(u(D,`grayscale`)),n},[]);let s=i?.theme??`(none)`;return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,"data-testid":`subscribe-only-when-theme-changes`,children:[(0,S.jsx)(`div`,{ref:e,"data-testid":`target-element`,className:`rounded border border-gray-300 p-2`,children:`Target element`}),(0,S.jsx)(a,{title:`Handler invocations`,appearance:`output`,children:(0,S.jsx)(`pre`,{"data-testid":`invocation-count`,className:`font-mono`,children:n})}),(0,S.jsx)(a,{title:`Observed theme`,appearance:`output`,children:(0,S.jsx)(`pre`,{"data-testid":`observed-theme`,className:`font-mono`,children:s})}),(0,S.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,S.jsx)(m,{"data-testid":`add-non-theme-class`,onPress:()=>e.current?.classList.add(`app-other`),children:`Add non-theme class`}),(0,S.jsx)(m,{"data-testid":`change-to-high-contrast`,onPress:()=>t.current?.write(u(D,`high-contrast`)),children:`Change to high-contrast`}),(0,S.jsx)(m,{"data-testid":`change-to-current`,onPress:()=>t.current?.write(u(D,`current`)),children:`Change to current`})]})]})},play:async({canvas:e})=>{await C(e.getByTestId(`invocation-count`)).toHaveTextContent(`1`),await C(e.getByTestId(`observed-theme`)).toHaveTextContent(`grayscale`),await w.click(e.getByTestId(`change-to-high-contrast`)),await T(()=>C(e.getByTestId(`invocation-count`)).toHaveTextContent(`2`)),await C(e.getByTestId(`observed-theme`)).toHaveTextContent(`high-contrast`)}},z={tags:[`source`],parameters:r({source:{code:y}}),decorators:[i()]},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`ElementDefault`,`ElementBody`,`ElementCustom`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`Read`,`WriteStory`,`Subscribe`,`SubscribeOnlyWhenThemeChanges`,`Source`]})))()}V();export{A as ElementBody,j as ElementCustom,k as ElementDefault,O as Playground,F as Read,z as Source,L as Subscribe,R as SubscribeOnlyWhenThemeChanges,P as ThemeMapArrayValues,M as ThemeMapStringValue,I as WriteStory,B as __namedExportsOrder,E as default};