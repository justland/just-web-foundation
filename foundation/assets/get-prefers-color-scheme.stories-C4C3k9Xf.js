import{j as e,d as s,w as a,s as t,S as n}from"./iframe-CLeheNnJ.js";import{g as d}from"./get-prefers-color-scheme-BGoLu2Q0.js";import"./preload-helper-PPVm8Dsz.js";const i=`/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Even if the browser preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * @returns 'light' or 'dark'
 */
export function getPrefersColorScheme() {
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
`,u={title:"color-scheme/getPrefersColorTheme",tags:["func","version:next"],parameters:s({description:{component:'A utility function that returns the current preferred color scheme. It can only be "light" or "dark".'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:s({description:{story:"Read the current `prefers-color-scheme` value."},source:{code:'getPrefersColorScheme(): "light" | "dark"'}}),decorators:[a({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersColorScheme()"})," reads the current ",e.jsx("code",{children:"prefers-color-scheme"})," ","value."]}),e.jsxs("p",{children:["Use this when you need a one-off read of the user's color scheme (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use"," ",e.jsx("code",{children:"observePrefersColorScheme"})," instead."]})]})}),t({placement:"before"})],render:()=>{const c=d();return e.jsxs(n,{title:"Current Color Scheme Preference (prefers-color-scheme)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})," mode"]})}},o={tags:["source"],parameters:s({source:{code:i}}),decorators:[t()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Read the current \`prefers-color-scheme\` value.'
    },
    source: {
      code: 'getPrefersColorScheme(): "light" | "dark"'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersColorScheme()</code> reads the current <code>prefers-color-scheme</code>{' '}
                        value.
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's color scheme (e.g. for initial
                        render or non-reactive logic). For reactive updates when the preference changes, use{' '}
                        <code>observePrefersColorScheme</code> instead.
                    </p>
                </div>
  }), showDocSource({
    placement: 'before'
  })],
  render: () => {
    const scheme = getPrefersColorScheme();
    return <StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
                Your system is currently set to: <strong>{scheme}</strong> mode
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showDocSource()]
}`,...o.parameters?.docs?.source}}};const p=["BasicUsage","Source"];export{r as BasicUsage,o as Source,p as __namedExportsOrder,u as default};
