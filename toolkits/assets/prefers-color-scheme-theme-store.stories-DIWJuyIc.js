import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l,t as u}from"./get-prefers-color-scheme-BYJ-yK6c.js";import{n as d,t as f}from"./observe-prefers-color-scheme-CNJr4m9B.js";import{n as p}from"./theme-entry-Cs_OPpJC.js";import{n as m,t as h}from"./compose-theme-stores-BkbiF_Ba.js";import{n as g,t as _}from"./theme-result-card-I-1cNXBY.js";import{n as v,t as y}from"./theme-store-demo-CpR1fkgT.js";function b(e,t){let n=t?.defaultColorScheme??`light`,r=u(n);return p(e,r)}function x(){return(x=e((()=>{l()})))()}function S(e,t){return d(n=>t(p(e,n)))}function C(){return(C=e((()=>{f()})))()}function w(e){return{read(){return b(e)},subscribe(t){return S(e,t)}}}function T(){return(T=e((()=>{x(),C()})))()}var E;function D(){return(D=e((()=>{E=`import type { RequiredPick } from 'type-plus'
import { readPrefersColorSchemeTheme } from '../../prefers-color-scheme-theme/read-prefers-color-scheme-theme.ts'
import { subscribePrefersColorSchemeTheme } from '../../prefers-color-scheme-theme/subscribe-prefers-color-scheme-theme.ts'
import type { ThemeStore } from '../theme-store.types.ts'

type PrefersColorSchemeThemes = {
	light: string | readonly string[]
	dark: string | readonly string[]
}

/**
 * Creates a read-only theme store that reads from \`prefers-color-scheme\`.
 *
 * **Color-scheme specific:** Themes must only include \`light\` and \`dark\` keys—this store
 * mirrors the system preference which is always one of these.
 *
 * Returns \`ThemeEntry\` for \`light\` or \`dark\` based on system preference.
 * No write method—the value is controlled by the system.
 *
 * @param themes - Record with \`light\` and \`dark\` keys mapping to theme values
 * @returns ThemeStore with read and subscribe only
 *
 * @example
 * \`\`\`ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const store = prefersColorSchemeThemeStore(themes)
 * store.read() // ThemeEntry for current system preference
 * store.subscribe((entry) => {})
 * \`\`\`
 */
export function prefersColorSchemeThemeStore<Themes extends PrefersColorSchemeThemes>(
	themes: Themes
): RequiredPick<ThemeStore<Themes>, 'read' | 'subscribe'> {
	return {
		read() {
			return readPrefersColorSchemeTheme(themes)
		},
		subscribe(handler) {
			return subscribePrefersColorSchemeTheme(themes, handler)
		}
	}
}
`})))()}var O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{m(),T(),o(),s(),O=t(),g(),v(),D(),k=n(),{expect:A,userEvent:j}=__STORYBOOK_MODULE_TEST__,M={title:`theme/theme-store/prefersColorSchemeThemeStore`,tags:[`func`,`version:2.0`],render:()=>(0,k.jsx)(k.Fragment,{})},N={light:`theme-light`,dark:`theme-dark`},P={tags:[`playground`],decorators:[a({content:(0,k.jsxs)(`p`,{children:[(0,k.jsx)(`code`,{children:`prefersColorSchemeThemeStore`}),` is a read-only theme store for color-scheme only. Themes must include only `,(0,k.jsx)(`code`,{children:`light`}),` and `,(0,k.jsx)(`code`,{children:`dark`}),` keys—mirrors`,` `,(0,k.jsx)(`code`,{children:`prefers-color-scheme`}),`. Returns `,(0,k.jsx)(`code`,{children:`ThemeEntry`}),` for `,(0,k.jsx)(`code`,{children:`light`}),` `,`or `,(0,k.jsx)(`code`,{children:`dark`}),` based on system preference. No write method.`]})}),i({source:c`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                <ThemeStoreDemo store={store} themes={themes} setThemeKeys={[]} />
            `})],render:()=>{let e=w(N);return(0,k.jsx)(y,{store:e,themes:N,setThemeKeys:[]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`theme-store-demo-btn-read`)),await A(e.getByTestId(`theme-store-demo-read`)).toHaveTextContent(/\b(light|dark)\b/)}},F={tags:[`props`],parameters:r({description:{story:"store.read() returns ThemeEntry for current prefers-color-scheme (theme key is `light` or `dark` only)."}}),decorators:[a(),i({source:c`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                const result = store.read()
            `})],render:()=>{let e=w(N).read();return(0,k.jsx)(_,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`light`,value:N.light}})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(/\b(light|dark)\b/)}},I={tags:[`props`],parameters:r({description:{story:`store.subscribe() receives updates when system prefers-color-scheme changes. Change your OS light/dark setting to verify.`}}),decorators:[a(),i({source:c`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                return store.subscribe((entry) => {
                    console.log('Color scheme:', entry?.theme)  // 'light' | 'dark'
                })
            `})],render:()=>{let e=(0,O.useMemo)(()=>w(N),[]),[t,n]=(0,O.useState)(void 0);(0,O.useEffect)(()=>(n(e.read()??void 0),e.subscribe(n)),[e]);let r=t?.theme??e.read()?.theme??`light`;return(0,k.jsx)(_,{title:`store.subscribe() receives (change OS theme to update)`,"data-testid":`store-subscribe-result`,result:p(N,r)})},play:async({canvas:e})=>{await A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(/\b(light|dark)\b/)}},L={name:`with composeThemeStores`,tags:[`use-case`],parameters:r({description:{story:`Use as fallback in composeThemeStores: user preference first, then system prefers-color-scheme. Pass color-scheme themes ({ light, dark }) to prefersColorSchemeThemeStore.`}}),decorators:[a(),i({source:c`
                import { composeThemeStores, localStorageThemeStore, prefersColorSchemeThemeStore } from '@just-web/toolkits/theme.js'

                const colorSchemeThemes = { light: 'theme-light', dark: 'theme-dark' }
                const store = composeThemeStores(colorSchemeThemes, [
                  localStorageThemeStore(colorSchemeThemes, { storageKey: 'color-scheme' }),
                  prefersColorSchemeThemeStore(colorSchemeThemes)  // light | dark only
                ], { defaultTheme: 'light' })
            `})],render:()=>{let e=(0,O.useMemo)(()=>h(N,[w(N)],{defaultTheme:`light`}),[]),[t,n]=(0,O.useState)(void 0);return(0,O.useEffect)(()=>(Promise.resolve(e.read()).then(e=>n(e??void 0)),e.subscribe?.(e=>n(e??void 0))),[e]),(0,k.jsx)(_,{title:`Composed store (prefers-color-scheme as only source)`,"data-testid":`composed-store-result`,result:t??{theme:`light`,value:N.light}})},play:async({canvas:e})=>{await A(e.getByTestId(`composed-store-result`)).toHaveTextContent(/\b(light|dark)\b/)}},R={tags:[`source`],parameters:r({source:{code:E}}),decorators:[i()]},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  decorators: [withStoryCard({
    content: <p>
                    <code>prefersColorSchemeThemeStore</code> is a read-only theme store for color-scheme
                    only. Themes must include only <code>light</code> and <code>dark</code> keys—mirrors{' '}
                    <code>prefers-color-scheme</code>. Returns <code>ThemeEntry</code> for <code>light</code>{' '}
                    or <code>dark</code> based on system preference. No write method.
                </p>
  }), showSource({
    source: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                <ThemeStoreDemo store={store} themes={themes} setThemeKeys={[]} />
            \`
  })],
  render: () => {
    const store = prefersColorSchemeThemeStore(colorSchemeThemes);
    return <ThemeStoreDemo store={store} themes={colorSchemeThemes} setThemeKeys={[]} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'));
    await expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent(/\\b(light|dark)\\b/);
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() returns ThemeEntry for current prefers-color-scheme (theme key is \`light\` or \`dark\` only).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                const result = store.read()
            \`
  })],
  render: () => {
    const store = prefersColorSchemeThemeStore(colorSchemeThemes);
    const result = store.read();
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
      theme: 'light',
      value: colorSchemeThemes.light
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(/\\b(light|dark)\\b/);
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() receives updates when system prefers-color-scheme changes. Change your OS light/dark setting to verify.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                return store.subscribe((entry) => {
                    console.log('Color scheme:', entry?.theme)  // 'light' | 'dark'
                })
            \`
  })],
  render: () => {
    const store = useMemo(() => prefersColorSchemeThemeStore(colorSchemeThemes), []);
    const [result, setResult] = useState<ThemeEntry<typeof colorSchemeThemes> | undefined | null>(undefined);
    useEffect(() => {
      setResult(store.read() ?? undefined);
      return store.subscribe(setResult);
    }, [store]);
    const displayTheme = result?.theme ?? store.read()?.theme ?? 'light';
    return <ThemeResultCard title="store.subscribe() receives (change OS theme to update)" data-testid="store-subscribe-result" result={themeEntry(colorSchemeThemes, displayTheme)} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent(/\\b(light|dark)\\b/);
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'with composeThemeStores',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Use as fallback in composeThemeStores: user preference first, then system prefers-color-scheme. Pass color-scheme themes ({ light, dark }) to prefersColorSchemeThemeStore.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                import { composeThemeStores, localStorageThemeStore, prefersColorSchemeThemeStore } from '@just-web/toolkits/theme.js'

                const colorSchemeThemes = { light: 'theme-light', dark: 'theme-dark' }
                const store = composeThemeStores(colorSchemeThemes, [
                  localStorageThemeStore(colorSchemeThemes, { storageKey: 'color-scheme' }),
                  prefersColorSchemeThemeStore(colorSchemeThemes)  // light | dark only
                ], { defaultTheme: 'light' })
            \`
  })],
  render: () => {
    const store = useMemo(() => composeThemeStores(colorSchemeThemes, [prefersColorSchemeThemeStore(colorSchemeThemes)], {
      defaultTheme: 'light'
    }), []);
    const [result, setResult] = useState<ThemeEntry<typeof colorSchemeThemes> | undefined | null>(undefined);
    useEffect(() => {
      void Promise.resolve(store.read()).then(value => setResult(value ?? undefined));
      return store.subscribe?.(value => setResult(value ?? undefined));
    }, [store]);
    return <ThemeResultCard title="Composed store (prefers-color-scheme as only source)" data-testid="composed-store-result" result={result ?? {
      theme: 'light',
      value: colorSchemeThemes.light
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('composed-store-result')).toHaveTextContent(/\\b(light|dark)\\b/);
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`Read`,`Subscribe`,`WithComposeThemeStores`,`Source`]})))()}B();export{P as Playground,F as Read,R as Source,I as Subscribe,L as WithComposeThemeStores,z as __namedExportsOrder,M as default};