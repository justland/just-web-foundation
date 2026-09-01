import{u as n,j as e,M as o}from"./iframe-BF2V-t9M.js";import{M as i}from"./manager-helpers-DqMOmfok.js";import h from"./theme-store.types.stories-GuzBeMvA.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-entry-D4S_RAMB.js";import"./dedent-BuYMbVyj.js";import"./theme-result-card-BO9dVFsm.js";import"./append-id-Vsg144gU.js";function s(r){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"theme/theme-store/ThemeStore"}),`
`,e.jsxs(t.h1,{id:"themestore-",children:["ThemeStore ",e.jsx(i,{of:h})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ThemeStore"}),` is an interface that defines the methods to read/write/subscribe to a theme store.
Data flow participation is inferred based on which methods are implemented.`]}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"read"})," – Participates in waterfall read for ",e.jsx(t.code,{children:"getThemeFromStores"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"write"})," – Receives writes from ",e.jsx(t.code,{children:"setThemeToStores"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"subscribe"})," – Observed for external changes via ",e.jsx(t.code,{children:"observeThemeFromStores"}),"."]}),`
`]})]})}function f(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{f as default};
