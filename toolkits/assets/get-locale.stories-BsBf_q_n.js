import{j as e,d as o,w as l,s as c,S as s}from"./iframe-BZoZMMOG.js";import{g as d}from"./get-locale-BBBiBIN1.js";import"./preload-helper-PPVm8Dsz.js";const i="/**\n * Gets the current locale from an element's `lang` attribute.\n *\n * Priority: `element.lang` > `navigator.language` > `defaultLocale`\n *\n * When `document` is unavailable (e.g. SSR), falls back to `navigator.language` or `defaultLocale`.\n *\n * @param defaultLocale - Fallback when neither the element's `lang` nor `navigator.language` is available (default: `'en'`)\n * @param element - Element to read from (default: `document.documentElement`)\n * @returns The current locale string (e.g. `'en-US'`, `'ja'`, `'zh-Hans'`)\n *\n * @example\n * ```ts\n * // Read from <html lang=\"ja\">\n * const locale = getLocale() // 'ja'\n *\n * // Read from a specific element\n * const locale = getLocale('en', myElement)\n * ```\n */\nexport function getLocale(defaultLocale = 'en', element?: Element | null | undefined): string {\n	if (typeof document === 'undefined') {\n		return typeof navigator !== 'undefined' ? navigator.language : defaultLocale\n	}\n	const el = element ?? document.documentElement\n	return el.getAttribute('lang') || navigator.language || defaultLocale\n}\n",p={title:"locale/getLocale",tags:["func","version:3.4"],parameters:o({description:{component:"Gets the current locale from the document's `lang` attribute. Falls back to `navigator.language`, then to the provided `defaultLocale` (default: `'en'`). SSR-safe."}}),render:()=>e.jsx(e.Fragment,{})},a={tags:["use-case"],parameters:o({source:{code:"getLocale(): string"}}),decorators:[l({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getLocale()"})," reads the current locale from the"," ",e.jsx("code",{children:'<html lang="...">'})," attribute."]}),e.jsxs("p",{children:["Priority: ",e.jsx("code",{children:"element.lang"})," ",">"," ",e.jsx("code",{children:"navigator.language"})," ",">"," ",e.jsx("code",{children:"defaultLocale"})]}),e.jsxs("p",{children:["Use this for a one-off read. For reactive updates when the locale changes, use"," ",e.jsx("code",{children:"observeLocale"})," instead."]})]})}),c()],render:()=>{const n=d();return e.jsxs(s,{title:"Current Locale",appearance:"output",children:["Current locale: ",e.jsx("strong",{children:n})]})}},t={name:"defaultLocale",tags:["props"],parameters:o({source:{code:"getLocale('ja'): string"}}),decorators:[l({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"getLocale('ja')"})," returns ",e.jsx("code",{children:"'ja'"})," when neither"," ",e.jsx("code",{children:"document.documentElement.lang"})," nor ",e.jsx("code",{children:"navigator.language"})," is available (SSR, test env). In the browser, it returns the real locale."]})})}),c()],render:()=>{const n=d("ja");return e.jsxs(s,{title:"With defaultLocale: 'ja'",appearance:"output",children:["Current locale: ",e.jsx("strong",{children:n})]})}},r={tags:["source"],parameters:o({source:{code:i}}),decorators:[c()]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: 'getLocale(): string'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getLocale()</code> reads the current locale from the{' '}
                        <code>{'<html lang="...">'}</code> attribute.
                    </p>
                    <p>
                        Priority: <code>element.lang</code> {'>'} <code>navigator.language</code> {'>'}{' '}
                        <code>defaultLocale</code>
                    </p>
                    <p>
                        Use this for a one-off read. For reactive updates when the locale changes, use{' '}
                        <code>observeLocale</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const locale = getLocale();
    return <StoryCard title="Current Locale" appearance="output">
                Current locale: <strong>{locale}</strong>
            </StoryCard>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'defaultLocale',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getLocale('ja'): string"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>{"getLocale('ja')"}</code> returns <code>'ja'</code> when neither{' '}
                        <code>document.documentElement.lang</code> nor <code>navigator.language</code> is
                        available (SSR, test env). In the browser, it returns the real locale.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const locale = getLocale('ja');
    return <StoryCard title="With defaultLocale: 'ja'" appearance="output">
                Current locale: <strong>{locale}</strong>
            </StoryCard>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...r.parameters?.docs?.source}}};const h=["BasicUsage","WithDefaultLocale","Source"];export{a as BasicUsage,r as Source,t as WithDefaultLocale,h as __namedExportsOrder,p as default};
