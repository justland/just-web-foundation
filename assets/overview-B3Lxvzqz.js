import{j as e,M as i}from"./iframe-y78tOg11.js";import{useMDXComponents as r}from"./index-VTkGkEtz.js";import"./preload-helper-PPVm8Dsz.js";function n(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"theme"}),`
`,e.jsx(s.h1,{id:"just-webtoolkitstheme",children:"@just-web/toolkits/theme"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"@just-web/toolkits/theme"})," is a subpath of ",e.jsx(s.strong,{children:"@just-web/toolkits"}),` that provides theme store factories and utilities for managing application themes.
Each store reads and writes theme state through different backends (in-memory, localStorage, sessionStorage, class names, data attributes, or custom async implementations).`]}),`
`,e.jsx(s.h2,{id:"thememap",children:"ThemeMap"}),`
`,e.jsxs(s.p,{children:["All ThemeStore factories accept a ",e.jsx(s.code,{children:"themeMap"}),` option that defines valid theme keys and their values.
See `,e.jsx(s.a,{href:"?path=/story/theme-thememap--source",children:"ThemeMap"})," for the type definition and value variations (",e.jsx(s.code,{children:"string"})," vs ",e.jsx(s.code,{children:"string[]"}),")."]}),`
`,e.jsx(s.h2,{id:"store-types",children:"Store types"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"inMemoryThemeStore"})," – Transient state; no persistence"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"localStorageThemeStore"})," – Persists across sessions; cross-tab sync"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"sessionStorageThemeStore"})," – Persists per tab"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"classNameThemeStore"})," – Reads/writes via element class names"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"dataAttributeThemeStore"})," – Reads/writes via data attributes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"createThemeHook"})," – React hook that subscribes to stores and returns ",e.jsx(s.code,{children:"[theme, setTheme]"})]}),`
`]})]})}function c(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{c as default};
