import{j as e,d as y,w as g,s as p,S as b,r as c}from"./iframe-Pea2t46H.js";import{d as T}from"./dedent-BuYMbVyj.js";import{s as x}from"./set-theme-by-data-attribute-BjtqI3I8.js";import{u as v}from"./use-attribute-vVp7niL5.js";import{B as f}from"./button-DdV3GaD2.js";import"./preload-helper-PPVm8Dsz.js";import"./data-attribute-theme-store-Zjn-v2eS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CdAgLf4m.js";const j=`import { dataAttributeThemeStore } from './data-attribute-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Sets the theme by applying the theme's value to a data attribute on an element.
 *
 * If the theme key exists in the themes map, sets the attribute to that value.
 * Otherwise removes the attribute.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.theme - Theme key to apply
 * @param options.attributeName - Name of the data attribute to set (must start with 'data-')
 * @param options.element - Element to set the attribute on (defaults to document.documentElement)
 *
 * @example
 * \`\`\`ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark'
 * }
 *
 * // Set theme on document.documentElement
 * setThemeByDataAttribute({
 *   themes,
 *   theme: 'dark',
 *   attributeName: 'data-theme'
 * })
 *
 * // Set theme on specific element
 * setThemeByDataAttribute({
 *   themes,
 *   theme: 'light',
 *   attributeName: 'data-theme',
 *   element: myElement
 * })
 * \`\`\`
 */
export function setThemeByDataAttribute<Themes extends ThemeMap>(options: {
	attributeName: \`data-\${string}\`
	element?: Element | null | undefined
	theme: keyof Themes
	themes: Themes
}): void {
	const store = dataAttributeThemeStore<Themes>(options.attributeName, options.element)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
`,{expect:r,userEvent:o}=__STORYBOOK_MODULE_TEST__,P={title:"theme/setThemeByDataAttribute",tags:["func","version:next"],parameters:y({description:{component:"A utility that sets the theme by applying the theme's value to a data attribute on an element."}}),render:()=>e.jsx(e.Fragment,{})},u={light:"light",dark:"dark"},m="data-theme",i={tags:["use-case"],decorators:[g({content:e.jsxs("p",{children:[e.jsx("code",{children:"setThemeByDataAttribute"})," by default sets the theme on"," ",e.jsx("code",{children:"document.documentElement"}),"."]})}),p({source:T`
                setThemeByDataAttribute({
                    attributeName: 'data-theme',
                    themes: { light: 'light', dark: 'dark' },
                    theme: ${"<value>"},
                })
            `})],render:()=>{const[t]=v(m);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:Object.keys(u).map(a=>e.jsx(f,{onPress:()=>{x({themes:u,theme:a,attributeName:m})},children:a},a))}),e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:t??"(none)"})]}),e.jsx(b,{title:"document.documentElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("dark")})}},d={tags:["use-case"],decorators:[g({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When a theme value is an array, only the ",e.jsx("strong",{children:"first"})," value is used for the data attribute."]}),e.jsx("p",{children:"The rest of the values are ignored."})]})}),p({source:T`
                setThemeByDataAttribute({
                    attributeName: 'data-theme',
                    themes: {
                        light: ['light', 'app:text-gray-100', 'app:bg-gray-800'],
                        dark: ['dark', 'app:text-gray-800', 'app:bg-gray-100'],
                    },
                    theme: ${"<value>"}
                })
            `})],render:()=>{const[t]=v(m),a={light:["light","app:text-gray-100","app:bg-gray-800"],dark:["dark","app:text-gray-800","app:bg-gray-100"]};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:Object.keys(a).map(n=>e.jsx(f,{onPress:()=>{x({themes:a,theme:n,attributeName:m})},children:n},n))}),e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:t??"(none)"})]}),e.jsx(b,{title:"document.documentElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("dark")})}},h={tags:["use-case"],parameters:{...y({description:{story:"Set theme on a specific element via the element option."}})},decorators:[g({content:e.jsxs("p",{children:["The data attribute is set on the target div below instead of"," ",e.jsx("code",{children:"document.documentElement"}),"."]})}),p({source:T`setThemeByDataAttribute({
                attributeName: 'data-theme',
                element: myElement,
                themes: { light: 'light', dark: 'dark' },
                theme: ${"<value>"}
            })`})],render:()=>{const t=c.useRef(null),[a,n]=c.useState(null),[k,E]=c.useState(null),w=c.useCallback(s=>{t.current=s,n(s)},[]),[A]=v(m,a??void 0);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:Object.keys(u).map(s=>e.jsx(f,{onPress:()=>{const B=t.current;B&&(x({themes:u,theme:s,attributeName:m,element:B}),E(s))},children:s},s))}),e.jsx("div",{ref:w,className:"min-h-8 rounded border border-gray-300 p-2",children:k!==null&&e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:k})]})}),e.jsx(b,{title:"customElement.getAttribute('data-theme')",appearance:"output",children:e.jsx("code",{children:A??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const n=t.getByRole("button",{name:"light"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("dark",async()=>{const n=t.getByRole("button",{name:"dark"});await o.click(n),await r(t.getByTestId("current-theme")).toHaveTextContent("dark")})}},l={tags:["source"],parameters:y({source:{code:j}}),decorators:[p()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    <code>setThemeByDataAttribute</code> by default sets the theme on{' '}
                    <code>document.documentElement</code>.
                </p>
  }), showSource({
    source: dedent\`
                setThemeByDataAttribute({
                    attributeName: 'data-theme',
                    themes: { light: 'light', dark: 'dark' },
                    theme: \${'<value>'},
                })
            \`
  })],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => {
          setThemeByDataAttribute({
            themes,
            theme,
            attributeName: ATTRIBUTE_NAME
          });
        }}>
                            {theme}
                        </Button>)}
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When a theme value is an array, only the <strong>first</strong> value is used for the
                        data attribute.
                    </p>
                    <p>The rest of the values are ignored.</p>
                </>
  }), showSource({
    source: dedent\`
                setThemeByDataAttribute({
                    attributeName: 'data-theme',
                    themes: {
                        light: ['light', 'app:text-gray-100', 'app:bg-gray-800'],
                        dark: ['dark', 'app:text-gray-800', 'app:bg-gray-100'],
                    },
                    theme: \${'<value>'}
                })
            \`
  })],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    const themesWithArrays = {
      light: ['light', 'app:text-gray-100', 'app:bg-gray-800'],
      dark: ['dark', 'app:text-gray-800', 'app:bg-gray-100']
    } as const;
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themesWithArrays) as (keyof typeof themesWithArrays)[]).map(theme => <Button key={theme} onPress={() => {
          setThemeByDataAttribute({
            themes: themesWithArrays,
            theme,
            attributeName: ATTRIBUTE_NAME
          });
        }}>
                            {theme}
                        </Button>)}
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Set theme on a specific element via the element option.'
      }
    })
  },
  decorators: [withStoryCard({
    content: <p>
                    The data attribute is set on the target div below instead of{' '}
                    <code>document.documentElement</code>.
                </p>
  }), showSource({
    source: dedent\`setThemeByDataAttribute({
                attributeName: 'data-theme',
                element: myElement,
                themes: { light: 'light', dark: 'dark' },
                theme: \${'<value>'}
            })\`
  })],
  render: () => {
    const customElementRef = useRef<HTMLDivElement>(null);
    const [customElement, setCustomElement] = useState<HTMLDivElement | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes | null>(null);
    const setRef = useCallback((el: HTMLDivElement | null) => {
      customElementRef.current = el;
      setCustomElement(el);
    }, []);
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME, customElement ?? undefined);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themes) as (keyof typeof themes)[]).map(theme => <Button key={theme} onPress={() => {
          const el = customElementRef.current;
          if (el) {
            setThemeByDataAttribute({
              themes,
              theme,
              attributeName: ATTRIBUTE_NAME,
              element: el
            });
            setSelectedTheme(theme);
          }
        }}>
                            {theme}
                        </Button>)}
                </div>
                <div ref={setRef} className="min-h-8 rounded border border-gray-300 p-2">
                    {selectedTheme !== null && <span>
                            Current theme: <span data-testid="current-theme">{selectedTheme}</span>
                        </span>}
                </div>
                <StoryCard title="customElement.getAttribute('data-theme')" appearance="output">
                    <code>{dataTheme ?? '(not set)'}</code>
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
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...l.parameters?.docs?.source}}};const $=["BasicUsage","WithThemeArray","WithCustomElement","Source"];export{i as BasicUsage,l as Source,h as WithCustomElement,d as WithThemeArray,$ as __namedExportsOrder,P as default};
