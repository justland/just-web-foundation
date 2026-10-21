import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n,s as r}from"./blocks-CFuLlJP_.js";import{a as i}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i as a,r as o}from"./react-Dyi61YEg.js";import{i as s,n as c,r as l,t as u}from"./theme-switching.stories-C1gmc1g9.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{of:s}),`
`,(0,p.jsxs)(t.h1,{id:`theme-switching-with-color-scheme`,children:[`Theme switching with `,(0,p.jsx)(t.code,{children:`color-scheme`})]}),`
`,(0,p.jsx)(t.h2,{id:`recommended`,children:`Recommended`}),`
`,(0,p.jsxs)(t.p,{children:[`Set `,(0,p.jsx)(t.code,{children:`color-scheme`}),` in CSS, keyed on a `,(0,p.jsx)(t.code,{children:`data-theme`}),` attribute on `,(0,p.jsx)(t.code,{children:`<html>`}),`:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`:root { color-scheme: light dark; }               /* system */
:root[data-theme='light'] { color-scheme: light; }
:root[data-theme='dark'] { color-scheme: dark; }
`})}),`
`,(0,p.jsxs)(t.p,{children:[`Or, with Tailwind CSS v4, use `,(0,p.jsx)(t.code,{children:`scheme-*`}),` classes on `,(0,p.jsx)(t.code,{children:`<html>`}),`:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<html class="scheme-light-dark data-[theme=light]:scheme-light data-[theme=dark]:scheme-dark">
`})}),`
`,(0,p.jsx)(t.p,{children:`The library does the rest:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The theme stores write `,(0,p.jsx)(t.code,{children:`data-theme`}),`: `,(0,p.jsx)(t.code,{children:`dataAttributeThemeStore`}),`, composed with `,(0,p.jsx)(t.code,{children:`localStorageThemeStore`}),` or `,(0,p.jsx)(t.code,{children:`cookieThemeStore`}),` to save the choice.
Writing `,(0,p.jsx)(t.code,{children:`undefined`}),` removes the attribute, which is "system".`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`getColorScheme`}),`, `,(0,p.jsx)(t.code,{children:`observeColorScheme`}),`, and `,(0,p.jsx)(t.code,{children:`useColorScheme`}),` read the scheme an element renders in.
Use them instead of the `,(0,p.jsx)(t.code,{children:`prefers-color-scheme`}),` helpers, which ignore the user's pick.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`Keep `,(0,p.jsx)(t.code,{children:`color-scheme`}),` in CSS rather than setting it from script.
With the attribute in the HTML (from a blocking script or the server, see below),
the rules apply on the first paint, so a saved dark choice draws dark native controls, scrollbars, and `,(0,p.jsx)(t.code,{children:`light-dark()`}),` colors from the start.
A value set from script waits until the script runs.`]}),`
`,(0,p.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,p.jsxs)(t.p,{children:[`Declare the schemes the page supports, and let the browser pick one.
`,(0,p.jsx)(t.code,{children:`color-scheme: light dark`}),` follows the user's OS preference.
`,(0,p.jsx)(t.code,{children:`color-scheme: light`}),` or `,(0,p.jsx)(t.code,{children:`color-scheme: dark`}),` overrides it when the user picks a theme.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The property switches what the browser draws itself (form controls, scrollbars, the page canvas,
system colors such as `,(0,p.jsx)(t.code,{children:`Canvas`}),`), and the result of `,(0,p.jsx)(t.code,{children:`light-dark()`}),`.
So one declaration chooses both the browser's colors and yours:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`body {
	background: light-dark(#ffffff, #121212);
	color: light-dark(#1a1a1a, #e8e8e8);
}
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`light-dark()`}),` only switches when the element's scheme can be dark.
Without `,(0,p.jsx)(t.code,{children:`color-scheme: light dark`}),` (or `,(0,p.jsx)(t.code,{children:`dark`}),`), it always returns the first value, with no error.`]}),`
`,(0,p.jsx)(t.h2,{id:`browser-support`,children:`Browser support`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`color-scheme`}),`: Chrome 81, Firefox 96, Safari 13.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`light-dark()`}),` with colors: Chrome 123, Firefox 120, Safari 17.5.
Older browsers drop the declaration, so give a fallback before it if you support them.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`light-dark()`}),` with images (`,(0,p.jsx)(t.code,{children:`light-dark(url(a.png), url(b.png))`}),`) is new in 2026 and needs a fallback.`]}),`
`]}),`
`,(0,p.jsxs)(t.h2,{id:`system-light-and-dark-with-data-theme`,children:[`System, light, and dark with `,(0,p.jsx)(t.code,{children:`data-theme`})]}),`
`,(0,p.jsxs)(t.p,{children:[`"System" means no attribute: `,(0,p.jsx)(t.code,{children:`light dark`}),` on `,(0,p.jsx)(t.code,{children:`:root`}),` already follows the OS.
Do not add a third `,(0,p.jsx)(t.code,{children:`color-scheme`}),` rule for `,(0,p.jsx)(t.code,{children:`data-theme="system"`}),`.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<head>
	<meta name="color-scheme" content="light dark">
	<script>
		// Blocking on purpose: runs before first paint.
		try {
			const t = localStorage.getItem('theme')
			if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t
		} catch {}
	<\/script>
	<style>
		:root { color-scheme: light dark; }
		:root[data-theme='light'] { color-scheme: light; }
		:root[data-theme='dark'] { color-scheme: dark; }
	</style>
</head>
`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`The meta tag sets the canvas before any CSS loads, so the first paint is in the right scheme.`}),`
`,(0,p.jsxs)(t.li,{children:[`If a server renders the page, read the theme cookie (`,(0,p.jsx)(t.code,{children:`getCookieFromHeader`}),`) and write `,(0,p.jsx)(t.code,{children:`data-theme`}),` into the HTML instead of using the script.`]}),`
`,(0,p.jsx)(t.li,{children:`Under a strict Content Security Policy the inline script needs a nonce or hash.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`The stores write the attribute when the user picks a theme:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-ts`,children:`const themes = { light: 'light', dark: 'dark' }
const store = composeThemeStores(themes, [
	[localStorageThemeStore, { storageKey: 'theme' }],
	[dataAttributeThemeStore, { attributeName: 'data-theme' }]
])
await store.write(themeEntry(themes, 'dark'))
await store.write(undefined) // system
`})}),`
`,(0,p.jsxs)(t.p,{children:[`The panel below does the same on a `,(0,p.jsx)(t.code,{children:`<div>`}),` instead of `,(0,p.jsx)(t.code,{children:`<html>`}),`.`]}),`
`,(0,p.jsx)(n,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`tailwind-css-v4`,children:`Tailwind CSS v4`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`scheme-*`}),` utilities set `,(0,p.jsx)(t.code,{children:`color-scheme`}),`, so the theme switch can be classes on `,(0,p.jsx)(t.code,{children:`<html>`}),`.
Theme colors defined with `,(0,p.jsx)(t.code,{children:`light-dark()`}),` in `,(0,p.jsx)(t.code,{children:`@theme`}),` follow the scheme, opacity modifiers included.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<html class="scheme-light-dark data-[theme=light]:scheme-light data-[theme=dark]:scheme-dark">
`})}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`@import 'tailwindcss';

@theme {
	--color-surface: light-dark(#ffffff, #121212);
	--color-ink: light-dark(#1a1a1a, #e8e8e8);
}

/* dark: follows the user's pick, and the system when there is none */
@custom-variant dark {
	&:where([data-theme=dark], [data-theme=dark] *) { @slot; }
	@media (prefers-color-scheme: dark) {
		&:where(:root:not([data-theme]) *) { @slot; }
	}
}
`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`bg-surface`}),` and `,(0,p.jsx)(t.code,{children:`text-ink`}),` follow the scheme without a `,(0,p.jsx)(t.code,{children:`dark:`}),` prefix.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Tailwind's default `,(0,p.jsx)(t.code,{children:`dark:`}),` variant reads `,(0,p.jsx)(t.code,{children:`prefers-color-scheme`}),`, so it ignores the user's pick.
Keep `,(0,p.jsx)(t.code,{children:`dark:`}),` for values `,(0,p.jsx)(t.code,{children:`light-dark()`}),` cannot express (images, shadows, layout), and redefine it as above.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`light-dark()`}),` raises Tailwind's browser floor (Chrome 111, Safari 16.4) to Chrome 123 and Safari 17.5.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`The panel below uses the same classes, with arbitrary values in place of the `,(0,p.jsx)(t.code,{children:`@theme`}),` colors.`]}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`reading-the-scheme-in-script`,children:`Reading the scheme in script`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`prefers-color-scheme`}),` and `,(0,p.jsx)(t.code,{children:`matchMedia()`}),` report the OS preference.
They do not change when the page sets `,(0,p.jsx)(t.code,{children:`color-scheme`}),` (Chrome 154), so they ignore a theme the user picked.
Inside an iframe they report the `,(0,p.jsx)(t.code,{children:`color-scheme`}),` of the `,(0,p.jsx)(t.code,{children:`<iframe>`}),` element.
That applies to `,(0,p.jsx)(t.code,{children:`getPrefersColorScheme`}),`, `,(0,p.jsx)(t.code,{children:`observePrefersColorScheme`}),`, `,(0,p.jsx)(t.code,{children:`usePrefersColorScheme`}),`, and `,(0,p.jsx)(t.code,{children:`prefersColorSchemeThemeStore`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`To know the scheme an element renders in, for example to pick a chart or code-highlighting theme, use:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`getColorScheme({ element })`}),` for a one-off read,`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`observeColorScheme(handler, { element })`}),` to follow changes,`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`useColorScheme({ element })`}),` in React.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`They read the computed `,(0,p.jsx)(t.code,{children:`color-scheme`}),` (and the meta tag when it is `,(0,p.jsx)(t.code,{children:`normal`}),`),
and use `,(0,p.jsx)(t.code,{children:`prefers-color-scheme`}),` only when the element supports both schemes.`]}),`
`,(0,p.jsx)(t.h2,{id:`subtrees-and-embedded-content`,children:`Subtrees and embedded content`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`color-scheme`}),` is inherited, and works on any element:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`.inverted { color-scheme: dark; }          /* controls, scrollbars, light-dark() flip here */
.always-light { color-scheme: only light; }
iframe.embed { color-scheme: light dark; } /* pass the scheme down */
`})}),`
`,(0,p.jsxs)(t.p,{children:[`The embedded page must declare `,(0,p.jsx)(t.code,{children:`color-scheme: light dark`}),` (or the meta tag) to follow its iframe element.
If the two differ, the browser paints an opaque background behind the frame.`]}),`
`,(0,p.jsx)(t.h2,{id:`learn-more`,children:`Learn more`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme`,rel:`nofollow`,children:[`MDN: `,(0,p.jsx)(t.code,{children:`color-scheme`})]})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark`,rel:`nofollow`,children:[`MDN: `,(0,p.jsx)(t.code,{children:`light-dark()`})]})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme`,rel:`nofollow`,children:[`MDN: `,(0,p.jsx)(t.code,{children:`prefers-color-scheme`})]})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://web.dev/articles/color-scheme`,rel:`nofollow`,children:[`web.dev: the `,(0,p.jsx)(t.code,{children:`color-scheme`}),` CSS property and meta tag`]})}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.a,{href:`https://drafts.csswg.org/css-color-adjust-1/`,rel:`nofollow`,children:`CSS Color Adjustment Module Level 1`}),`, which defines `,(0,p.jsx)(t.code,{children:`color-scheme`})]}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme`,rel:`nofollow`,children:[`HTML Living Standard: the `,(0,p.jsx)(t.code,{children:`color-scheme`}),` meta tag`]})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://caniuse.com/mdn-css_types_color_light-dark`,rel:`nofollow`,children:[`Can I use: `,(0,p.jsx)(t.code,{children:`light-dark()`})]})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsxs)(t.a,{href:`https://tailwindcss.com/docs/color-scheme`,rel:`nofollow`,children:[`Tailwind CSS: `,(0,p.jsx)(t.code,{children:`color-scheme`})]})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`https://tailwindcss.com/docs/dark-mode`,rel:`nofollow`,children:`Tailwind CSS: Dark mode`})}),`
`]})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=i(),o(),t(),l()})))()}m();export{f as default};