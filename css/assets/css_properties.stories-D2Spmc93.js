import{j as t}from"./jsx-dev-runtime-DF-ftqEI.js";import{s as c,d as s}from"./iframe-YRpWaOvq.js";import{d as n}from"./dedent-BuYMbVyj.js";import{d as i}from"./css_properties-Dh8E5HRZ.js";import{t as a}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,f={title:"Properties/CSSProperties",tags:["autodocs","code-only","new","version:0.1"],decorators:[c()],render:()=>t.jsxDEV(t.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/css_properties.stories.tsx",lineNumber:11,columnNumber:17},void 0)},e={tags:["!test"],parameters:s({description:{story:"Extends CSS properties to support custom properties."},source:{code:n`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),play:()=>{p({color:"red","--custom-property":"10px"}).toEqual({color:"red","--custom-property":"10px"}),a.unknown(!1)}},r={parameters:s({description:{story:"Helper function to define CSS properties with type checking."},source:{code:n`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:()=>{const o=i({color:"red",fontSize:"16px","--custom-property":"10px"});p(o).toEqual({color:"red",fontSize:"16px","--custom-property":"10px"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  }),
  play: () => {
    const style: CSSProperties = {
      color: 'red',
      '--custom-property': '10px'
    };
    expect(style).toEqual({
      color: 'red',
      '--custom-property': '10px'
    });
    interface TypeParams<K extends keyof CSSProperties> {
      property: K;
      value: CSSProperties[K];
    }
    testType.unknown<TypeParams<keyof CSSProperties>>(false);
  }
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
}`,...r.parameters?.docs?.source}}};const x=["TypeUsage","DefineFunction"];export{r as DefineFunction,e as TypeUsage,x as __namedExportsOrder,f as default};
