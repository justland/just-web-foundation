import{r as d,j as e,d as c,w as m,s as a,S as l}from"./iframe-6HRzXnzl.js";import{d as i}from"./dedent-BuYMbVyj.js";import{g as h}from"./get-prefers-color-scheme-C16oSBYU.js";import{o as f}from"./observe-prefers-color-scheme-DjdBdD7G.js";import"./preload-helper-PPVm8Dsz.js";function u(r="light"){const[p,n]=d.useState(()=>h(r));return d.useEffect(()=>(n(h()),f(n)),[]),p}const S=`import { useEffect, useState } from 'react'
import { getPrefersColorScheme } from '../../color-scheme/get-prefers-color-scheme.ts'
import { observePrefersColorScheme } from '../../color-scheme/observe-prefers-color-scheme.ts'

/**
 * React hook that returns the current system color scheme preference and re-renders when it changes.
 *
 * Uses \`prefers-color-scheme\` media query. Returns \`'light'\` or \`'dark'\`; re-renders when the user
 * changes their OS or browser light/dark setting.
 *
 * For SSR, uses \`defaultColorScheme\` when \`matchMedia\` is unavailable. On client, reads the real
 * value immediately (no flicker); \`useEffect\` syncs and subscribes to changes.
 *
 * @param defaultColorScheme - Fallback when \`matchMedia\` is unavailable (default: \`'light'\`)
 * @returns Current system color scheme: \`'light'\` or \`'dark'\`
 *
 * @example
 * \`\`\`tsx
 * const scheme = usePrefersColorScheme()
 * return <div>System prefers: {scheme}</div>
 * \`\`\`
 *
 * @example
 * \`\`\`tsx
 * const scheme = usePrefersColorScheme('dark')
 * return <div>System prefers: {scheme}</div>
 * \`\`\`
 */
export function usePrefersColorScheme(
	defaultColorScheme: 'light' | 'dark' = 'light'
): 'light' | 'dark' {
	const [scheme, setScheme] = useState<'light' | 'dark'>(() =>
		getPrefersColorScheme(defaultColorScheme)
	)

	useEffect(() => {
		setScheme(getPrefersColorScheme())
		return observePrefersColorScheme(setScheme)
	}, [])

	return scheme
}
`,x={title:"react/hooks/usePrefersColorScheme",tags:["func","version:1.0"],parameters:c({description:{component:"React hook that returns the current system color scheme preference and re-renders when it changes."}}),render:()=>e.jsx(e.Fragment,{})},s={parameters:c({source:{code:i`
                const scheme = usePrefersColorScheme()
                return <span>System prefers: \${scheme}</span>
            `}}),decorators:[m({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"usePrefersColorScheme()"})," returns the current prefers-color-scheme value."]}),e.jsx("p",{children:"Re-renders when the user changes their OS or browser light/dark setting. Change your system theme to verify."}),e.jsxs("p",{children:["Accepts optional ",e.jsx("code",{children:"defaultColorScheme"})," (default ",e.jsx("code",{children:"'light'"}),") used when ",e.jsx("code",{children:"matchMedia"})," is unavailable (e.g. SSR). On the client, reads the real value immediately to avoid flicker."]})]})}),a()],render:()=>{const r=u();return e.jsx(l,{title:"Current Color Scheme Preference (prefers-color-scheme)",appearance:"output",children:e.jsx("pre",{"data-testid":"current-scheme",className:"font-mono",children:r})})}},o={name:"defaultColorScheme",tags:["props"],parameters:c({source:{code:i`
                const scheme = usePrefersColorScheme('dark')
                return <span>System prefers: \${scheme}</span>
            `}}),decorators:[m({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"usePrefersColorScheme('dark')"})," uses ",e.jsx("code",{children:"'dark'"})," when"," ",e.jsx("code",{children:"matchMedia"})," is unavailable (SSR). When your app defaults to dark theme, pass"," ",e.jsx("code",{children:"'dark'"})," so the initial render matches and avoids a flash of light."]})})}),a()],render:()=>{const r=u("dark");return e.jsx(l,{title:"With defaultColorScheme: 'dark'",appearance:"output",children:e.jsx("pre",{"data-testid":"current-scheme",className:"font-mono",children:r})})}},t={tags:["source"],parameters:c({source:{code:S}}),decorators:[a()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                const scheme = usePrefersColorScheme()
                return <span>System prefers: \\\${scheme}</span>
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>usePrefersColorScheme()</code> returns the current prefers-color-scheme value.
                    </p>
                    <p>
                        Re-renders when the user changes their OS or browser light/dark setting. Change your
                        system theme to verify.
                    </p>
                    <p>
                        Accepts optional <code>defaultColorScheme</code> (default <code>'light'</code>) used
                        when <code>matchMedia</code> is unavailable (e.g. SSR). On the client, reads the real
                        value immediately to avoid flicker.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const scheme = usePrefersColorScheme();
    return <StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
                <pre data-testid="current-scheme" className="font-mono">
                    {scheme}
                </pre>
            </StoryCard>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'defaultColorScheme',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                const scheme = usePrefersColorScheme('dark')
                return <span>System prefers: \\\${scheme}</span>
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>usePrefersColorScheme('dark')</code> uses <code>'dark'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR). When your app defaults to dark theme, pass{' '}
                        <code>'dark'</code> so the initial render matches and avoids a flash of light.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const scheme = usePrefersColorScheme('dark');
    return <StoryCard title="With defaultColorScheme: 'dark'" appearance="output">
                <pre data-testid="current-scheme" className="font-mono">
                    {scheme}
                </pre>
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
}`,...t.parameters?.docs?.source}}};const P=["BasicUsage","WithDefaultColorScheme","Source"];export{s as BasicUsage,t as Source,o as WithDefaultColorScheme,P as __namedExportsOrder,x as default};
