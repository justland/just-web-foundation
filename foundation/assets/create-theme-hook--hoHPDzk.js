import{j as e,M as n}from"./iframe-B5WlOR2G.js";import{useMDXComponents as s}from"./index-BvAOwUkQ.js";import{M as h}from"./manager-helpers-wLvmkzNl.js";import i from"./create-theme-hook.stories-BtPn20uG.js";import"./preload-helper-PPVm8Dsz.js";import"./dedent-BuYMbVyj.js";import"./theme-entry-D4S_RAMB.js";import"./class-name-theme-store-Dfg_JKgY.js";import"./observe-attribute-DJMrXwPX.js";import"./dummy-theme-store-DcCfgetv.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-theme-store-ChMUdK3L.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./local-storage-theme-store-BxhG8YWn.js";import"./parse-stored-theme-Dj4VCwi6.js";import"./create-theme-hook-BmbHh5sb.js";import"./compose-theme-stores-CD86eyKP.js";import"./set-theme-to-stores-C1AbMsOJ.js";import"./in-memory-theme-store-fTg_sUo_.js";import"./button-CsZyzj2i.js";import"./resolve-class-name-Bomprtp8.js";import"./theme-store-demo-BZSj3tm9.js";import"./append-id-Vsg144gU.js";import"./theme-result-card-y1WSL0xe.js";function r(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"react/theme/createThemeHook"}),`
`,e.jsxs(t.h1,{id:"createthemehook-",children:["createThemeHook ",e.jsx(h,{of:i})]}),`
`,e.jsxs(t.p,{children:["Factory that creates a React hook returning ",e.jsx(t.code,{children:"[theme, setTheme]"}),`.
Subscribes to theme stores and keeps the returned theme in sync.`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`createThemeHook<Themes, A?, B?, C?, D?, E?, F?, G?, H?>(
  themes: Themes,
  stores: [store1, store2?, store3?, store4?, store5?, store6?, store7?, store8?],
  options?: { defaultTheme?: keyof Themes }
): (overrideDefaultTheme?: keyof Themes) => [keyof Themes | undefined, (theme: keyof Themes) => void]
`})}),`
`,e.jsxs(t.p,{children:["Same argument order as ",e.jsx(t.a,{href:"?path=/story/theme-composethemestores--source",children:"composeThemeStores"}),": ",e.jsx(t.code,{children:"(themes, stores, options)"}),`.
Store positions can be concrete stores or factory tuples `,e.jsx(t.code,{children:"[factory]"})," / ",e.jsx(t.code,{children:"[factory, options]"}),`.
Factory generics A-H infer factory types for options autocomplete.`]}),`
`,e.jsx(t.h2,{id:"options",children:"Options"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"themes"})," - ThemeMap defining theme keys and values. See ",e.jsx(t.a,{href:"?path=/story/theme-thememap--source",children:"ThemeMap"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"stores"})," - One or more theme stores or factory tuples ",e.jsx(t.code,{children:"[factory]"})," / ",e.jsx(t.code,{children:"[factory, options]"})," (e.g. in-memory, localStorage, className). Same format as ",e.jsx(t.a,{href:"?path=/story/theme-composethemestores--source",children:"composeThemeStores"}),". Factory generics A-H enable options autocomplete."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"defaultTheme"})," - Default theme when stores are empty. Optional."]}),`
`]}),`
`,e.jsx(t.h2,{id:"return-value",children:"Return value"}),`
`,e.jsxs(t.p,{children:["The created hook returns a tuple ",e.jsx(t.code,{children:"[theme, setTheme]"}),":"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"theme"})," - Current theme key, or ",e.jsx(t.code,{children:"undefined"})," when stores are empty and no default is set."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"setTheme"})," - Async function to update the theme across all stores."]}),`
`]}),`
`,e.jsx(t.h2,{id:"override-default-theme",children:"Override default theme"}),`
`,e.jsxs(t.p,{children:["Pass an override to the hook when calling it: ",e.jsx(t.code,{children:"useTheme('high-contrast')"}),`.
When stores are empty, the override is used instead of the configured `,e.jsx(t.code,{children:"defaultTheme"}),"."]}),`
`,e.jsx(t.h2,{id:"see-also",children:"See also"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"?path=/story/theme-composethemestores--source",children:"composeThemeStores"})," – Composes stores (same stores format)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"?path=/story/theme-introduction--source",children:"theme/introduction"})," – Theme module overview"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"?path=/story/theme-thememap--source",children:"ThemeMap"})," – Theme key/value mapping"]}),`
`]})]})}function R(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{R as default};
