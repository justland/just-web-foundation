import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-Dhw67M0q.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l,t as u}from"./button-Cd599w8f.js";import{s as d,t as f}from"./react-BIf6FuzT.js";var p;function m(){return(m=e((()=>{p=`import { useCallback, useEffect, useMemo, useState } from 'react'
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
`})))()}var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f(),o(),s(),l(),m(),h=t(),{expect:g,userEvent:_}=__STORYBOOK_MODULE_TEST__,v=`use-theme-by-local-storage-story`,y={light:`theme-light`,dark:`theme-dark`},b={title:`react/hooks/useThemeByLocalStorage`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`React hook that returns the current theme (from localStorage) and a setter. Subscribes to storage changes so the returned theme stays in sync across tabs.`}}),render:()=>(0,h.jsx)(h.Fragment,{})},x={parameters:n({description:{story:`Observe and set theme from localStorage. The theme persists across page reloads and stays in sync across browser tabs via StorageEvent.`},source:{code:c`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'app-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[a(),r()],render:()=>{let[e,t]=d(y,{storageKey:v,defaultTheme:`light`});return(0,h.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(u,{onPress:()=>t(`light`),children:`Set light`}),(0,h.jsx)(u,{onPress:()=>t(`dark`),children:`Set dark`})]}),(0,h.jsx)(i,{title:`Current theme (from localStorage)`,appearance:`output`,children:(0,h.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})]})},afterEach:()=>{window.localStorage.removeItem(v)},play:async({canvas:e,step:t})=>{await t(`Set dark`,async()=>{await _.click(e.getByRole(`button`,{name:`Set dark`})),await g(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`)}),await t(`Set light`,async()=>{await _.click(e.getByRole(`button`,{name:`Set light`})),await g(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)})}},S={parameters:n({description:{story:`Pass options.storageKey to control the localStorage key used for persistence.`},source:{code:c`
                const [theme, setTheme] = useThemeByLocalStorage(themes, {
                    storageKey: 'my-app-theme',
                    defaultTheme: 'light'
                })
            `}}),decorators:[a(),r()],render:()=>{let[e,t]=d(y,{storageKey:v,defaultTheme:`light`});return(0,h.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(u,{onPress:()=>t(`light`),children:`Set light`}),(0,h.jsx)(u,{onPress:()=>t(`dark`),children:`Set dark`})]}),(0,h.jsx)(i,{title:`localStorage key`,appearance:`output`,children:(0,h.jsx)(`pre`,{"data-testid":`storage-key`,className:`font-mono`,children:v})}),(0,h.jsx)(i,{title:`Current theme`,appearance:`output`,children:(0,h.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})]})},afterEach:()=>{window.localStorage.removeItem(v)},play:async({canvas:e})=>{await _.click(e.getByRole(`button`,{name:`Set dark`})),await g(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`)}},C={tags:[`source`],parameters:n({source:{code:p}}),decorators:[r()]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...C.parameters?.docs?.source}}},w=[`BasicUsage`,`StorageKey`,`Source`]})))()}T();export{x as BasicUsage,C as Source,S as StorageKey,w as __namedExportsOrder,b as default};