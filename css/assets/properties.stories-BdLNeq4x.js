import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,i as n,r}from"./iframe-kL2xsVFS.js";import{n as i,t as a,w as o}from"./jsx-dev-runtime-BnL7LjSC.js";import{n as s,t as c}from"./dedent-Dmnlqj-U.js";import{n as l,t as u}from"./test-type-BtKqfWjf.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),s(),u(),i(),d=a(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/properties.stories.tsx`,m={title:`Properties/Properties`,tags:[`autodocs`,`code-only`,`new`,`version:0.8`],decorators:[t()],render:()=>(0,d.jsxDEV)(d.Fragment,{},void 0,!1,{fileName:p,lineNumber:12,columnNumber:16},void 0)},h={tags:[`!test`],parameters:r({description:{story:`Extends CSS properties to support custom properties.`},source:{code:c`let style: Properties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}})},g={parameters:r({description:{story:`Helper function to define CSS properties with type checking.`},source:{code:c`const style = defineProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:async()=>{let e=o({color:`red`,fontSize:`16px`,"--custom-property":`10px`});await f(e).toEqual({color:`red`,fontSize:`16px`,"--custom-property":`10px`}),l.unknown(!1)}},_=[`TypeUsage`,`DefineFunction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as DefineFunction,h as TypeUsage,_ as __namedExportsOrder,m as default};