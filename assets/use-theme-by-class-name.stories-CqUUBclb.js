import{r as l,j as t,d as h,w as T,s as g,S as f}from"./iframe-BIKclg0F.js";import{d as y}from"./dedent-BuYMbVyj.js";import{o as E}from"./observe-theme-from-stores-D5IPs1nT.js";import{s as b}from"./set-theme-to-stores-C1AbMsOJ.js";import{t as B}from"./theme-entry-D4S_RAMB.js";import{c as C}from"./class-name-theme-store-DrsKnZEX.js";import{B as c}from"./button-Cg48NM-D.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-class-name-Dm6FqN7r.js";import"./observe-attribute-CZKLLp6I.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-BZZwGHNT.js";function k(e,s){const a=s?.element??(typeof document<"u"?document.documentElement:void 0),n=s?.defaultTheme,m=l.useMemo(()=>C(e,{element:a}),[a,e]),[S,x]=l.useState(()=>m.read()?.theme??n);return l.useEffect(()=>{if(a)return E([m],n,x)},[a,m,n]),[S,l.useCallback(w=>{a&&b([m],B(e,w))},[a,m,e])]}const N=`import { useCallback, useEffect, useMemo, useState } from 'react'
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
`,{expect:r,userEvent:o}=__STORYBOOK_MODULE_TEST__,v={light:"theme-light",dark:"theme-dark"},W={title:"react/hooks/useThemeByClassName",tags:["func","version:1.0"],parameters:h({description:{component:"React hook that returns the current theme (from element class) and a setter. Subscribes to class changes on the element so the returned theme stays in sync."}}),render:()=>t.jsx(t.Fragment,{})},i={parameters:h({description:{story:"Observe and set theme by class name on document.documentElement. The hook reads the first matching theme class and setTheme updates the element class list."},source:{code:y`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByClassName(themes, { theme: 'light' })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[T(),g()],render:()=>{const[e,s]=k(v,{defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(c,{onPress:()=>s("light"),children:"Set light"}),t.jsx(c,{onPress:()=>s("dark"),children:"Set dark"})]}),t.jsx(f,{title:"Current theme (from document.documentElement class)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e,step:s})=>{await s("Set dark",async()=>{await o.click(e.getByRole("button",{name:"Set dark"})),await r(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await s("Set light",async()=>{await o.click(e.getByRole("button",{name:"Set light"})),await r(e.getByTestId("current-theme")).toHaveTextContent("light")})}},d={parameters:h({description:{story:"Observe and set theme by class name on a specific element by passing it in options.element."},source:{code:y`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByClassName(
                    { light: 'theme-light', dark: 'theme-dark' },
                    { theme: 'light', element: element ?? undefined }
                )
                return <div ref={setElement}>...</div>
            `}}),decorators:[T(),g()],render:()=>{const[e,s]=l.useState(null),[a,n]=k(v,{defaultTheme:"light",element:e??void 0});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx("div",{ref:s,className:"rounded border border-gray-300 p-4","data-testid":"target-element",children:"Target element (theme class is observed here)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(c,{onPress:()=>n("light"),children:"Set light"}),t.jsx(c,{onPress:()=>n("dark"),children:"Set dark"})]}),t.jsx(f,{title:"Current theme on target",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:a??"(none)"})})]})},play:async({canvas:e,step:s})=>{await s("Set dark",async()=>{await o.click(e.getByRole("button",{name:"Set dark"})),await r(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await s("Set light",async()=>{await o.click(e.getByRole("button",{name:"Set light"})),await r(e.getByTestId("current-theme")).toHaveTextContent("light")})}},u={parameters:h({description:{story:"The hook stays in sync when the element class is changed outside of setTheme (e.g. by another component or direct DOM mutation)."},source:{code:y`
                const [theme] = useThemeByClassName(themes, { theme: 'light' })
                // When something else adds/removes theme classes on the element,
                // theme updates automatically
            `}}),decorators:[T(),g()],render:()=>{const[e]=k(v,{defaultTheme:"light"}),s=()=>{const a=document.documentElement;a.classList.contains("theme-dark")?(a.classList.remove("theme-dark"),a.classList.add("theme-light")):(a.classList.remove("theme-light"),a.classList.add("theme-dark"))};return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx(c,{onPress:s,children:"Toggle theme via classList (external)"}),t.jsxs(f,{appearance:"output",children:[t.jsx("p",{className:"mb-2",children:"Hook value (updates when class changes elsewhere):"}),t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})]})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:/Toggle theme via classList/});await o.click(s),await r(e.getByTestId("current-theme")).toHaveTextContent("dark"),await o.click(s),await r(e.getByTestId("current-theme")).toHaveTextContent("light")}},p={tags:["source"],parameters:h({source:{code:N}}),decorators:[g()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const Y=["BasicUsage","CustomElement","SyncFromElsewhere","Source"];export{i as BasicUsage,d as CustomElement,p as Source,u as SyncFromElsewhere,Y as __namedExportsOrder,W as default};
