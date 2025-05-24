import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{s as S}from"./show_doc_source-C3vs4U0A.js";import{d as a}from"./define_docs_param-lmgaBKCF.js";import{e as u}from"./index-Ba_wKnRg.js";import{d,a as l}from"./css-properties-CxNOGp8B.js";import"./index-yBjzXJbu.js";const z={title:"CSS Properties/CSSProperties",tags:["autodocs","code-only","new","version:1.0"],decorators:[S()],render:()=>o.jsx(o.Fragment,{})},e={tags:["!test"],parameters:a({description:{story:"Extends CSS properties to support custom properties."},source:{code:d`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}})},r={parameters:a({description:{story:"Helper function to define CSS properties with type checking."},source:{code:d`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),play:()=>{const m=l({color:"red",fontSize:"16px","--custom-property":"10px"});u(m).toEqual({color:"red",fontSize:"16px","--custom-property":"10px"})}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const D=["TypeUsage","DefineFunction"];export{r as DefineFunction,e as TypeUsage,D as __namedExportsOrder,z as default};
