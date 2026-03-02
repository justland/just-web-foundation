import{r as m,j as t,d as i,w as y,s as T,S as p}from"./iframe-B5WlOR2G.js";import{d as f}from"./dedent-BuYMbVyj.js";import{o as b}from"./observe-theme-from-stores-D5IPs1nT.js";import{p as B}from"./parse-stored-theme-Dj4VCwi6.js";import{s as K}from"./set-theme-to-stores-C1AbMsOJ.js";import{t as C}from"./theme-entry-D4S_RAMB.js";import{l as j}from"./local-storage-theme-store-BxhG8YWn.js";import{B as d}from"./button-CsZyzj2i.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./resolve-class-name-Bomprtp8.js";function k(e,r){const{storageKey:u,defaultTheme:s}=r,a=m.useMemo(()=>j(e,{storageKey:u}),[e,u]),[w,x]=m.useState(()=>{if(typeof window<"u"&&window.localStorage){const n=window.localStorage.getItem(u);return B(e,n)??s}return s});m.useEffect(()=>b([a],s,x),[a,s]);const E=m.useCallback(n=>{K([a],C(e,n))},[a,e]);return[w,E]}const R=`import { useCallback, useEffect, useMemo, useState } from 'react'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { parseStoredTheme } from '../../theme/_utils/parse-stored-theme.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { localStorageThemeStore } from '../../theme/theme-store/local-storage-theme-store/local-storage-theme-store.ts'

/**
 * React hook that returns the current theme (from localStorage) and a setter.
 * Subscribes to storage changes so the returned theme stays in sync across tabs.
 *
 * @param themes - Record mapping theme keys to their values
 * @param options.storageKey - localStorage key to persist the theme
 * @param options.defaultTheme - Fallback theme key when no stored value is found
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * \`\`\`tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByLocalStorage(themes, {
 *   storageKey: 'app-theme',
 *   defaultTheme: 'light'
 * })
 *
 * return (
 *   <>
 *     <span>Current: {theme}</span>
 *     <button onClick={() => setTheme('dark')}>Dark</button>
 *     <button onClick={() => setTheme('light')}>Light</button>
 *   </>
 * )
 * \`\`\`
 */
export function useThemeByLocalStorage<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		storageKey: string
		defaultTheme?: keyof Themes | undefined
	}
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { storageKey, defaultTheme } = options

	const store = useMemo(() => localStorageThemeStore(themes, { storageKey }), [themes, storageKey])

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const stored = window.localStorage.getItem(storageKey)
			const resolved = parseStoredTheme(themes, stored)
			return resolved ?? defaultTheme
		}
		return defaultTheme
	})

	useEffect(() => {
		const unobserve = observeThemeFromStores([store], defaultTheme, setThemeState)
		return unobserve
	}, [store, defaultTheme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			setThemeToStores([store], themeEntry(themes, themeKey))
		},
		[store, themes]
	)

	return [theme, setTheme]
}
`,{expect:g,userEvent:S}=__STORYBOOK_MODULE_TEST__,o="use-theme-by-local-storage-story",v={light:"theme-light",dark:"theme-dark"},F={title:"react/hooks/useThemeByLocalStorage",tags:["func","version:next"],parameters:i({description:{component:"React hook that returns the current theme (from localStorage) and a setter. Subscribes to storage changes so the returned theme stays in sync across tabs."}}),render:()=>t.jsx(t.Fragment,{})},c={parameters:i({description:{story:"Observe and set theme from localStorage. The theme persists across page reloads and stays in sync across browser tabs via StorageEvent."},source:{code:f`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'app-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[y(),T()],render:()=>{const[e,r]=k(v,{storageKey:o,defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(d,{onPress:()=>r("light"),children:"Set light"}),t.jsx(d,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(p,{title:"Current theme (from localStorage)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},afterEach:()=>{window.localStorage.removeItem(o)},play:async({canvas:e,step:r})=>{await r("Set dark",async()=>{await S.click(e.getByRole("button",{name:"Set dark"})),await g(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await r("Set light",async()=>{await S.click(e.getByRole("button",{name:"Set light"})),await g(e.getByTestId("current-theme")).toHaveTextContent("light")})}},h={parameters:i({description:{story:"Pass options.storageKey to control the localStorage key used for persistence."},source:{code:f`
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'my-app-theme',
                    defaultTheme: 'light'
                })
            `}}),decorators:[y(),T()],render:()=>{const[e,r]=k(v,{storageKey:o,defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(d,{onPress:()=>r("light"),children:"Set light"}),t.jsx(d,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(p,{title:"localStorage key",appearance:"output",children:t.jsx("pre",{"data-testid":"storage-key",className:"font-mono",children:o})}),t.jsx(p,{title:"Current theme",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},afterEach:()=>{window.localStorage.removeItem(o)},play:async({canvas:e})=>{await S.click(e.getByRole("button",{name:"Set dark"})),await g(e.getByTestId("current-theme")).toHaveTextContent("dark")}},l={tags:["source"],parameters:i({source:{code:R}}),decorators:[T()]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme from localStorage. The theme persists across page reloads and stays in sync across browser tabs via StorageEvent.'
    },
    source: {
      code: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'app-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeByLocalStorage(THEMES, {
      storageKey: STORAGE_KEY,
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Current theme (from localStorage)" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  afterEach: () => {
    window.localStorage.removeItem(STORAGE_KEY);
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Set dark', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set dark'
      }));
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
    });
    await step('Set light', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set light'
      }));
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Pass options.storageKey to control the localStorage key used for persistence.'
    },
    source: {
      code: dedent\`
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'my-app-theme',
                    defaultTheme: 'light'
                })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeByLocalStorage(THEMES, {
      storageKey: STORAGE_KEY,
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="localStorage key" appearance="output">
                    <pre data-testid="storage-key" className="font-mono">
                        {STORAGE_KEY}
                    </pre>
                </StoryCard>
                <StoryCard title="Current theme" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  afterEach: () => {
    window.localStorage.removeItem(STORAGE_KEY);
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Set dark'
    }));
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
  }
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...l.parameters?.docs?.source}}};const U=["BasicUsage","StorageKey","Source"];export{c as BasicUsage,l as Source,h as StorageKey,U as __namedExportsOrder,F as default};
