import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{o as t,s as n}from"./blocks-CKJ_djXG.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./manager-helpers-BFl84zlv.js";import{n as c,t as l}from"./theme-map.stories-DPnFqCHW.js";function u(e){let n={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{title:`theme/ThemeMap`}),`
`,(0,f.jsxs)(n.h1,{id:`thememap-`,children:[`ThemeMap `,(0,f.jsx)(s,{of:c})]}),`
`,(0,f.jsxs)(n.p,{children:[`Record mapping theme keys to their values.
Each value is a `,(0,f.jsx)(n.code,{children:`ThemeMapValue`}),`: `,(0,f.jsx)(n.code,{children:`string`}),`, `,(0,f.jsx)(n.code,{children:`readonly string[]`}),`, or `,(0,f.jsx)(n.code,{children:`{ themeValue: string | readonly string[] }`}),`.
Used by all ThemeStore factories via the `,(0,f.jsx)(n.code,{children:`themeMap`}),` option.`]}),`
`,(0,f.jsx)(n.h2,{id:`value-types-thememapvalue`,children:`Value types (ThemeMapValue)`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`String value`}),` – One string per theme (most common case).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Array value`}),` – `,(0,f.jsx)(n.code,{children:`readonly string[]`}),` for multiple tokens (e.g. multiple CSS classes).`,(0,f.jsx)(n.br,{}),`
`,(0,f.jsx)(n.code,{children:`classNameThemeStore`}),` applies all; `,(0,f.jsx)(n.code,{children:`dataAttributeThemeStore`}),` uses first only.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Object value`}),` – `,(0,f.jsx)(n.code,{children:`{ themeValue: string | readonly string[] }`}),` for polymorphic values.`,(0,f.jsx)(n.br,{}),`
`,`Allows storing extra user metadata in persistent stores (localStorage, sessionStorage, cookie).`,(0,f.jsx)(n.br,{}),`
`,`The object may include additional properties that are preserved when reading from storage.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Mixed`}),` – A themeMap can mix string, `,(0,f.jsx)(n.code,{children:`string[]`}),`, and object values.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`stored-theme-validation`,children:`Stored theme validation`}),`
`,(0,f.jsxs)(n.p,{children:[`Persistent stores (localStorage, sessionStorage, cookie) use `,(0,f.jsx)(n.strong,{children:`strict validation`}),` when reading.
Stored JSON must have shape `,(0,f.jsx)(n.code,{children:`{ theme: string, value: unknown }`}),` where:`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Shape match`}),` – Stored `,(0,f.jsx)(n.code,{children:`value`}),` must match `,(0,f.jsx)(n.code,{children:`themes[theme]`}),` in structure (both string, both array, or both object with `,(0,f.jsx)(n.code,{children:`themeValue`}),`).`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`Comparable match`}),` – The comparable value (string or first element) must match.`,(0,f.jsx)(n.br,{}),`
`,`For objects, `,(0,f.jsx)(n.code,{children:`themeValue`}),` (or `,(0,f.jsx)(n.code,{children:`themeValue[0]`}),`) is compared.`]}),`
`]}),`
`,(0,f.jsxs)(n.p,{children:[`When both match, the stored value (including extra props) is returned.
Otherwise `,(0,f.jsx)(n.code,{children:`undefined`}),` is returned.
Legacy format `,(0,f.jsx)(n.code,{children:`{ theme: "dark" }`}),` (no value) returns `,(0,f.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,f.jsxs)(n.p,{children:[`Stores that use `,(0,f.jsx)(n.code,{children:`themeEntry(themes, theme)`}),` (classNameThemeStore, dataAttributeThemeStore, prefersColorSchemeThemeStore, inMemoryThemeStore) do not use strict validation—they derive the value from the themes map.`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsx)(n.p,{children:`For themeMap examples, see:`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`?path=/story/theme-in-memory-inmemorythemestore--theme-map-string-value`,children:`inMemoryThemeStore`})}),`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`?path=/story/theme-local-storage-localstoragethemestore--theme-map-string-value`,children:`localStorageThemeStore`})}),`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`?path=/story/theme-session-storage-sessionstoragethemestore--theme-map-string-value`,children:`sessionStorageThemeStore`})}),`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`?path=/story/theme-class-name-classnamethemestore--theme-map-string-value`,children:`classNameThemeStore`})}),`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`?path=/story/theme-data-attribute-dataattributethemestore--theme-map-string-value`,children:`dataAttributeThemeStore`})}),`
`,(0,f.jsx)(n.li,{children:(0,f.jsx)(n.a,{href:`?path=/story/theme-createthemehook--theme-map-string-value`,children:`createThemeHook`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),n(),o(),l()})))()}p();export{d as default};