import{j as e,d,w as u,s as k,r as l,S as h}from"./iframe-Pea2t46H.js";import{d as E}from"./dedent-BuYMbVyj.js";import{o as p}from"./observe-theme-by-data-attributes-Cz_VKwIp.js";import{s as b}from"./set-theme-by-data-attribute-BjtqI3I8.js";import{u as g}from"./use-attribute-vVp7niL5.js";import{B as c}from"./button-DdV3GaD2.js";import"./preload-helper-PPVm8Dsz.js";import"./data-attribute-theme-store-Zjn-v2eS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CdAgLf4m.js";const N=`import { dataAttributeThemeStore } from './data-attribute-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Observes changes to a theme data attribute and calls a handler when it changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.handler - Callback function called with the new theme value or null when removed
 * @param options.defaultTheme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to observe (must start with 'data-')
 * @returns An object with disconnect() to stop observing
 *
 * @example
 * \`\`\`ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark'
 * }
 *
 * // Observe data-theme attribute changes
 * const observer = observeThemeByDataAttributes({
 *   themes,
 *   handler: (theme) => console.log('Theme changed to:', theme),
 *   defaultTheme: 'light',
 *   attributeName: 'data-theme'
 * })
 *
 * // Stop observing
 * observer.disconnect()
 * \`\`\`
 */
export function observeThemeByDataAttributes<Themes extends ThemeMap>(options: {
	attributeName: \`data-\${string}\`
	themes: Themes
	handler: (value: string | null) => void
	allowCustom?: true | undefined
	defaultTheme?: string | undefined
	element?: Element | undefined
}): { disconnect: () => void } {
	const store = dataAttributeThemeStore<Themes>(options.attributeName, options.element)
	return store.subscribe({
		themes: options.themes,
		defaultTheme: options.defaultTheme,
		allowCustom: options.allowCustom,
		handler: options.handler,
	})
}
`,{expect:r,userEvent:o}=__STORYBOOK_MODULE_TEST__,$={title:"theme/observeThemeByDataAttributes",tags:["func","version:next"],parameters:d({description:{component:"Observes a data attribute (e.g. data-theme) and invokes a handler when the theme value changes."}}),render:()=>e.jsx(e.Fragment,{})},m={light:"light",dark:"dark"},s="data-theme",v={tags:["use-case"],parameters:d({description:{story:"Observe theme changes when data-theme attribute is toggled."}}),decorators:[u(),k({source:E`
                observeThemeByDataAttributes({
                  attributeName: 'data-theme',
                  themes: { light: 'light', dark: 'dark' },
                  handler: (value) => setLog(prev => [...prev, \`data-theme: \${value}\`]),
                })
            `})],render:()=>{const[t]=g(s);return l.useEffect(()=>{const a=p({attributeName:s,themes:m,handler:()=>{}});return()=>a.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[Object.keys(m).map(a=>e.jsx(c,{onPress:()=>b({attributeName:s,themes:m,theme:a}),children:a},a)),e.jsx(c,{onPress:()=>document.documentElement.removeAttribute(s),children:"Clear"})]}),e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:t??"(none)"})]}),e.jsx(h,{title:"document.documentElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("null -> light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("light -> dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("dark")}),await a("dark -> null",async()=>{const n=t.getByRole("button",{name:"Clear"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("(none)")})}},y={tags:["use-case"],parameters:d({description:{story:"Theme keys can map to different attribute values (e.g. light-theme, dark-theme)."}}),decorators:[u()],render:()=>{const[t]=g(s),a={light:"light-theme",dark:"dark-theme"};return l.useEffect(()=>{const n=p({attributeName:s,themes:a,handler:()=>{}});return()=>n.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[Object.keys(a).map(n=>e.jsx(c,{onPress:()=>b({attributeName:s,themes:a,theme:n}),children:n},n)),e.jsx(c,{onPress:()=>document.documentElement.removeAttribute(s),children:"Clear"})]}),e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:t??"(none)"})]}),e.jsx(h,{title:"document.documentElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("null -> light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light-theme")}),await a("light -> dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("dark-theme")}),await a("dark -> null",async()=>{const n=t.getByRole("button",{name:"Clear"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("(none)")})}},f={name:"With defaultTheme",tags:["use-case"],parameters:d({description:{story:"When attribute is removed, handler receives defaultTheme instead of null."}}),decorators:[u()],render:()=>{const[t]=g(s);return l.useEffect(()=>{const a=p({attributeName:s,themes:m,handler:()=>{},defaultTheme:"light"});return()=>a.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[Object.keys(m).map(a=>e.jsx(c,{onPress:()=>b({attributeName:s,themes:m,theme:a}),children:a},a)),e.jsx(c,{onPress:()=>document.documentElement.removeAttribute(s),children:"Clear"})]}),e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:t??"(none)"})]}),e.jsx(h,{title:"document.documentElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("null -> light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("light -> dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("dark")}),await a("dark -> (not set)",async()=>{const n=t.getByRole("button",{name:"Clear"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("(none)")})}},x={name:"With allowCustom",tags:["use-case"],parameters:d({description:{story:"Observe theme with allowCustom: unknown attribute values are passed to the handler as-is."}}),decorators:[u({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["With ",e.jsx("code",{children:"allowCustom: true"}),", any attribute value is passed through: known themes are still normalized to their key, but unknown values are passed as-is (e.g."," ",e.jsx("code",{children:"custom"}),", ",e.jsx("code",{children:"brand-blue"}),")."]})})}),k({source:E`
                observeThemeByDataAttributes({
                  attributeName: 'data-theme',
                  themes: { light: 'light', dark: 'dark' },
                  allowCustom: true,
                  handler: (value) => setLog(prev => [...prev, \`data-theme: \${value}\`]),
                })
            `})],render:()=>{const[t]=g(s);return l.useEffect(()=>{const a=p({attributeName:s,themes:{light:"light",dark:"dark"},handler:()=>{},allowCustom:!0});return()=>a.disconnect()},[]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{onPress:()=>b({attributeName:s,themes:{light:"light",dark:"dark"},theme:"light"}),children:"light"}),e.jsx(c,{onPress:()=>document.documentElement.setAttribute(s,"custom"),children:"custom"}),e.jsx(c,{onPress:()=>document.documentElement.removeAttribute(s),children:"Clear"})]}),e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:t??"(none)"})]}),e.jsx(h,{title:"document.documentElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("null -> light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("light -> custom",async()=>{const n=t.getByRole("button",{name:"custom"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("custom")})}},w={tags:["use-case"],parameters:d({description:{story:"Observe theme on a specific element via the element option."}}),decorators:[u({content:e.jsxs("p",{children:["The data attribute is observed on the target div below instead of"," ",e.jsx("code",{children:"document.documentElement"}),"."]})}),k({source:E`observeThemeByDataAttributes({
                attributeName: 'data-theme',
                themes: { light: 'light', dark: 'dark' },
                handler: (value) => ...,
                element: myElement,
            })`})],render:()=>{const t=l.useRef(null),[a,n]=l.useState(null),A=l.useCallback(i=>{t.current=i,n(i)},[]),[C]=g(s,a??void 0);return l.useEffect(()=>{const i=t.current;if(!i)return;const T=p({attributeName:s,themes:m,handler:()=>{},element:i});return()=>T.disconnect()},[a]),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[Object.keys(m).map(i=>e.jsx(c,{onPress:()=>{const T=t.current;T&&b({attributeName:s,themes:m,theme:i,element:T})},children:i},i)),e.jsx(c,{onPress:()=>t.current?.removeAttribute(s),children:"Clear"})]}),e.jsx("div",{ref:A,className:"min-h-8 rounded border border-gray-300 p-2"}),e.jsx(h,{title:"customElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{"data-testid":"element-data-theme",children:C??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("element-data-theme")).toHaveTextContent("light")}),await a("dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("element-data-theme")).toHaveTextContent("dark")})}},B={tags:["source"],parameters:d({source:{code:N}}),decorators:[k()]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe theme changes when data-theme attribute is toggled.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                observeThemeByDataAttributes({
                  attributeName: 'data-theme',
                  themes: { light: 'light', dark: 'dark' },
                  handler: (value) => setLog(prev => [...prev, \\\`data-theme: \\\${value}\\\`]),
                })
            \`
  })],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        attributeName: ATTRIBUTE_NAME,
        themes,
        handler: () => {}
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => setThemeByDataAttribute({
          attributeName: ATTRIBUTE_NAME,
          themes,
          theme
        })}>
                            {theme}
                        </Button>)}
                    <Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
                        Clear
                    </Button>
                </div>
                <span>
                    Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
                </span>
                <StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
                    <code>{dataTheme ?? '(not set)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('null -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
    await step('light -> dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
    });
    await step('dark -> null', async () => {
      const btn = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('(none)');
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Theme keys can map to different attribute values (e.g. light-theme, dark-theme).'
    }
  }),
  decorators: [withStoryCard()],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    const customThemes = {
      light: 'light-theme',
      dark: 'dark-theme'
    } as const;
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        attributeName: ATTRIBUTE_NAME,
        themes: customThemes,
        handler: () => {}
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(customThemes) as (keyof typeof customThemes)[]).map(theme => <Button key={theme} onPress={() => setThemeByDataAttribute({
          attributeName: ATTRIBUTE_NAME,
          themes: customThemes,
          theme
        })}>
                            {theme}
                        </Button>)}
                    <Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
                        Clear
                    </Button>
                </div>
                <span>
                    Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
                </span>
                <StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
                    <code>{dataTheme ?? '(not set)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('null -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light-theme');
    });
    await step('light -> dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark-theme');
    });
    await step('dark -> null', async () => {
      const btn = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('(none)');
    });
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With defaultTheme',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'When attribute is removed, handler receives defaultTheme instead of null.'
    }
  }),
  decorators: [withStoryCard()],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        attributeName: ATTRIBUTE_NAME,
        themes,
        handler: () => {},
        defaultTheme: 'light'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => setThemeByDataAttribute({
          attributeName: ATTRIBUTE_NAME,
          themes,
          theme
        })}>
                            {theme}
                        </Button>)}
                    <Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
                        Clear
                    </Button>
                </div>
                <span>
                    Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
                </span>
                <StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
                    <code>{dataTheme ?? '(not set)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('null -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
    await step('light -> dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
    });
    await step('dark -> (not set)', async () => {
      const btn = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('(none)');
    });
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With allowCustom',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe theme with allowCustom: unknown attribute values are passed to the handler as-is.'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        With <code>allowCustom: true</code>, any attribute value is passed through: known themes
                        are still normalized to their key, but unknown values are passed as-is (e.g.{' '}
                        <code>custom</code>, <code>brand-blue</code>).
                    </p>
                </>
  }), showSource({
    source: dedent\`
                observeThemeByDataAttributes({
                  attributeName: 'data-theme',
                  themes: { light: 'light', dark: 'dark' },
                  allowCustom: true,
                  handler: (value) => setLog(prev => [...prev, \\\`data-theme: \\\${value}\\\`]),
                })
            \`
  })],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        attributeName: ATTRIBUTE_NAME,
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: () => {},
        allowCustom: true
      });
      return () => observer.disconnect();
    }, []);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <Button onPress={() => setThemeByDataAttribute({
          attributeName: ATTRIBUTE_NAME,
          themes: {
            light: 'light',
            dark: 'dark'
          },
          theme: 'light'
        })}>
                        light
                    </Button>
                    <Button onPress={() => document.documentElement.setAttribute(ATTRIBUTE_NAME, 'custom')}>
                        custom
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
                        Clear
                    </Button>
                </div>
                <span>
                    Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
                </span>
                <StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
                    <code>{dataTheme ?? '(not set)'}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('null -> light', async () => {
      const btn = canvas.getByRole('button', {
        name: 'light'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
    await step('light -> custom', async () => {
      const btn = canvas.getByRole('button', {
        name: 'custom'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('custom');
    });
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe theme on a specific element via the element option.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    The data attribute is observed on the target div below instead of{' '}
                    <code>document.documentElement</code>.
                </p>
  }), showSource({
    source: dedent\`observeThemeByDataAttributes({
                attributeName: 'data-theme',
                themes: { light: 'light', dark: 'dark' },
                handler: (value) => ...,
                element: myElement,
            })\`
  })],
  render: () => {
    const customElementRef = useRef<HTMLDivElement>(null);
    const [customElement, setCustomElement] = useState<HTMLDivElement | null>(null);
    const setRef = useCallback((el: HTMLDivElement | null) => {
      customElementRef.current = el;
      setCustomElement(el);
    }, []);
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME, customElement ?? undefined);
    useEffect(() => {
      const el = customElementRef.current;
      if (!el) return;
      const observer = observeThemeByDataAttributes({
        attributeName: ATTRIBUTE_NAME,
        themes,
        handler: () => {},
        element: el
      });
      return () => observer.disconnect();
    }, [customElement]);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => {
          const el = customElementRef.current;
          if (el) {
            setThemeByDataAttribute({
              attributeName: ATTRIBUTE_NAME,
              themes,
              theme,
              element: el
            });
          }
        }}>
                            {theme}
                        </Button>)}
                    <Button onPress={() => customElementRef.current?.removeAttribute(ATTRIBUTE_NAME)}>
                        Clear
                    </Button>
                </div>
                <div ref={setRef} className="min-h-8 rounded border border-gray-300 p-2" />
                <StoryCard title="customElement.getAttribute('data-theme')" appearance="output">
                    <code data-testid="element-data-theme">{dataTheme ?? '(not set)'}</code>
                </StoryCard>
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
      await expect(canvas.getByTestId('element-data-theme')).toHaveTextContent('light');
    });
    await step('dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('element-data-theme')).toHaveTextContent('dark');
    });
  }
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...B.parameters?.docs?.source}}};const F=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme","WithAllowCustom","WithCustomElement","Source"];export{v as BasicUsage,B as Source,x as WithAllowCustom,w as WithCustomElement,f as WithDefaultTheme,y as WithDifferentAttributeValues,F as __namedExportsOrder,$ as default};
