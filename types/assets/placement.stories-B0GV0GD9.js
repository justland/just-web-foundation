import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r}from"./iframe-Rve8YS_4.js";import{n as i,r as a,t as o}from"./jsx-dev-runtime-CW5hOHGK.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),s=o(),c=`/home/runner/work/just-web-foundation/just-web-foundation/libs/types/src/placement.stories.tsx`,l={title:`Types/Placement`,tags:[`code-only`,`version:0.2`],render:()=>(0,s.jsxDEV)(s.Fragment,{},void 0,!1,{fileName:c,lineNumber:7,columnNumber:17},void 0)},u={parameters:n({description:{story:`Basic usage of Placement type with a single placement value.`},source:{code:i`
                import type { Placement } from '@just-web/types'

                const placement: Placement = 'top'
            `}}),decorators:[t()]},d={parameters:n({description:{story:`All available placement values in the Placement type.`},source:{code:i`
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
            `}}),decorators:[t()]},f={parameters:n({description:{story:`Using Placement type in component props for positioning elements like tooltips, popovers, or dropdowns.`},source:{code:i`
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
            `}}),decorators:[t()]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  decorators: [showSource()]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  decorators: [showSource()]
}`,...f.parameters?.docs?.source}}},p=[`BasicUsage`,`AllPlacementValues`,`ComponentUsage`]})))()}m();export{d as AllPlacementValues,u as BasicUsage,f as ComponentUsage,p as __namedExportsOrder,l as default};