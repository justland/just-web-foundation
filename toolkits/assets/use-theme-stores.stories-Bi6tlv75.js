import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-Dhw67M0q.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{n as d,t as f}from"./class-name-theme-store-DxMBjZh1.js";import{n as p,t as m}from"./in-memory-theme-store-CJ-IHEDk.js";import{n as h,t as g}from"./local-storage-theme-store-nmP5Qc1w.js";import{n as _,t as v}from"./button-Cd599w8f.js";import{r as y,t as b}from"./react-BIf6FuzT.js";var x;function S(){return(S=e((()=>{x=`import { useMemo } from 'react'
import type {
	ComposeThemeStoreEntry,
	ComposeThemeStoresOptions
} from '../../theme/compose-theme-stores.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { ThemeStoreFactory } from '../../theme/theme-store/theme-store-factory.types.ts'
import { createThemeHook } from '../theme/create-theme-hook.ts'

type ThemeStoresTuple<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
> = readonly [
	store1: ComposeThemeStoreEntry<Themes, A>,
	store2?: ComposeThemeStoreEntry<Themes, B>,
	store3?: ComposeThemeStoreEntry<Themes, C>,
	store4?: ComposeThemeStoreEntry<Themes, D>,
	store5?: ComposeThemeStoreEntry<Themes, E>,
	store6?: ComposeThemeStoreEntry<Themes, F>,
	store7?: ComposeThemeStoreEntry<Themes, G>,
	store8?: ComposeThemeStoreEntry<Themes, H>
]

/**
 * React hook that returns the current theme and a setter for composed theme stores.
 * Delegates to createThemeHook internally.
 *
 * Accepts \`stores\` in two forms:
 * - **Factory (recommended):** \`() => [store1, store2, ...]\` — run once on mount; no memoization needed.
 * - **Array:** \`[store1, store2, ...]\` — must be memoized or ref-stable; recreating the array each render breaks subscriptions.
 *
 * @param themes - ThemeMap mapping theme keys to their values (e.g. CSS class names)
 * @param stores - Array or factory returning 1–8 theme stores (see ComposeThemeStoreEntry)
 * @param options.defaultTheme - Fallback theme key when stores return empty; also used for SSR
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * \`\`\`tsx
 * // Factory form — no memoization needed
 * const [theme, setTheme] = useThemeStores(
 *   themes,
 *   () => [inMemoryThemeStore(themes)],
 *   { defaultTheme: 'light' }
 * )
 *
 * // Array form — must be memoized
 * const stores = useMemo(() => [localStorageStore], [])
 * const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })
 * setTheme('dark')
 * \`\`\`
 */
export function useThemeStores<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
>(
	themes: Themes,
	stores:
		| ThemeStoresTuple<Themes, A, B, C, D, E, F, G, H>
		| (() => ThemeStoresTuple<Themes, A, B, C, D, E, F, G, H>),
	options?: ComposeThemeStoresOptions<Themes>
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const resolvedStores = useMemo(
		() => (typeof stores === 'function' ? stores() : stores),
		// Empty deps: factory runs once on mount; array form must be ref-stable (user memoizes)
		[]
	)
	const useTheme = createThemeHook<Themes, A, B, C, D, E, F, G, H>(themes, resolvedStores, options)
	return useTheme(options?.defaultTheme)
}
`})))()}function C({children:e,initialTheme:t}){let n=(0,T.useMemo)(()=>{let e=m(A);return t!==void 0&&e.write?.(u(A,t)),e},[t]);return(0,E.jsx)(N.Provider,{value:n,children:e})}function w(){let e=(0,T.useContext)(N);if(!e)throw Error(`ThemeProvider required`);let[t,n]=y(A,()=>[e],{defaultTheme:`light`}),r=(0,T.useCallback)(()=>n(`light`),[n]),i=(0,T.useCallback)(()=>n(`dark`),[n]);return(0,E.jsxs)(a,{title:`Theme from store in Context`,"data-testid":`store-from-context-demo`,appearance:`output`,children:[(0,E.jsxs)(`p`,{children:[`theme:`,` `,(0,E.jsx)(`span`,{"data-testid":`store-from-context-theme`,children:t===void 0?`(undefined)`:String(t)})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,E.jsx)(v,{onPress:r,"data-testid":`store-from-context-btn-light`,children:`Set light`}),(0,E.jsx)(v,{onPress:i,"data-testid":`store-from-context-btn-dark`,children:`Set dark`})]})]})}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{b(),d(),p(),g(),s(),c(),T=t(),_(),S(),E=n(),{expect:D,userEvent:O,waitFor:k}=__STORYBOOK_MODULE_TEST__,A={light:`theme-light`,dark:`theme-dark`,system:`theme-system`},j={title:`react/hooks/useThemeStores`,tags:[`func`,`version:1.0`],parameters:r({description:{component:"React hook that returns the current theme and a setter for composed theme stores. Delegates to createThemeHook internally. Simpler API than createThemeHook—pass themes, stores, and options once.\n\n**stores** can be a factory `() => [store1, ...]` (recommended, no memoization needed) or an array `[store1, ...]` (must be memoized or ref-stable; recreating the array each render breaks subscriptions)."}}),render:()=>(0,E.jsx)(E.Fragment,{})},M={tags:[`use-case`],parameters:r({description:{story:`With an in-memory store and defaultTheme, useThemeStores returns [theme, setTheme]. setTheme updates the store and the returned theme stays in sync. Uses the factory form so no memoization is needed.`},source:{code:l`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeStores(
                    themes,
                    () => [inMemoryThemeStore(themes)],
                    { defaultTheme: 'light' }
                )
                setTheme('dark')
            `}}),decorators:[o(),i()],render:()=>{let[e,t]=y(A,()=>[m(A)],{defaultTheme:`light`});return(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,E.jsx)(v,{onPress:()=>t(`light`),children:`Set light`}),(0,E.jsx)(v,{onPress:()=>t(`dark`),children:`Set dark`}),(0,E.jsx)(v,{onPress:()=>t(`system`),children:`Set system`})]}),(0,E.jsx)(a,{title:`Current theme`,appearance:`output`,children:(0,E.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})]})},play:async({canvas:e,step:t})=>{await t(`Initial state is defaultTheme`,async()=>{await D(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)}),await t(`Set dark`,async()=>{await O.click(e.getByRole(`button`,{name:`Set dark`})),await k(()=>D(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`),{timeout:2e3})}),await t(`Set system`,async()=>{await O.click(e.getByRole(`button`,{name:`Set system`})),await k(()=>D(e.getByTestId(`current-theme`)).toHaveTextContent(`system`),{timeout:2e3})})}},N=(0,T.createContext)(null),P={name:`React Context theme store`,tags:[`use-case`],parameters:r({description:{story:`Context provides the store instance (e.g. inMemoryThemeStore) for subtree scoping. Each ThemeProvider creates its own store; descendants get it via useContext and pass to useThemeStores. Simpler than implementing a ThemeStore with Context as the storage backend.`},source:{code:l`
                const ThemeStoreContext = createContext<ThemeStore<Themes> | null>(null)

                function ThemeProvider({ children }) {
                  const store = useMemo(() => inMemoryThemeStore(themes), [])
                  return <ThemeStoreContext.Provider value={store}>{children}</ThemeStoreContext.Provider>
                }

                function useTheme() {
                  const store = useContext(ThemeStoreContext)
                  if (!store) throw new Error('ThemeProvider required')
                  return useThemeStores(themes, () => [store], { defaultTheme: 'light' })
                }
            `}}),decorators:[o(),i()],render:()=>(0,E.jsx)(C,{initialTheme:`dark`,children:(0,E.jsx)(w,{})}),play:async({canvas:e})=>{let t=()=>e.getByTestId(`store-from-context-theme`);await k(async()=>{await D(t()).toHaveTextContent(`dark`)},{timeout:2e3}),await O.click(e.getByTestId(`store-from-context-btn-light`)),await k(async()=>{await D(t()).toHaveTextContent(`light`)},{timeout:2e3}),await O.click(e.getByTestId(`store-from-context-btn-dark`)),await k(async()=>{await D(t()).toHaveTextContent(`dark`)},{timeout:2e3})}},F={name:`store with initial value`,tags:[`props`],parameters:r({description:{story:`When the store already has a value, the hook returns it on first render.`},source:{code:l`
                const [theme] = useThemeStores(themes, () => {
                    const s = inMemoryThemeStore(themes)
                    s.write?.(themeEntry(themes, 'dark'))
                    return [s]
                }, { defaultTheme: 'light' })
                // theme === 'dark'
            `}}),decorators:[o(),i()],render:()=>{let[e]=y(A,()=>{let e=m(A);return e.write?.(u(A,`dark`)),[e]},{defaultTheme:`light`});return(0,E.jsx)(a,{title:`Theme from store with value`,appearance:`output`,children:(0,E.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})},play:async({canvas:e})=>{await k(()=>D(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`),{timeout:3e3})}},I={name:`stores: concrete stores`,tags:[`props`],parameters:r({description:{story:`Accepts concrete theme stores such as inMemoryThemeStore and localStorageThemeStore. Uses factory form for inline store creation.`},source:{code:l`
                useThemeStores(themes, () => [
                    inMemoryThemeStore(themes),
                    localStorageThemeStore(themes, { storageKey: 'app-theme' })
                ], { defaultTheme: 'light' })
            `}}),beforeEach:()=>{localStorage.removeItem(`use-theme-stores-story`)},decorators:[o(),i()],render:()=>{let[e,t]=y(A,()=>[m(A),h(A,{storageKey:`use-theme-stores-story`})],{defaultTheme:`light`});return(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,E.jsx)(v,{onPress:()=>t(`light`),children:`Set light`}),(0,E.jsx)(v,{onPress:()=>t(`dark`),children:`Set dark`})]}),(0,E.jsx)(a,{title:`Theme from className + localStorage`,appearance:`output`,children:(0,E.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})]})},play:async({canvas:e})=>{await D(e.getByTestId(`current-theme`)).toHaveTextContent(`light`),await O.click(e.getByRole(`button`,{name:`Set dark`})),await k(()=>D(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`),{timeout:2e3})},afterEach:()=>{localStorage.removeItem(`use-theme-stores-story`)}},L={name:`stores: factory tuples`,tags:[`props`],parameters:r({description:{story:`Accepts store factory tuples [factory] or [factory, options]. Same pattern as createThemeHook and composeThemeStores. Uses factory form so the tuple array is created once.`},source:{code:l`
                useThemeStores(themes, () => [
                    [classNameThemeStore],
                    [localStorageThemeStore, { storageKey: 'app-theme' }]
                ], { defaultTheme: 'light' })
            `}}),decorators:[o(),i()],render:()=>{let[e,t]=y(A,()=>[[f],[h,{storageKey:`use-theme-stores-factory-story`}]],{defaultTheme:`light`});return(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,E.jsx)(v,{onPress:()=>t(`light`),children:`Set light`}),(0,E.jsx)(v,{onPress:()=>t(`dark`),children:`Set dark`})]}),(0,E.jsx)(a,{title:`Theme from factory tuples`,appearance:`output`,children:(0,E.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})]})},play:async({canvas:e})=>{await D(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)},afterEach:()=>{document.documentElement.classList.remove(`theme-light`,`theme-dark`),localStorage.removeItem(`use-theme-stores-factory-story`)}},R={name:`stores: array form`,tags:[`props`],parameters:r({description:{story:`When using the array form (not a factory), the stores array must be memoized or ref-stable. Recreating the array each render breaks internal caching and subscriptions.`},source:{code:l`
                // Required: memoize so the array reference is stable
                const stores = useMemo(() => [inMemoryThemeStore(themes)] as const, [])
                const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })
            `}}),decorators:[o(),i()],render:()=>{let e=(0,T.useMemo)(()=>[m(A)],[]),[t,n]=y(A,e,{defaultTheme:`light`});return(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,E.jsx)(v,{onPress:()=>n(`light`),children:`Set light`}),(0,E.jsx)(v,{onPress:()=>n(`dark`),children:`Set dark`})]}),(0,E.jsx)(a,{title:`Array form (memoized)`,appearance:`output`,children:(0,E.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:t??`(none)`})})]})},play:async({canvas:e})=>{await D(e.getByTestId(`current-theme`)).toHaveTextContent(`light`),await O.click(e.getByRole(`button`,{name:`Set dark`})),await k(()=>D(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`),{timeout:2e3})}},z={name:`options.defaultTheme`,tags:[`props`],parameters:r({description:{story:`When stores are empty, the hook returns defaultTheme. The default is also used for SSR.`},source:{code:l`
                useThemeStores(themes, () => [inMemoryThemeStore(themes)], { defaultTheme: 'dark' })
            `}}),decorators:[o(),i()],render:()=>{let[e]=y(A,()=>[m(A)],{defaultTheme:`dark`});return(0,E.jsx)(a,{title:`Theme with defaultTheme: 'dark'`,appearance:`output`,children:(0,E.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})},play:async({canvas:e})=>{await D(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`)}},B={tags:[`source`],parameters:r({source:{code:x}}),decorators:[i()]},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'With an in-memory store and defaultTheme, useThemeStores returns [theme, setTheme]. setTheme updates the store and the returned theme stays in sync. Uses the factory form so no memoization is needed.'
    },
    source: {
      code: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeStores(
                    themes,
                    () => [inMemoryThemeStore(themes)],
                    { defaultTheme: 'light' }
                )
                setTheme('dark')
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeStores(themes, () => [inMemoryThemeStore(themes)] as const, {
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                    <Button onPress={() => setTheme('system')}>Set system</Button>
                </div>
                <StoryCard title="Current theme" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Initial state is defaultTheme', async () => {
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
    await step('Set dark', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set dark'
      }));
      await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
        timeout: 2000
      });
    });
    await step('Set system', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set system'
      }));
      await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('system'), {
        timeout: 2000
      });
    });
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'React Context theme store',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Context provides the store instance (e.g. inMemoryThemeStore) for subtree scoping. Each ThemeProvider creates its own store; descendants get it via useContext and pass to useThemeStores. Simpler than implementing a ThemeStore with Context as the storage backend.'
    },
    source: {
      code: dedent\`
                const ThemeStoreContext = createContext<ThemeStore<Themes> | null>(null)

                function ThemeProvider({ children }) {
                  const store = useMemo(() => inMemoryThemeStore(themes), [])
                  return <ThemeStoreContext.Provider value={store}>{children}</ThemeStoreContext.Provider>
                }

                function useTheme() {
                  const store = useContext(ThemeStoreContext)
                  if (!store) throw new Error('ThemeProvider required')
                  return useThemeStores(themes, () => [store], { defaultTheme: 'light' })
                }
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => <ThemeProvider initialTheme="dark">
            <StoreFromContextDemo />
        </ThemeProvider>,
  play: async ({
    canvas
  }) => {
    const themeEl = () => canvas.getByTestId('store-from-context-theme');
    const btnLight = () => canvas.getByTestId('store-from-context-btn-light');
    const btnDark = () => canvas.getByTestId('store-from-context-btn-dark');
    await waitFor(async () => {
      await expect(themeEl()).toHaveTextContent('dark');
    }, {
      timeout: 2000
    });
    await userEvent.click(btnLight());
    await waitFor(async () => {
      await expect(themeEl()).toHaveTextContent('light');
    }, {
      timeout: 2000
    });
    await userEvent.click(btnDark());
    await waitFor(async () => {
      await expect(themeEl()).toHaveTextContent('dark');
    }, {
      timeout: 2000
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'store with initial value',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When the store already has a value, the hook returns it on first render.'
    },
    source: {
      code: dedent\`
                const [theme] = useThemeStores(themes, () => {
                    const s = inMemoryThemeStore(themes)
                    s.write?.(themeEntry(themes, 'dark'))
                    return [s]
                }, { defaultTheme: 'light' })
                // theme === 'dark'
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme] = useThemeStores(themes, () => {
      const s = inMemoryThemeStore(themes);
      s.write?.(themeEntry(themes, 'dark'));
      return [s] as const;
    }, {
      defaultTheme: 'light'
    });
    return <StoryCard title="Theme from store with value" appearance="output">
                <pre data-testid="current-theme" className="font-mono">
                    {theme ?? '(none)'}
                </pre>
            </StoryCard>;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
      timeout: 3000
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'stores: concrete stores',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Accepts concrete theme stores such as inMemoryThemeStore and localStorageThemeStore. Uses factory form for inline store creation.'
    },
    source: {
      code: dedent\`
                useThemeStores(themes, () => [
                    inMemoryThemeStore(themes),
                    localStorageThemeStore(themes, { storageKey: 'app-theme' })
                ], { defaultTheme: 'light' })
            \`
    }
  }),
  beforeEach: () => {
    localStorage.removeItem('use-theme-stores-story');
  },
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeStores(themes, () => [inMemoryThemeStore(themes), localStorageThemeStore(themes, {
      storageKey: 'use-theme-stores-story'
    })] as const, {
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Theme from className + localStorage" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Set dark'
    }));
    await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
      timeout: 2000
    });
  },
  afterEach: () => {
    localStorage.removeItem('use-theme-stores-story');
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'stores: factory tuples',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Accepts store factory tuples [factory] or [factory, options]. Same pattern as createThemeHook and composeThemeStores. Uses factory form so the tuple array is created once.'
    },
    source: {
      code: dedent\`
                useThemeStores(themes, () => [
                    [classNameThemeStore],
                    [localStorageThemeStore, { storageKey: 'app-theme' }]
                ], { defaultTheme: 'light' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeStores(themes, () => [[classNameThemeStore], [localStorageThemeStore, {
      storageKey: 'use-theme-stores-factory-story'
    }]] as const, {
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Theme from factory tuples" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
  },
  afterEach: () => {
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    localStorage.removeItem('use-theme-stores-factory-story');
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'stores: array form',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When using the array form (not a factory), the stores array must be memoized or ref-stable. Recreating the array each render breaks internal caching and subscriptions.'
    },
    source: {
      code: dedent\`
                // Required: memoize so the array reference is stable
                const stores = useMemo(() => [inMemoryThemeStore(themes)] as const, [])
                const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const stores = useMemo(() => [inMemoryThemeStore(themes)] as const, []);
    const [theme, setTheme] = useThemeStores(themes, stores, {
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Array form (memoized)" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Set dark'
    }));
    await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
      timeout: 2000
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'options.defaultTheme',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When stores are empty, the hook returns defaultTheme. The default is also used for SSR.'
    },
    source: {
      code: dedent\`
                useThemeStores(themes, () => [inMemoryThemeStore(themes)], { defaultTheme: 'dark' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme] = useThemeStores(themes, () => [inMemoryThemeStore(themes)] as const, {
      defaultTheme: 'dark'
    });
    return <StoryCard title="Theme with defaultTheme: 'dark'" appearance="output">
                <pre data-testid="current-theme" className="font-mono">
                    {theme ?? '(none)'}
                </pre>
            </StoryCard>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...B.parameters?.docs?.source}}},V=[`BasicUsage`,`FromReactContext`,`StoreWithInitialValue`,`ConcreteStores`,`FactoryTuplePattern`,`ArrayForm`,`WithDefaultTheme`,`Source`]})))()}H();export{R as ArrayForm,M as BasicUsage,I as ConcreteStores,L as FactoryTuplePattern,P as FromReactContext,B as Source,F as StoreWithInitialValue,z as WithDefaultTheme,V as __namedExportsOrder,j as default};