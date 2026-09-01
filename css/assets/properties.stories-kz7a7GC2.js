import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./test_type-tZaYxgYg.js";import{a as r,i,r as a}from"./iframe-BDaPsrZE.js";import{t as o}from"./properties-w_xcTR4a.js";import{r as s}from"./dist--pxey9Hb.js";import{t as c}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as l,t as u}from"./dedent-DQaCLeUO.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),l(),n(),s(),d=c(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/properties.stories.tsx`,m={title:`Properties/Properties`,tags:[`autodocs`,`code-only`,`new`,`version:0.8`],decorators:[r()],render:()=>(0,d.jsxDEV)(d.Fragment,{},void 0,!1,{fileName:p,lineNumber:11,columnNumber:17},void 0)},h={tags:[`!test`],parameters:a({description:{story:`Extends CSS properties to support custom properties.`},source:{code:u`let style: Properties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}})},g={parameters:a({description:{story:`Helper function to define CSS properties with type checking.`},source:{code:u`const style = defineProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:async()=>{let e=o({color:`red`,fontSize:`16px`,"--custom-property":`10px`});await f(e).toEqual({color:`red`,fontSize:`16px`,"--custom-property":`10px`}),t.unknown(!1)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`TypeUsage`,`DefineFunction`]})))()}v();export{g as DefineFunction,h as TypeUsage,_ as __namedExportsOrder,m as default};