import{j as s}from"./jsx-dev-runtime-DF-ftqEI.js";import{s as n,d as c}from"./iframe-DwJbHN0e.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Types/Placement",tags:["code-only","version:next"],render:()=>s.jsxDEV(s.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/types/src/placement.stories.tsx",lineNumber:7,columnNumber:17},void 0)},t={parameters:c({description:{story:"Basic usage of Placement type with a single placement value."},source:{code:a`
                import type { Placement } from '@just-web/types'

                const placement: Placement = 'top'
            `}}),decorators:[n()]},e={parameters:c({description:{story:"All available placement values in the Placement type."},source:{code:a`
                import type { Placement } from '@just-web/types'

                // Vertical placements
                const top: Placement = 'top'
                const topLeft: Placement = 'top left'
                const topRight: Placement = 'top right'
                const topStart: Placement = 'top start'
                const topEnd: Placement = 'top end'

                const bottom: Placement = 'bottom'
                const bottomLeft: Placement = 'bottom left'
                const bottomRight: Placement = 'bottom right'
                const bottomStart: Placement = 'bottom start'
                const bottomEnd: Placement = 'bottom end'

                // Horizontal placements
                const left: Placement = 'left'
                const leftTop: Placement = 'left top'
                const leftBottom: Placement = 'left bottom'

                const right: Placement = 'right'
                const rightTop: Placement = 'right top'
                const rightBottom: Placement = 'right bottom'

                // Logical placements
                const start: Placement = 'start'
                const startTop: Placement = 'start top'
                const startBottom: Placement = 'start bottom'

                const end: Placement = 'end'
                const endTop: Placement = 'end top'
                const endBottom: Placement = 'end bottom'
            `}}),decorators:[n()]},o={parameters:c({description:{story:"Using Placement type in component props for positioning elements like tooltips, popovers, or dropdowns."},source:{code:a`
                import type { Placement } from '@just-web/types'

                interface TooltipProps {
                    placement: Placement
                    content: string
                }

                const Tooltip = ({ placement, content }: TooltipProps) => {
                    return (
                        <div data-placement={placement}>
                            {content}
                        </div>
                    )
                }

                // Usage
                <Tooltip placement="top" content="Tooltip content" />
                <Tooltip placement="bottom start" content="Another tooltip" />
            `}}),decorators:[n()]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Basic usage of Placement type with a single placement value.'
    },
    source: {
      code: dedent\`
                import type { Placement } from '@just-web/types'

                const placement: Placement = 'top'
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'All available placement values in the Placement type.'
    },
    source: {
      code: dedent\`
                import type { Placement } from '@just-web/types'

                // Vertical placements
                const top: Placement = 'top'
                const topLeft: Placement = 'top left'
                const topRight: Placement = 'top right'
                const topStart: Placement = 'top start'
                const topEnd: Placement = 'top end'

                const bottom: Placement = 'bottom'
                const bottomLeft: Placement = 'bottom left'
                const bottomRight: Placement = 'bottom right'
                const bottomStart: Placement = 'bottom start'
                const bottomEnd: Placement = 'bottom end'

                // Horizontal placements
                const left: Placement = 'left'
                const leftTop: Placement = 'left top'
                const leftBottom: Placement = 'left bottom'

                const right: Placement = 'right'
                const rightTop: Placement = 'right top'
                const rightBottom: Placement = 'right bottom'

                // Logical placements
                const start: Placement = 'start'
                const startTop: Placement = 'start top'
                const startBottom: Placement = 'start bottom'

                const end: Placement = 'end'
                const endTop: Placement = 'end top'
                const endBottom: Placement = 'end bottom'
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Using Placement type in component props for positioning elements like tooltips, popovers, or dropdowns.'
    },
    source: {
      code: dedent\`
                import type { Placement } from '@just-web/types'

                interface TooltipProps {
                    placement: Placement
                    content: string
                }

                const Tooltip = ({ placement, content }: TooltipProps) => {
                    return (
                        <div data-placement={placement}>
                            {content}
                        </div>
                    )
                }

                // Usage
                <Tooltip placement="top" content="Tooltip content" />
                <Tooltip placement="bottom start" content="Another tooltip" />
            \`
    }
  }),
  decorators: [showDocSource()]
}`,...o.parameters?.docs?.source}}};const d=["BasicUsage","AllPlacementValues","ComponentUsage"];export{e as AllPlacementValues,t as BasicUsage,o as ComponentUsage,d as __namedExportsOrder,i as default};
