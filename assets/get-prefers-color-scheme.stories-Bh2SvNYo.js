import{d as o,j as e}from"./iframe-DoDTZ-f0.js";import{g as t}from"./prefers-color-scheme-CSMMlMsB.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-AnFbK9hv.js";const i={title:"color-scheme/getPrefersColorScheme",tags:["autodocs","version:0.1"],parameters:o({description:{component:"A utility function that returns the current preferred color theme from the system settings."}})},r={parameters:o({description:{story:"This demo shows how the `getPrefersColorScheme` function returns the current preferred color theme from the system settings."}}),render:()=>{const s=t("light","dark");return e.jsxs("div",{style:{padding:"2rem",backgroundColor:s==="dark"?"#333":"#fff",color:s==="dark"?"#fff":"#333",borderRadius:"8px",transition:"all 0.3s ease"},children:[e.jsx("h2",{children:"Current Color Scheme Preference (prefers-color-scheme)"}),e.jsxs("p",{children:["Your system is currently set to: ",e.jsx("strong",{children:s})," mode"]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const d=["BasicUsage"];export{r as BasicUsage,d as __namedExportsOrder,i as default};
