import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{p as l,t as u}from"./react-BIf6FuzT.js";var d;function f(){return(f=e((()=>{d=`import { useEffect, useState } from 'react'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),o(),s(),f(),p=t(),m={title:`react/hooks/usePrefersColorScheme`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`React hook that returns the current system color scheme preference and re-renders when it changes.`}}),render:()=>(0,p.jsx)(p.Fragment,{})},h={parameters:n({source:{code:c`
                const scheme = usePrefersColorScheme()
                return <span>System prefers: \${scheme}</span>
            `}}),decorators:[a({content:(0,p.jsxs)(`div`,{className:`space-y-2`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`usePrefersColorScheme()`}),` returns the current prefers-color-scheme value.`]}),(0,p.jsx)(`p`,{children:`Re-renders when the user changes their OS or browser light/dark setting. Change your system theme to verify.`}),(0,p.jsxs)(`p`,{children:[`Accepts optional `,(0,p.jsx)(`code`,{children:`defaultColorScheme`}),` (default `,(0,p.jsx)(`code`,{children:`'light'`}),`) used when `,(0,p.jsx)(`code`,{children:`matchMedia`}),` is unavailable (e.g. SSR). On the client, reads the real value immediately to avoid flicker.`]})]})}),r()],render:()=>{let e=l();return(0,p.jsx)(i,{title:`Current Color Scheme Preference (prefers-color-scheme)`,appearance:`output`,children:(0,p.jsx)(`pre`,{"data-testid":`current-scheme`,className:`font-mono`,children:e})})}},g={name:`defaultColorScheme`,tags:[`props`],parameters:n({source:{code:c`
                const scheme = usePrefersColorScheme('dark')
                return <span>System prefers: \${scheme}</span>
            `}}),decorators:[a({content:(0,p.jsx)(`div`,{className:`space-y-2`,children:(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`usePrefersColorScheme('dark')`}),` uses `,(0,p.jsx)(`code`,{children:`'dark'`}),` when`,` `,(0,p.jsx)(`code`,{children:`matchMedia`}),` is unavailable (SSR). When your app defaults to dark theme, pass`,` `,(0,p.jsx)(`code`,{children:`'dark'`}),` so the initial render matches and avoids a flash of light.`]})})}),r()],render:()=>{let e=l(`dark`);return(0,p.jsx)(i,{title:`With defaultColorScheme: 'dark'`,appearance:`output`,children:(0,p.jsx)(`pre`,{"data-testid":`current-scheme`,className:`font-mono`,children:e})})}},_={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`WithDefaultColorScheme`,`Source`]})))()}y();export{h as BasicUsage,_ as Source,g as WithDefaultColorScheme,v as __namedExportsOrder,m as default};