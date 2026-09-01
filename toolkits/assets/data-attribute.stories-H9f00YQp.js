import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-BJVp8-w1.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";function c(e,t){return!t||!!t(e)}function l(e){return!0}function u(){return(u=e((()=>{c.t=function(e){return e===void 0||e===!0},c.f=function(e){return e===void 0||e===!1},c.never=l,c.equal=function(){}})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{a(),o(),u(),d=t(),f={title:`attributes/DataAttribute`,tags:[`type`,`version:1.0`],render:()=>(0,d.jsx)(d.Fragment,{})},p={name:`Well-known attributes`,parameters:n({description:{story:`Supports auto-completion for well-known data attribute names.`},source:{code:s`
                import type { DataAttribute } from '@just-web/toolkits'

                // Testing & analytics
                const testId: DataAttribute = 'data-testid'
                const metrics: DataAttribute = 'data-metrics'

                // Component state (Radix/shadcn pattern)
                const state: DataAttribute = 'data-state'
                const orientation: DataAttribute = 'data-orientation'
                const side: DataAttribute = 'data-side'
                const align: DataAttribute = 'data-align'
                const placement: DataAttribute = 'data-placement'

                // Common UI state
                const loading: DataAttribute = 'data-loading'
                const disabled: DataAttribute = 'data-disabled'
                const selected: DataAttribute = 'data-selected'
                const checked: DataAttribute = 'data-checked'
                const expanded: DataAttribute = 'data-expanded'
                const highlighted: DataAttribute = 'data-highlighted'
                const active: DataAttribute = 'data-active'
                const open: DataAttribute = 'data-open'
                const pressed: DataAttribute = 'data-pressed'

                // Content / value
                const value: DataAttribute = 'data-value'
                const id: DataAttribute = 'data-id'
                const name: DataAttribute = 'data-name'
                const typeAttr: DataAttribute = 'data-type'
                const label: DataAttribute = 'data-label'
                const key: DataAttribute = 'data-key'
                const index: DataAttribute = 'data-index'
                const position: DataAttribute = 'data-position'

                // Design system / theming
                const variant: DataAttribute = 'data-variant'
                const size: DataAttribute = 'data-size'
                const theme: DataAttribute = 'data-theme'
                const color: DataAttribute = 'data-color'
                const intent: DataAttribute = 'data-intent'
            `}}),decorators:[i(),r()],play(){c(`data-metrics`),c(`data-state`),c(`data-orientation`),c(`data-side`),c(`data-align`),c(`data-placement`),c(`data-loading`),c(`data-disabled`),c(`data-selected`),c(`data-checked`),c(`data-expanded`),c(`data-highlighted`),c(`data-active`),c(`data-open`),c(`data-pressed`),c(`data-value`),c(`data-id`),c(`data-name`),c(`data-type`),c(`data-label`),c(`data-key`),c(`data-index`),c(`data-position`),c(`data-variant`),c(`data-size`),c(`data-theme`),c(`data-color`),c(`data-intent`)}},m={parameters:n({description:{story:`Use Pick<T, K> to restrict props to only the data attributes needed, improving type safety and documentation.`},source:{code:s`
                import type { DataAttribute } from '@just-web/toolkits'

                // Theme switcher only needs data-theme
                type ThemeSwitcherProps = Pick<DataAttributeProps, 'data-theme'>

                // Testable component only needs data-testid
                type TestableProps = Pick<DataAttributeProps, 'data-testid'>
            `}}),decorators:[i(),r()]},h={parameters:n({description:{story:`You can use it for arbitrary data-* attributes.`},source:{code:s`
                import type { DataAttribute } from '@just-web/toolkits'

                // Custom data attributes (data-\${string})
                const custom: DataAttribute = 'data-custom-name'
            `}}),decorators:[i(),r()],play(){c(`data-custom-name`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Well-known attributes',
  parameters: defineDocsParam({
    description: {
      story: 'Supports auto-completion for well-known data attribute names.'
    },
    source: {
      code: dedent\`
                import type { DataAttribute } from '@just-web/toolkits'

                // Testing & analytics
                const testId: DataAttribute = 'data-testid'
                const metrics: DataAttribute = 'data-metrics'

                // Component state (Radix/shadcn pattern)
                const state: DataAttribute = 'data-state'
                const orientation: DataAttribute = 'data-orientation'
                const side: DataAttribute = 'data-side'
                const align: DataAttribute = 'data-align'
                const placement: DataAttribute = 'data-placement'

                // Common UI state
                const loading: DataAttribute = 'data-loading'
                const disabled: DataAttribute = 'data-disabled'
                const selected: DataAttribute = 'data-selected'
                const checked: DataAttribute = 'data-checked'
                const expanded: DataAttribute = 'data-expanded'
                const highlighted: DataAttribute = 'data-highlighted'
                const active: DataAttribute = 'data-active'
                const open: DataAttribute = 'data-open'
                const pressed: DataAttribute = 'data-pressed'

                // Content / value
                const value: DataAttribute = 'data-value'
                const id: DataAttribute = 'data-id'
                const name: DataAttribute = 'data-name'
                const typeAttr: DataAttribute = 'data-type'
                const label: DataAttribute = 'data-label'
                const key: DataAttribute = 'data-key'
                const index: DataAttribute = 'data-index'
                const position: DataAttribute = 'data-position'

                // Design system / theming
                const variant: DataAttribute = 'data-variant'
                const size: DataAttribute = 'data-size'
                const theme: DataAttribute = 'data-theme'
                const color: DataAttribute = 'data-color'
                const intent: DataAttribute = 'data-intent'
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  play() {
    isType<DataAttribute>('data-metrics');
    isType<DataAttribute>('data-state');
    isType<DataAttribute>('data-orientation');
    isType<DataAttribute>('data-side');
    isType<DataAttribute>('data-align');
    isType<DataAttribute>('data-placement');
    isType<DataAttribute>('data-loading');
    isType<DataAttribute>('data-disabled');
    isType<DataAttribute>('data-selected');
    isType<DataAttribute>('data-checked');
    isType<DataAttribute>('data-expanded');
    isType<DataAttribute>('data-highlighted');
    isType<DataAttribute>('data-active');
    isType<DataAttribute>('data-open');
    isType<DataAttribute>('data-pressed');
    isType<DataAttribute>('data-value');
    isType<DataAttribute>('data-id');
    isType<DataAttribute>('data-name');
    isType<DataAttribute>('data-type');
    isType<DataAttribute>('data-label');
    isType<DataAttribute>('data-key');
    isType<DataAttribute>('data-index');
    isType<DataAttribute>('data-position');
    isType<DataAttribute>('data-variant');
    isType<DataAttribute>('data-size');
    isType<DataAttribute>('data-theme');
    isType<DataAttribute>('data-color');
    isType<DataAttribute>('data-intent');
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Use Pick<T, K> to restrict props to only the data attributes needed, improving type safety and documentation.'
    },
    source: {
      code: dedent\`
                import type { DataAttribute } from '@just-web/toolkits'

                // Theme switcher only needs data-theme
                type ThemeSwitcherProps = Pick<DataAttributeProps, 'data-theme'>

                // Testable component only needs data-testid
                type TestableProps = Pick<DataAttributeProps, 'data-testid'>
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'You can use it for arbitrary data-* attributes.'
    },
    source: {
      code: dedent\`
                import type { DataAttribute } from '@just-web/toolkits'

                // Custom data attributes (data-\\\${string})
                const custom: DataAttribute = 'data-custom-name'
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  play() {
    isType<DataAttribute>('data-custom-name');
  }
}`,...h.parameters?.docs?.source}}},g=[`WellKnownAttributes`,`PickAttributes`,`CustomDataAttributes`]})))()}_();export{h as CustomDataAttributes,m as PickAttributes,p as WellKnownAttributes,g as __namedExportsOrder,f as default};