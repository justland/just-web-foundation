import{j as o}from"./iframe-B_KEKWeW.js";import{s as S}from"./show_doc_source-zwu8yEi0.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{d,a as u}from"./dedent-CN-vuQb3.js";import"./preload-helper-Dp1pzeXC.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,g={title:"CSS Properties/CSSProperties",tags:["autodocs","code-only","new","version:1.0"],decorators:[S()],render:()=>o.jsx(o.Fragment,{})},e={tags:["!test"],parameters:a({description:{story:"Extends CSS properties to support custom properties."},source:{code:d`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}})},r={parameters:a({description:{story:"Helper function to define CSS properties with type checking."},source:{code:d`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:()=>{const m=u({color:"red",fontSize:"16px","--custom-property":"10px"});l(m).toEqual({color:"red",fontSize:"16px","--custom-property":"10px"})}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,c,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const _=["TypeUsage","DefineFunction"];export{r as DefineFunction,e as TypeUsage,_ as __namedExportsOrder,g as default};
