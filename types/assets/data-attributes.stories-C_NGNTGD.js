import{j as n,s as a,d as s}from"./iframe-CzrbZm0Q.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Types/DataAttributeProps",tags:["code-only"],render:()=>n.jsx(n.Fragment,{})},t={parameters:s({description:{story:"Basic usage of DataAttributeProps with predefined attributes."},source:{code:o`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            `}}),decorators:[a()]},e={parameters:s({description:{story:"Using custom data-* attributes with any value type."},source:{code:o`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            `}}),decorators:[a()]},r={parameters:s({description:{story:"All attributes are optional, allowing for flexible usage."},source:{code:o`
                import type { DataAttributeProps } from '@just-web/types'

                // All attributes are optional
                const props: DataAttributeProps = {}
            `}}),decorators:[a()]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const d=["BasicUsage","CustomDataAttributes","OptionalAttributes"];export{t as BasicUsage,e as CustomDataAttributes,r as OptionalAttributes,d as __namedExportsOrder,u as default};
