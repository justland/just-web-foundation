import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as o}from"./iframe-BefVJTqb.js";import{g as t}from"./prefers-color-scheme-D5KCvPFc.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";const a={title:"utils/getPrefersColorScheme",tags:["autodocs","new","version:1.0.0"],parameters:o({description:{component:"A utility function that returns the current preferred color theme from the system settings."}})},r={parameters:o({description:{story:"This demo shows how the `getPrefersColorScheme` function returns the current preferred color theme from the system settings."}}),render:()=>{const s=t("light","dark");return e.jsxDEV("div",{style:{padding:"2rem",backgroundColor:s==="dark"?"#333":"#fff",color:s==="dark"?"#fff":"#333",borderRadius:"8px",transition:"all 0.3s ease"},children:[e.jsxDEV("h2",{children:"Current Color Scheme Preference (prefers-color-scheme)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.get.stories.tsx",lineNumber:30,columnNumber:17},void 0),e.jsxDEV("p",{children:["Your system is currently set to: ",e.jsxDEV("strong",{children:s},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.get.stories.tsx",lineNumber:32,columnNumber:54},void 0)," mode"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.get.stories.tsx",lineNumber:31,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.get.stories.tsx",lineNumber:23,columnNumber:12},void 0)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'This demo shows how the \`getPrefersColorScheme\` function returns the current preferred color theme from the system settings.'
    }
  }),
  render: () => {
    const scheme = getPrefersColorTheme('light', 'dark');
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
            </div>;
  }
}`,...r.parameters?.docs?.source}}};const d=["BasicUsage"];export{r as BasicUsage,d as __namedExportsOrder,a as default};
