import{j as o,w as n,s as i,d as s}from"./iframe-B48FOIX8.js";import{d as r}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"attributes/DataAttribute",tags:["type","version:next"],render:()=>o.jsx(o.Fragment,{})},t={name:"Well-known attributes",parameters:s({description:{story:"Supports auto-completion for well-known data attribute names."},source:{code:r`
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
            `}}),decorators:[n(),i()],play(){}},a={parameters:s({description:{story:"Use Pick<T, K> to restrict props to only the data attributes needed, improving type safety and documentation."},source:{code:r`
                import type { DataAttribute } from '@just-web/toolkits'

                // Theme switcher only needs data-theme
                type ThemeSwitcherProps = Pick<DataAttributeProps, 'data-theme'>

                // Testable component only needs data-testid
                type TestableProps = Pick<DataAttributeProps, 'data-testid'>
            `}}),decorators:[n(),i()]},e={parameters:s({description:{story:"You can use it for arbitrary data-* attributes."},source:{code:r`
                import type { DataAttribute } from '#just-web/toolkits'

                // Custom data attributes (data-\${string})
                const custom: DataAttribute = 'data-custom-name'
            `}}),decorators:[n(),i()],play(){}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  decorators: [withStoryCard(), showDocSource()],
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  decorators: [withStoryCard(), showDocSource()]
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'You can use it for arbitrary data-* attributes.'
    },
    source: {
      code: dedent\`
                import type { DataAttribute } from '#just-web/toolkits'

                // Custom data attributes (data-\\\${string})
                const custom: DataAttribute = 'data-custom-name'
            \`
    }
  }),
  decorators: [withStoryCard(), showDocSource()],
  play() {
    isType<DataAttribute>('data-custom-name');
  }
}`,...e.parameters?.docs?.source}}};const p=["WellKnownAttributes","PickAttributes","CustomDataAttributes"];export{e as CustomDataAttributes,a as PickAttributes,t as WellKnownAttributes,p as __namedExportsOrder,b as default};
