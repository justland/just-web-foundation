import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n,s as r}from"./blocks-CFuLlJP_.js";import{a as i}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i as a,r as o}from"./react-Dyi61YEg.js";import{i as s,n as c,r as l,t as u}from"./dark-mode.stories-xgB9hjJF.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{of:l}),`
`,(0,p.jsxs)(t.h1,{id:`dark-mode-and-color-scheme`,children:[`Dark mode and `,(0,p.jsx)(t.code,{children:`color-scheme`})]}),`
`,(0,p.jsxs)(t.p,{children:[`A `,(0,p.jsx)(t.code,{children:`dark`}),` class only changes the styles that select on it, such as Tailwind's `,(0,p.jsx)(t.code,{children:`dark:`}),` utilities.
The browser draws some things itself, and those ignore classes:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`form controls (date pickers, selects, checkboxes, range sliders)`}),`
`,(0,p.jsx)(t.li,{children:`scrollbars`}),`
`,(0,p.jsxs)(t.li,{children:[`system colors such as `,(0,p.jsx)(t.code,{children:`Canvas`}),` and `,(0,p.jsx)(t.code,{children:`CanvasText`})]}),`
`,(0,p.jsxs)(t.li,{children:[`the `,(0,p.jsx)(t.code,{children:`light-dark()`}),` color function`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`They follow only the CSS `,(0,p.jsx)(t.code,{children:`color-scheme`}),` property.
So the Storybook CSS for this package maps the class to the property:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`@layer base {
	.dark {
		color-scheme: dark;
	}
}
`})}),`
`,(0,p.jsxs)(t.p,{children:[`The rule sits in the `,(0,p.jsx)(t.code,{children:`base`}),` layer, so a `,(0,p.jsx)(t.code,{children:`scheme-*`}),` utility can still override it on a subtree.`]}),`
`,(0,p.jsxs)(t.h2,{id:`the-class-compared-with-color-scheme`,children:[`The class compared with `,(0,p.jsx)(t.code,{children:`color-scheme`})]}),`
`,(0,p.jsx)(t.p,{children:`Each panel sets its own scheme, so the comparison does not depend on the toolbar.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`A`}),` is light.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`B`}),` has the `,(0,p.jsx)(t.code,{children:`dark`}),` class with `,(0,p.jsx)(t.code,{children:`color-scheme`}),` forced back to light (`,(0,p.jsx)(t.code,{children:`scheme-light`}),`).
This is what the class alone did before the rule above.
The Tailwind swatch turns black, but the controls, the scrollbar, `,(0,p.jsx)(t.code,{children:`Canvas`}),`, and `,(0,p.jsx)(t.code,{children:`light-dark()`}),` stay light.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`C`}),` has the `,(0,p.jsx)(t.code,{children:`dark`}),` class only. The rule sets `,(0,p.jsx)(t.code,{children:`color-scheme: dark`}),`, so everything switches.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`The values under each panel are read from the browser with `,(0,p.jsx)(t.code,{children:`getComputedStyle`}),`.`]}),`
`,(0,p.jsx)(n,{of:u}),`
`,(0,p.jsxs)(t.p,{children:[`With the toolbar in dark mode, the Tailwind swatch in A also turns black,
because Tailwind's `,(0,p.jsx)(t.code,{children:`dark:`}),` variant matches any element under `,(0,p.jsx)(t.code,{children:`html.dark`}),`.`]}),`
`,(0,p.jsxs)(t.h2,{id:`switching-html-with-a-theme-store`,children:[`Switching `,(0,p.jsx)(t.code,{children:`<html>`}),` with a theme store`]}),`
`,(0,p.jsxs)(t.p,{children:[`The Storybook toolbar puts the `,(0,p.jsx)(t.code,{children:`dark`}),` class on `,(0,p.jsx)(t.code,{children:`<html>`}),`.
The buttons below do the same through `,(0,p.jsx)(t.code,{children:`classNameThemeStore`}),`.
The panel sets no scheme of its own; `,(0,p.jsx)(t.code,{children:`color-scheme`}),` is inherited, so it follows `,(0,p.jsx)(t.code,{children:`<html>`}),`.`]}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsxs)(t.p,{children:[`An app that toggles a `,(0,p.jsx)(t.code,{children:`dark`}),` class with `,(0,p.jsx)(t.code,{children:`classNameThemeStore`}),` needs the same CSS rule to get dark native controls.`]}),`
`,(0,p.jsx)(t.h2,{id:`how-this-is-tested`,children:`How this is tested`}),`
`,(0,p.jsxs)(t.p,{children:[`Both stories have `,(0,p.jsx)(t.code,{children:`play`}),` functions that run as browser tests in CI.
They check the computed `,(0,p.jsx)(t.code,{children:`color-scheme`}),`, the `,(0,p.jsx)(t.code,{children:`Canvas`}),` color, and the `,(0,p.jsx)(t.code,{children:`light-dark()`}),` result.
Without the CSS rule, both fail: `,(0,p.jsx)(t.code,{children:`color-scheme`}),` stays `,(0,p.jsx)(t.code,{children:`normal`}),` instead of `,(0,p.jsx)(t.code,{children:`dark`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[`For the background, see the research in `,(0,p.jsx)(t.code,{children:`.research/css-color-scheme/conclusion.md`}),` at the repository root.`]})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=i(),o(),t(),s()})))()}m();export{f as default};