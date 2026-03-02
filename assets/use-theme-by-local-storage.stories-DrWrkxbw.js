import{r as n,j as t,d,w as y,s as S,S as u}from"./iframe-BS47E7d3.js";import{d as T}from"./dedent-BuYMbVyj.js";import{o as E}from"./observe-theme-from-stores-D5IPs1nT.js";import{s as B}from"./set-theme-to-stores-C1AbMsOJ.js";import{t as b}from"./theme-entry-D4S_RAMB.js";import{p as K}from"./parse-stored-theme-Dj4VCwi6.js";import{l as C}from"./local-storage-theme-store-DEFWor3J.js";import{B as l}from"./button-BqAxTSlJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";function f(e,r){const{storageKey:i,defaultTheme:o}=r,s=n.useMemo(()=>C(e,{storageKey:i}),[e,i]),[w,x]=n.useState(()=>typeof window<"u"&&window.localStorage?K(e,window.localStorage.getItem(i))??o:o);return n.useEffect(()=>E([s],o,x),[s,o]),[w,n.useCallback(v=>{B([s],b(e,v))},[s,e])]}const j=`import { useCallback, useEffect, useMemo, useState } from 'react'
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
`,{expect:p,userEvent:g}=__STORYBOOK_MODULE_TEST__,a="use-theme-by-local-storage-story",k={light:"theme-light",dark:"theme-dark"},A={title:"react/hooks/useThemeByLocalStorage",tags:["func","version:1.0"],parameters:d({description:{component:"React hook that returns the current theme (from localStorage) and a setter. Subscribes to storage changes so the returned theme stays in sync across tabs."}}),render:()=>t.jsx(t.Fragment,{})},m={parameters:d({description:{story:"Observe and set theme from localStorage. The theme persists across page reloads and stays in sync across browser tabs via StorageEvent."},source:{code:T`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'app-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[y(),S()],render:()=>{const[e,r]=f(k,{storageKey:a,defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(l,{onPress:()=>r("light"),children:"Set light"}),t.jsx(l,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(u,{title:"Current theme (from localStorage)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},afterEach:()=>{window.localStorage.removeItem(a)},play:async({canvas:e,step:r})=>{await r("Set dark",async()=>{await g.click(e.getByRole("button",{name:"Set dark"})),await p(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await r("Set light",async()=>{await g.click(e.getByRole("button",{name:"Set light"})),await p(e.getByTestId("current-theme")).toHaveTextContent("light")})}},c={parameters:d({description:{story:"Pass options.storageKey to control the localStorage key used for persistence."},source:{code:T`
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'my-app-theme',
                    defaultTheme: 'light'
                })
            `}}),decorators:[y(),S()],render:()=>{const[e,r]=f(k,{storageKey:a,defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(l,{onPress:()=>r("light"),children:"Set light"}),t.jsx(l,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(u,{title:"localStorage key",appearance:"output",children:t.jsx("pre",{"data-testid":"storage-key",className:"font-mono",children:a})}),t.jsx(u,{title:"Current theme",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},afterEach:()=>{window.localStorage.removeItem(a)},play:async({canvas:e})=>{await g.click(e.getByRole("button",{name:"Set dark"})),await p(e.getByTestId("current-theme")).toHaveTextContent("dark")}},h={tags:["source"],parameters:d({source:{code:j}}),decorators:[S()]};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...h.parameters?.docs?.source}}};const D=["BasicUsage","StorageKey","Source"];export{m as BasicUsage,h as Source,c as StorageKey,D as __namedExportsOrder,A as default};
