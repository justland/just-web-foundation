import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{i as n,r}from"./iframe-8ZVkZNUj.js";import{t as i}from"./class-name-DBiHopPX.js";import{r as a}from"./dist-CJMrBJtm.js";import{t as o}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as s,t as c}from"./log-panel-B2zMZsCA.js";function l({theme:e,onChange:t,currentTheme:n}){return(0,d.jsxDEV)(`button`,{onClick:()=>t(e),className:`
                                px-4 py-2
                                rounded
                                font-medium
                                transition-colors
                                ${n===e?`bg-blue-600 text-white hover:bg-blue-700`:`bg-gray-200 text-gray-800 hover:bg-gray-300`}
                            `,children:e},void 0,!1,{fileName:m,lineNumber:195,columnNumber:10},this)}var u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),u=t(),a(),s(),d=o(),{expect:f,userEvent:p}=__STORYBOOK_MODULE_TEST__,m=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.get.stories.tsx`,h={title:`theme/getThemeByClassName`,tags:[`autodocs`,`new`,`version:0.1`],parameters:r({description:{component:`A utility function that determines the current theme based on element class name.`}})},g={parameters:r({description:{story:"Demonstrates how `getThemeByClassName` gets the current theme based on class names."}}),render:()=>{let[e,t]=(0,u.useState)(),n={light:`light`,dark:`dark`};(0,u.useEffect)(()=>{let e=i({themes:n,defaultTheme:`dark`});t(e)},[]);let r=e=>{for(let[t,r]of Object.entries(n))t===e?document.documentElement.classList.add(r):document.documentElement.classList.remove(r);t(e)};return(0,d.jsxDEV)(`div`,{className:`p-4`,children:[(0,d.jsxDEV)(`div`,{className:`mb-4 font-medium`,children:[(0,d.jsxDEV)(`span`,{className:`font-bold`,children:`Current Theme:`},void 0,!1,{fileName:m,lineNumber:49,columnNumber:21},void 0),` `,(0,d.jsxDEV)(`span`,{"data-testid":`current-theme`,children:e},void 0,!1,{fileName:m,lineNumber:50,columnNumber:21},void 0)]},void 0,!0,{fileName:m,lineNumber:48,columnNumber:17},void 0),(0,d.jsxDEV)(`div`,{className:`flex gap-2`,children:Object.keys(n).map(t=>(0,d.jsxDEV)(l,{theme:t,onChange:r,currentTheme:e},t,!1,{fileName:m,lineNumber:53,columnNumber:62},void 0))},void 0,!1,{fileName:m,lineNumber:52,columnNumber:17},void 0)]},void 0,!0,{fileName:m,lineNumber:47,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`light`});await t(`light`,async()=>{await p.click(n),await f(e.getByTestId(`current-theme`)).toHaveTextContent(`light`)})}},_={parameters:r({description:{story:`Falls back to default theme when class name is not found.`}}),loaders:[()=>(document.documentElement.classList.remove(`light`,`dark`),{theme:i({themes:b,defaultTheme:`dark`})})],render:(e,{loaded:{theme:t}})=>{let n=document.documentElement.className;return(0,d.jsxDEV)(`div`,{className:`font-sans`,children:[(0,d.jsxDEV)(`p`,{children:[`Current theme:`,` `,(0,d.jsxDEV)(`span`,{"data-testid":`current-theme`,children:t===void 0?`(undefined)`:t},void 0,!1,{fileName:m,lineNumber:95,columnNumber:21},void 0)]},void 0,!0,{fileName:m,lineNumber:93,columnNumber:17},void 0),(0,d.jsxDEV)(`p`,{children:[`Class name: `,n===``?`(empty)`:n]},void 0,!0,{fileName:m,lineNumber:97,columnNumber:17},void 0)]},void 0,!0,{fileName:m,lineNumber:92,columnNumber:12},void 0)},play:async({canvas:e})=>{await f(e.getByTestId(`current-theme`)).toHaveTextContent(`dark`)}},v={parameters:r({description:{story:`Gets theme from specific element.`}}),render:()=>{let[e,t]=(0,u.useState)([]),[n,r]=(0,u.useState)(),a=(0,u.useRef)(null),o=(0,u.useCallback)(e=>{if(!a.current)return;for(let[t,n]of Object.entries(b))t===e?a.current?.classList.add(n):a.current?.classList.remove(n);let n=i({themes:b,defaultTheme:`dark`,element:a.current});r(n),t(e=>[...e,`theme: ${n}`])},[a.current]);return(0,d.jsxDEV)(`div`,{className:`font-sans`,children:[(0,d.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:Object.keys(b).map(e=>(0,d.jsxDEV)(l,{theme:e,onChange:o,currentTheme:n},e,!1,{fileName:m,lineNumber:135,columnNumber:62},void 0))},void 0,!1,{fileName:m,lineNumber:134,columnNumber:17},void 0),(0,d.jsxDEV)(`div`,{ref:a,className:`p-4 border border-gray-300 mb-4`,children:`Custom Element to observe`},void 0,!1,{fileName:m,lineNumber:137,columnNumber:17},void 0),(0,d.jsxDEV)(c,{title:`Theme by className`,log:e},void 0,!1,{fileName:m,lineNumber:140,columnNumber:17},void 0)]},void 0,!0,{fileName:m,lineNumber:133,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{await t(`light`,async()=>{let t=e.getByRole(`button`,{name:`light`});await p.click(t),await f(e.getByText(`theme: light`)).toBeInTheDocument()}),await t(`dark`,async()=>{let t=e.getByRole(`button`,{name:`dark`});await p.click(t),await f(e.getByText(`theme: dark`)).toBeInTheDocument()})}},y={tags:[`unit`],parameters:r({description:{story:`Falls back to default theme when class name is not found.`}}),render:()=>{let e=i({themes:{light:`not-exist-theme-light`,dark:`not-exist-theme-dark`},defaultTheme:`dark`});return(0,d.jsxDEV)(`div`,{children:[`Current theme: `,e]},void 0,!0,{fileName:m,lineNumber:178,columnNumber:12},void 0)}},b={light:`light-theme`,dark:`dark-theme`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                    <span className="font-bold">Current Theme:</span>{' '}
                    <span data-testid="current-theme">{currentTheme}</span>
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
                    Current theme:{' '}
                    <span data-testid="current-theme">{theme === undefined ? '(undefined)' : theme}</span>
                </p>
                <p>Class name: {value === '' ? '(empty)' : value}</p>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},x=[`BasicUsage`,`DefaultTheme`,`CustomElement`,`InvalidTheme`]})))()}S();export{g as BasicUsage,v as CustomElement,_ as DefaultTheme,y as InvalidTheme,x as __namedExportsOrder,h as default};