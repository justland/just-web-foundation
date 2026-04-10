import{j as n,s as a,d as o}from"./iframe-iPCJU1fP.js";import{d as s}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"attributes/DataAttributeProps",tags:["type","version:next"],render:()=>n.jsx(n.Fragment,{})},t={parameters:o({description:{story:"Basic usage of DataAttributeProps with predefined attributes."},source:{code:s`
                import type { DataAttributeProps } from '@just-web/toolkits'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            `}}),decorators:[a()]},e={parameters:o({description:{story:"Using custom data-* attributes with any value type."},source:{code:s`
                import type { DataAttributeProps } from '@just-web/toolkits'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            `}}),decorators:[a()]},r={parameters:o({description:{story:"All attributes are optional, allowing for flexible usage."},source:{code:s`
                import type { DataAttributeProps } from '@just-web/toolkits'

                // All attributes are optional
                const props: DataAttributeProps = {}
            `}}),decorators:[a()]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const d=["BasicUsage","CustomDataAttributes","OptionalAttributes"];export{t as BasicUsage,e as CustomDataAttributes,r as OptionalAttributes,d as __namedExportsOrder,p as default};
