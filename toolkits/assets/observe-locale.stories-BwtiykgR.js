import{j as e,d as n,w as i,s as c,r as s,S as d}from"./iframe-BZoZMMOG.js";import{g as u}from"./get-locale-BBBiBIN1.js";import{o as p}from"./observe-locale-Mz7zmLKX.js";import{s as m}from"./set-locale-CqhIGKJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-CZKLLp6I.js";const h=`import { observeAttributes } from '../attributes/observe-attribute.ts'

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
`,L={title:"locale/observeLocale",tags:["func","version:3.4"],parameters:n({description:{component:"Observes changes to the `lang` attribute on an element and calls the callback when it changes. Returns a cleanup function to stop observing. Uses MutationObserver under the hood."}}),render:()=>e.jsx(e.Fragment,{})},o={tags:["use-case"],parameters:n({description:{story:"Observe `lang` attribute changes on `document.documentElement`."},source:{code:"observeLocale((locale) => { ... }): () => void"}}),decorators:[i({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"observeLocale(callback)"})," subscribes to ",e.jsx("code",{children:"lang"})," attribute changes and runs your callback with the new locale value."]}),e.jsxs("p",{children:["Use this for reactive updates (e.g. UI that follows the document locale). For a one-off read, use ",e.jsx("code",{children:"getLocale"})," instead."]}),e.jsx("p",{children:"Call the returned cleanup function to stop observing."})]})}),c()],render:()=>{const[r,l]=s.useState(u());return s.useEffect(()=>p(l),[]),e.jsx(d,{title:"Current Locale (Reactive)",appearance:"output",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["Current locale: ",e.jsx("strong",{children:r})]}),e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:["en","en-US","ja","zh-Hans","fr"].map(t=>e.jsx("button",{type:"button",onClick:()=>m(t),style:{padding:"0.25rem 0.5rem",border:"1px solid currentColor",borderRadius:"0.25rem",cursor:"pointer",background:r===t?"#0066cc":"transparent",color:r===t?"white":"inherit"},children:t},t))})]})})}},a={tags:["source"],parameters:n({source:{code:h}}),decorators:[c()]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const S=["BasicUsage","Source"];export{o as BasicUsage,a as Source,S as __namedExportsOrder,L as default};
