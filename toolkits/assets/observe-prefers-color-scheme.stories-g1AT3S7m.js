import{r as c,j as e,S as l,w as h,s as t,d as o}from"./iframe-BpXj-3b1.js";import{g as m}from"./get-prefers-color-scheme-BMZwcwg-.js";import{o as d}from"./observe-prefers-color-scheme-Cpw9ndla.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";import"./observe-media-feature-value--S6jnvF8.js";const u=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ColorScheme } from './color-scheme.types.ts'
import { colorSchemeValues } from './color-scheme.values.ts'

/**
 * Observes system color scheme preference changes and calls handlers when they occur.
 *
 * @param handler - A function that is called when the color scheme preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * \`\`\`ts
 * // Observe light/dark mode changes
 * const cleanup = observePrefersColorScheme((value) => console.log('Color scheme changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observePrefersColorScheme(handler: (value: ColorScheme) => void) {
	return observeMediaFeatureValue('prefers-color-scheme', colorSchemeValues, handler)
}
`,b={title:"color-scheme/observePrefersColorScheme",tags:["func","version:1.0"],parameters:o({description:{component:'A utility function that observes system color scheme preferences and triggers callbacks when changes occur. Even when the browser theme is set to "System" (e.g. in Chrome), it still reports either "light" or "dark" based on the OS—never "system" or "no-preference".'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:o({description:{story:"Observe `prefers-color-scheme` changes."},source:{code:"observePrefersColorScheme((value) => { ... }): () => void"}}),decorators:[h({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"observePrefersColorScheme(callback)"})," subscribes to"," ",e.jsx("code",{children:"prefers-color-scheme"})," changes and runs your callback when the preference changes."]}),e.jsxs("p",{children:["Use this when you need reactive updates (e.g. UI that follows the system theme). For a one-off read, use ",e.jsx("code",{children:"getPrefersColorScheme"})," instead."]}),e.jsx("p",{children:"You should call the returned cleanup function to stop observing when you no longer need it."})]})}),t()],render:()=>{const[n,a]=c.useState(m());return c.useEffect(()=>d(a),[]),e.jsxs(l,{title:"Current Color Scheme Preference (prefers-color-scheme)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:n})," mode"]})}},s={tags:["source"],parameters:o({source:{code:u}}),decorators:[t()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe \`prefers-color-scheme\` changes.'
    },
    source: {
      code: 'observePrefersColorScheme((value) => { ... }): () => void'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>observePrefersColorScheme(callback)</code> subscribes to{' '}
                        <code>prefers-color-scheme</code> changes and runs your callback when the preference
                        changes.
                    </p>
                    <p>
                        Use this when you need reactive updates (e.g. UI that follows the system theme). For a
                        one-off read, use <code>getPrefersColorScheme</code> instead.
                    </p>
                    <p>
                        You should call the returned cleanup function to stop observing when you no longer need
                        it.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const [scheme, setScheme] = useState(getPrefersColorScheme());
    useEffect(() => observePrefersColorScheme(setScheme), []);
    return <StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
                Your system is currently set to: <strong>{scheme}</strong> mode
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...s.parameters?.docs?.source}}};const y=["BasicUsage","Source"];export{r as BasicUsage,s as Source,y as __namedExportsOrder,b as default};
