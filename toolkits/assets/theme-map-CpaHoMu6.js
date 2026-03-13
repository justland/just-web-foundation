import{j as e,M as o}from"./iframe-BzC63Mz9.js";import{useMDXComponents as n}from"./index-DU3GIN_Q.js";import{M as i}from"./manager-helpers-DfG192Lr.js";import a from"./theme-map.stories-B_1JNB5u.js";import"./preload-helper-PPVm8Dsz.js";import"./dedent-BuYMbVyj.js";import"./theme-entry-D4S_RAMB.js";import"./theme-result-card-Ou7vx_hj.js";import"./append-id-Vsg144gU.js";function s(r){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"theme/ThemeMap"}),`
`,e.jsxs(t.h1,{id:"thememap-",children:["ThemeMap ",e.jsx(i,{of:a})]}),`
`,e.jsxs(t.p,{children:[`Record mapping theme keys to their values.
Each value is a `,e.jsx(t.code,{children:"ThemeMapValue"}),": ",e.jsx(t.code,{children:"string"}),", ",e.jsx(t.code,{children:"readonly string[]"}),", or ",e.jsx(t.code,{children:"{ themeValue: string | readonly string[] }"}),`.
Used by all ThemeStore factories via the `,e.jsx(t.code,{children:"themeMap"})," option."]}),`
`,e.jsx(t.h2,{id:"value-types-thememapvalue",children:"Value types (ThemeMapValue)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"String value"})," – One string per theme (most common case)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Array value"})," – ",e.jsx(t.code,{children:"readonly string[]"})," for multiple tokens (e.g. multiple CSS classes).",e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"classNameThemeStore"})," applies all; ",e.jsx(t.code,{children:"dataAttributeThemeStore"})," uses first only."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Object value"})," – ",e.jsx(t.code,{children:"{ themeValue: string | readonly string[] }"})," for polymorphic values.",e.jsx(t.br,{}),`
`,"Allows storing extra user metadata in persistent stores (localStorage, sessionStorage, cookie).",e.jsx(t.br,{}),`
`,"The object may include additional properties that are preserved when reading from storage."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Mixed"})," – A themeMap can mix string, ",e.jsx(t.code,{children:"string[]"}),", and object values."]}),`
`]}),`
`,e.jsx(t.h2,{id:"stored-theme-validation",children:"Stored theme validation"}),`
`,e.jsxs(t.p,{children:["Persistent stores (localStorage, sessionStorage, cookie) use ",e.jsx(t.strong,{children:"strict validation"}),` when reading.
Stored JSON must have shape `,e.jsx(t.code,{children:"{ theme: string, value: unknown }"})," where:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Shape match"})," – Stored ",e.jsx(t.code,{children:"value"})," must match ",e.jsx(t.code,{children:"themes[theme]"})," in structure (both string, both array, or both object with ",e.jsx(t.code,{children:"themeValue"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Comparable match"})," – The comparable value (string or first element) must match.",e.jsx(t.br,{}),`
`,"For objects, ",e.jsx(t.code,{children:"themeValue"})," (or ",e.jsx(t.code,{children:"themeValue[0]"}),") is compared."]}),`
`]}),`
`,e.jsxs(t.p,{children:[`When both match, the stored value (including extra props) is returned.
Otherwise `,e.jsx(t.code,{children:"undefined"}),` is returned.
Legacy format `,e.jsx(t.code,{children:'{ theme: "dark" }'})," (no value) returns ",e.jsx(t.code,{children:"undefined"}),"."]}),`
`,e.jsxs(t.p,{children:["Stores that use ",e.jsx(t.code,{children:"themeEntry(themes, theme)"})," (classNameThemeStore, dataAttributeThemeStore, prefersColorSchemeThemeStore, inMemoryThemeStore) do not use strict validation—they derive the value from the themes map."]}),`
`,e.jsx(t.h2,{id:"see-also",children:"See also"}),`
`,e.jsx(t.p,{children:"For themeMap examples, see:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-in-memory-inmemorythemestore--theme-map-string-value",children:"inMemoryThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-local-storage-localstoragethemestore--theme-map-string-value",children:"localStorageThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-session-storage-sessionstoragethemestore--theme-map-string-value",children:"sessionStorageThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-class-name-classnamethemestore--theme-map-string-value",children:"classNameThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-data-attribute-dataattributethemestore--theme-map-string-value",children:"dataAttributeThemeStore"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"?path=/story/theme-createthemehook--theme-map-string-value",children:"createThemeHook"})}),`
`]})]})}function g(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{g as default};
