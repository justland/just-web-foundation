import{r as o,j as t,d as l,w as T,s as g,S as d}from"./iframe-6R7iObMn.js";import{d as S}from"./dedent-BuYMbVyj.js";import{o as E}from"./observe-theme-from-stores-D5IPs1nT.js";import{s as B}from"./set-theme-to-stores-C1AbMsOJ.js";import{t as b}from"./theme-entry-D4S_RAMB.js";import{l as K}from"./local-storage-theme-store-74WqzpGC.js";import{B as h}from"./button-2D35iakA.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-local-storage-wJ6Lcjak.js";import"./write-web-storage-C2zTqgEU.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-theme-map-value-CsrxdXA7.js";function f(e,r){const{storageKey:y,defaultTheme:i}=r,a=o.useMemo(()=>K(e,{storageKey:y}),[e,y]),[x,v]=o.useState(()=>a.read()?.theme??i);return o.useEffect(()=>E([a],i,v),[a,i]),[x,o.useCallback(w=>{B([a],b(e,w))},[a,e])]}const C=`import { useCallback, useEffect, useMemo, useState } from 'react'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
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

	const [theme, setThemeState] = useState<keyof Themes | undefined>(
		() => store.read()?.theme ?? defaultTheme
	)

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
`,{expect:u,userEvent:p}=__STORYBOOK_MODULE_TEST__,s="use-theme-by-local-storage-story",k={light:"theme-light",dark:"theme-dark"},G={title:"react/hooks/useThemeByLocalStorage",tags:["func","version:1.0"],parameters:l({description:{component:"React hook that returns the current theme (from localStorage) and a setter. Subscribes to storage changes so the returned theme stays in sync across tabs."}}),render:()=>t.jsx(t.Fragment,{})},n={parameters:l({description:{story:"Observe and set theme from localStorage. The theme persists across page reloads and stays in sync across browser tabs via StorageEvent."},source:{code:S`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'app-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[T(),g()],render:()=>{const[e,r]=f(k,{storageKey:s,defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(h,{onPress:()=>r("light"),children:"Set light"}),t.jsx(h,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(d,{title:"Current theme (from localStorage)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},afterEach:()=>{window.localStorage.removeItem(s)},play:async({canvas:e,step:r})=>{await r("Set dark",async()=>{await p.click(e.getByRole("button",{name:"Set dark"})),await u(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await r("Set light",async()=>{await p.click(e.getByRole("button",{name:"Set light"})),await u(e.getByTestId("current-theme")).toHaveTextContent("light")})}},m={parameters:l({description:{story:"Pass options.storageKey to control the localStorage key used for persistence."},source:{code:S`
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'my-app-theme',
                    defaultTheme: 'light'
                })
            `}}),decorators:[T(),g()],render:()=>{const[e,r]=f(k,{storageKey:s,defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(h,{onPress:()=>r("light"),children:"Set light"}),t.jsx(h,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(d,{title:"localStorage key",appearance:"output",children:t.jsx("pre",{"data-testid":"storage-key",className:"font-mono",children:s})}),t.jsx(d,{title:"Current theme",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},afterEach:()=>{window.localStorage.removeItem(s)},play:async({canvas:e})=>{await p.click(e.getByRole("button",{name:"Set dark"})),await u(e.getByTestId("current-theme")).toHaveTextContent("dark")}},c={tags:["source"],parameters:l({source:{code:C}}),decorators:[g()]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...c.parameters?.docs?.source}}};const F=["BasicUsage","StorageKey","Source"];export{n as BasicUsage,c as Source,m as StorageKey,F as __namedExportsOrder,G as default};
