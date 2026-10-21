import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./blocks-CFuLlJP_.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./manager-helpers-7jQmy8wF.js";import{n as c,t as l}from"./theme-map.stories-BmCzuklR.js";function u(e){let t={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`theme/ThemeMap`}),`
`,(0,f.jsxs)(t.h1,{id:`thememap-`,children:[`ThemeMap `,(0,f.jsx)(s,{of:c})]}),`
`,(0,f.jsxs)(t.p,{children:[`Record mapping theme keys to their values.
Each value is a `,(0,f.jsx)(t.code,{children:`ThemeMapValue`}),`: `,(0,f.jsx)(t.code,{children:`string`}),`, `,(0,f.jsx)(t.code,{children:`readonly string[]`}),`, or `,(0,f.jsx)(t.code,{children:`{ themeValue: string | readonly string[] }`}),`.
Used by all ThemeStore factories via the `,(0,f.jsx)(t.code,{children:`themeMap`}),` option.`]}),`
`,(0,f.jsx)(t.h2,{id:`value-types-thememapvalue`,children:`Value types (ThemeMapValue)`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`String value`}),` – One string per theme (most common case).`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Array value`}),` – `,(0,f.jsx)(t.code,{children:`readonly string[]`}),` for multiple tokens (e.g. multiple CSS classes).`,(0,f.jsx)(t.br,{}),`
`,(0,f.jsx)(t.code,{children:`classNameThemeStore`}),` applies all; `,(0,f.jsx)(t.code,{children:`dataAttributeThemeStore`}),` uses first only.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Object value`}),` – `,(0,f.jsx)(t.code,{children:`{ themeValue: string | readonly string[] }`}),` for polymorphic values.`,(0,f.jsx)(t.br,{}),`
`,`Allows storing extra user metadata in persistent stores (localStorage, sessionStorage, cookie).`,(0,f.jsx)(t.br,{}),`
`,`The object may include additional properties that are preserved when reading from storage.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Mixed`}),` – A themeMap can mix string, `,(0,f.jsx)(t.code,{children:`string[]`}),`, and object values.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`stored-theme-validation`,children:`Stored theme validation`}),`
`,(0,f.jsxs)(t.p,{children:[`Persistent stores (localStorage, sessionStorage, cookie) use `,(0,f.jsx)(t.strong,{children:`strict validation`}),` when reading.
Stored JSON must have shape `,(0,f.jsx)(t.code,{children:`{ theme: string, value: unknown }`}),` where:`]}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Shape match`}),` – Stored `,(0,f.jsx)(t.code,{children:`value`}),` must match `,(0,f.jsx)(t.code,{children:`themes[theme]`}),` in structure (both string, both array, or both object with `,(0,f.jsx)(t.code,{children:`themeValue`}),`).`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Comparable match`}),` – The comparable value (string or first element) must match.`,(0,f.jsx)(t.br,{}),`
`,`For objects, `,(0,f.jsx)(t.code,{children:`themeValue`}),` (or `,(0,f.jsx)(t.code,{children:`themeValue[0]`}),`) is compared.`]}),`
`]}),`
`,(0,f.jsxs)(t.p,{children:[`When both match, the stored value (including extra props) is returned.
Otherwise `,(0,f.jsx)(t.code,{children:`undefined`}),` is returned.
Legacy format `,(0,f.jsx)(t.code,{children:`{ theme: "dark" }`}),` (no value) returns `,(0,f.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Stores that use `,(0,f.jsx)(t.code,{children:`themeEntry(themes, theme)`}),` (classNameThemeStore, dataAttributeThemeStore, prefersColorSchemeThemeStore, inMemoryThemeStore) do not use strict validation—they derive the value from the themes map.`]}),`
`,(0,f.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsx)(t.p,{children:`For themeMap examples, see:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/story/theme-in-memory-inmemorythemestore--theme-map-string-value`,children:`inMemoryThemeStore`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/story/theme-local-storage-localstoragethemestore--theme-map-string-value`,children:`localStorageThemeStore`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/story/theme-session-storage-sessionstoragethemestore--theme-map-string-value`,children:`sessionStorageThemeStore`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/story/theme-class-name-classnamethemestore--theme-map-string-value`,children:`classNameThemeStore`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/story/theme-data-attribute-dataattributethemestore--theme-map-string-value`,children:`dataAttributeThemeStore`})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsx)(t.a,{href:`?path=/story/theme-createthemehook--theme-map-string-value`,children:`createThemeHook`})}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),t(),o(),l()})))()}p();export{d as default};