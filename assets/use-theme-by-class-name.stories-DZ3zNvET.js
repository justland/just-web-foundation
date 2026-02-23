import{r as u,j as s,d as l,w as f,s as p,S as y}from"./iframe-DpiIn1Pa.js";import{d as k}from"./dedent-BuYMbVyj.js";import{o as b}from"./observe-attribute-DJMrXwPX.js";import{g as T}from"./get-theme-by-class-name-M9nr5ZZ7.js";import{s as B}from"./set-theme-by-class-name-Bavj7Osw.js";import{B as o}from"./button-DwHF6N6V.js";import"./preload-helper-PPVm8Dsz.js";import"./class-name-theme-store-IC1hzE--.js";import"./findKey-BZZwGHNT.js";import"./resolve-class-name-ma8rMboq.js";function v(e){const t=e.element??(typeof document<"u"?document.documentElement:void 0),[a,n]=u.useState(()=>t?T({themes:e.themes,defaultTheme:e.defaultTheme,element:t}):e.defaultTheme);u.useEffect(()=>{if(!t)return;n(T({themes:e.themes,defaultTheme:e.defaultTheme,element:t}));const g=b({class:()=>{n(T({themes:e.themes,defaultTheme:e.defaultTheme,element:t}))}},t);return()=>g.disconnect()},[t,e.themes,e.defaultTheme]);const S=u.useCallback(g=>{t&&B({themes:e.themes,theme:g,element:t})},[t,e.themes]);return[a,S]}const C=`import { useCallback, useEffect, useState } from 'react'
import { observeAttributes } from '../../attributes/observe-attribute.ts'
import { getThemeByClassName } from '../../theme/get-theme-by-class-name.ts'
import { setThemeByClassName } from '../../theme/set-theme-by-class-name.ts'
import type { ThemeMap } from '../../theme/theme.types.ts'

/**
 * React hook that returns the current theme (from element class) and a setter.
 * Subscribes to class changes on the element so the returned theme stays in sync.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.defaultTheme - Fallback theme key when no matching class is found
 * @param options.element - Element to read/set theme on (defaults to document.documentElement)
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * \`\`\`tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByClassName({ themes, defaultTheme: 'light' })
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
export function useThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	element?: Element | undefined
}): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() =>
		element
			? getThemeByClassName({ themes: options.themes, defaultTheme: options.defaultTheme, element })
			: options.defaultTheme,
	)

	useEffect(() => {
		if (!element) return

		setThemeState(
			getThemeByClassName({ themes: options.themes, defaultTheme: options.defaultTheme, element }),
		)

		const observer = observeAttributes(
			{
				class: () => {
					setThemeState(
						getThemeByClassName({
							themes: options.themes,
							defaultTheme: options.defaultTheme,
							element,
						}),
					)
				},
			},
			element,
		)
		return () => observer.disconnect()
	}, [element, options.themes, options.defaultTheme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			if (element) {
				setThemeByClassName({ themes: options.themes, theme: themeKey, element })
			}
		},
		[element, options.themes],
	)

	return [theme, setTheme]
}
`,{expect:m,userEvent:r}=__STORYBOOK_MODULE_TEST__,x={light:"theme-light",dark:"theme-dark"},M={title:"react/hooks/useThemeByClassName",tags:["func","version:next"],parameters:l({description:{component:"React hook that returns the current theme (from element class) and a setter. Subscribes to class changes on the element so the returned theme stays in sync."}}),render:()=>s.jsx(s.Fragment,{})},h={parameters:l({description:{story:"Observe and set theme by class name on document.documentElement. The hook reads the first matching theme class and setTheme updates the element class list."},source:{code:k`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByClassName({ themes, defaultTheme: 'light' })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[f(),p()],render:()=>{const[e,t]=v({themes:x,defaultTheme:"light"});return s.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(o,{onPress:()=>t("light"),children:"Set light"}),s.jsx(o,{onPress:()=>t("dark"),children:"Set dark"})]}),s.jsx(y,{title:"Current theme (from document.documentElement class)",appearance:"output",children:s.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e,step:t})=>{await t("Set dark",async()=>{await r.click(e.getByRole("button",{name:"Set dark"})),await m(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await t("Set light",async()=>{await r.click(e.getByRole("button",{name:"Set light"})),await m(e.getByTestId("current-theme")).toHaveTextContent("light")})}},c={parameters:l({description:{story:"Observe and set theme by class name on a specific element by passing it in options.element."},source:{code:k`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByClassName({
                    themes: { light: 'theme-light', dark: 'theme-dark' },
                    defaultTheme: 'light',
                    element: element ?? undefined,
                })
                return <div ref={setElement}>...</div>
            `}}),decorators:[f(),p()],render:()=>{const[e,t]=u.useState(null),[a,n]=v({themes:x,defaultTheme:"light",element:e??void 0});return s.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[s.jsx("div",{ref:t,className:"rounded border border-gray-300 p-4","data-testid":"target-element",children:"Target element (theme class is observed here)"}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(o,{onPress:()=>n("light"),children:"Set light"}),s.jsx(o,{onPress:()=>n("dark"),children:"Set dark"})]}),s.jsx(y,{title:"Current theme on target",appearance:"output",children:s.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:a??"(none)"})})]})},play:async({canvas:e,step:t})=>{await t("Set dark",async()=>{await r.click(e.getByRole("button",{name:"Set dark"})),await m(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await t("Set light",async()=>{await r.click(e.getByRole("button",{name:"Set light"})),await m(e.getByTestId("current-theme")).toHaveTextContent("light")})}},d={parameters:l({description:{story:"The hook stays in sync when the element class is changed outside of setTheme (e.g. by another component or direct DOM mutation)."},source:{code:k`
                const [theme] = useThemeByClassName({ themes, defaultTheme: 'light' })
                // When something else adds/removes theme classes on the element,
                // theme updates automatically
            `}}),decorators:[f(),p()],render:()=>{const[e]=v({themes:x,defaultTheme:"light"}),t=()=>{const a=document.documentElement;a.classList.contains("theme-dark")?(a.classList.remove("theme-dark"),a.classList.add("theme-light")):(a.classList.remove("theme-light"),a.classList.add("theme-dark"))};return s.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[s.jsx(o,{onPress:t,children:"Toggle theme via classList (external)"}),s.jsxs(y,{appearance:"output",children:[s.jsx("p",{className:"mb-2",children:"Hook value (updates when class changes elsewhere):"}),s.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})]})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:/Toggle theme via classList/});await r.click(t),await m(e.getByTestId("current-theme")).toHaveTextContent("dark"),await r.click(t),await m(e.getByTestId("current-theme")).toHaveTextContent("light")}},i={tags:["source"],parameters:l({source:{code:C}}),decorators:[p()]};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme by class name on document.documentElement. The hook reads the first matching theme class and setTheme updates the element class list.'
    },
    source: {
      code: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByClassName({ themes, defaultTheme: 'light' })
                setTheme('dark')
                setTheme('light')
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeByClassName({
      themes: THEMES,
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
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme by class name on a specific element by passing it in options.element.'
    },
    source: {
      code: dedent\`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByClassName({
                    themes: { light: 'theme-light', dark: 'theme-dark' },
                    defaultTheme: 'light',
                    element: element ?? undefined,
                })
                return <div ref={setElement}>...</div>
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const [theme, setTheme] = useThemeByClassName({
      themes: THEMES,
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'The hook stays in sync when the element class is changed outside of setTheme (e.g. by another component or direct DOM mutation).'
    },
    source: {
      code: dedent\`
                const [theme] = useThemeByClassName({ themes, defaultTheme: 'light' })
                // When something else adds/removes theme classes on the element,
                // theme updates automatically
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme] = useThemeByClassName({
      themes: THEMES,
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...i.parameters?.docs?.source}}};const O=["BasicUsage","CustomElement","SyncFromElsewhere","Source"];export{h as BasicUsage,c as CustomElement,i as Source,d as SyncFromElsewhere,O as __namedExportsOrder,M as default};
