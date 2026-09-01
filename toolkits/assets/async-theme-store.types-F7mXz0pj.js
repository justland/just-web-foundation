import{u as t,j as e,M as o}from"./iframe-BF2V-t9M.js";import{M as i}from"./manager-helpers-DqMOmfok.js";import c from"./async-theme-store.types.stories-BmRyUmug.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-entry-D4S_RAMB.js";import"./dedent-BuYMbVyj.js";import"./theme-result-card-BO9dVFsm.js";import"./append-id-Vsg144gU.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"theme/theme-store/AsyncThemeStore"}),`
`,e.jsxs(s.h1,{id:"asyncthemestore-",children:["AsyncThemeStore ",e.jsx(i,{of:c})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"AsyncThemeStore"}),` is an interface that defines async/sync methods to read, write, and subscribe to theme state.
All methods are optional.
Data flow participation is inferred from which methods you implement.`]}),`
`,e.jsx(s.p,{children:"Use for remote persistence, polling, or WebSocket-based sync."}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"read"})," – Can return ",e.jsx(s.code,{children:"Promise<ThemeEntry | undefined>"})," for async sources."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"write"})," – Can return ",e.jsx(s.code,{children:"Promise<void>"})," for async persistence."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"subscribe"})," – Same signature as sync; observes external changes."]}),`
`]}),`
`,e.jsx(s.h2,{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/story/theme-theme-store-themestore--source",children:"ThemeStore"})," – Sync counterpart."]}),`
`]})]})}function u(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
