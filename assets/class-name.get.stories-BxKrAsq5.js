import{j as t}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as o,r as m}from"./iframe-DyrDRAOH.js";import{g as f}from"./class-name-CX0HDVeJ.js";import{L as k}from"./log-panel-C04tfzEM.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";const{expect:h,userEvent:v}=__STORYBOOK_MODULE_TEST__,R={title:"theme/getThemeByClassName",tags:["autodocs","new","version:0.1"],parameters:o({description:{component:"A utility function that determines the current theme based on element class name."}})},u={parameters:o({description:{story:"Demonstrates how `getThemeByClassName` gets the current theme based on class names."}}),render:()=>{const[e,n]=m.useState(),s={light:"light",dark:"dark"};m.useEffect(()=>{const a=f({themes:s,defaultTheme:"dark"});n(a)},[]);const b=a=>{for(const[g,r]of Object.entries(s))g===a?document.documentElement.classList.add(r):document.documentElement.classList.remove(r);n(a)};return t.jsxDEV("div",{className:"p-4",children:[t.jsxDEV("div",{className:"mb-4 font-medium",children:[t.jsxDEV("span",{className:"font-bold",children:"Current Theme:"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:49,columnNumber:21},void 0)," ",t.jsxDEV("span",{"data-testid":"current-theme",children:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:49,columnNumber:71},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:48,columnNumber:17},void 0),t.jsxDEV("div",{className:"flex gap-2",children:Object.keys(s).map(a=>t.jsxDEV(y,{theme:a,onChange:b,currentTheme:e},a,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:52,columnNumber:62},void 0))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:51,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:47,columnNumber:12},void 0)},play:async({canvas:e,step:n})=>{const s=e.getByRole("button",{name:"light"});await n("light",async()=>{await v.click(s),await h(e.getByTestId("current-theme")).toHaveTextContent("light")})}},i={parameters:o({description:{story:"Falls back to default theme when class name is not found."}}),loaders:[()=>(document.documentElement.classList.remove("light","dark"),{theme:f({themes:d,defaultTheme:"dark"})})],render:(e,{loaded:{theme:n}})=>{const s=document.documentElement.className;return t.jsxDEV("div",{className:"font-sans",children:[t.jsxDEV("p",{children:["Current theme: ",t.jsxDEV("span",{"data-testid":"current-theme",children:n===void 0?"(undefined)":n},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:93,columnNumber:36},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:92,columnNumber:17},void 0),t.jsxDEV("p",{children:["Class name: ",s===""?"(empty)":s]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:95,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:91,columnNumber:12},void 0)},play:async({canvas:e})=>{await h(e.getByTestId("current-theme")).toHaveTextContent("dark")}},c={parameters:o({description:{story:"Gets theme from specific element."}}),render:()=>{const[e,n]=m.useState([]),[s,b]=m.useState(),a=m.useRef(null),g=m.useCallback(r=>{if(!a.current)return;for(const[p,N]of Object.entries(d))p===r?a.current?.classList.add(N):a.current?.classList.remove(N);const w=f({themes:d,defaultTheme:"dark",element:a.current});b(w),n(p=>[...p,`theme: ${w}`])},[a.current]);return t.jsxDEV("div",{className:"font-sans",children:[t.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:Object.keys(d).map(r=>t.jsxDEV(y,{theme:r,onChange:g,currentTheme:s},r,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:133,columnNumber:62},void 0))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:132,columnNumber:17},void 0),t.jsxDEV("div",{ref:a,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:135,columnNumber:17},void 0),t.jsxDEV(k,{title:"Theme by className",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:138,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:131,columnNumber:12},void 0)},play:async({canvas:e,step:n})=>{await n("light",async()=>{const s=e.getByRole("button",{name:"light"});await v.click(s),await h(e.getByText("theme: light")).toBeInTheDocument()}),await n("dark",async()=>{const s=e.getByRole("button",{name:"dark"});await v.click(s),await h(e.getByText("theme: dark")).toBeInTheDocument()})}},l={tags:["unit"],parameters:o({description:{story:"Falls back to default theme when class name is not found."}}),render:()=>{const e=f({themes:{light:"not-exist-theme-light",dark:"not-exist-theme-dark"},defaultTheme:"dark"});return t.jsxDEV("div",{children:["Current theme: ",e]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:176,columnNumber:12},void 0)}},d={light:"light-theme",dark:"dark-theme"};function y({theme:e,onChange:n,currentTheme:s}){return t.jsxDEV("button",{onClick:()=>n(e),className:`
                                px-4 py-2
                                rounded
                                font-medium
                                transition-colors
                                ${s===e?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-200 text-gray-800 hover:bg-gray-300"}
                            `,children:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx",lineNumber:193,columnNumber:10},this)}u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const V=["BasicUsage","DefaultTheme","CustomElement","InvalidTheme"];export{u as BasicUsage,c as CustomElement,i as DefaultTheme,l as InvalidTheme,V as __namedExportsOrder,R as default};
