import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as t}from"./define_docs_param-lmgaBKCF.js";import{s as c}from"./show_doc_source-C3vs4U0A.js";import{d as n}from"./dedent-DVFkJXTl.js";import"./index-yBjzXJbu.js";const u={title:"Types/ClassNameProps",tags:["code-only"],render:()=>o.jsx("div",{})},s={tags:["!test"],parameters:t({description:{story:"The className property accepts a string value for CSS class names."},source:{code:n`import type { ClassNameProps } from '@just-web/css'

            const Component = ({ className, children }: PropsWithChildren<ClassNameProps>) => {
                return <div className={className}>{children}</div>
            }
            `}}),decorators:[c()]};var e,r,a;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: defineDocsParam({
    description: {
      story: 'The className property accepts a string value for CSS class names.'
    },
    source: {
      code: dedent\`import type { ClassNameProps } from '@just-web/css'

            const Component = ({ className, children }: PropsWithChildren<ClassNameProps>) => {
                return <div className={className}>{children}</div>
            }
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...(a=(r=s.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const N=["TypicalUsage"];export{s as TypicalUsage,N as __namedExportsOrder,u as default};
