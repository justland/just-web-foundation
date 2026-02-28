import{j as o}from"./jsx-dev-runtime-DF-ftqEI.js";import{s as p,d as t}from"./iframe-DXYh7faQ.js";import{d as s}from"./dedent-BuYMbVyj.js";import{d as i}from"./properties-Dh8E5HRZ.js";import{t as c}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,x={title:"Properties/Properties",tags:["autodocs","code-only","new","version:next"],decorators:[p()],render:()=>o.jsxDEV(o.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/properties.stories.tsx",lineNumber:11,columnNumber:17},void 0)},e={tags:["!test"],parameters:t({description:{story:"Extends CSS properties to support custom properties."},source:{code:s`let style: Properties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}})},r={parameters:t({description:{story:"Helper function to define CSS properties with type checking."},source:{code:s`const style = defineProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:async()=>{const n=i({color:"red",fontSize:"16px","--custom-property":"10px"});await a(n).toEqual({color:"red",fontSize:"16px","--custom-property":"10px"}),c.unknown(!1)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Extends CSS properties to support custom properties.'
    },
    source: {
      code: dedent\`let style: Properties = {
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
      code: dedent\`const style = defineProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })\`
    }
  }),
  play: async () => {
    const style = defineProperties({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
    await expect(style).toEqual({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
    interface TypeParams<K extends keyof Properties> {
      property: K;
      value: Properties[K];
    }
    testType.unknown<TypeParams<keyof Properties>>(false);
  }
}`,...r.parameters?.docs?.source}}};const S=["TypeUsage","DefineFunction"];export{r as DefineFunction,e as TypeUsage,S as __namedExportsOrder,x as default};
