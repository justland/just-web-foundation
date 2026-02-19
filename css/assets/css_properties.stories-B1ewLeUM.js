import{j as o}from"./jsx-dev-runtime-DF-ftqEI.js";import{s as p,d as t}from"./iframe-W6fGJE-M.js";import{d as s}from"./dedent-BuYMbVyj.js";import{d as c}from"./css_properties-Dh8E5HRZ.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,S={title:"Properties/CSSProperties",tags:["autodocs","code-only","new","version:0.1"],decorators:[p()],render:()=>o.jsxDEV(o.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/css_properties.stories.tsx",lineNumber:10,columnNumber:17},void 0)},e={tags:["!test"],parameters:t({description:{story:"Extends CSS properties to support custom properties."},source:{code:s`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}})},r={parameters:t({description:{story:"Helper function to define CSS properties with type checking."},source:{code:s`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:()=>{const n=c({color:"red",fontSize:"16px","--custom-property":"10px"});i(n).toEqual({color:"red",fontSize:"16px","--custom-property":"10px"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Extends CSS properties to support custom properties.'
    },
    source: {
      code: dedent\`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            \`
    }
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Helper function to define CSS properties with type checking.'
    },
    source: {
      code: dedent\`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })\`
    }
  }),
  play: () => {
    const style = defineCSSProperties({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
    expect(style).toEqual({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
  }
}`,...r.parameters?.docs?.source}}};const f=["TypeUsage","DefineFunction"];export{r as DefineFunction,e as TypeUsage,f as __namedExportsOrder,S as default};
