import{j as s}from"./jsx-dev-runtime-DF-ftqEI.js";import{r as o}from"./iframe-DwJbHN0e.js";import{o as d}from"./class-name-CX0HDVeJ.js";import{L as h}from"./log-panel-C04tfzEM.js";import{T as g}from"./toggle-attribute-button-B3KhORRh.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";const{expect:n,userEvent:i}=__STORYBOOK_MODULE_TEST__,B={title:"theme/observeThemeByClassName",tags:["autodocs","new","version:0.1"]},u={render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=d({themes:{light:"light",dark:"dark"},handler:r=>t(l=>[...l,`theme: ${r===void 0?"(undefined)":r}`])});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"class",values:["light","dark"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:28,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:27,columnNumber:17},void 0),s.jsxDEV(h,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:30,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:26,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("undefined -> light",async()=>{await i.click(a),await n(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await n(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> undefined",async()=>{await i.click(a),await n(e.getByText("theme: (undefined)")).toBeInTheDocument()})}},c={render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=d({themes:{light:"light-theme",dark:"dark-theme"},handler:r=>t(l=>[...l,`theme: ${r===void 0?"(undefined)":r}`])});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"class",values:["light-theme","dark-theme"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:69,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:68,columnNumber:17},void 0),s.jsxDEV(h,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:71,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:67,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("undefined -> light",async()=>{await i.click(a),await n(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await n(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> undefined",async()=>{await i.click(a),await n(e.getByText("theme: (undefined)")).toBeInTheDocument()})}},m={render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=d({themes:{light:"light",dark:"dark"},handler:r=>t(l=>[...l,`theme: ${r}`]),defaultTheme:"light"});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"class",values:["light","dark"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:111,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:110,columnNumber:17},void 0),s.jsxDEV(h,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:113,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/class-name.observe.stories.tsx",lineNumber:109,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("null -> light",async()=>{await i.click(a),await n(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await n(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> light (default)",async()=>{await i.click(a),await n(e.getAllByText("theme: light").length).toBe(2)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const N=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme"];export{u as BasicUsage,m as WithDefaultTheme,c as WithDifferentAttributeValues,N as __namedExportsOrder,B as default};
