import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,s as i}from"./iframe-DFQ_z_Nq.js";import{n as a,t as o}from"./dedent-DQaCLeUO.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{i(),a(),s=t(),c={title:`attributes/DataAttributeProps`,tags:[`type`,`version:3.3`],render:()=>(0,s.jsx)(s.Fragment,{})},l={parameters:n({description:{story:`Basic usage of DataAttributeProps with predefined attributes.`},source:{code:o`
                import type { DataAttributeProps } from '@just-web/toolkits'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            `}}),decorators:[r()]},u={parameters:n({description:{story:`Using custom data-* attributes with any value type.`},source:{code:o`
                import type { DataAttributeProps } from '@just-web/toolkits'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            `}}),decorators:[r()]},d={parameters:n({description:{story:`All attributes are optional, allowing for flexible usage.`},source:{code:o`
                import type { DataAttributeProps } from '@just-web/toolkits'

                // All attributes are optional
                const props: DataAttributeProps = {}
            `}}),decorators:[r()]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Basic usage of DataAttributeProps with predefined attributes.'
    },
    source: {
      code: dedent\`
                import type { DataAttributeProps } from '@just-web/toolkits'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            \`
    }
  }),
  decorators: [showSource()]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Using custom data-* attributes with any value type.'
    },
    source: {
      code: dedent\`
                import type { DataAttributeProps } from '@just-web/toolkits'

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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'All attributes are optional, allowing for flexible usage.'
    },
    source: {
      code: dedent\`
                import type { DataAttributeProps } from '@just-web/toolkits'

                // All attributes are optional
                const props: DataAttributeProps = {}
            \`
    }
  }),
  decorators: [showSource()]
}`,...d.parameters?.docs?.source}}},f=[`BasicUsage`,`CustomDataAttributes`,`OptionalAttributes`]})))()}p();export{l as BasicUsage,u as CustomDataAttributes,d as OptionalAttributes,f as __namedExportsOrder,c as default};