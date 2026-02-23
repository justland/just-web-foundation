import{j as a,d as n,w as f,s as o,r as p,t as v}from"./iframe-Pea2t46H.js";import{d as y}from"./dedent-BuYMbVyj.js";import{g as T}from"./get-theme-by-class-name-M9nr5ZZ7.js";import{s as k}from"./set-theme-by-class-name-Bavj7Osw.js";import{B as x}from"./button-DdV3GaD2.js";import"./preload-helper-PPVm8Dsz.js";import"./class-name-theme-store-IC1hzE--.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CdAgLf4m.js";const b=`import { classNameThemeStore } from './class-name-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Gets the current theme by checking element class names against a themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.defaultTheme - Fallback theme key if no matching class is found
 * @param options.element - Element to check classes on (defaults to document.documentElement)
 * @returns The matching theme key or defaultTheme if no match found
 *
 * @example
 * \`\`\`ts
 * const themes = {
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * }
 *
 * // Get current theme from document.documentElement
 * const theme = getThemeByClassName({
 *   themes,
 *   defaultTheme: 'light'
 * })
 *
 * // Get theme from specific element
 * const theme = getThemeByClassName({
 *   themes,
 *   element: myElement,
 *   defaultTheme: 'light'
 * })
 * \`\`\`
 */
export function getThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	element?: Element | null | undefined
}): keyof Themes | undefined {
	const store = classNameThemeStore<Themes>(options.element)
	return store.get({
		themes: options.themes,
		defaultTheme: options.defaultTheme,
	})
}
`,{expect:m,userEvent:g}=__STORYBOOK_MODULE_TEST__,P={title:"theme/getThemeByClassName",tags:["func","version:next"],parameters:n({description:{component:"A utility that determines the current theme based on element class name against a themes map."}}),render:()=>a.jsx(a.Fragment,{})},r={light:["light","text-black","bg-white"],dark:["dark","text-white","bg-black"]},d={tags:["use-case"],parameters:n({description:{story:"Get the current theme from document class names."}}),decorators:[f(),o({source:y`
                getThemeByClassName({
                  themes: { light: 'light', dark: 'dark' },
                  defaultTheme: 'dark',
                })
            `})],render:()=>{const[e,s]=p.useState();return p.useEffect(()=>{const t=T({themes:{light:"light",dark:"dark"},defaultTheme:"dark"});s(t)},[]),a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx("div",{className:"flex gap-2",children:Object.keys(r).map(t=>a.jsx(x,{onPress:()=>{k({themes:r,theme:t}),s(t)},children:t},t))}),a.jsxs("div",{className:"p-4 border rounded-md border-gray-300 mb-4",children:["Current theme: ",a.jsx("span",{"data-testid":"current-theme",children:e})]})]})},play:async({canvas:e,step:s})=>{await s("light",async()=>{const t=e.getByRole("button",{name:"light"});await g.click(t),await m(e.getByTestId("current-theme")).toHaveTextContent("light")}),await s("dark",async()=>{const t=e.getByRole("button",{name:"dark"});await g.click(t),await m(e.getByTestId("current-theme")).toHaveTextContent("dark")})}},l={tags:["use-case"],parameters:n({description:{story:"Falls back to default theme when class name is not found."}}),decorators:[f(),o({source:y`
                document.documentElement.classList.remove('light', 'dark')
                getThemeByClassName({ themes, defaultTheme: 'dark' })
            `})],loaders:[()=>(document.documentElement.classList.remove("light","dark"),{theme:T({themes:r,defaultTheme:"dark"})})],render:(e,{loaded:{theme:s}})=>{const t=document.documentElement.className;return a.jsx("div",{className:"flex flex-col gap-4",children:a.jsxs("div",{className:"p-4 border rounded-md border-gray-300 mb-4",children:[a.jsxs("p",{children:["Current theme:"," ",a.jsx("span",{"data-testid":"current-theme",children:s===void 0?"(undefined)":s})]}),a.jsxs("p",{children:["Class name: ",t===""?"(empty)":t]})]})})},play:async({canvas:e})=>{await m(e.getByTestId("current-theme")).toHaveTextContent("dark")}},h={tags:["use-case"],parameters:n({description:{story:"Gets theme from a specific element."}}),decorators:[f(),o({source:y`getThemeByClassName({ themes, defaultTheme: 'dark', element: myElement })`})],render:()=>{const[e,s]=p.useState(),t=p.useRef(null);return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx("div",{className:"flex gap-2",children:Object.keys(r).map(c=>a.jsx(x,{onPress:()=>{k({themes:r,theme:c,element:t.current??void 0}),s(c)},children:c},c))}),a.jsxs("div",{ref:t,className:v("p-4 border rounded-md border-gray-300 mb-4",e?r[e]:""),children:["Current theme: ",e]})]})},play:async({canvas:e,step:s})=>{await s("light",async()=>{const t=e.getByRole("button",{name:"light"});await g.click(t),await m(e.getByText("Current theme: light")).toBeInTheDocument()}),await s("dark",async()=>{const t=e.getByRole("button",{name:"dark"});await g.click(t),await m(e.getByText("Current theme: dark")).toBeInTheDocument()})}},i={tags:["unit"],parameters:n({description:{story:"Falls back to default theme when no theme class is present."}}),decorators:[f(),o({source:y`
                getThemeByClassName({
                    themes: { light: 'not-exist-theme-light', dark: 'not-exist-theme-dark' },
                    defaultTheme: 'dark',
                })
            `})],render:()=>{const e=T({themes:{light:"not-exist-theme-light",dark:"not-exist-theme-dark"},defaultTheme:"dark"});return a.jsx("div",{className:"flex flex-col gap-4",children:a.jsxs("div",{className:"p-4 border rounded-md border-gray-300 mb-4",children:["Current theme: ",e]})})}},u={tags:["source"],parameters:n({source:{code:b}}),decorators:[o()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Get the current theme from document class names.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getThemeByClassName({
                  themes: { light: 'light', dark: 'dark' },
                  defaultTheme: 'dark',
                })
            \`
  })],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<string | undefined>();
    useEffect(() => {
      const theme = getThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        defaultTheme: 'dark'
      });
      setCurrentTheme(theme);
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => {
          setThemeByClassName({
            themes,
            theme
          });
          setCurrentTheme(theme);
        }}>
                            {theme}
                        </Button>)}
                </div>
                <div className="p-4 border rounded-md border-gray-300 mb-4">
                    Current theme: <span data-testid="current-theme">{currentTheme}</span>
                </div>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
    await step('dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
    });
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when class name is not found.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                document.documentElement.classList.remove('light', 'dark')
                getThemeByClassName({ themes, defaultTheme: 'dark' })
            \`
  })],
  loaders: [() => {
    document.documentElement.classList.remove('light', 'dark');
    const theme = getThemeByClassName({
      themes,
      defaultTheme: 'dark'
    });
    return {
      theme
    };
  }],
  render: (_, {
    loaded: {
      theme
    }
  }) => {
    const value = document.documentElement.className;
    return <div className="flex flex-col gap-4">
                <div className="p-4 border rounded-md border-gray-300 mb-4">
                    <p>
                        Current theme:{' '}
                        <span data-testid="current-theme">{theme === undefined ? '(undefined)' : theme}</span>
                    </p>
                    <p>Class name: {value === '' ? '(empty)' : value}</p>
                </div>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme from a specific element.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`getThemeByClassName({ themes, defaultTheme: 'dark', element: myElement })\`
  })],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<string | undefined>();
    const customElementRef = useRef<HTMLDivElement>(null);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => {
          setThemeByClassName({
            themes,
            theme,
            element: customElementRef.current ?? undefined
          });
          setCurrentTheme(theme);
        }}>
                            {theme}
                        </Button>)}
                </div>
                <div ref={customElementRef} className={twMerge('p-4 border rounded-md border-gray-300 mb-4', currentTheme ? themes[currentTheme as keyof typeof themes] as any : '')}>
                    Current theme: {currentTheme}
                </div>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByText('Current theme: light')).toBeInTheDocument();
    });
    await step('dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByText('Current theme: dark')).toBeInTheDocument();
    });
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when no theme class is present.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getThemeByClassName({
                    themes: { light: 'not-exist-theme-light', dark: 'not-exist-theme-dark' },
                    defaultTheme: 'dark',
                })
            \`
  })],
  render: () => {
    const theme = getThemeByClassName({
      themes: {
        light: 'not-exist-theme-light',
        dark: 'not-exist-theme-dark'
      },
      defaultTheme: 'dark'
    });
    return <div className="flex flex-col gap-4">
                <div className="p-4 border rounded-md border-gray-300 mb-4">Current theme: {theme}</div>
            </div>;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}};const _=["BasicUsage","DefaultTheme","CustomElement","InvalidTheme","Source"];export{d as BasicUsage,h as CustomElement,l as DefaultTheme,i as InvalidTheme,u as Source,_ as __namedExportsOrder,P as default};
