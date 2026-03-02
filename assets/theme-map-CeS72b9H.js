import{j as e,M as a}from"./iframe-WGM8CAeG.js";import{useMDXComponents as n}from"./index-D_GIb1Xn.js";import{M as i}from"./manager-helpers-Ctr7q221.js";import o from"./theme-map.stories-Rr2lheou.js";import"./preload-helper-PPVm8Dsz.js";import"./dedent-BuYMbVyj.js";import"./theme-entry-D4S_RAMB.js";import"./theme-result-card-CfPQb0rw.js";function r(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"theme/ThemeMap"}),`
`,e.jsxs(t.h1,{id:"thememap-",children:["ThemeMap ",e.jsx(i,{of:o})]}),`
`,e.jsxs(t.p,{children:["Record mapping theme keys to their values. Each value can be a single string or ",e.jsx(t.code,{children:"readonly string[]"})," (e.g. multiple CSS classes). Used by all ThemeStore factories via the ",e.jsx(t.code,{children:"themeMap"})," option."]}),`
`,e.jsx(t.h2,{id:"value-types",children:"Value types"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"String value"})," – One string per theme (most common case)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Array value"})," – ",e.jsx(t.code,{children:"readonly string[]"})," for multiple tokens (e.g. multiple CSS classes). ",e.jsx(t.code,{children:"classNameThemeStore"})," applies all; ",e.jsx(t.code,{children:"dataAttributeThemeStore"})," uses first only."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Mixed"})," – A ",e.jsx(t.code,{children:"themeMap"})," can mix string and ",e.jsx(t.code,{children:"string[]"})," values."]}),`
`]}),`
`,e.jsx(t.h2,{id:"see-also",children:"See also"}),`
`,e.jsx(t.p,{children:"For themeMap examples, see:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-in-memory-inmemorythemestore--theme-map-string-value",children:"inMemoryThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-local-storage-localstoragethemestore--theme-map-string-value",children:"localStorageThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-session-storage-sessionstoragethemestore--theme-map-string-value",children:"sessionStorageThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-class-name-classnamethemestore--theme-map-string-value",children:"classNameThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-data-attribute-dataattributethemestore--theme-map-string-value",children:"dataAttributeThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-createthemehook--theme-map-string-value",children:"createThemeHook"})}),`
`]})]})}function u(s={}){const{wrapper:t}={...n(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
