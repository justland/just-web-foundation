import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./iframe-8ZVkZNUj.js";import{t as r}from"./prefers-color-scheme-D3dsnxDn.js";import{r as i}from"./dist-CJMrBJtm.js";import{t as a}from"./jsx-dev-runtime-DpMrmGJR.js";var o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),o=a(),s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.get.stories.tsx`,c={title:`utils/getPrefersColorScheme`,tags:[`autodocs`,`version:0.1`],parameters:n({description:{component:`A utility function that returns the current preferred color theme from the system settings.`}})},l={parameters:n({description:{story:"This demo shows how the `getPrefersColorScheme` function returns the current preferred color theme from the system settings."}}),render:()=>{let e=r(`light`,`dark`);return(0,o.jsxDEV)(`div`,{style:{padding:`2rem`,backgroundColor:e===`dark`?`#333`:`#fff`,color:e===`dark`?`#fff`:`#333`,borderRadius:`8px`,transition:`all 0.3s ease`},children:[(0,o.jsxDEV)(`h2`,{children:`Current Color Scheme Preference (prefers-color-scheme)`},void 0,!1,{fileName:s,lineNumber:30,columnNumber:17},void 0),(0,o.jsxDEV)(`p`,{children:[`Your system is currently set to: `,(0,o.jsxDEV)(`strong`,{children:e},void 0,!1,{fileName:s,lineNumber:32,columnNumber:54},void 0),` mode`]},void 0,!0,{fileName:s,lineNumber:31,columnNumber:17},void 0)]},void 0,!0,{fileName:s,lineNumber:23,columnNumber:12},void 0)}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`BasicUsage`]})))()}d();export{l as BasicUsage,u as __namedExportsOrder,c as default};