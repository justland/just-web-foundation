import{r as d,j as t,d as m,w as l,s as i,S as u}from"./iframe-BzC63Mz9.js";import{d as p}from"./dedent-BuYMbVyj.js";import{t as E}from"./theme-entry-D4S_RAMB.js";import{c as j}from"./class-name-theme-store-Czqv1IHK.js";import{l as P}from"./local-storage-theme-store-CQ0vNisZ.js";import{c as H}from"./create-theme-hook-DWkPUg2N.js";import{i as S}from"./in-memory-theme-store-CtdmAzEM.js";import{B as n}from"./button-DUo1iKrE.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-class-name-CewN__EB.js";import"./observe-attribute-CZKLLp6I.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./write-local-storage-CE6rqo_l.js";import"./write-web-storage-H7mtIjJa.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./compose-theme-stores-CD86eyKP.js";import"./set-theme-to-stores-C1AbMsOJ.js";import"./resolve-class-name-BPOFdAhp.js";function T(e,r,s){const h=d.useMemo(()=>typeof r=="function"?r():r,[]);return H(e,h,s)(s?.defaultTheme)}const M=`import { useMemo } from 'react'
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
`,{expect:a,userEvent:y,waitFor:c}=__STORYBOOK_MODULE_TEST__,o={light:"theme-light",dark:"theme-dark",system:"theme-system"},te={title:"react/hooks/useThemeStores",tags:["func","version:1.0"],parameters:m({description:{component:"React hook that returns the current theme and a setter for composed theme stores. Delegates to createThemeHook internally. Simpler API than createThemeHook—pass themes, stores, and options once.\n\n**stores** can be a factory `() => [store1, ...]` (recommended, no memoization needed) or an array `[store1, ...]` (must be memoized or ref-stable; recreating the array each render breaks subscriptions)."}}),render:()=>t.jsx(t.Fragment,{})},f={tags:["use-case"],parameters:m({description:{story:"With an in-memory store and defaultTheme, useThemeStores returns [theme, setTheme]. setTheme updates the store and the returned theme stays in sync. Uses the factory form so no memoization is needed."},source:{code:p`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeStores(
                    themes,
                    () => [inMemoryThemeStore(themes)],
                    { defaultTheme: 'light' }
                )
                setTheme('dark')
            `}}),decorators:[l(),i()],render:()=>{const[e,r]=T(o,()=>[S(o)],{defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:()=>r("light"),children:"Set light"}),t.jsx(n,{onPress:()=>r("dark"),children:"Set dark"}),t.jsx(n,{onPress:()=>r("system"),children:"Set system"})]}),t.jsx(u,{title:"Current theme",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e,step:r})=>{await r("Initial state is defaultTheme",async()=>{await a(e.getByTestId("current-theme")).toHaveTextContent("light")}),await r("Set dark",async()=>{await y.click(e.getByRole("button",{name:"Set dark"})),await c(()=>a(e.getByTestId("current-theme")).toHaveTextContent("dark"),{timeout:2e3})}),await r("Set system",async()=>{await y.click(e.getByRole("button",{name:"Set system"})),await c(()=>a(e.getByTestId("current-theme")).toHaveTextContent("system"),{timeout:2e3})})}},F=d.createContext(null);function I({children:e,initialTheme:r}){const s=d.useMemo(()=>{const h=S(o);return r!==void 0&&h.write?.(E(o,r)),h},[r]);return t.jsx(F.Provider,{value:s,children:e})}function N(){const e=d.useContext(F);if(!e)throw new Error("ThemeProvider required");const[r,s]=T(o,()=>[e],{defaultTheme:"light"}),h=d.useCallback(()=>s("light"),[s]),b=d.useCallback(()=>s("dark"),[s]);return t.jsxs(u,{title:"Theme from store in Context","data-testid":"store-from-context-demo",appearance:"output",children:[t.jsxs("p",{children:["theme:"," ",t.jsx("span",{"data-testid":"store-from-context-theme",children:r===void 0?"(undefined)":String(r)})]}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:h,"data-testid":"store-from-context-btn-light",children:"Set light"}),t.jsx(n,{onPress:b,"data-testid":"store-from-context-btn-dark",children:"Set dark"})]})]})}const g={name:"React Context theme store",tags:["use-case"],parameters:m({description:{story:"Context provides the store instance (e.g. inMemoryThemeStore) for subtree scoping. Each ThemeProvider creates its own store; descendants get it via useContext and pass to useThemeStores. Simpler than implementing a ThemeStore with Context as the storage backend."},source:{code:p`
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
            `}}),decorators:[l(),i()],render:()=>t.jsx(I,{initialTheme:"dark",children:t.jsx(N,{})}),play:async({canvas:e})=>{const r=()=>e.getByTestId("store-from-context-theme"),s=()=>e.getByTestId("store-from-context-btn-light"),h=()=>e.getByTestId("store-from-context-btn-dark");await c(async()=>{await a(r()).toHaveTextContent("dark")},{timeout:2e3}),await y.click(s()),await c(async()=>{await a(r()).toHaveTextContent("light")},{timeout:2e3}),await y.click(h()),await c(async()=>{await a(r()).toHaveTextContent("dark")},{timeout:2e3})}},x={name:"store with initial value",tags:["props"],parameters:m({description:{story:"When the store already has a value, the hook returns it on first render."},source:{code:p`
                const [theme] = useThemeStores(themes, () => {
                    const s = inMemoryThemeStore(themes)
                    s.write?.(themeEntry(themes, 'dark'))
                    return [s]
                }, { defaultTheme: 'light' })
                // theme === 'dark'
            `}}),decorators:[l(),i()],render:()=>{const[e]=T(o,()=>{const r=S(o);return r.write?.(E(o,"dark")),[r]},{defaultTheme:"light"});return t.jsx(u,{title:"Theme from store with value",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})},play:async({canvas:e})=>{await c(()=>a(e.getByTestId("current-theme")).toHaveTextContent("dark"),{timeout:3e3})}},v={name:"stores: concrete stores",tags:["props"],parameters:m({description:{story:"Accepts concrete theme stores such as inMemoryThemeStore and localStorageThemeStore. Uses factory form for inline store creation."},source:{code:p`
                useThemeStores(themes, () => [
                    inMemoryThemeStore(themes),
                    localStorageThemeStore(themes, { storageKey: 'app-theme' })
                ], { defaultTheme: 'light' })
            `}}),beforeEach:()=>{localStorage.removeItem("use-theme-stores-story")},decorators:[l(),i()],render:()=>{const[e,r]=T(o,()=>[S(o),P(o,{storageKey:"use-theme-stores-story"})],{defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:()=>r("light"),children:"Set light"}),t.jsx(n,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(u,{title:"Theme from className + localStorage",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e})=>{await a(e.getByTestId("current-theme")).toHaveTextContent("light"),await y.click(e.getByRole("button",{name:"Set dark"})),await c(()=>a(e.getByTestId("current-theme")).toHaveTextContent("dark"),{timeout:2e3})},afterEach:()=>{localStorage.removeItem("use-theme-stores-story")}},k={name:"stores: factory tuples",tags:["props"],parameters:m({description:{story:"Accepts store factory tuples [factory] or [factory, options]. Same pattern as createThemeHook and composeThemeStores. Uses factory form so the tuple array is created once."},source:{code:p`
                useThemeStores(themes, () => [
                    [classNameThemeStore],
                    [localStorageThemeStore, { storageKey: 'app-theme' }]
                ], { defaultTheme: 'light' })
            `}}),decorators:[l(),i()],render:()=>{const[e,r]=T(o,()=>[[j],[P,{storageKey:"use-theme-stores-factory-story"}]],{defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:()=>r("light"),children:"Set light"}),t.jsx(n,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(u,{title:"Theme from factory tuples",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e})=>{await a(e.getByTestId("current-theme")).toHaveTextContent("light")},afterEach:()=>{document.documentElement.classList.remove("theme-light","theme-dark"),localStorage.removeItem("use-theme-stores-factory-story")}},w={name:"stores: array form",tags:["props"],parameters:m({description:{story:"When using the array form (not a factory), the stores array must be memoized or ref-stable. Recreating the array each render breaks internal caching and subscriptions."},source:{code:p`
                // Required: memoize so the array reference is stable
                const stores = useMemo(() => [inMemoryThemeStore(themes)] as const, [])
                const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })
            `}}),decorators:[l(),i()],render:()=>{const e=d.useMemo(()=>[S(o)],[]),[r,s]=T(o,e,{defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:()=>s("light"),children:"Set light"}),t.jsx(n,{onPress:()=>s("dark"),children:"Set dark"})]}),t.jsx(u,{title:"Array form (memoized)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:r??"(none)"})})]})},play:async({canvas:e})=>{await a(e.getByTestId("current-theme")).toHaveTextContent("light"),await y.click(e.getByRole("button",{name:"Set dark"})),await c(()=>a(e.getByTestId("current-theme")).toHaveTextContent("dark"),{timeout:2e3})}},C={name:"options.defaultTheme",tags:["props"],parameters:m({description:{story:"When stores are empty, the hook returns defaultTheme. The default is also used for SSR."},source:{code:p`
                useThemeStores(themes, () => [inMemoryThemeStore(themes)], { defaultTheme: 'dark' })
            `}}),decorators:[l(),i()],render:()=>{const[e]=T(o,()=>[S(o)],{defaultTheme:"dark"});return t.jsx(u,{title:"Theme with defaultTheme: 'dark'",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})},play:async({canvas:e})=>{await a(e.getByTestId("current-theme")).toHaveTextContent("dark")}},B={tags:["source"],parameters:m({source:{code:M}}),decorators:[i()]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...B.parameters?.docs?.source}}};const re=["BasicUsage","FromReactContext","StoreWithInitialValue","ConcreteStores","FactoryTuplePattern","ArrayForm","WithDefaultTheme","Source"];export{w as ArrayForm,f as BasicUsage,v as ConcreteStores,k as FactoryTuplePattern,g as FromReactContext,B as Source,x as StoreWithInitialValue,C as WithDefaultTheme,re as __namedExportsOrder,te as default};
