import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,o as n,t as r}from"./jsx-dev-runtime-OV7-16pk.js";import{i,r as a}from"./iframe-BAQyEo_m.js";var o,s,c,l,u;function d(){return(d=e((()=>{i(),t(),o=r(),s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.get.stories.tsx`,c={title:`utils/getPrefersColorScheme`,tags:[`autodocs`,`version:0.1`],parameters:a({description:{component:`A utility function that returns the current preferred color theme from the system settings.`}})},l={parameters:a({description:{story:"This demo shows how the `getPrefersColorScheme` function returns the current preferred color theme from the system settings."}}),render:()=>{let e=n(`light`,`dark`);return(0,o.jsxDEV)(`div`,{style:{padding:`2rem`,backgroundColor:e===`dark`?`#333`:`#fff`,color:e===`dark`?`#fff`:`#333`,borderRadius:`8px`,transition:`all 0.3s ease`},children:[(0,o.jsxDEV)(`h2`,{children:`Current Color Scheme Preference (prefers-color-scheme)`},void 0,!1,{fileName:s,lineNumber:40,columnNumber:5},void 0),(0,o.jsxDEV)(`p`,{children:[`Your system is currently set to: `,(0,o.jsxDEV)(`strong`,{children:e},void 0,!1,{fileName:s,lineNumber:42,columnNumber:39},void 0),` mode`]},void 0,!0,{fileName:s,lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:s,lineNumber:31,columnNumber:4},void 0)}},u=[`BasicUsage`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as BasicUsage,u as __namedExportsOrder,c as default};