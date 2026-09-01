import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-DFQ_z_Nq.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u,t as d}from"./button-CSoc4Dgk.js";import{d as f,t as p}from"./react-BIf6FuzT.js";var m;function h(){return(h=e((()=>{m=`import { useCallback, useEffect, useMemo, useState } from 'react'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { classNameThemeStore } from '../../theme/theme-store/class-name-theme-store/class-name-theme-store.ts'

/**
 * React hook that returns the current theme (from element class) and a setter.
 * Subscribes to class changes on the element so the returned theme stays in sync.
 *
 * @param themes - Record mapping theme keys to their class name values
 * @param options.theme - Fallback theme key when no matching class is found
 * @param options.element - Element to read/set theme on (accepts null e.g. from refs). Defaults to document.documentElement.
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * \`\`\`tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByClassName(themes, { theme: 'light' })
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
export function useThemeByClassName<Themes extends ThemeMap>(
	themes: Themes,
	options?: {
		defaultTheme?: keyof Themes | undefined
		element?: Element | null | undefined
	}
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options?.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)
	const defaultTheme = options?.defaultTheme

	const store = useMemo(() => classNameThemeStore(themes, { element }), [element, themes])

	const [theme, setThemeState] = useState<keyof Themes | undefined>(
		() => store.read()?.theme ?? defaultTheme
	)

	useEffect(() => {
		if (!element) return
		const unobserve = observeThemeFromStores([store], defaultTheme, setThemeState)
		return unobserve
	}, [element, store, defaultTheme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			if (element) {
				setThemeToStores([store], themeEntry(themes, themeKey))
			}
		},
		[element, store, themes]
	)

	return [theme, setTheme]
}
`})))()}var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p(),s(),c(),g=t(),u(),h(),_=n(),{expect:v,userEvent:y}=__STORYBOOK_MODULE_TEST__,b={light:`theme-light`,dark:`theme-dark`},x={title:`react/hooks/useThemeByClassName`,tags:[`func`,`version:1.0`],parameters:r({description:{component:`React hook that returns the current theme (from element class) and a setter. Subscribes to class changes on the element so the returned theme stays in sync.`}}),render:()=>(0,_.jsx)(_.Fragment,{})},S={parameters:r({description:{story:`Observe and set theme by class name on document.documentElement. The hook reads the first matching theme class and setTheme updates the element class list.`},source:{code:l`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByClassName(themes, { theme: 'light' })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[o(),i()],render:()=>{let[e,t]=f(b,{defaultTheme:`light`});return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(d,{onPress:()=>t(`light`),children:`Set light`}),(0,_.jsx)(d,{onPress:()=>t(`dark`),children:`Set dark`})]}),(0,_.jsx)(a,{title:`Current theme (from document.documentElement class)`,appearance:`output`,children:(0,_.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})]})},play:async({canvas:e,step:t})=>{await t(`Set dark`,async()=>{await y.click(e.getByRole(`button`,{name:`Set dark`})),await v(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`)}),await t(`Set light`,async()=>{await y.click(e.getByRole(`button`,{name:`Set light`})),await v(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)})}},C={parameters:r({description:{story:`Observe and set theme by class name on a specific element by passing it in options.element.`},source:{code:l`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByClassName(
                    { light: 'theme-light', dark: 'theme-dark' },
                    { theme: 'light', element: element ?? undefined }
                )
                return <div ref={setElement}>...</div>
            `}}),decorators:[o(),i()],render:()=>{let[e,t]=(0,g.useState)(null),[n,r]=f(b,{defaultTheme:`light`,element:e??void 0});return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,_.jsx)(`div`,{ref:t,className:`rounded border border-gray-300 p-4`,"data-testid":`target-element`,children:`Target element (theme class is observed here)`}),(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(d,{onPress:()=>r(`light`),children:`Set light`}),(0,_.jsx)(d,{onPress:()=>r(`dark`),children:`Set dark`})]}),(0,_.jsx)(a,{title:`Current theme on target`,appearance:`output`,children:(0,_.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:n??`(none)`})})]})},play:async({canvas:e,step:t})=>{await t(`Set dark`,async()=>{await y.click(e.getByRole(`button`,{name:`Set dark`})),await v(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`)}),await t(`Set light`,async()=>{await y.click(e.getByRole(`button`,{name:`Set light`})),await v(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)})}},w={parameters:r({description:{story:`The hook stays in sync when the element class is changed outside of setTheme (e.g. by another component or direct DOM mutation).`},source:{code:l`
                const [theme] = useThemeByClassName(themes, { theme: 'light' })
                // When something else adds/removes theme classes on the element,
                // theme updates automatically
            `}}),decorators:[o(),i()],render:()=>{let[e]=f(b,{defaultTheme:`light`});return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,_.jsx)(d,{onPress:()=>{let e=document.documentElement;e.classList.contains(`theme-dark`)?(e.classList.remove(`theme-dark`),e.classList.add(`theme-light`)):(e.classList.remove(`theme-light`),e.classList.add(`theme-dark`))},children:`Toggle theme via classList (external)`}),(0,_.jsxs)(a,{appearance:`output`,children:[(0,_.jsx)(`p`,{className:`mb-2`,children:`Hook value (updates when class changes elsewhere):`}),(0,_.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})]})]})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:/Toggle theme via classList/});await y.click(t),await v(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`),await y.click(t),await v(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)}},T={tags:[`source`],parameters:r({source:{code:m}}),decorators:[i()]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme by class name on document.documentElement. The hook reads the first matching theme class and setTheme updates the element class list.'
    },
    source: {
      code: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByClassName(themes, { theme: 'light' })
                setTheme('dark')
                setTheme('light')
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeByClassName(THEMES, {
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Current theme (from document.documentElement class)" appearance="output">
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme by class name on a specific element by passing it in options.element.'
    },
    source: {
      code: dedent\`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByClassName(
                    { light: 'theme-light', dark: 'theme-dark' },
                    { theme: 'light', element: element ?? undefined }
                )
                return <div ref={setElement}>...</div>
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const [theme, setTheme] = useThemeByClassName(THEMES, {
      defaultTheme: 'light',
      element: element ?? undefined
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div ref={setElement} className="rounded border border-gray-300 p-4" data-testid="target-element">
                    Target element (theme class is observed here)
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Current theme on target" appearance="output">
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'The hook stays in sync when the element class is changed outside of setTheme (e.g. by another component or direct DOM mutation).'
    },
    source: {
      code: dedent\`
                const [theme] = useThemeByClassName(themes, { theme: 'light' })
                // When something else adds/removes theme classes on the element,
                // theme updates automatically
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme] = useThemeByClassName(THEMES, {
      defaultTheme: 'light'
    });
    const toggleExternally = () => {
      const el = document.documentElement;
      const hasDark = el.classList.contains('theme-dark');
      if (hasDark) {
        el.classList.remove('theme-dark');
        el.classList.add('theme-light');
      } else {
        el.classList.remove('theme-light');
        el.classList.add('theme-dark');
      }
    };
    return <div className="flex flex-col gap-4 font-sans">
                <Button onPress={toggleExternally}>Toggle theme via classList (external)</Button>
                <StoryCard appearance="output">
                    <p className="mb-2">Hook value (updates when class changes elsewhere):</p>
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: /Toggle theme via classList/
    });
    await userEvent.click(btn);
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
    await userEvent.click(btn);
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...T.parameters?.docs?.source}}},E=[`BasicUsage`,`CustomElement`,`SyncFromElsewhere`,`Source`]})))()}D();export{S as BasicUsage,C as CustomElement,T as Source,w as SyncFromElsewhere,E as __namedExportsOrder,x as default};