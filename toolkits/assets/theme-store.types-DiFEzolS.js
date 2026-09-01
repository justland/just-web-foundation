import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{o as t,s as n}from"./blocks-CKJ_djXG.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./manager-helpers-BFl84zlv.js";import{n as c,t as l}from"./theme-store.types.stories-Dor6DhLZ.js";function u(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{title:`theme/theme-store/ThemeStore`}),`
`,(0,f.jsxs)(n.h1,{id:`themestore-`,children:[`ThemeStore `,(0,f.jsx)(s,{of:c})]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.code,{children:`ThemeStore`}),` is an interface that defines the methods to read/write/subscribe to a theme store.
Data flow participation is inferred based on which methods are implemented.`]}),`
`,(0,f.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`read`}),` – Participates in waterfall read for `,(0,f.jsx)(n.code,{children:`getThemeFromStores`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`write`}),` – Receives writes from `,(0,f.jsx)(n.code,{children:`setThemeToStores`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`subscribe`}),` – Observed for external changes via `,(0,f.jsx)(n.code,{children:`observeThemeFromStores`}),`.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),n(),o(),l()})))()}p();export{d as default};