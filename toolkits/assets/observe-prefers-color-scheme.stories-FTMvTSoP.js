import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{t as c}from"./get-prefers-color-scheme-BYJ-yK6c.js";import{n as l}from"./observe-prefers-color-scheme-CNJr4m9B.js";import{t as u}from"./src-X3K_eC4I.js";var d;function f(){return(f=e((()=>{d=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),s(),p=t(),f(),m=n(),h={title:`color-scheme/observePrefersColorScheme`,tags:[`func`,`version:1.0`],parameters:r({description:{component:`A utility function that observes system color scheme preferences and triggers callbacks when changes occur. Even when the browser theme is set to "System" (e.g. in Chrome), it still reports either "light" or "dark" based on the OS—never "system" or "no-preference".`}}),render:()=>(0,m.jsx)(m.Fragment,{})},g={tags:[`use-case`],parameters:r({description:{story:"Observe `prefers-color-scheme` changes."},source:{code:`observePrefersColorScheme((value) => { ... }): () => void`}}),decorators:[o({content:(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`observePrefersColorScheme(callback)`}),` subscribes to`,` `,(0,m.jsx)(`code`,{children:`prefers-color-scheme`}),` changes and runs your callback when the preference changes.`]}),(0,m.jsxs)(`p`,{children:[`Use this when you need reactive updates (e.g. UI that follows the system theme). For a one-off read, use `,(0,m.jsx)(`code`,{children:`getPrefersColorScheme`}),` instead.`]}),(0,m.jsx)(`p`,{children:`You should call the returned cleanup function to stop observing when you no longer need it.`})]})}),i()],render:()=>{let[e,t]=(0,p.useState)(c());return(0,p.useEffect)(()=>l(t),[]),(0,m.jsxs)(a,{title:`Current Color Scheme Preference (prefers-color-scheme)`,appearance:`output`,children:[`Your system is currently set to: `,(0,m.jsx)(`strong`,{children:e}),` mode`]})}},_={tags:[`source`],parameters:r({source:{code:d}}),decorators:[i()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`Source`]})))()}y();export{g as BasicUsage,_ as Source,v as __namedExportsOrder,h as default};