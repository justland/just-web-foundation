import{j as e}from"./iframe-B_KEKWeW.js";import{d as c}from"./define_docs_param-lmgaBKCF.js";import{g as m}from"./prefers-color-scheme-CjDR31Hv.js";import"./preload-helper-Dp1pzeXC.js";import"./globals.ctx-DOXvZQDb.js";const l={title:"utils/getPrefersColorScheme",tags:["autodocs","new","version:1.0.0"],parameters:c({description:{component:"A utility function that returns the current preferred color theme from the system settings."}})},r={parameters:c({description:{story:"This demo shows how the `getPrefersColorScheme` function returns the current preferred color theme from the system settings."}}),render:()=>{const s=m("light","dark");return e.jsxs("div",{style:{padding:"2rem",backgroundColor:s==="dark"?"#333":"#fff",color:s==="dark"?"#fff":"#333",borderRadius:"8px",transition:"all 0.3s ease"},children:[e.jsx("h2",{children:"Current Color Scheme Preference (prefers-color-scheme)"}),e.jsxs("p",{children:["Your system is currently set to: ",e.jsx("strong",{children:s})," mode"]})]})}};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["BasicUsage"];export{r as BasicUsage,p as __namedExportsOrder,l as default};
