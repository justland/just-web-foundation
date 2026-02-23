import{j as e,d as v,w as f,s as T,r as o,S as m}from"./iframe-DMM-er1z.js";import{d as k}from"./dedent-BuYMbVyj.js";import{o as x}from"./observe-theme-by-class-name-0VpHRYtw.js";import{s as w}from"./set-theme-by-class-name-BC2y_ikC.js";import{u as C}from"./use-attribute-DGHYe84H.js";import{B as g}from"./button-DdvamnXn.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-class-name-kQ6qcblf.js";const B=`import { observeAttributes } from '../attributes/observe-attribute.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Observes changes to element class names and calls a handler when the theme (based on class) changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.handler - Callback called with the current theme key or default when class is cleared
 * @param options.defaultTheme - Fallback theme key when no matching class is found
 * @param options.element - Element to observe (defaults to document.documentElement)
 * @returns The same return as observeAttributes (disconnect to stop observing)
 *
 * @example
 * \`\`\`ts
 * const observer = observeThemeByClassName({
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   handler: (theme) => console.log('Theme:', theme),
 *   defaultTheme: 'light',
 * })
 * observer.disconnect()
 * \`\`\`
 */
export function observeThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	handler: (value: string | undefined) => void
	defaultTheme?: (keyof Themes | (string & {})) | undefined
	element?: Element | null | undefined
}) {
	return observeAttributes(
		{
			class: (value: string | null) => {
				if (value === null) {
					options.handler(options.defaultTheme as string)
					return
				}

				for (const name in options.themes) {
					const themeValue = options.themes[name]
					if (
						themeValue &&
						value.includes(Array.isArray(themeValue) ? themeValue[0] : themeValue)
					) {
						options.handler(name)
						return
					}
				}
				options.handler(options.defaultTheme as string)
			},
		},
		options.element,
	)
}
`,{expect:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,y={light:["your-light-class","app:text-black","app:bg-white"],dark:["your-dark-class","app:text-white","app:bg-black"]},d={light:"your-light-class",dark:"your-dark-class"},W={title:"theme/observeThemeByClassName",tags:["func","version:next"],parameters:v({description:{component:"Observes element class changes and invokes a handler when the theme (by class) changes."}}),render:()=>e.jsx(e.Fragment,{})},i={tags:["use-case"],decorators:[f({content:e.jsxs("p",{children:["Observe theme changes on ",e.jsx("code",{children:"document.documentElement.className"}),"."]})}),T({source:k`
                observeThemeByClassName({
                  themes: { light: 'your-light-class', dark: 'your-dark-class' },
                  handler: (value) => setTheme(value)
                })
            `})],render:()=>{const[t,s]=o.useState(),[a,r]=o.useState();return o.useEffect(()=>{const n=x({themes:{light:"your-light-class",dark:"your-dark-class"},handler:b=>{s(b),r(document.documentElement.className)}});return()=>n.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:Object.keys(d).map(n=>e.jsx(g,{onPress:()=>w({themes:d,theme:n}),children:n},n))}),e.jsx(m,{title:"Theme",appearance:"output",children:e.jsx("code",{"data-testid":"theme",children:t??"(empty)"})}),e.jsx(m,{title:"documentElement.className",appearance:"output",children:e.jsx("code",{"data-testid":"document-class-name",children:a??"(empty)"})})]})},play:async({canvas:t,step:s})=>{await s("(empty) -> light",async()=>{const a=t.getByRole("button",{name:"light"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("light")}),await s("light -> dark",async()=>{const a=t.getByRole("button",{name:"dark"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("dark")})}},h={tags:["use-case"],parameters:v({description:{story:"Theme keys can map to different class values (e.g. your-light-theme, your-dark-theme)."}}),decorators:[f({content:e.jsxs("p",{children:["When a theme value is an array, only the ",e.jsx("strong",{children:"first"})," value is used to determine the theme."]})}),T({source:k`
                observeThemeByClassName({
                    themes: {
                        light: ['your-light-class', 'app:text-black', 'app:bg-white'],
                        dark: ['your-dark-class', 'app:text-white', 'app:bg-black'],
                    },
                    handler: (value) => setTheme(value),
                })
            `})],render:()=>{const[t,s]=o.useState(),[a,r]=o.useState();return o.useEffect(()=>{const n=x({themes:y,handler:b=>{s(b),r(document.documentElement.className)}});return()=>n.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:Object.keys(y).map(n=>e.jsx(g,{onPress:()=>w({themes:y,theme:n}),children:n},n))}),e.jsx(m,{title:"Theme",appearance:"output",children:e.jsx("code",{"data-testid":"theme",children:t??"(empty)"})}),e.jsx(m,{title:"documentElement.className",appearance:"output",children:e.jsx("code",{"data-testid":"document-class-name",children:a??"(empty)"})})]})},play:async({canvas:t,step:s})=>{await s("(empty) -> light",async()=>{const a=t.getByRole("button",{name:"light"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("light")}),await s("light -> dark",async()=>{const a=t.getByRole("button",{name:"dark"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("dark")})}},u={name:"With defaultTheme",tags:["use-case"],parameters:v({description:{story:"When class is cleared, handler receives defaultTheme instead of undefined."}}),decorators:[f(),T({source:k`
                observeThemeByClassName({
                  themes: { light: 'your-light-class', dark: 'your-dark-class' },
                  handler: (value) => setTheme(value),
                  defaultTheme: 'light',
                })
            `})],render:()=>{const[t,s]=o.useState(),[a]=C("class");return o.useEffect(()=>{const r=x({defaultTheme:"unset",themes:d,handler:n=>{s(n)}});return()=>r.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[Object.keys(y).map(r=>e.jsx(g,{onPress:()=>w({themes:d,theme:r}),children:r},r)),e.jsx(g,{onPress:()=>{document.documentElement.classList.remove(...Object.values(d))},children:"Clear"})]}),e.jsx(m,{title:"Theme",appearance:"output",children:e.jsx("code",{"data-testid":"theme",children:t??"(empty)"})}),e.jsx(m,{title:"documentElement.className",appearance:"output",children:e.jsx("code",{"data-testid":"document-class-name",children:a??"(empty)"})})]})},play:async({canvas:t,step:s})=>{await s("(empty) -> light",async()=>{const a=t.getByRole("button",{name:"light"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("light")}),await s("light -> dark",async()=>{const a=t.getByRole("button",{name:"dark"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("dark")}),await s("dark -> unset (defaultTheme)",async()=>{const a=t.getByRole("button",{name:"Clear"});await l.click(a),await c(t.getByTestId("theme")).toHaveTextContent("unset")})}},p={tags:["source"],parameters:v({source:{code:B}}),decorators:[T()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Observe theme changes on <code>document.documentElement.className</code>.
                </p>
  }), showSource({
    source: dedent\`
                observeThemeByClassName({
                  themes: { light: 'your-light-class', dark: 'your-dark-class' },
                  handler: (value) => setTheme(value)
                })
            \`
  })],
  render: () => {
    const [theme, setTheme] = useState<string>();
    const [className, setClassName] = useState<string>();
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'your-light-class',
          dark: 'your-dark-class'
        },
        handler: value => {
          setTheme(value);
          setClassName(document.documentElement.className);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(classThemes) as (keyof typeof classThemes)[]).map(theme => <Button key={theme} onPress={() => setThemeByClassName({
          themes: classThemes,
          theme
        })}>
                            {theme}
                        </Button>)}
                </div>
                <StoryCard title="Theme" appearance="output">
                    <code data-testid="theme">{theme ?? '(empty)'}</code>
                </StoryCard>
                <StoryCard title="documentElement.className" appearance="output">
                    <code data-testid="document-class-name">{className ?? '(empty)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('(empty) -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('light');
    });
    await step('light -> dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('dark');
    });
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Theme keys can map to different class values (e.g. your-light-theme, your-dark-theme).'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    When a theme value is an array, only the <strong>first</strong> value is used to determine
                    the theme.
                </p>
  }), showSource({
    source: dedent\`
                observeThemeByClassName({
                    themes: {
                        light: ['your-light-class', 'app:text-black', 'app:bg-white'],
                        dark: ['your-dark-class', 'app:text-white', 'app:bg-black'],
                    },
                    handler: (value) => setTheme(value),
                })
            \`
  })],
  render: () => {
    const [theme, setTheme] = useState<string>();
    const [className, setClassName] = useState<string>();
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: themes,
        handler: value => {
          setTheme(value);
          setClassName(document.documentElement.className);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(t => <Button key={t} onPress={() => setThemeByClassName({
          themes,
          theme: t
        })}>
                            {t}
                        </Button>)}
                </div>
                <StoryCard title="Theme" appearance="output">
                    <code data-testid="theme">{theme ?? '(empty)'}</code>
                </StoryCard>
                <StoryCard title="documentElement.className" appearance="output">
                    <code data-testid="document-class-name">{className ?? '(empty)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('(empty) -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('light');
    });
    await step('light -> dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('dark');
    });
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With defaultTheme',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'When class is cleared, handler receives defaultTheme instead of undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                observeThemeByClassName({
                  themes: { light: 'your-light-class', dark: 'your-dark-class' },
                  handler: (value) => setTheme(value),
                  defaultTheme: 'light',
                })
            \`
  })],
  render: () => {
    const [theme, setTheme] = useState<string>();
    const [className] = useAttribute('class');
    useEffect(() => {
      const observer = observeThemeByClassName({
        defaultTheme: 'unset',
        themes: classThemes,
        handler: value => {
          setTheme(value);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(t => <Button key={t} onPress={() => setThemeByClassName({
          themes: classThemes,
          theme: t
        })}>
                            {t}
                        </Button>)}
                    <Button onPress={() => {
          document.documentElement.classList.remove(...Object.values(classThemes));
        }}>
                        Clear
                    </Button>
                </div>
                <StoryCard title="Theme" appearance="output">
                    <code data-testid="theme">{theme ?? '(empty)'}</code>
                </StoryCard>
                <StoryCard title="documentElement.className" appearance="output">
                    <code data-testid="document-class-name">{className ?? '(empty)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('(empty) -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('light');
    });
    await step('light -> dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('dark');
    });
    await step('dark -> unset (defaultTheme)', async () => {
      const btn = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('theme')).toHaveTextContent('unset');
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const A=["BasicUsage","WithThemeArray","WithDefaultTheme","Source"];export{i as BasicUsage,p as Source,u as WithDefaultTheme,h as WithThemeArray,A as __namedExportsOrder,W as default};
