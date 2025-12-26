import{j as s}from"./jsx-dev-runtime-DF-ftqEI.js";import{r as o}from"./iframe-BefVJTqb.js";import{o as h}from"./data-attribute-BKciUfnA.js";import{L as b}from"./log-panel-C04tfzEM.js";import{T as g}from"./toggle-attribute-button-C0AQZt7G.js";import"./preload-helper-PPVm8Dsz.js";import"./data-attribute-DhOVGBXa.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";const{expect:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,j={title:"theme/observeThemeByDataAttributes",tags:["autodocs","new","version:1.0.0"]},u={render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=h({attributeName:"data-theme",themes:{light:"light",dark:"dark"},handler:n=>t(l=>[...l,`data-theme: ${n===null?"(null)":n}`])});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"data-theme",values:["light","dark"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:29,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:28,columnNumber:17},void 0),s.jsxDEV(b,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:31,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:27,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("null -> light",async()=>{await i.click(a),await r(e.getByText("data-theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await r(e.getByText("data-theme: dark")).toBeInTheDocument()}),await t("dark -> null",async()=>{await i.click(a),await r(e.getByText("data-theme: (null)")).toBeInTheDocument()})}},m={render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=h({themes:{light:"light-theme",dark:"dark-theme"},handler:n=>t(l=>[...l,`data-theme: ${n===null?"(null)":n}`]),attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"data-theme",values:["light-theme","dark-theme"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:71,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:70,columnNumber:17},void 0),s.jsxDEV(b,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:73,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:69,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("null -> light",async()=>{await i.click(a),await r(e.getByText("data-theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await r(e.getByText("data-theme: dark")).toBeInTheDocument()}),await t("dark -> null",async()=>{await i.click(a),await r(e.getByText("data-theme: (null)")).toBeInTheDocument()})}},c={name:"With defaultTheme",render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=h({themes:{light:"light",dark:"dark"},handler:n=>t(l=>[...l,`data-theme: ${n===null?"(null)":n}`]),defaultTheme:"light",attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"data-theme",values:["light","dark"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:115,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:114,columnNumber:17},void 0),s.jsxDEV(b,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:117,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:113,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("null -> light",async()=>{await i.click(a),await r(e.getByText("data-theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await r(e.getByText("data-theme: dark")).toBeInTheDocument()}),await t("dark -> light (default)",async()=>{await i.click(a),await r(e.getAllByText("data-theme: light").length).toBe(2)})}},d={name:"With allowCustom",render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const a=h({themes:{light:"light",dark:"dark"},handler:n=>t(l=>[...l,`data-theme: ${n===null?"(null)":n}`]),allowCustom:!0,attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(g,{attribute:"data-theme",values:["light","custom"]},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:159,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:158,columnNumber:17},void 0),s.jsxDEV(b,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:161,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx",lineNumber:157,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("null -> light",async()=>{await i.click(a),await r(e.getByText("data-theme: light")).toBeInTheDocument()}),await t("light -> custom",async()=>{await i.click(a),await r(e.getByText("data-theme: custom")).toBeInTheDocument()})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        attributeName: 'data-theme',
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    });
    await step('dark -> null', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: (null)')).toBeInTheDocument();
    });
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        themes: {
          light: 'light-theme',
          dark: 'dark-theme'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`]),
        attributeName: 'data-theme'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light-theme', 'dark-theme']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    });
    await step('dark -> null', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: (null)')).toBeInTheDocument();
    });
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With defaultTheme',
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`]),
        defaultTheme: 'light',
        attributeName: 'data-theme'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    });
    await step('dark -> light (default)', async () => {
      await userEvent.click(btn);
      await expect(canvas.getAllByText('data-theme: light').length).toBe(2);
    });
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With allowCustom',
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`]),
        allowCustom: true,
        attributeName: 'data-theme'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light', 'custom']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> custom', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: custom')).toBeInTheDocument();
    });
  }
}`,...d.parameters?.docs?.source}}};const D=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme","WithAllowCustom"];export{u as BasicUsage,d as WithAllowCustom,c as WithDefaultTheme,m as WithDifferentAttributeValues,D as __namedExportsOrder,j as default};
