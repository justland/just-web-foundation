import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{o as t,s as n}from"./blocks-CKJ_djXG.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./manager-helpers-BFl84zlv.js";import{n as c,r as l}from"./create-theme-hook.stories-DPfyzvOC.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{title:`react/theme/createThemeHook`}),`
`,(0,f.jsxs)(n.h1,{id:`createthemehook-`,children:[`createThemeHook `,(0,f.jsx)(s,{of:l})]}),`
`,(0,f.jsxs)(n.p,{children:[`Factory that creates a React hook returning `,(0,f.jsx)(n.code,{children:`[theme, setTheme]`}),`.
Subscribes to theme stores and keeps the returned theme in sync.`]}),`
`,(0,f.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-ts`,children:`createThemeHook<Themes, A?, B?, C?, D?, E?, F?, G?, H?>(
  themes: Themes,
  stores: [store1, store2?, store3?, store4?, store5?, store6?, store7?, store8?],
  options?: { defaultTheme?: keyof Themes }
): (overrideDefaultTheme?: keyof Themes) => [keyof Themes | undefined, (theme: keyof Themes) => void]
`})}),`
`,(0,f.jsxs)(n.p,{children:[`Same argument order as `,(0,f.jsx)(n.a,{href:`?path=/story/theme-composethemestores--source`,children:`composeThemeStores`}),`: `,(0,f.jsx)(n.code,{children:`(themes, stores, options)`}),`.
Store positions can be concrete stores or factory tuples `,(0,f.jsx)(n.code,{children:`[factory]`}),` / `,(0,f.jsx)(n.code,{children:`[factory, options]`}),`.
Factory generics A-H infer factory types for options autocomplete.`]}),`
`,(0,f.jsx)(n.h2,{id:`options`,children:`Options`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`themes`}),` - ThemeMap defining theme keys and values. See `,(0,f.jsx)(n.a,{href:`?path=/story/theme-thememap--source`,children:`ThemeMap`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`stores`}),` - One or more theme stores or factory tuples `,(0,f.jsx)(n.code,{children:`[factory]`}),` / `,(0,f.jsx)(n.code,{children:`[factory, options]`}),` (e.g. in-memory, localStorage, className). Same format as `,(0,f.jsx)(n.a,{href:`?path=/story/theme-composethemestores--source`,children:`composeThemeStores`}),`. Factory generics A-H enable options autocomplete.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`defaultTheme`}),` - Default theme when stores are empty. Optional.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`return-value`,children:`Return value`}),`
`,(0,f.jsxs)(n.p,{children:[`The created hook returns a tuple `,(0,f.jsx)(n.code,{children:`[theme, setTheme]`}),`:`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`theme`}),` - Current theme key, or `,(0,f.jsx)(n.code,{children:`undefined`}),` when stores are empty and no default is set.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.strong,{children:`setTheme`}),` - Async function to update the theme across all stores.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`override-default-theme`,children:`Override default theme`}),`
`,(0,f.jsxs)(n.p,{children:[`Pass an override to the hook when calling it: `,(0,f.jsx)(n.code,{children:`useTheme('high-contrast')`}),`.
When stores are empty, the override is used instead of the configured `,(0,f.jsx)(n.code,{children:`defaultTheme`}),`.`]}),`
`,(0,f.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.a,{href:`?path=/story/theme-composethemestores--source`,children:`composeThemeStores`}),` – Composes stores (same stores format)`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.a,{href:`?path=/story/theme-introduction--source`,children:`theme/introduction`}),` – Theme module overview`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.a,{href:`?path=/story/theme-thememap--source`,children:`ThemeMap`}),` – Theme key/value mapping`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=r(),a(),n(),o(),c()})))()}p();export{d as default};