import{r as c,j as s,d as o,w as m,s as a,S as h}from"./iframe-BvUeje02.js";import{d as u}from"./dedent-BuYMbVyj.js";import{g as i}from"./get-prefers-color-scheme-BGoLu2Q0.js";import{o as d}from"./observe-prefers-color-scheme-DjdBdD7G.js";import"./preload-helper-PPVm8Dsz.js";function p(){const[t,n]=c.useState(()=>"light");return c.useEffect(()=>(n(i()),d(n)),[]),t}const l=`import { useEffect, useState } from 'react'
import { getPrefersColorScheme } from '../../color-scheme/get-prefers-color-scheme.ts'
import { observePrefersColorScheme } from '../../color-scheme/observe-prefers-color-scheme.ts'

/**
 * React hook that returns the current system color scheme preference and re-renders when it changes.
 *
 * Uses \`prefers-color-scheme\` media query. Returns \`'light'\` or \`'dark'\`; re-renders when the user
 * changes their OS or browser light/dark setting.
 *
 * For SSR, initial value is \`'light'\` to avoid hydration mismatch; the real value syncs in \`useEffect\`.
 *
 * @returns Current system color scheme: \`'light'\` or \`'dark'\`
 *
 * @example
 * \`\`\`tsx
 * const scheme = usePrefersColorScheme()
 * return <div>System prefers: {scheme}</div>
 * \`\`\`
 */
export function usePrefersColorScheme(): 'light' | 'dark' {
	const [scheme, setScheme] = useState<'light' | 'dark'>(() => 'light')

	useEffect(() => {
		setScheme(getPrefersColorScheme())
		return observePrefersColorScheme(setScheme)
	}, [])

	return scheme
}
`,P={title:"react/hooks/usePrefersColorScheme",tags:["func","version:next"],parameters:o({description:{component:"React hook that returns the current system color scheme preference and re-renders when it changes."}}),render:()=>s.jsx(s.Fragment,{})},e={parameters:o({description:{story:"Returns the current prefers-color-scheme value. Re-renders when the user changes their OS or browser light/dark setting. Change your system theme to verify."},source:{code:u`
                const scheme = usePrefersColorScheme()
                return <span>System prefers: \${scheme}</span>
            `}}),decorators:[m(),a()],render:()=>{const t=p();return s.jsx(h,{title:"Current Color Scheme Preference (prefers-color-scheme)",appearance:"output",children:s.jsx("pre",{"data-testid":"current-scheme",className:"font-mono",children:t})})}},r={tags:["source"],parameters:o({source:{code:l}}),decorators:[a()]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Returns the current prefers-color-scheme value. Re-renders when the user changes their OS or browser light/dark setting. Change your system theme to verify.'
    },
    source: {
      code: dedent\`
                const scheme = usePrefersColorScheme()
                return <span>System prefers: \\\${scheme}</span>
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const scheme = usePrefersColorScheme();
    return <StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
                <pre data-testid="current-scheme" className="font-mono">
                    {scheme}
                </pre>
            </StoryCard>;
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...r.parameters?.docs?.source}}};const v=["BasicUsage","Source"];export{e as BasicUsage,r as Source,v as __namedExportsOrder,P as default};
