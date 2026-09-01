import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r}from"./iframe-Rve8YS_4.js";import{n as i,r as a,t as o}from"./jsx-dev-runtime-CW5hOHGK.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),s=o(),c=`/home/runner/work/just-web-foundation/just-web-foundation/libs/types/src/data-attributes.stories.tsx`,l={title:`Types/DataAttributeProps`,tags:[`code-only`],render:()=>(0,s.jsxDEV)(s.Fragment,{},void 0,!1,{fileName:c,lineNumber:7,columnNumber:17},void 0)},u={parameters:n({description:{story:`Basic usage of DataAttributeProps with predefined attributes.`},source:{code:i`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            `}}),decorators:[t()]},d={parameters:n({description:{story:`Using custom data-* attributes with any value type.`},source:{code:i`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            `}}),decorators:[t()]},f={parameters:n({description:{story:`All attributes are optional, allowing for flexible usage.`},source:{code:i`
                import type { DataAttributeProps } from '@just-web/types'

                // All attributes are optional
                const props: DataAttributeProps = {}
            `}}),decorators:[t()]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  decorators: [showSource()]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  decorators: [showSource()]
}`,...f.parameters?.docs?.source}}},p=[`BasicUsage`,`CustomDataAttributes`,`OptionalAttributes`]})))()}m();export{u as BasicUsage,d as CustomDataAttributes,f as OptionalAttributes,p as __namedExportsOrder,l as default};