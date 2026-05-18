import{j as e,d as o,w as d,s,r as i,S as u}from"./iframe-BZoZMMOG.js";import{s as m}from"./set-locale-CqhIGKJQ.js";import"./preload-helper-PPVm8Dsz.js";const p=`/**
 * Sets the \`lang\` attribute on an element.
 *
 * @param locale - The locale to set (e.g. \`'en-US'\`, \`'ja'\`)
 * @param element - The element to set \`lang\` on (default: \`document.documentElement\`)
 *
 * @example
 * \`\`\`ts
 * setLocale('ja')
 * // <html lang="ja">
 *
 * setLocale('fr', myElement)
 * // <div lang="fr">
 * \`\`\`
 */
export function setLocale(locale: string, element?: Element | null | undefined): void {
	const el = element ?? document.documentElement
	el.setAttribute('lang', locale)
}
`,j={title:"locale/setLocale",tags:["func","version:3.4"],parameters:o({description:{component:"Sets the `lang` attribute on an element. Defaults to `document.documentElement`. This is the standard HTML mechanism for declaring locale."}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:o({source:{code:"setLocale('ja')"}}),decorators:[d({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"setLocale('ja')"})," sets ",e.jsx("code",{children:'<html lang="ja">'}),"."]}),e.jsxs("p",{children:["Pair with ",e.jsx("code",{children:"observeLocale"})," for reactive updates when the locale changes."]})]})}),s()],render:()=>{const[n,c]=i.useState(document.documentElement.getAttribute("lang")||""),l=t=>{m(t),c(t)};return e.jsx(u,{title:"Set Locale",appearance:"output",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["Current ",e.jsx("code",{children:"lang"})," attribute: ",e.jsx("strong",{children:n||"(empty)"})]}),e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:["en","en-US","ja","zh-Hans","fr"].map(t=>e.jsx("button",{type:"button",onClick:()=>l(t),style:{padding:"0.25rem 0.5rem",border:"1px solid currentColor",borderRadius:"0.25rem",cursor:"pointer",background:n===t?"#0066cc":"transparent",color:n===t?"white":"inherit"},children:t},t))})]})})}},a={tags:["source"],parameters:o({source:{code:p}}),decorators:[s()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: "setLocale('ja')"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>{"setLocale('ja')"}</code> sets <code>{'<html lang="ja">'}</code>.
                    </p>
                    <p>
                        Pair with <code>observeLocale</code> for reactive updates when the locale changes.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const [current, setCurrent] = useState(document.documentElement.getAttribute('lang') || '');
    const handleSet = (locale: string) => {
      setLocale(locale);
      setCurrent(locale);
    };
    return <StoryCard title="Set Locale" appearance="output">
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
                    <div>
                        Current <code>lang</code> attribute: <strong>{current || '(empty)'}</strong>
                    </div>
                    <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
                        {['en', 'en-US', 'ja', 'zh-Hans', 'fr'].map(locale => <button key={locale} type="button" onClick={() => handleSet(locale)} style={{
            padding: '0.25rem 0.5rem',
            border: '1px solid currentColor',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            background: current === locale ? '#0066cc' : 'transparent',
            color: current === locale ? 'white' : 'inherit'
          }}>
                                {locale}
                            </button>)}
                    </div>
                </div>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const S=["BasicUsage","Source"];export{r as BasicUsage,a as Source,S as __namedExportsOrder,j as default};
