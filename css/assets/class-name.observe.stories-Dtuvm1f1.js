import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{r as n}from"./class-name-DBiHopPX.js";import{r}from"./dist--pxey9Hb.js";import{t as i}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as a,t as o}from"./log-panel-B2zMZsCA.js";import{n as s,t as c}from"./toggle-attribute-button-ChhFh52o.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=t(),r(),a(),s(),u=i(),{expect:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx`,m={title:`theme/observeThemeByClassName`,tags:[`autodocs`,`new`,`version:0.1`]},h={render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=n({themes:{light:`light`,dark:`dark`},handler:e=>t(t=>[...t,`theme: ${e===void 0?`(undefined)`:e}`])});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`class`,values:[`light`,`dark`]},void 0,!1,{fileName:p,lineNumber:28,columnNumber:21},void 0)},void 0,!1,{fileName:p,lineNumber:27,columnNumber:17},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:30,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:26,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle class`});await t(`undefined -> light`,async()=>{await f.click(n),await d(e.getByText(`theme: light`)).toBeInTheDocument()}),await t(`light -> dark`,async()=>{await f.click(n),await d(e.getByText(`theme: dark`)).toBeInTheDocument()}),await t(`dark -> undefined`,async()=>{await f.click(n),await d(e.getByText(`theme: (undefined)`)).toBeInTheDocument()})}},g={render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=n({themes:{light:`light-theme`,dark:`dark-theme`},handler:e=>t(t=>[...t,`theme: ${e===void 0?`(undefined)`:e}`])});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`class`,values:[`light-theme`,`dark-theme`]},void 0,!1,{fileName:p,lineNumber:69,columnNumber:21},void 0)},void 0,!1,{fileName:p,lineNumber:68,columnNumber:17},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:71,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:67,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle class`});await t(`undefined -> light`,async()=>{await f.click(n),await d(e.getByText(`theme: light`)).toBeInTheDocument()}),await t(`light -> dark`,async()=>{await f.click(n),await d(e.getByText(`theme: dark`)).toBeInTheDocument()}),await t(`dark -> undefined`,async()=>{await f.click(n),await d(e.getByText(`theme: (undefined)`)).toBeInTheDocument()})}},_={render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=n({themes:{light:`light`,dark:`dark`},handler:e=>t(t=>[...t,`theme: ${e}`]),defaultTheme:`light`});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`class`,values:[`light`,`dark`]},void 0,!1,{fileName:p,lineNumber:111,columnNumber:21},void 0)},void 0,!1,{fileName:p,lineNumber:110,columnNumber:17},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:113,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:109,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle class`});await t(`null -> light`,async()=>{await f.click(n),await d(e.getByText(`theme: light`)).toBeInTheDocument()}),await t(`light -> dark`,async()=>{await f.click(n),await d(e.getByText(`theme: dark`)).toBeInTheDocument()}),await t(`dark -> light (default)`,async()=>{await f.click(n),await d(e.getAllByText(`theme: light`).length).toBe(2)})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value === undefined ? '(undefined)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('undefined -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> undefined', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument();
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light-theme',
          dark: 'dark-theme'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value === undefined ? '(undefined)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light-theme', 'dark-theme']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('undefined -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> undefined', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument();
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value}\`]),
        defaultTheme: 'light'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> light (default)', async () => {
      await userEvent.click(btn);
      await expect(canvas.getAllByText('theme: light').length).toBe(2);
    });
  }
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`WithDifferentAttributeValues`,`WithDefaultTheme`]})))()}y();export{h as BasicUsage,_ as WithDefaultTheme,g as WithDifferentAttributeValues,v as __namedExportsOrder,m as default};