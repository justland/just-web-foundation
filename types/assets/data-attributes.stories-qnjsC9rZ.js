import{j as n,d as a}from"./dedent-BMYINSXx.js";import{s,d as o}from"./iframe-B0S1SE3W.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Types/DataAttributeProps",tags:["code-only"],render:()=>n.jsxDEV(n.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/types/src/data-attributes.stories.tsx",lineNumber:7,columnNumber:17},void 0)},t={parameters:o({description:{story:"Basic usage of DataAttributeProps with predefined attributes."},source:{code:a`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'button-click',
                    'data-testid': 'submit-button'
                }
            `}}),decorators:[s()]},e={parameters:o({description:{story:"Using custom data-* attributes with any value type."},source:{code:a`
                import type { DataAttributeProps } from '@just-web/types'

                const props: DataAttributeProps = {
                    'data-metrics': 'form-submit',
                    'data-testid': 'contact-form',
                    'data-custom': 'value',
                    'data-count': 42,
                    'data-enabled': true
                }
            `}}),decorators:[s()]},r={parameters:o({description:{story:"All attributes are optional, allowing for flexible usage."},source:{code:a`
                import type { DataAttributeProps } from '@just-web/types'

                // All attributes are optional
                const props: DataAttributeProps = {}
            `}}),decorators:[s()]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const d=["BasicUsage","CustomDataAttributes","OptionalAttributes"];export{t as BasicUsage,e as CustomDataAttributes,r as OptionalAttributes,d as __namedExportsOrder,p as default};
