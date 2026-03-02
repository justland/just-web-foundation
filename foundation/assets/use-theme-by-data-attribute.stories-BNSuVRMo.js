import{r as m,j as t,d as h,w as f,s as b,S as y}from"./iframe-B5WlOR2G.js";import{d as v}from"./dedent-BuYMbVyj.js";import{g as B}from"./get-data-attribute-Bl9c_7h4.js";import{o as N}from"./observe-theme-from-stores-D5IPs1nT.js";import{s as C}from"./set-theme-to-stores-C1AbMsOJ.js";import{d as A,r as D}from"./data-attribute-theme-store-ChMUdK3L.js";import{t as j}from"./theme-entry-D4S_RAMB.js";import{B as i}from"./button-CsZyzj2i.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./observe-attribute-DJMrXwPX.js";import"./dummy-theme-store-DcCfgetv.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-Bomprtp8.js";function k(e,a){const r=a.element??(typeof document<"u"?document.documentElement:void 0),n=a.defaultTheme,T=a.attributeName,u=m.useMemo(()=>A(e,{attributeName:T,element:r}),[r,e,T]),[x,w]=m.useState(()=>{if(r){const d=B(T,r);return D(e,d)??n}return n});m.useEffect(()=>r?N([u],n,w):void 0,[r,u,n]);const E=m.useCallback(d=>{r&&C([u],j(e,d))},[r,u,e]);return[x,E]}const H=`import { useCallback, useEffect, useMemo, useState } from 'react'
import { getDataAttribute } from '../../attributes/get-data-attribute.ts'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { resolveThemeFromDataAttribute } from '../../theme/data-attribute/resolve-theme-from-data-attribute.ts'
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
 * @param options.element - Element to read/set theme on (defaults to document.documentElement)
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
		element?: Element | undefined
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

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() => {
		if (element) {
			const attrValue = getDataAttribute(attributeName, element)
			const resolved = resolveThemeFromDataAttribute(themes, attrValue)
			return resolved ?? defaultTheme
		}
		return defaultTheme
	})

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
`,{expect:s,userEvent:o}=__STORYBOOK_MODULE_TEST__,S={light:"theme-light",dark:"theme-dark"},G={title:"react/hooks/useThemeByDataAttribute",tags:["func","version:next"],parameters:h({description:{component:"React hook that returns the current theme (from element data attribute) and a setter. Subscribes to data attribute changes on the element so the returned theme stays in sync."}}),render:()=>t.jsx(t.Fragment,{})},l={parameters:h({description:{story:"Observe and set theme by data attribute on document.documentElement. The hook reads the matching theme from the attribute and setTheme updates the element attribute."},source:{code:v`
                const themes = { light: 'theme-light', dark: 'theme-dark' }
                const [theme, setTheme] = useThemeByDataAttribute(themes, {
                    attributeName: 'data-theme',
                    defaultTheme: 'light'
                })
                setTheme('dark')
                setTheme('light')
            `}}),decorators:[f(),b()],render:()=>{const[e,a]=k(S,{attributeName:"data-theme",defaultTheme:"light"});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(i,{onPress:()=>a("light"),children:"Set light"}),t.jsx(i,{onPress:()=>a("dark"),children:"Set dark"})]}),t.jsx(y,{title:"Current theme (from document.documentElement data-theme)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})})]})},play:async({canvas:e,step:a})=>{await a("Set dark",async()=>{await o.click(e.getByRole("button",{name:"Set dark"})),await s(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await a("Set light",async()=>{await o.click(e.getByRole("button",{name:"Set light"})),await s(e.getByTestId("current-theme")).toHaveTextContent("light")})}},c={parameters:h({description:{story:"Observe and set theme by data attribute on a specific element by passing it in options.element."},source:{code:v`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [theme, setTheme] = useThemeByDataAttribute(
                    { light: 'theme-light', dark: 'theme-dark' },
                    { attributeName: 'data-theme', defaultTheme: 'light', element: element ?? undefined }
                )
                return <div ref={setElement}>...</div>
            `}}),decorators:[f(),b()],render:()=>{const[e,a]=m.useState(null),[r,n]=k(S,{attributeName:"data-theme",defaultTheme:"light",element:e??void 0});return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx("div",{ref:a,className:"rounded border border-gray-300 p-4","data-testid":"target-element",children:"Target element (theme attribute is observed here)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(i,{onPress:()=>n("light"),children:"Set light"}),t.jsx(i,{onPress:()=>n("dark"),children:"Set dark"})]}),t.jsx(y,{title:"Current theme on target",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:r??"(none)"})})]})},play:async({canvas:e,step:a})=>{await a("Set dark",async()=>{await o.click(e.getByRole("button",{name:"Set dark"})),await s(e.getByTestId("current-theme")).toHaveTextContent("dark")}),await a("Set light",async()=>{await o.click(e.getByRole("button",{name:"Set light"})),await s(e.getByTestId("current-theme")).toHaveTextContent("light")})}},p={parameters:h({description:{story:"The hook stays in sync when the element data attribute is changed outside of setTheme (e.g. by another component or direct DOM mutation)."},source:{code:v`
                const [theme] = useThemeByDataAttribute(themes, {
                    attributeName: 'data-theme',
                    defaultTheme: 'light'
                })
                // When something else updates the data attribute on the element,
                // theme updates automatically
            `}}),decorators:[f(),b()],render:()=>{const[e]=k(S,{attributeName:"data-theme",defaultTheme:"light"}),a=()=>{const r=document.documentElement;r.getAttribute("data-theme")==="theme-dark"?r.setAttribute("data-theme","theme-light"):r.setAttribute("data-theme","theme-dark")};return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx(i,{onPress:a,children:"Toggle theme via setAttribute (external)"}),t.jsxs(y,{appearance:"output",children:[t.jsx("p",{className:"mb-2",children:"Hook value (updates when attribute changes elsewhere):"}),t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:e??"(none)"})]})]})},play:async({canvas:e})=>{const a=e.getByRole("button",{name:/Toggle theme via setAttribute/});await o.click(a),await s(e.getByTestId("current-theme")).toHaveTextContent("dark"),await o.click(a),await s(e.getByTestId("current-theme")).toHaveTextContent("light")}},g={tags:["source"],parameters:h({source:{code:H}}),decorators:[b()]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...g.parameters?.docs?.source}}};const J=["BasicUsage","CustomElement","SyncFromElsewhere","Source"];export{l as BasicUsage,c as CustomElement,g as Source,p as SyncFromElsewhere,J as __namedExportsOrder,G as default};
