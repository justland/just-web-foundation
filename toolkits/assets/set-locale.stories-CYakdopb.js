import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-C-caXvtV.js";import{n as c}from"./set-locale-CUPeQSDN.js";import{t as l}from"./src-RbTQJPcv.js";var u;function d(){return(d=e((()=>{u=`/**
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
`})))()}var f,p,m,h,g,_;function v(){return(v=e((()=>{l(),s(),f=t(),d(),p=n(),m={title:`locale/setLocale`,tags:[`func`,`version:3.4`],parameters:r({description:{component:"Sets the `lang` attribute on an element. Defaults to `document.documentElement`. This is the standard HTML mechanism for declaring locale."}}),render:()=>(0,p.jsx)(p.Fragment,{})},h={tags:[`use-case`],parameters:r({source:{code:`setLocale('ja')`}}),decorators:[o({content:(0,p.jsxs)(`div`,{className:`space-y-2`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`setLocale('ja')`}),` sets `,(0,p.jsx)(`code`,{children:`<html lang="ja">`}),`.`]}),(0,p.jsxs)(`p`,{children:[`Pair with `,(0,p.jsx)(`code`,{children:`observeLocale`}),` for reactive updates when the locale changes.`]})]})}),i()],render:()=>{let[e,t]=(0,f.useState)(document.documentElement.getAttribute(`lang`)||``),n=e=>{c(e),t(e)};return(0,p.jsx)(a,{title:`Set Locale`,appearance:`output`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,p.jsxs)(`div`,{children:[`Current `,(0,p.jsx)(`code`,{children:`lang`}),` attribute: `,(0,p.jsx)(`strong`,{children:e||`(empty)`})]}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[`en`,`en-US`,`ja`,`zh-Hans`,`fr`].map(t=>(0,p.jsx)(`button`,{type:`button`,onClick:()=>n(t),style:{padding:`0.25rem 0.5rem`,border:`1px solid currentColor`,borderRadius:`0.25rem`,cursor:`pointer`,background:e===t?`#0066cc`:`transparent`,color:e===t?`white`:`inherit`},children:t},t))})]})})}},g={tags:[`source`],parameters:r({source:{code:u}}),decorators:[i()]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...g.parameters?.docs?.source}}},_=[`BasicUsage`,`Source`]})))()}v();export{h as BasicUsage,g as Source,_ as __namedExportsOrder,m as default};