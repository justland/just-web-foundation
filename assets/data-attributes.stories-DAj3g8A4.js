import{j as n}from"./jsx-dev-runtime-DF-ftqEI.js";import{s as a,d as s}from"./iframe-DMM-er1z.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Types/DataAttributeProps",tags:["code-only"],render:()=>n.jsxDEV(n.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/types/src/data-attributes.stories.tsx",lineNumber:7,columnNumber:17},void 0)},t={parameters:s({description:{story:"Basic usage of DataAttributeProps with predefined attributes."},source:{code:o`
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
  decorators: [showSource()]
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
  decorators: [showSource()]
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
  decorators: [showSource()]
}`,...r.parameters?.docs?.source}}};const m=["BasicUsage","CustomDataAttributes","OptionalAttributes"];export{t as BasicUsage,e as CustomDataAttributes,r as OptionalAttributes,m as __namedExportsOrder,d as default};
