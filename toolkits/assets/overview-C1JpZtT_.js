import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./blocks-CFuLlJP_.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`theme`}),`
`,(0,c.jsx)(t.h1,{id:`just-webtoolkitstheme`,children:`@just-web/toolkits/theme`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@just-web/toolkits/theme`}),` is a subpath of `,(0,c.jsx)(t.strong,{children:`@just-web/toolkits`}),` that provides theme store factories and utilities for managing application themes.
Each store reads and writes theme state through different backends (in-memory, localStorage, sessionStorage, class names, data attributes, or custom async implementations).`]}),`
`,(0,c.jsx)(t.h2,{id:`thememap`,children:`ThemeMap`}),`
`,(0,c.jsxs)(t.p,{children:[`All ThemeStore factories accept a `,(0,c.jsx)(t.code,{children:`themeMap`}),` option that defines valid theme keys and their values.
See `,(0,c.jsx)(t.a,{href:`?path=/story/theme-thememap--source`,children:`ThemeMap`}),` for the type definition and value variations (`,(0,c.jsx)(t.code,{children:`string`}),` vs `,(0,c.jsx)(t.code,{children:`string[]`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`store-types`,children:`Store types`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`inMemoryThemeStore`}),` – Transient state; no persistence`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`localStorageThemeStore`}),` – Persists across sessions; cross-tab sync`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`sessionStorageThemeStore`}),` – Persists per tab`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`classNameThemeStore`}),` – Reads/writes via element class names`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`dataAttributeThemeStore`}),` – Reads/writes via data attributes`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`createThemeHook`}),` – React hook that subscribes to stores and returns `,(0,c.jsx)(t.code,{children:`[theme, setTheme]`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};