import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d as p}from"./define_docs_param-lmgaBKCF.js";import{s as n}from"./show_doc_source-C3vs4U0A.js";import{d as c}from"./dedent-DVFkJXTl.js";import"./index-yBjzXJbu.js";const S={title:"Types/CSSProperties",tags:["code-only"],render:()=>r.jsx(r.Fragment,{})},e={tags:["!test"],parameters:p({description:{story:"Extends CSS properties to include custom properties."},source:{code:c`import type { CSSProperties } from '@just-web/types'

            let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[n()]};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Extends CSS properties to include custom properties.'
    },
    source: {
      code: dedent\`import type { CSSProperties } from '@just-web/types'

            let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const l=["TypicalUsage"];export{e as TypicalUsage,l as __namedExportsOrder,S as default};
