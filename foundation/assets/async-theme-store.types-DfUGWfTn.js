import{j as e,M as o}from"./iframe-BRf7Axb3.js";import{useMDXComponents as t}from"./index-ChQHqx7X.js";import{M as i}from"./manager-helpers-BANBV1uF.js";import c from"./async-theme-store.types.stories-C235UZAa.js";import"./preload-helper-PPVm8Dsz.js";import"./dedent-BuYMbVyj.js";import"./theme-entry-D4S_RAMB.js";import"./theme-result-card-DEniDmnf.js";import"./append-id-Vsg144gU.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"theme/theme-store/AsyncThemeStore"}),`
`,e.jsxs(n.h1,{id:"asyncthemestore-",children:["AsyncThemeStore ",e.jsx(i,{of:c})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AsyncThemeStore"}),` is an interface that defines async/sync methods to read, write, and subscribe to theme state.
All methods are optional.
Data flow participation is inferred from which methods you implement.`]}),`
`,e.jsx(n.p,{children:"Use for remote persistence, polling, or WebSocket-based sync."}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"read"})," – Can return ",e.jsx(n.code,{children:"Promise<ThemeEntry | undefined>"})," for async sources."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"write"})," – Can return ",e.jsx(n.code,{children:"Promise<void>"})," for async persistence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"subscribe"})," – Same signature as sync; observes external changes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/theme-theme-store-themestore--source",children:"ThemeStore"})," – Sync counterpart."]}),`
`]})]})}function f(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{f as default};
