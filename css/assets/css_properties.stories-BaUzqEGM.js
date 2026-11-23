import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{E as t,n,t as r}from"./jsx-dev-runtime-OV7-16pk.js";import{a as i,i as a,r as o}from"./iframe-DXs8Rx1E.js";import{n as s,t as c}from"./dedent-Dmnlqj-U.js";import{n as l,t as u}from"./test-type-BtKqfWjf.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{a(),s(),u(),n(),d=r(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/css_properties.stories.tsx`,m={title:`Properties/CSSProperties`,tags:[`autodocs`,`code-only`,`new`,`version:0.1`],decorators:[i()],render:()=>(0,d.jsxDEV)(d.Fragment,{},void 0,!1,{fileName:p,lineNumber:12,columnNumber:16},void 0)},h={tags:[`!test`],parameters:o({description:{story:`Extends CSS properties to support custom properties.`},source:{code:c`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),play:()=>{f({color:`red`,"--custom-property":`10px`}).toEqual({color:`red`,"--custom-property":`10px`}),l.unknown(!1)}},g={parameters:o({description:{story:`Helper function to define CSS properties with type checking.`},source:{code:c`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:()=>{let e=t({color:`red`,fontSize:`16px`,"--custom-property":`10px`});f(e).toEqual({color:`red`,fontSize:`16px`,"--custom-property":`10px`})}},_=[`TypeUsage`,`DefineFunction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as DefineFunction,h as TypeUsage,_ as __namedExportsOrder,m as default};