import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./theme-entry-Cs_OPpJC.js";import{n as u,t as d}from"./theme-result-card-DmTK1KKZ.js";var f;function p(){return(p=e((()=>{f=`/**
 * Polymorphic theme value: string, array, or object with themeValue.
 * The object form allows storing extra user metadata in persistent stores (localStorage, etc.).
 */
export type ThemeMapValue = string | readonly string[] | { themeValue: string | readonly string[] }

/**
 * Record mapping theme keys to their values.
 * Each value can be a single string, readonly string[] (e.g. multiple CSS classes),
 * or { themeValue: string | string[] } for polymorphic values with extra metadata.
 * Used by all ThemeStore factories via the themes option.
 */
export type ThemeMap<Theme extends string = string> = Record<Theme, ThemeMapValue>
`})))()}var m=t({ArrayValue:()=>b,Mixed:()=>S,Source:()=>C,StringValue:()=>v,__namedExportsOrder:()=>w,default:()=>g}),h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{o(),s(),u(),p(),h=n(),g={title:`theme/ThemeMap`,tags:[`type`,`version:1.0`],render:()=>(0,h.jsx)(h.Fragment,{})},_={current:`theme-current`,grayscale:`theme-grayscale`},v={name:`string value`,tags:[`use-case`],parameters:r({description:{story:`Each theme maps to a single string. Most common case.`}}),decorators:[a({content:(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`code`,{children:`themes`}),` values can be a single string per theme (e.g.`,` `,(0,h.jsx)(`code`,{children:`{ current: 'theme-current' }`}),`).`]})}),i({source:c`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale'
                } as const

                themeResult('current', themes)
            `})],render:()=>(0,h.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,h.jsx)(d,{title:`themeResult('current', themes)`,"data-testid":`string-result`,result:l(_,`current`)})})},y={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`]},b={name:`array value`,tags:[`use-case`],parameters:r({description:{story:`Values can be string[] for multiple tokens (e.g. multiple CSS classes). classNameThemeStore applies all; dataAttributeThemeStore uses first only.`}}),decorators:[a({content:(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`code`,{children:`themes`}),` values can be `,(0,h.jsx)(`code`,{children:`readonly string[]`}),` (e.g.`,` `,(0,h.jsx)(`code`,{children:`{ grayscale: ['theme-grayscale', 'app:bg-gray-100'] }`}),`).`]})}),i({source:c`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100']
                } as const

                themeResult('grayscale', themes)
            `})],render:()=>(0,h.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,h.jsx)(d,{title:`themeResult('grayscale', themes)`,"data-testid":`array-result`,result:l(y,`grayscale`)})})},x={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},S={name:`mixed`,tags:[`use-case`],parameters:r({description:{story:`Themes can mix string and string[] values.`}}),decorators:[a({content:(0,h.jsxs)(`p`,{children:[`Mix string and array values in the same `,(0,h.jsx)(`code`,{children:`themes`}),`.`]})}),i({source:c`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                themeResult('current', themes)
                themeResult('grayscale', themes)
            `})],render:()=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsx)(d,{title:`themeResult('current', themes)`,"data-testid":`mixed-string-result`,result:l(x,`current`)}),(0,h.jsx)(d,{title:`themeResult('grayscale', themes)`,"data-testid":`mixed-array-result`,result:l(x,`grayscale`)})]})},C={tags:[`source`],parameters:r({source:{code:f}}),decorators:[i()]},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...C.parameters?.docs?.source}}},w=[`StringValue`,`ArrayValue`,`Mixed`,`Source`]})))()}export{g as n,m as r,T as t};