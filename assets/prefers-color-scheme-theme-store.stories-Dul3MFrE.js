import{j as r,w as u,s as n,d as p,r as c}from"./iframe-6HRzXnzl.js";import{d as S}from"./dedent-BuYMbVyj.js";import{t as y}from"./theme-entry-D4S_RAMB.js";import{c as b}from"./compose-theme-stores-CD86eyKP.js";import{g as k}from"./get-prefers-color-scheme-C16oSBYU.js";import{o as C}from"./observe-prefers-color-scheme-DjdBdD7G.js";import{T as g}from"./theme-result-card-XuOZGWKk.js";import{T as v}from"./theme-store-demo-BdS0iP0d.js";import"./preload-helper-PPVm8Dsz.js";import"./set-theme-to-stores-C1AbMsOJ.js";import"./button-Dhsg6uJP.js";function w(e,t){return y(e,k("light"))}function x(e,t){return C(o=>t(y(e,o)))}function T(e){return{read(){return w(e)},subscribe(t){return x(e,t)}}}const P=`import type { RequiredPick } from 'type-plus'
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
`,{expect:f,userEvent:R}=__STORYBOOK_MODULE_TEST__,U={title:"theme/theme-store/prefersColorSchemeThemeStore",tags:["func","version:1.0"],render:()=>r.jsx(r.Fragment,{})},s={light:"theme-light",dark:"theme-dark"},h={tags:["playground"],decorators:[u({content:r.jsxs("p",{children:[r.jsx("code",{children:"prefersColorSchemeThemeStore"})," is a read-only theme store for color-scheme only. Themes must include only ",r.jsx("code",{children:"light"})," and ",r.jsx("code",{children:"dark"})," keys—mirrors"," ",r.jsx("code",{children:"prefers-color-scheme"}),". Returns ",r.jsx("code",{children:"ThemeEntry"})," for ",r.jsx("code",{children:"light"})," ","or ",r.jsx("code",{children:"dark"})," based on system preference. No write method."]})}),n({source:S`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                <ThemeStoreDemo store={store} themes={themes} setThemeKeys={[]} />
            `})],render:()=>{const e=T(s);return r.jsx(v,{store:e,themes:s,setThemeKeys:[]})},play:async({canvas:e})=>{await R.click(e.getByTestId("theme-store-demo-btn-read")),await f(e.getByTestId("theme-store-demo-read")).toHaveTextContent(/\b(light|dark)\b/)}},a={tags:["props"],parameters:p({description:{story:"store.read() returns ThemeEntry for current prefers-color-scheme (theme key is `light` or `dark` only)."}}),decorators:[u(),n({source:S`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                const result = store.read()
            `})],render:()=>{const t=T(s).read();return r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"light",value:s.light}})},play:async({canvas:e})=>{await f(e.getByTestId("store-read-result")).toHaveTextContent(/\b(light|dark)\b/)}},l={tags:["props"],parameters:p({description:{story:"store.subscribe() receives updates when system prefers-color-scheme changes. Change your OS light/dark setting to verify."}}),decorators:[u(),n({source:S`
                const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
                const store = prefersColorSchemeThemeStore(themes)
                return store.subscribe((entry) => {
                    console.log('Color scheme:', entry?.theme)  // 'light' | 'dark'
                })
            `})],render:()=>{const e=c.useMemo(()=>T(s),[]),[t,o]=c.useState(void 0);c.useEffect(()=>(o(e.read()??void 0),e.subscribe(o)),[e]);const m=t?.theme??e.read()?.theme??"light";return r.jsx(g,{title:"store.subscribe() receives (change OS theme to update)","data-testid":"store-subscribe-result",result:y(s,m)})},play:async({canvas:e})=>{await f(e.getByTestId("store-subscribe-result")).toHaveTextContent(/\b(light|dark)\b/)}},d={name:"with composeThemeStores",tags:["use-case"],parameters:p({description:{story:"Use as fallback in composeThemeStores: user preference first, then system prefers-color-scheme. Pass color-scheme themes ({ light, dark }) to prefersColorSchemeThemeStore."}}),decorators:[u(),n({source:S`
                import { composeThemeStores, localStorageThemeStore, prefersColorSchemeThemeStore } from '#just-web/toolkits/theme'

                const colorSchemeThemes = { light: 'theme-light', dark: 'theme-dark' }
                const store = composeThemeStores(colorSchemeThemes, [
                  localStorageThemeStore(colorSchemeThemes, { storageKey: 'color-scheme' }),
                  prefersColorSchemeThemeStore(colorSchemeThemes)  // light | dark only
                ], { defaultTheme: 'light' })
            `})],render:()=>{const e=c.useMemo(()=>b(s,[T(s)],{defaultTheme:"light"}),[]),[t,o]=c.useState(void 0);return c.useEffect(()=>(Promise.resolve(e.read()).then(m=>o(m??void 0)),e.subscribe?.(m=>o(m??void 0))),[e]),r.jsx(g,{title:"Composed store (prefers-color-scheme as only source)","data-testid":"composed-store-result",result:t??{theme:"light",value:s.light}})},play:async({canvas:e})=>{await f(e.getByTestId("composed-store-result")).toHaveTextContent(/\b(light|dark)\b/)}},i={tags:["source"],parameters:p({source:{code:P}}),decorators:[n()]};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'with composeThemeStores',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Use as fallback in composeThemeStores: user preference first, then system prefers-color-scheme. Pass color-scheme themes ({ light, dark }) to prefersColorSchemeThemeStore.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                import { composeThemeStores, localStorageThemeStore, prefersColorSchemeThemeStore } from '#just-web/toolkits/theme'

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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...i.parameters?.docs?.source}}};const q=["Playground","Read","Subscribe","WithComposeThemeStores","Source"];export{h as Playground,a as Read,i as Source,l as Subscribe,d as WithComposeThemeStores,q as __namedExportsOrder,U as default};
