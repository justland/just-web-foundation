import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{t as s}from"./get-locale-CdmOvBb9.js";import{t as c}from"./src-X3K_eC4I.js";var l;function u(){return(u=e((()=>{l="/**\n * Gets the current locale from an element's `lang` attribute.\n *\n * Priority: `element.lang` > `navigator.language` > `defaultLocale`\n *\n * When `document` is unavailable (e.g. SSR), falls back to `navigator.language` or `defaultLocale`.\n *\n * @param defaultLocale - Fallback when neither the element's `lang` nor `navigator.language` is available (default: `'en'`)\n * @param element - Element to read from (default: `document.documentElement`)\n * @returns The current locale string (e.g. `'en-US'`, `'ja'`, `'zh-Hans'`)\n *\n * @example\n * ```ts\n * // Read from <html lang=\"ja\">\n * const locale = getLocale() // 'ja'\n *\n * // Read from a specific element\n * const locale = getLocale('en', myElement)\n * ```\n */\nexport function getLocale(defaultLocale = 'en', element?: Element | null | undefined): string {\n	if (typeof document === 'undefined') {\n		return typeof navigator !== 'undefined' ? navigator.language : defaultLocale\n	}\n	const el = element ?? document.documentElement\n	return el.getAttribute('lang') || navigator.language || defaultLocale\n}\n"})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),d=t(),f={title:`locale/getLocale`,tags:[`func`,`version:3.4`],parameters:n({description:{component:"Gets the current locale from the document's `lang` attribute. Falls back to `navigator.language`, then to the provided `defaultLocale` (default: `'en'`). SSR-safe."}}),render:()=>(0,d.jsx)(d.Fragment,{})},p={tags:[`use-case`],parameters:n({source:{code:`getLocale(): string`}}),decorators:[a({content:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getLocale()`}),` reads the current locale from the`,` `,(0,d.jsx)(`code`,{children:`<html lang="...">`}),` attribute.`]}),(0,d.jsxs)(`p`,{children:[`Priority: `,(0,d.jsx)(`code`,{children:`element.lang`}),` `,`>`,` `,(0,d.jsx)(`code`,{children:`navigator.language`}),` `,`>`,` `,(0,d.jsx)(`code`,{children:`defaultLocale`})]}),(0,d.jsxs)(`p`,{children:[`Use this for a one-off read. For reactive updates when the locale changes, use`,` `,(0,d.jsx)(`code`,{children:`observeLocale`}),` instead.`]})]})}),r()],render:()=>{let e=s();return(0,d.jsxs)(i,{title:`Current Locale`,appearance:`output`,children:[`Current locale: `,(0,d.jsx)(`strong`,{children:e})]})}},m={name:`defaultLocale`,tags:[`props`],parameters:n({source:{code:`getLocale('ja'): string`}}),decorators:[a({content:(0,d.jsx)(`div`,{className:`space-y-2`,children:(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getLocale('ja')`}),` returns `,(0,d.jsx)(`code`,{children:`'ja'`}),` when neither`,` `,(0,d.jsx)(`code`,{children:`document.documentElement.lang`}),` nor `,(0,d.jsx)(`code`,{children:`navigator.language`}),` is available (SSR, test env). In the browser, it returns the real locale.`]})})}),r()],render:()=>{let e=s(`ja`);return(0,d.jsxs)(i,{title:`With defaultLocale: 'ja'`,appearance:`output`,children:[`Current locale: `,(0,d.jsx)(`strong`,{children:e})]})}},h={tags:[`source`],parameters:n({source:{code:l}}),decorators:[r()]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`WithDefaultLocale`,`Source`]})))()}_();export{p as BasicUsage,h as Source,m as WithDefaultLocale,g as __namedExportsOrder,f as default};