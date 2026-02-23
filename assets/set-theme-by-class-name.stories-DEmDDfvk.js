import{j as e,d as u,w as p,s as h,S as y,r as c}from"./iframe-DpiIn1Pa.js";import{d as g}from"./dedent-BuYMbVyj.js";import{s as x}from"./set-theme-by-class-name-Bavj7Osw.js";import{u as k}from"./use-attribute-av9Vq1Nf.js";import{B as v}from"./button-DwHF6N6V.js";import"./preload-helper-PPVm8Dsz.js";import"./class-name-theme-store-IC1hzE--.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-BZZwGHNT.js";import"./resolve-class-name-ma8rMboq.js";const w=`import { classNameThemeStore } from './class-name-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Sets the theme by applying the theme's class name(s) to an element.
 *
 * Removes all theme-related classes from the element, then adds the classes
 * for the given theme key.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Theme key to apply
 * @param options.element - Element to set classes on (defaults to document.documentElement)
 *
 * @example
 * \`\`\`ts
 * const themes = {
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * }
 *
 * // Set theme on document.documentElement
 * setThemeByClassName({
 *   themes,
 *   theme: 'dark'
 * })
 *
 * // Set theme on specific element
 * setThemeByClassName({
 *   themes,
 *   theme: 'light',
 *   element: myElement
 * })
 * \`\`\`
 */
export function setThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	theme: keyof Themes
	element?: Element | null | undefined
}): void {
	const store = classNameThemeStore<Themes>(options.element)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
`,{expect:r,userEvent:o}=__STORYBOOK_MODULE_TEST__,_={title:"theme/setThemeByClassName",tags:["func","version:next"],parameters:u({description:{component:"A utility that sets the theme by applying the theme's class name(s) to an element, removing other theme classes first."}}),render:()=>e.jsx(e.Fragment,{})},l={tags:["use-case"],decorators:[p({content:e.jsxs("p",{children:[e.jsx("code",{children:"setThemeByClassName"})," by default sets the theme on"," ",e.jsx("code",{children:"document.documentElement"}),"."]})}),h({source:g`
                setThemeByClassName({
                    themes: { light: 'your-light-class', dark: 'your-dark-class' },
                    theme: ${"<value>"}
                })
            `})],render:()=>{const[t]=k("class");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:["light","dark"].map(a=>e.jsx(v,{onPress:()=>{x({themes:{light:"your-light-class",dark:"your-dark-class"},theme:a})},children:a},a))}),e.jsx(y,{title:"document.documentElement.className",appearance:"output",children:e.jsx("code",{"data-testid":"class-name",children:t})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const s=t.getByRole("button",{name:"light"});await o.click(s),await r(t.getByTestId("class-name")).toHaveTextContent("your-light-class")}),await a("dark",async()=>{const s=t.getByRole("button",{name:"dark"});await o.click(s),await r(t.getByTestId("class-name")).toHaveTextContent("your-dark-class")})}},m={tags:["use-case"],decorators:[p({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["When a theme value is an array, ",e.jsx("strong",{children:"all"})," values are applied as class names."]})})}),h({source:g`
                setThemeByClassName({
                    themes: {
                        light: ['your-light-class', 'app:text-gray-100', 'app:bg-gray-800'],
                        dark: ['your-dark-class', 'app:text-gray-800', 'app:bg-gray-100'],
                    },
                    theme: ${"<value>"}
                })
            `})],render:()=>{const[t]=k("class"),a={light:["your-light-class","app:text-gray-100","app:bg-gray-800"],dark:["your-dark-class","app:text-gray-800","app:bg-gray-100"]};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:Object.keys(a).map(s=>e.jsx(v,{onPress:()=>{x({themes:a,theme:s})},children:s},s))}),e.jsx(y,{title:"document.documentElement.className",appearance:"output",children:e.jsx("code",{"data-testid":"class-name",children:t})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const s=t.getByRole("button",{name:"light"});await o.click(s),await r(t.getByTestId("class-name")).toHaveTextContent("your-light-class app:text-gray-100 app:bg-gray-800")}),await a("dark",async()=>{const s=t.getByRole("button",{name:"dark"});await o.click(s),await r(t.getByTestId("class-name")).toHaveTextContent("your-dark-class app:text-gray-800 app:bg-gray-100")})}},i={tags:["use-case"],parameters:{...u({description:{story:"Set theme on a specific element via the element option."}})},decorators:[p({content:e.jsxs("p",{children:["Theme classes are applied to the target div below instead of"," ",e.jsx("code",{children:"document.documentElement"}),"."]})}),h({source:g`setThemeByClassName({
                themes: { light: 'your-light-class', dark: 'your-dark-class' },
                theme: ${"<value>"},
                element: myElement,
            })`})],render:()=>{const t=c.useRef(null),[a,s]=c.useState(null),[T,b]=c.useState(null),B=c.useCallback(n=>{t.current=n,s(n)},[]),[C]=k("class",a??void 0);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-2",children:["light","dark"].map(n=>e.jsx(v,{onPress:()=>{const f=t.current;f&&(x({themes:{light:"your-light-class",dark:"your-dark-class"},theme:n,element:f}),b(n))},children:n},n))}),e.jsx("div",{ref:B,className:"min-h-8 rounded border border-gray-300 p-2",children:T!==null&&e.jsxs("span",{children:["Current theme: ",e.jsx("span",{"data-testid":"current-theme",children:T})]})}),e.jsx(y,{title:"customElement.className",appearance:"output",children:e.jsx("code",{children:C})})]})},play:async({canvas:t,step:a})=>{await a("light",async()=>{const s=t.getByRole("button",{name:"light"});await o.click(s),await r(t.getByTestId("current-theme")).toHaveTextContent("light")}),await a("dark",async()=>{const s=t.getByRole("button",{name:"dark"});await o.click(s),await r(t.getByTestId("current-theme")).toHaveTextContent("dark")})}},d={tags:["source"],parameters:u({source:{code:w}}),decorators:[h()]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    <code>setThemeByClassName</code> by default sets the theme on{' '}
                    <code>document.documentElement</code>.
                </p>
  }), showSource({
    source: dedent\`
                setThemeByClassName({
                    themes: { light: 'your-light-class', dark: 'your-dark-class' },
                    theme: \${'<value>'}
                })
            \`
  })],
  render: () => {
    const [className] = useAttribute('class');
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(['light', 'dark'] as const).map(theme => <Button key={theme} onPress={() => {
          setThemeByClassName({
            themes: {
              light: 'your-light-class',
              dark: 'your-dark-class'
            },
            theme
          });
        }}>
                            {theme}
                        </Button>)}
                </div>
                <StoryCard title="document.documentElement.className" appearance="output">
                    <code data-testid="class-name">{className}</code>
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
      await expect(canvas.getByTestId('class-name')).toHaveTextContent('your-light-class');
    });
    await step('dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('class-name')).toHaveTextContent('your-dark-class');
    });
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When a theme value is an array, <strong>all</strong> values are applied as class names.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                setThemeByClassName({
                    themes: {
                        light: ['your-light-class', 'app:text-gray-100', 'app:bg-gray-800'],
                        dark: ['your-dark-class', 'app:text-gray-800', 'app:bg-gray-100'],
                    },
                    theme: \${'<value>'}
                })
            \`
  })],
  render: () => {
    const [className] = useAttribute('class');
    const themesWithArrays = {
      light: ['your-light-class', 'app:text-gray-100', 'app:bg-gray-800'],
      dark: ['your-dark-class', 'app:text-gray-800', 'app:bg-gray-100']
    } as const;
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(Object.keys(themesWithArrays) as (keyof typeof themesWithArrays)[]).map(theme => <Button key={theme} onPress={() => {
          setThemeByClassName({
            themes: themesWithArrays,
            theme
          });
        }}>
                            {theme}
                        </Button>)}
                </div>
                <StoryCard title="document.documentElement.className" appearance="output">
                    <code data-testid="class-name">{className}</code>
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
      await expect(canvas.getByTestId('class-name')).toHaveTextContent('your-light-class app:text-gray-100 app:bg-gray-800');
    });
    await step('dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByTestId('class-name')).toHaveTextContent('your-dark-class app:text-gray-800 app:bg-gray-100');
    });
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                    Theme classes are applied to the target div below instead of{' '}
                    <code>document.documentElement</code>.
                </p>
  }), showSource({
    source: dedent\`setThemeByClassName({
                themes: { light: 'your-light-class', dark: 'your-dark-class' },
                theme: \${'<value>'},
                element: myElement,
            })\`
  })],
  render: () => {
    const customElementRef = useRef<HTMLDivElement>(null);
    const [customElement, setCustomElement] = useState<HTMLDivElement | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | null>(null);
    const setRef = useCallback((el: HTMLDivElement | null) => {
      customElementRef.current = el;
      setCustomElement(el);
    }, []);
    const [className] = useAttribute('class', customElement ?? undefined);
    return <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {(['light', 'dark'] as const).map(theme => <Button key={theme} onPress={() => {
          const el = customElementRef.current;
          if (el) {
            setThemeByClassName({
              themes: {
                light: 'your-light-class',
                dark: 'your-dark-class'
              },
              theme,
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
                <StoryCard title="customElement.className" appearance="output">
                    <code>{className}</code>
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
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...d.parameters?.docs?.source}}};const D=["BasicUsage","WithThemeArray","WithCustomElement","Source"];export{l as BasicUsage,d as Source,i as WithCustomElement,m as WithThemeArray,D as __namedExportsOrder,_ as default};
