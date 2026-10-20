import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./blocks-CFuLlJP_.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./manager-helpers-7jQmy8wF.js";import{n as c,r as l}from"./async-theme-store.types.stories-BrdQA4AL.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`theme/theme-store/AsyncThemeStore`}),`
`,(0,f.jsxs)(t.h1,{id:`asyncthemestore-`,children:[`AsyncThemeStore `,(0,f.jsx)(s,{of:l})]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`AsyncThemeStore`}),` is an interface that defines async/sync methods to read, write, and subscribe to theme state.
All methods are optional.
Data flow participation is inferred from which methods you implement.`]}),`
`,(0,f.jsx)(t.p,{children:`Use for remote persistence, polling, or WebSocket-based sync.`}),`
`,(0,f.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`read`}),` – Can return `,(0,f.jsx)(t.code,{children:`Promise<ThemeEntry | undefined>`}),` for async sources.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`write`}),` – Can return `,(0,f.jsx)(t.code,{children:`Promise<void>`}),` for async persistence.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`subscribe`}),` – Same signature as sync; observes external changes.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.a,{href:`?path=/story/theme-theme-store-themestore--source`,children:`ThemeStore`}),` – Sync counterpart.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),t(),o(),c()})))()}p();export{d as default};