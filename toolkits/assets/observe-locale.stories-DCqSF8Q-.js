import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-Dhw67M0q.js";import{t as c}from"./get-locale-CdmOvBb9.js";import{n as l}from"./observe-locale-Dh7fe1i8.js";import{n as u}from"./set-locale-CUPeQSDN.js";import{t as d}from"./src-C4_MMlM4.js";var f;function p(){return(p=e((()=>{f=`import { observeAttributes } from '../attributes/observe-attribute.ts'

/**
 * Observes changes to the \`lang\` attribute on an element and calls the callback when it changes.
 *
 * @param callback - Called with the new locale value whenever \`lang\` changes
 * @param element - The element to observe (default: \`document.documentElement\`)
 * @returns A cleanup function to stop observing
 *
 * @example
 * \`\`\`ts
 * const cleanup = observeLocale((locale) => {
 *   console.log('Locale changed to:', locale)
 * })
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observeLocale(
	callback: (locale: string) => void,
	element?: Element | null | undefined
): () => void {
	return observeAttributes({ lang: (v) => callback(v || navigator.language || 'en') }, element)
}
`})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{d(),s(),m=t(),p(),h=n(),g={title:`locale/observeLocale`,tags:[`func`,`version:3.4`],parameters:r({description:{component:"Observes changes to the `lang` attribute on an element and calls the callback when it changes. Returns a cleanup function to stop observing. Uses MutationObserver under the hood."}}),render:()=>(0,h.jsx)(h.Fragment,{})},_={tags:[`use-case`],parameters:r({description:{story:"Observe `lang` attribute changes on `document.documentElement`."},source:{code:`observeLocale((locale) => { ... }): () => void`}}),decorators:[o({content:(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`code`,{children:`observeLocale(callback)`}),` subscribes to `,(0,h.jsx)(`code`,{children:`lang`}),` attribute changes and runs your callback with the new locale value.`]}),(0,h.jsxs)(`p`,{children:[`Use this for reactive updates (e.g. UI that follows the document locale). For a one-off read, use `,(0,h.jsx)(`code`,{children:`getLocale`}),` instead.`]}),(0,h.jsx)(`p`,{children:`Call the returned cleanup function to stop observing.`})]})}),i()],render:()=>{let[e,t]=(0,m.useState)(c());return(0,m.useEffect)(()=>l(t),[]),(0,h.jsx)(a,{title:`Current Locale (Reactive)`,appearance:`output`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,h.jsxs)(`div`,{children:[`Current locale: `,(0,h.jsx)(`strong`,{children:e})]}),(0,h.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[`en`,`en-US`,`ja`,`zh-Hans`,`fr`].map(t=>(0,h.jsx)(`button`,{type:`button`,onClick:()=>u(t),style:{padding:`0.25rem 0.5rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`,background:e===t?`#0066cc`:`transparent`,color:e===t?`white`:`inherit`},children:t},t))})]})})}},v={tags:[`source`],parameters:r({source:{code:f}}),decorators:[i()]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe \`lang\` attribute changes on \`document.documentElement\`.'
    },
    source: {
      code: 'observeLocale((locale) => { ... }): () => void'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>observeLocale(callback)</code> subscribes to <code>lang</code> attribute changes
                        and runs your callback with the new locale value.
                    </p>
                    <p>
                        Use this for reactive updates (e.g. UI that follows the document locale). For a one-off
                        read, use <code>getLocale</code> instead.
                    </p>
                    <p>Call the returned cleanup function to stop observing.</p>
                </div>
  }), showSource()],
  render: () => {
    const [locale, setLocaleState] = useState(getLocale());
    useEffect(() => observeLocale(setLocaleState), []);
    return <StoryCard title="Current Locale (Reactive)" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
                    <div>
                        Current locale: <strong>{locale}</strong>
                    </div>
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        {['en', 'en-US', 'ja', 'zh-Hans', 'fr'].map(l => <button key={l} type="button" onClick={() => setLocale(l)} style={{
            padding: '0.25rem 0.5rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            background: locale === l ? '#0066cc' : 'transparent',
            color: locale === l ? 'white' : 'inherit'
          }}>
                                {l}
                            </button>)}
                    </div>
                </div>
            </StoryCard>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}},y=[`BasicUsage`,`Source`]})))()}b();export{_ as BasicUsage,v as Source,y as __namedExportsOrder,g as default};