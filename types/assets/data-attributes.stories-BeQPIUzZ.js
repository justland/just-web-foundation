import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as s,a as o}from"./dedent-qYDPJrKz.js";function n(){return(A,{parameters:P})=>{var i,c;return t.jsxs("section",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx("pre",{children:(c=(i=P.docs)==null?void 0:i.source)==null?void 0:c.code}),t.jsx(A,{})]})}}const j={title:"Types/DataAttributeProps",tags:["code-only"],render:()=>t.jsx(t.Fragment,{})},e={parameters:s({description:{story:"Basic usage of DataAttributeProps with predefined attributes."},source:{code:o`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            `}}),decorators:[n()]},r={parameters:s({description:{story:"Using custom data-* attributes with any value type."},source:{code:o`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            `}}),decorators:[n()]},a={parameters:s({description:{story:"All attributes are optional, allowing for flexible usage."},source:{code:o`
                import type { DataAttributeProps } from '@just-web/types'

                // All attributes are optional
                const props: DataAttributeProps = {}
            `}}),decorators:[n()]};var p,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Basic usage of DataAttributeProps with predefined attributes.'
    },
    source: {
      code: dedent\`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,b,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Using custom data-* attributes with any value type.'
    },
    source: {
      code: dedent\`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...(l=(b=r.parameters)==null?void 0:b.docs)==null?void 0:l.source}}};var f,y,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'All attributes are optional, allowing for flexible usage.'
    },
    source: {
      code: dedent\`
                import type { DataAttributeProps } from '@just-web/types'

                // All attributes are optional
                const props: DataAttributeProps = {}
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const x=["BasicUsage","CustomDataAttributes","OptionalAttributes"];export{e as BasicUsage,r as CustomDataAttributes,a as OptionalAttributes,x as __namedExportsOrder,j as default};
