import{d as o,r as m,j as t}from"./iframe-D4ruu7Wn.js";import{g as p}from"./class-name-DJrTHtyi.js";import{L as x}from"./log-panel-Bt2hpdDK.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DyUhIkyT.js";import"./globals.ctx-DOXvZQDb.js";import"./findKey-D_Zca1Sl.js";const{expect:u,userEvent:T}=__STORYBOOK_MODULE_TEST__,R={title:"theme/getThemeByClassName",tags:["autodocs","new","version:0.1"],parameters:o({description:{component:"A utility function that determines the current theme based on element class name."}})},c={parameters:o({description:{story:"Demonstrates how `getThemeByClassName` gets the current theme based on class names."}}),render:()=>{const[e,a]=m.useState(),s={light:"light",dark:"dark"};m.useEffect(()=>{const n=p({themes:s,defaultTheme:"dark"});a(n)},[]);const g=n=>{for(const[f,r]of Object.entries(s))f===n?document.documentElement.classList.add(r):document.documentElement.classList.remove(r);a(n)};return t.jsxs("div",{className:"p-4",children:[t.jsxs("div",{className:"mb-4 font-medium",children:[t.jsx("span",{className:"font-bold",children:"Current Theme:"})," ",t.jsx("span",{"data-testid":"current-theme",children:e})]}),t.jsx("div",{className:"flex gap-2",children:Object.keys(s).map(n=>t.jsx(k,{theme:n,onChange:g,currentTheme:e},n))})]})},play:async({canvas:e,step:a})=>{const s=e.getByRole("button",{name:"light"});await a("light",async()=>{await T.click(s),await u(e.getByTestId("current-theme")).toHaveTextContent("light")})}},l={parameters:o({description:{story:"Falls back to default theme when class name is not found."}}),loaders:[()=>(document.documentElement.classList.remove("light","dark"),{theme:p({themes:h,defaultTheme:"dark"})})],render:(e,{loaded:{theme:a}})=>{const s=document.documentElement.className;return t.jsxs("div",{className:"font-sans",children:[t.jsxs("p",{children:["Current theme: ",t.jsx("span",{"data-testid":"current-theme",children:a===void 0?"(undefined)":a})]}),t.jsxs("p",{children:["Class name: ",s===""?"(empty)":s]})]})},play:async({canvas:e})=>{await u(e.getByTestId("current-theme")).toHaveTextContent("dark")}},d={parameters:o({description:{story:"Gets theme from specific element."}}),render:()=>{const[e,a]=m.useState([]),[s,g]=m.useState(),n=m.useRef(null),f=m.useCallback(r=>{if(!n.current)return;for(const[y,b]of Object.entries(h))y===r?n.current?.classList.add(b):n.current?.classList.remove(b);const v=p({themes:h,defaultTheme:"dark",element:n.current});g(v),a(y=>[...y,`theme: ${v}`])},[n.current]);return t.jsxs("div",{className:"font-sans",children:[t.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:Object.keys(h).map(r=>t.jsx(k,{theme:r,onChange:f,currentTheme:s},r))}),t.jsx("div",{ref:n,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),t.jsx(x,{title:"Theme by className",log:e})]})},play:async({canvas:e,step:a})=>{await a("light",async()=>{const s=e.getByRole("button",{name:"light"});await T.click(s),await u(e.getByText("theme: light")).toBeInTheDocument()}),await a("dark",async()=>{const s=e.getByRole("button",{name:"dark"});await T.click(s),await u(e.getByText("theme: dark")).toBeInTheDocument()})}},i={tags:["unit"],parameters:o({description:{story:"Falls back to default theme when class name is not found."}}),render:()=>{const e=p({themes:{light:"not-exist-theme-light",dark:"not-exist-theme-dark"},defaultTheme:"dark"});return t.jsxs("div",{children:["Current theme: ",e]})}},h={light:"light-theme",dark:"dark-theme"};function k({theme:e,onChange:a,currentTheme:s}){return t.jsx("button",{onClick:()=>a(e),className:`
                                px-4 py-2
                                rounded
                                font-medium
                                transition-colors
                                ${s===e?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-200 text-gray-800 hover:bg-gray-300"}
                            `,children:e})}c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Demonstrates how \`getThemeByClassName\` gets the current theme based on class names.'
    }
  }),
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<string>();
    const themes = {
      light: 'light',
      dark: 'dark'
    };
    useEffect(() => {
      const theme = getThemeByClassName({
        themes,
        defaultTheme: 'dark'
      });
      setCurrentTheme(theme);
    }, []);
    const handleThemeChange = (theme: keyof typeof themes) => {
      for (const [key, value] of Object.entries(themes)) {
        if (key === theme) {
          document.documentElement.classList.add(value);
        } else {
          document.documentElement.classList.remove(value);
        }
      }
      setCurrentTheme(theme);
    };
    return <div className="p-4">
                <div className="mb-4 font-medium">
                    <span className="font-bold">Current Theme:</span> <span data-testid="current-theme">{currentTheme}</span>
                </div>
                <div className="flex gap-2">
                    {Object.keys(themes).map((theme: any) => <ThemeButton key={theme} theme={theme} onChange={handleThemeChange} currentTheme={currentTheme} />)}
                </div>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'light'
    });
    await step('light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light');
    });
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when class name is not found.'
    }
  }),
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
    return <div className="font-sans">
                <p>
                    Current theme: <span data-testid="current-theme">{theme === undefined ? '(undefined)' : theme}</span>
                </p>
                <p>Class name: {value === '' ? '(empty)' : value}</p>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme from specific element.'
    }
  }),
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const [currentTheme, setCurrentTheme] = useState<string>();
    const customElementRef = useRef<HTMLDivElement>(null);
    const handleThemeChange = useCallback((theme: keyof typeof themes) => {
      if (!customElementRef.current) return;
      for (const [key, value] of Object.entries(themes)) {
        if (key === theme) {
          customElementRef.current?.classList.add(value);
        } else {
          customElementRef.current?.classList.remove(value);
        }
      }
      const result = getThemeByClassName({
        themes,
        defaultTheme: 'dark',
        element: customElementRef.current
      });
      setCurrentTheme(result);
      setLog(prev => [...prev, \`theme: \${result}\`]);
    }, [customElementRef.current]);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.keys(themes).map((theme: any) => <ThemeButton key={theme} theme={theme} onChange={handleThemeChange} currentTheme={currentTheme} />)}
                </div>
                <div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
                    Custom Element to observe
                </div>
                <LogPanel title="Theme by className" log={log} />
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
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('dark', async () => {
      const btn = canvas.getByRole('button', {
        name: 'dark'
      });
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when class name is not found.'
    }
  }),
  render: () => {
    const theme = getThemeByClassName({
      themes: {
        light: 'not-exist-theme-light',
        dark: 'not-exist-theme-dark'
      },
      defaultTheme: 'dark'
    });
    return <div>Current theme: {theme}</div>;
  }
}`,...i.parameters?.docs?.source}}};const D=["BasicUsage","DefaultTheme","CustomElement","InvalidTheme"];export{c as BasicUsage,d as CustomElement,l as DefaultTheme,i as InvalidTheme,D as __namedExportsOrder,R as default};
