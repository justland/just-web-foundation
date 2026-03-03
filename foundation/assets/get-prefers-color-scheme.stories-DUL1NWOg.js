import{j as e,d as s,w as n,s as a,S as d}from"./iframe-D_6mvhRd.js";import{g as l}from"./get-prefers-color-scheme-C16oSBYU.js";import"./preload-helper-PPVm8Dsz.js";const h=`/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Even if the browser preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * When \`matchMedia\` is unavailable (e.g. SSR), returns \`defaultColorScheme\`.
 *
 * @param defaultColorScheme - Fallback when \`matchMedia\` is unavailable (default: \`'light'\`)
 * @returns 'light' or 'dark'
 */
export function getPrefersColorScheme(
	defaultColorScheme: 'light' | 'dark' = 'light'
): 'light' | 'dark' {
	if (typeof matchMedia === 'undefined') return defaultColorScheme
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
`,p={title:"color-scheme/getPrefersColorTheme",tags:["func","version:1.0"],parameters:s({description:{component:'A utility function that returns the current preferred color scheme. It can only be "light" or "dark".'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:s({source:{code:'getPrefersColorScheme(): "light" | "dark"'}}),decorators:[n({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersColorScheme()"})," reads the current ",e.jsx("code",{children:"prefers-color-scheme"})," ","value."]}),e.jsxs("p",{children:["Accepts optional ",e.jsx("code",{children:"defaultColorScheme"})," (default ",e.jsx("code",{children:"'light'"}),") returned when ",e.jsx("code",{children:"matchMedia"})," is unavailable (e.g. SSR)."]}),e.jsxs("p",{children:["Use this when you need a one-off read of the user's color scheme (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use"," ",e.jsx("code",{children:"observePrefersColorScheme"})," instead."]})]})}),a()],render:()=>{const c=l();return e.jsxs(d,{title:"Current Color Scheme Preference (prefers-color-scheme)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})," mode"]})}},o={name:"defaultColorScheme",tags:["props"],parameters:s({source:{code:"getPrefersColorScheme('dark'): 'light' | 'dark'"}}),decorators:[n({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersColorScheme('dark')"})," returns ",e.jsx("code",{children:"'dark'"})," when"," ",e.jsx("code",{children:"matchMedia"})," is unavailable (SSR, test env). In the browser, it returns the real system preference."]})})}),a()],render:()=>{const c=l("dark");return e.jsxs(d,{title:"With defaultColorScheme: 'dark'",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})," mode"]})}},t={tags:["source"],parameters:s({source:{code:h}}),decorators:[a()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
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
                        Accepts optional <code>defaultColorScheme</code> (default <code>'light'</code>) returned
                        when <code>matchMedia</code> is unavailable (e.g. SSR).
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's color scheme (e.g. for initial
                        render or non-reactive logic). For reactive updates when the preference changes, use{' '}
                        <code>observePrefersColorScheme</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const scheme = getPrefersColorScheme();
    return <StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
                Your system is currently set to: <strong>{scheme}</strong> mode
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'defaultColorScheme',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getPrefersColorScheme('dark'): 'light' | 'dark'"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersColorScheme('dark')</code> returns <code>'dark'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
                        real system preference.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const scheme = getPrefersColorScheme('dark');
    return <StoryCard title="With defaultColorScheme: 'dark'" appearance="output">
                Your system is currently set to: <strong>{scheme}</strong> mode
            </StoryCard>;
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...t.parameters?.docs?.source}}};const f=["BasicUsage","WithDefaultColorScheme","Source"];export{r as BasicUsage,t as Source,o as WithDefaultColorScheme,f as __namedExportsOrder,p as default};
