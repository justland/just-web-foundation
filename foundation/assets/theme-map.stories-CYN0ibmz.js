import{j as e,w as l,s as o,d as m}from"./iframe-B5WlOR2G.js";import{d as i}from"./dedent-BuYMbVyj.js";import{t as c}from"./theme-entry-D4S_RAMB.js";import{T as n}from"./theme-result-card-y1WSL0xe.js";import"./preload-helper-PPVm8Dsz.js";import"./append-id-Vsg144gU.js";const d=`/**
 * Record mapping theme keys to their values.
 * Each value can be a single string or readonly string[] (e.g. multiple CSS classes).
 * Used by all ThemeStore factories via the themes option.
 */
export type ThemeMap<Theme extends string = string> = Record<Theme, string | readonly string[]>
`,R={title:"theme/ThemeMap",tags:["type","version:next"],render:()=>e.jsx(e.Fragment,{})},u={current:"theme-current",grayscale:"theme-grayscale"},t={name:"string value",tags:["use-case"],parameters:m({description:{story:"Each theme maps to a single string. Most common case."}}),decorators:[l({content:e.jsxs("p",{children:[e.jsx("code",{children:"themes"})," values can be a single string per theme (e.g."," ",e.jsx("code",{children:"{ current: 'theme-current' }"}),")."]})}),o({source:i`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale'
                } as const

                themeResult('current', themes)
            `})],render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n,{title:"themeResult('current', themes)","data-testid":"string-result",result:c(u,"current")})})},g={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"]},r={name:"array value",tags:["use-case"],parameters:m({description:{story:"Values can be string[] for multiple tokens (e.g. multiple CSS classes). classNameThemeStore applies all; dataAttributeThemeStore uses first only."}}),decorators:[l({content:e.jsxs("p",{children:[e.jsx("code",{children:"themes"})," values can be ",e.jsx("code",{children:"readonly string[]"})," (e.g."," ",e.jsx("code",{children:"{ grayscale: ['theme-grayscale', 'app:bg-gray-100'] }"}),")."]})}),o({source:i`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100']
                } as const

                themeResult('grayscale', themes)
            `})],render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n,{title:"themeResult('grayscale', themes)","data-testid":"array-result",result:c(g,"grayscale")})})},h={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},s={name:"mixed",tags:["use-case"],parameters:m({description:{story:"Themes can mix string and string[] values."}}),decorators:[l({content:e.jsxs("p",{children:["Mix string and array values in the same ",e.jsx("code",{children:"themes"}),"."]})}),o({source:i`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                themeResult('current', themes)
                themeResult('grayscale', themes)
            `})],render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{title:"themeResult('current', themes)","data-testid":"mixed-string-result",result:c(h,"current")}),e.jsx(n,{title:"themeResult('grayscale', themes)","data-testid":"mixed-array-result",result:c(h,"grayscale")})]})},a={tags:["source"],parameters:m({source:{code:d}}),decorators:[o()]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'string value',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Each theme maps to a single string. Most common case.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>themes</code> values can be a single string per theme (e.g.{' '}
                    <code>{\`{ current: 'theme-current' }\`}</code>).
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale'
                } as const

                themeResult('current', themes)
            \`
  })],
  render: () => <div className="flex flex-col gap-4">
            <ThemeResultCard title="themeResult('current', themes)" data-testid="string-result" result={themeEntry(themesString, 'current')} />
        </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'array value',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Values can be string[] for multiple tokens (e.g. multiple CSS classes). classNameThemeStore applies all; dataAttributeThemeStore uses first only.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>themes</code> values can be <code>readonly string[]</code> (e.g.{' '}
                    <code>{\`{ grayscale: ['theme-grayscale', 'app:bg-gray-100'] }\`}</code>).
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100']
                } as const

                themeResult('grayscale', themes)
            \`
  })],
  render: () => <div className="flex flex-col gap-4">
            <ThemeResultCard title="themeResult('grayscale', themes)" data-testid="array-result" result={themeEntry(themesArray, 'grayscale')} />
        </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'mixed',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Themes can mix string and string[] values.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Mix string and array values in the same <code>themes</code>.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                themeResult('current', themes)
                themeResult('grayscale', themes)
            \`
  })],
  render: () => <div className="flex flex-col gap-4">
            <ThemeResultCard title="themeResult('current', themes)" data-testid="mixed-string-result" result={themeEntry(themesMixed, 'current')} />
            <ThemeResultCard title="themeResult('grayscale', themes)" data-testid="mixed-array-result" result={themeEntry(themesMixed, 'grayscale')} />
        </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const j=["StringValue","ArrayValue","Mixed","Source"];export{r as ArrayValue,s as Mixed,a as Source,t as StringValue,j as __namedExportsOrder,R as default};
