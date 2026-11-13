import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,s as n}from"./blocks-V3ZTh5Jy.js";import{a as r}from"./chunk-W22LQPXL-4bVy5MKV.js";import{i,r as a}from"./react-Bg8UoiFE.js";import{n as o,t as s}from"./manager-helpers-BKiDKSKb.js";import{n as c,t as l}from"./theme-store.types.stories-C6VoZeX4.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`theme/theme-store/ThemeStore`}),`
`,(0,f.jsxs)(t.h1,{id:`themestore-`,children:[`ThemeStore `,(0,f.jsx)(s,{of:c})]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`ThemeStore`}),` is an interface that defines the methods to read/write/subscribe to a theme store.
Data flow participation is inferred based on which methods are implemented.`]}),`
`,(0,f.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`read`}),` – Participates in waterfall read for `,(0,f.jsx)(t.code,{children:`getThemeFromStores`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`write`}),` – Receives writes from `,(0,f.jsx)(t.code,{children:`setThemeToStores`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`subscribe`}),` – Observed for external changes via `,(0,f.jsx)(t.code,{children:`observeThemeFromStores`}),`.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),t(),o(),l()})))()}p();export{d as default};