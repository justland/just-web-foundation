import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as i,r as t}from"./iframe-odbHVDaS.js";import{g as c,o as a}from"./prefers-color-scheme-D5KCvPFc.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";const f={title:"utils/observePrefersColorScheme",tags:["autodocs","version:0.1"],parameters:i({description:{component:"A utility function that observes system color scheme preferences and triggers callbacks when changes occur."}})},s={parameters:i({description:{story:"This demo shows how the `observePrefersColorScheme` function responds to system color scheme changes. Change your system theme to see it in action."}}),render:()=>{const[r,o]=t.useState(null);return t.useEffect(()=>(o(c("light","dark")),a({light:n=>o(n),dark:n=>o(n)})),[]),e.jsxDEV("div",{style:{padding:"2rem",backgroundColor:r==="dark"?"#333":"#fff",color:r==="dark"?"#fff":"#333",borderRadius:"8px",transition:"all 0.3s ease"},children:[e.jsxDEV("h2",{children:"Current Color Scheme Preference (prefers-color-scheme)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx",lineNumber:38,columnNumber:17},void 0),e.jsxDEV("p",{children:["Your system is currently set to: ",e.jsxDEV("strong",{children:r},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx",lineNumber:40,columnNumber:54},void 0)," mode"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx",lineNumber:39,columnNumber:17},void 0),e.jsxDEV("p",{children:"Try changing your system's color scheme to see this update!"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx",lineNumber:42,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx",lineNumber:31,columnNumber:12},void 0)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'This demo shows how the \`observePrefersColorScheme\` function responds to system color scheme changes. Change your system theme to see it in action.'
    }
  }),
  render: () => {
    const [scheme, setScheme] = useState<'light' | 'dark' | null>(null);
    useEffect(() => {
      setScheme(getPrefersColorTheme('light', 'dark'));
      return observePrefersColorScheme<'light' | 'dark'>({
        light: value => setScheme(value),
        dark: value => setScheme(value)
      });
    }, []);
    return <div style={{
      padding: '2rem',
      backgroundColor: scheme === 'dark' ? '#333' : '#fff',
      color: scheme === 'dark' ? '#fff' : '#333',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
                <h2>Current Color Scheme Preference (prefers-color-scheme)</h2>
                <p>
                    Your system is currently set to: <strong>{scheme}</strong> mode
                </p>
                <p>Try changing your system's color scheme to see this update!</p>
            </div>;
  }
}`,...s.parameters?.docs?.source}}};const p=["BasicUsage"];export{s as BasicUsage,p as __namedExportsOrder,f as default};
