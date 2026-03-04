import{r as h,j as t,d,w as T,s as g,S as b}from"./iframe-BfstSRl9.js";import{d as f}from"./dedent-BuYMbVyj.js";import{o as B}from"./observe-theme-from-stores-D5IPs1nT.js";import{s as N}from"./set-theme-to-stores-C1AbMsOJ.js";import{t as C}from"./theme-entry-D4S_RAMB.js";import{d as D}from"./data-attribute-theme-store-F4Jep4za.js";import{B as i}from"./button-CnRfsOuR.js";import"./preload-helper-PPVm8Dsz.js";import"./write-data-attribute-CvKrtAyE.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CvdOUndO.js";function y(e,a){const n=a.element??(typeof document<"u"?document.documentElement:void 0),r=a.defaultTheme,v=a.attributeName,m=h.useMemo(()=>D(e,{attributeName:v,element:n}),[n,e,v]),[x,w]=h.useState(()=>m.read()?.theme??r);h.useEffect(()=>n?B([m],r,w):void 0,[n,m,r]);const E=h.useCallback(S=>{n&&N([m],C(e,S))},[n,m,e]);return[x,E]}const A=`import { useCallback, useEffect, useMemo, useState } from 'react'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { dataAttributeThemeStore } from '../../theme/theme-store/data-attribute-theme-store/data-attribute-theme-store.ts'

/**
 * React hook that returns the current theme (from element data attribute) and a setter.
 * Subscribes to data attribute changes on the element so the returned theme stays in sync.
 *
 * @param themes - Record mapping theme keys to their data attribute values
 * @param options.attributeName - Data attribute name (e.g. \`data-theme\`)
 * @param options.defaultTheme - Fallback theme key when no matching attribute value is found
 * @param options.element - Element to read/set theme on (accepts null e.g. from refs). Defaults to document.documentElement.
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * \`\`\`tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByDataAttribute(themes, {
 *   attributeName: 'data-theme',
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
export function useThemeByDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		attributeName: \`data-\${string}\`
		defaultTheme?: keyof Themes | undefined
		element?: Element | null | undefined
	}
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)
	const defaultTheme = options.defaultTheme
	const attributeName = options.attributeName

	const store = useMemo(
		() =>
			dataAttributeThemeStore(themes, {
				attributeName,
				element
			}),
		[element, themes, attributeName]
	)

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
`,{expect:s,userEvent:o}=__STORYBOOK_MODULE_TEST__,k={light:"theme-light",dark:"theme-dark"},z={title:"react/hooks/useThemeByDataAttribute",tags:["func","version:1.0"],parameters:d({description:{component:"React hook that returns the current theme (from element data attribute) and a setter. Subscribes to data attribute changes on the element so the returned theme stays in sync."}}),render:()=>t.jsx(t.Fragment,{})},u={parameters:d({description:{story:"Observe and set theme by data attribute on document.documentElement. The hook reads the matching theme from the attribute and setTheme updates the element attribute."},source:{code:f`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByDataAttribute(themes, {
                    attributeName: 'data-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[T(),g()],render:()=>{const[e,a]=y(k,{attributeName:"data-theme",defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(i,{onPress:()=>a("light"),children:"Set light"}),t.jsx(i,{onPress:()=>a("dark"),children:"Set dark"})]}),t.jsx(b,{title:"Current theme (from document.documentElement data-theme)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e,step:a})=>{await a("Set dark",async()=>{await o.click(e.getByRole("button",{name:"Set dark"})),await s(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await a("Set light",async()=>{await o.click(e.getByRole("button",{name:"Set light"})),await s(e.getByTestId("current-theme")).toHaveTextContent("light")})}},c={parameters:d({description:{story:"Observe and set theme by data attribute on a specific element by passing it in options.element."},source:{code:f`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByDataAttribute(
                    { light: 'theme-light', dark: 'theme-dark' },
                    { attributeName: 'data-theme', defaultTheme: 'light', element: element ?? undefined }
                )
                return <div ref={setElement}>...</div>
            `}}),decorators:[T(),g()],render:()=>{const[e,a]=h.useState(null),[n,r]=y(k,{attributeName:"data-theme",defaultTheme:"light",element:e??void 0});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx("div",{ref:a,className:"rounded border border-gray-300 p-4","data-testid":"target-element",children:"Target element (theme attribute is observed here)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(i,{onPress:()=>r("light"),children:"Set light"}),t.jsx(i,{onPress:()=>r("dark"),children:"Set dark"})]}),t.jsx(b,{title:"Current theme on target",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:n??"(none)"})})]})},play:async({canvas:e,step:a})=>{await a("Set dark",async()=>{await o.click(e.getByRole("button",{name:"Set dark"})),await s(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await a("Set light",async()=>{await o.click(e.getByRole("button",{name:"Set light"})),await s(e.getByTestId("current-theme")).toHaveTextContent("light")})}},l={parameters:d({description:{story:"The hook stays in sync when the element data attribute is changed outside of setTheme (e.g. by another component or direct DOM mutation)."},source:{code:f`
                const [theme] = useThemeByDataAttribute(themes, {
                    attributeName: 'data-theme',
                    defaultTheme: 'light'
                })
                // When something else updates the data attribute on the element,
                // theme updates automatically
            `}}),decorators:[T(),g()],render:()=>{const[e]=y(k,{attributeName:"data-theme",defaultTheme:"light"}),a=()=>{const n=document.documentElement;n.getAttribute("data-theme")==="theme-dark"?n.setAttribute("data-theme","theme-light"):n.setAttribute("data-theme","theme-dark")};return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx(i,{onPress:a,children:"Toggle theme via setAttribute (external)"}),t.jsxs(b,{appearance:"output",children:[t.jsx("p",{className:"mb-2",children:"Hook value (updates when attribute changes elsewhere):"}),t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})]})]})},play:async({canvas:e})=>{const a=e.getByRole("button",{name:/Toggle theme via setAttribute/});await o.click(a),await s(e.getByTestId("current-theme")).toHaveTextContent("dark"),await o.click(a),await s(e.getByTestId("current-theme")).toHaveTextContent("light")}},p={tags:["source"],parameters:d({source:{code:A}}),decorators:[g()]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme by data attribute on document.documentElement. The hook reads the matching theme from the attribute and setTheme updates the element attribute.'
    },
    source: {
      code: dedent\`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByDataAttribute(themes, {
                    attributeName: 'data-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme, setTheme] = useThemeByDataAttribute(THEMES, {
      attributeName: 'data-theme',
      defaultTheme: 'light'
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('light')}>Set light</Button>
                    <Button onPress={() => setTheme('dark')}>Set dark</Button>
                </div>
                <StoryCard title="Current theme (from document.documentElement data-theme)" appearance="output">
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set theme by data attribute on a specific element by passing it in options.element.'
    },
    source: {
      code: dedent\`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByDataAttribute(
                    { light: 'theme-light', dark: 'theme-dark' },
                    { attributeName: 'data-theme', defaultTheme: 'light', element: element ?? undefined }
                )
                return <div ref={setElement}>...</div>
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const [theme, setTheme] = useThemeByDataAttribute(THEMES, {
      attributeName: 'data-theme',
      defaultTheme: 'light',
      element: element ?? undefined
    });
    return <div className="flex flex-col gap-4 font-sans">
                <div ref={setElement} className="rounded border border-gray-300 p-4" data-testid="target-element">
                    Target element (theme attribute is observed here)
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'The hook stays in sync when the element data attribute is changed outside of setTheme (e.g. by another component or direct DOM mutation).'
    },
    source: {
      code: dedent\`
                const [theme] = useThemeByDataAttribute(themes, {
                    attributeName: 'data-theme',
                    defaultTheme: 'light'
                })
                // When something else updates the data attribute on the element,
                // theme updates automatically
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [theme] = useThemeByDataAttribute(THEMES, {
      attributeName: 'data-theme',
      defaultTheme: 'light'
    });
    const toggleExternally = () => {
      const el = document.documentElement;
      const current = el.getAttribute('data-theme');
      if (current === 'theme-dark') {
        el.setAttribute('data-theme', 'theme-light');
      } else {
        el.setAttribute('data-theme', 'theme-dark');
      }
    };
    return <div className="flex flex-col gap-4 font-sans">
                <Button onPress={toggleExternally}>Toggle theme via setAttribute (external)</Button>
                <StoryCard appearance="output">
                    <p className="mb-2">Hook value (updates when attribute changes elsewhere):</p>
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
      name: /Toggle theme via setAttribute/
    });
    await userEvent.click(btn);
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
    await userEvent.click(btn);
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const G=["BasicUsage","CustomElement","SyncFromElsewhere","Source"];export{u as BasicUsage,c as CustomElement,p as Source,l as SyncFromElsewhere,G as __namedExportsOrder,z as default};
