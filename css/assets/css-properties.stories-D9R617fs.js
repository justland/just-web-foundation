import{j as o,s as p,d as t}from"./iframe-D5rBLWIn.js";import{d as s,a as c}from"./dedent-BEojnTFe.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,m={title:"CSS Properties/CSSProperties",tags:["autodocs","code-only","new","version:1.0"],decorators:[p()],render:()=>o.jsx(o.Fragment,{})},e={tags:["!test"],parameters:t({description:{story:"Extends CSS properties to support custom properties."},source:{code:s`let style: CSSProperties = {
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
}`,...r.parameters?.docs?.source}}};const u=["TypeUsage","DefineFunction"];export{r as DefineFunction,e as TypeUsage,u as __namedExportsOrder,m as default};
