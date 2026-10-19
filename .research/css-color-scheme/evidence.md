# CSS color-scheme Evidence

Abbreviations used in source labels:

- CA1: CSS Color Adjustment Module Level 1, editor's draft, <https://drafts.csswg.org/css-color-adjust-1/>
- MQ5: Media Queries Level 5, editor's draft, <https://drafts.csswg.org/mediaqueries-5/>
- CC5: CSS Color Module Level 5, editor's draft, <https://drafts.csswg.org/css-color-5/>
- Probe: a hand-run test in headless Chrome 154 (Linux) driven by Playwright on 2026-10-19.
  The test pages were `data:` and `srcdoc` documents; the scripts are summarized in each entry.

## Claim E01

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.2, "The color-scheme property"; MDN `color-scheme`
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop>, <https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme>
- Type: spec; official docs

Notes:

- Grammar: `normal | [ light | dark | <custom-ident> ]+ && only?`. Initial value `normal`. Applies to all elements and text. Inherited. Discrete animation.
- `normal` means the element uses the page color scheme.
- When several schemes are listed, the order is the author's preference; the UA uses the first one it supports that fits the user's preference.
- `<custom-ident>` values are reserved; UAs must not give them a meaning.

## Claim E02

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.2 grammar; Probe `CSS.supports()`
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop>
- Type: spec; browser test

Notes:

- `only` alone is invalid: the grammar needs at least one scheme keyword. The spec does not say so in prose; it follows from the grammar.
- Probe: `CSS.supports('color-scheme', 'only')` is `false`; `CSS.supports('color-scheme', 'only light')` is `true`.

## Claim E03

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.4, "Effects of the Used Color Scheme"
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-effect>
- Type: spec

Notes:

- The element color scheme changes scrollbars and other interaction UI, form controls, specially rendered elements, UI such as spellcheck underlines, the CSS system colors (`Canvas`, `CanvasText`, `Field`, and others), and `light-dark()`.
- On the root element it also changes the surface color of the canvas and the viewport's scrollbars.
- web.dev adds that on `:root` it changes the initial text color. That statement is not in the CA1 text extracted for this record; it follows from the initial `color` being `CanvasText`.

## Claim E04

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: HTML Living Standard, "Standard metadata names: color-scheme"
- URL: <https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme>
- Type: spec

Notes:

- The meta tag exists "to aid user agents in rendering the page background with the desired color scheme immediately", before CSS loads.
- Its `content` uses the CSS `color-scheme` syntax and sets the page's supported color schemes.
- The first `meta[name=color-scheme]` in tree order with a valid `content` wins; at most one is allowed per document.
- The CA1 examples write the attribute as `contents`. That is a typo in the spec; the HTML attribute is `content`.

## Claim E05

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.1, note on the meta tag
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-page>
- Type: spec

Notes:

- "In HTML, the color-scheme `<meta>` sets the page color scheme. Authors should generally set the page color scheme, rather than using the color-scheme property, so that the prefers-color-scheme media feature is consistent with the elements on the page."
- The property is framed as an override of the page color scheme for an element and its subtree.

## Claim E06

Date: 2026-10-19
Status: supports
Confidence: medium

Source:

- Label: Probe, meta versus `:root` property
- URL: n/a (hand-run test)
- Type: browser test

Notes:

- An iframe document with `<meta name="color-scheme" content="dark">` and `:root { color-scheme: light }` resolved `light-dark(red, blue)` to red (light). The same document without the `:root` rule resolved it to blue (dark).
- So in Chrome a `color-scheme` declaration on `:root` overrides the meta tag for rendering.
- The specs do not state this precedence in words. Only one engine was tested.

## Claim E07

Date: 2026-10-19
Status: mixed
Confidence: medium

Source:

- Label: MQ5 section 12.5, `prefers-color-scheme`, and section 12.5.1, `ua-color-scheme`
- URL: <https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme>
- Type: spec

Notes:

- MQ5 now says `dark` "indicates that the page color scheme is a dark color scheme". Read with CA1 section 2.3, the media query would report the user's preference reconciled with the page's supported schemes, not the raw OS setting.
- MQ5 adds `ua-color-scheme` to expose the UA's own setting.
- E08 shows Chrome does not behave this way today. Treat the spec text as a direction, not as current behavior.

## Claim E08

Date: 2026-10-19
Status: contradicts
Confidence: medium

Source:

- Label: Probe, top-level `prefers-color-scheme` with a light-only page
- URL: n/a (hand-run test)
- Type: browser test

Notes:

- With the preference emulated as dark, a page with `<meta name="color-scheme" content="light">` and `:root { color-scheme: light }` still matched `(prefers-color-scheme: dark)`.
- In an iframe whose document declared `content="dark"` while the embedder preferred light, the media query matched light even though the document rendered dark.
- So in Chrome the media query reports the preference (the OS setting, or the embedder's scheme for an iframe), not the page's resolved scheme. A theme toggle that only sets `color-scheme` does not change what `prefers-color-scheme` matches.
- This contradicts the reading of MQ5 in E07. Other engines were not tested.

## Claim E09

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.5, "Overriding the Color Scheme"; Chrome Developers blog, "Auto Dark Theme"; MDN `color-scheme`
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-override>, <https://developer.chrome.com/blog/auto-dark-theme>, <https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme>
- Type: spec; browser vendor blog; official docs

Notes:

- If the user prefers a scheme that the page does not support, and the page has not used `only`, the UA may darken (or lighten) the page automatically.
- `only` opts out. Chrome's blog says `<meta name="color-scheme" content="only light">` opts out a whole page and avoids a flash of darkened content; `color-scheme: only light` on one element opts out that element.
- The `only` keyword came from WebKit behavior (CSSWG issue 5089, <https://lists.w3.org/Archives/Public/public-css-archive/2021May/0330.html>).
- Firefox has no forced-darkening feature, so `only` has no visible effect there. This is an inference, not a sourced statement.

## Claim E10

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.1; MQ5 section 12.5; MDN `prefers-color-scheme`
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-page>, <https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme>, <https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme>
- Type: spec; official docs

Notes:

- "In embedded documents (such as an iframe or an SVG img), the embedding element's element color scheme is used as the embedded document's preferred color scheme ... rather than the user's preference."
- It is a preference: the embedded document's own declaration still decides what it renders.
- Applies to cross-origin iframes too. Inline `<svg>` is part of the host document and is not covered.

## Claim E11

Date: 2026-10-19
Status: supports
Confidence: medium

Source:

- Label: Probe, iframe preference inheritance
- URL: n/a (hand-run test)
- Type: browser test

Notes:

- With the top-level preference light, an `<iframe style="color-scheme: dark">` made `(prefers-color-scheme: dark)` match inside the iframe.
- If the iframe document declared `light dark`, its `light-dark()` resolved dark. If it declared nothing, `light-dark()` resolved light although its media query reported dark.
- So setting `color-scheme` on the iframe element passes the scheme down, but the embedded page must opt in with its own `color-scheme` to follow it.
- Playwright's media emulation applies to all frames, so iframe results are only meaningful without emulation; these results were taken without it.

## Claim E12

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CA1 section 2.4, opaque canvas for embedded documents; community write-ups
- URL: <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-effect>, <https://fvsch.com/transparent-iframes>, <https://elvery.net/drzax/iframe-background-colour-transparent-dark-mode/>
- Type: spec; articles

Notes:

- For documents normally drawn over a transparent canvas (an HTML iframe), if the iframe element's color scheme and the embedded root's color scheme differ, the UA must paint an opaque `Canvas`-colored background for the embedded document.
- Graphics embeds such as an SVG in `<img>` stay transparent.
- The usual fix for an unexpected white or black box is to set `color-scheme` on the iframe element to match the embedded page.
- A claimed "2022 Chrome change" could not be sourced; the write-ups date the resolution's implementation to about 2021.

## Claim E13

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: CC5 section 7, `light-dark()`; MDN `light-dark()`
- URL: <https://drafts.csswg.org/css-color-5/#light-dark>, <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark>
- Type: spec; official docs

Notes:

- `light-dark(<color>, <color>)` computes to the first value when the element color scheme is light and the second when it is dark.
- It reads the element color scheme (the `color-scheme` property), not the `prefers-color-scheme` media query.
- MDN: `color-scheme` "must have a value of `light dark`, usually set on the `:root`". Without `dark` in the declared schemes the element is light and the first value is always used, with no error.

## Claim E14

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: Bramus van Damme, "The future of CSS: Easy Light-Dark Mode Color Switching with light-dark()"
- URL: <https://www.bram.us/2023/10/09/the-future-of-css-easy-light-dark-mode-color-switching-with-light-dark/>
- Type: article (Chrome DevRel author)

Notes:

- Confirms that `light-dark()` needs `color-scheme: light dark` and that only `light` and `dark` are recognized.
- Shows per-element overrides such as `.dark { color-scheme: dark }` flipping `light-dark()` values in that subtree.

## Claim E15

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: caniuse, `light-dark()` color; MDN Baseline badge
- URL: <https://caniuse.com/mdn-css_types_color_light-dark>, <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark>
- Type: compatibility data; official docs

Notes:

- Color form supported from Chrome 123, Edge 123, Firefox 120, Safari 17.5. Global usage about 91%.
- MDN marks it "Baseline 2024, newly available" (May 2024). Baseline widely available comes 30 months later, so about November 2026. As of 2026-10-19 it is still "newly available".
- webstatus.dev pages did not render for this record, so the Baseline date comes from MDN only.

## Claim E16

Date: 2026-10-19
Status: mixed
Confidence: medium

Source:

- Label: CC5 `<light-dark-image>`; caniuse `light-dark()` for images; Chromium Intent to Ship; CSSWG issue 12513
- URL: <https://drafts.csswg.org/css-color-5/#light-dark>, <https://caniuse.com/wf-light-dark-image>, <https://groups.google.com/a/chromium.org/d/msgid/blink-dev/3639174f-7f49-4a51-b8c4-d493345c2cdbn%40chromium.org>, <https://lists.w3.org/Archives/Public/public-css-archive/2026Mar/0755.html>
- Type: spec; compatibility data; browser vendor mailing list; issue tracker

Notes:

- CC5 now allows `light-dark([<image> | none], [<image> | none])`. Mixing a color and an image is a parse error.
- Shipped in Firefox and in Chrome/Edge 150 (Intent to Ship, May 2026). Probe: Chrome 154 accepts `light-dark(url(a.png), none)` in `background-image`.
- Safari is contested: one read of caniuse lists Safari 27, a search snippet of the same page lists "not supported through 26.5". Check before relying on it. The image form is not Baseline.

## Claim E17

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: caniuse `color-scheme`; MDN Baseline badge; web.dev "Improved dark mode default styling with the color-scheme CSS property"
- URL: <https://caniuse.com/mdn-css_properties_color-scheme>, <https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme>, <https://web.dev/articles/color-scheme>
- Type: compatibility data; official docs; article

Notes:

- Supported from Chrome 81, Edge 81, Firefox 96, Safari 13. Global usage about 97%.
- MDN marks it Baseline widely available (newly available since January 2022, when Firefox 96 shipped).
- `prefers-color-scheme` has been available across browsers since January 2020 (MDN).

## Claim E18

Date: 2026-10-19
Status: supports
Confidence: medium

Source:

- Label: Probe, `light-dark()` inside other color functions
- URL: n/a (hand-run test)
- Type: browser test

Notes:

- Chrome 154 accepts `color-mix(in srgb, light-dark(red, blue), white)` and `rgb(from light-dark(red, blue) r g b)` in `CSS.supports()`.
- A reading that CC5 forbids `light-dark()` in these positions was not confirmed by the spec text or by Chrome. WebKit bug 273996 about relative color with `light-dark()` was fixed in August 2024 (unverified secondary report).
- Only parse support was tested, not the resolved values.

## Claim E19

Date: 2026-10-19
Status: supports
Confidence: medium

Source:

- Label: MDN `light-dark()` examples; Rebecca DePrey, "Embracing native dark mode with the CSS color-scheme property"; Bramus (E14)
- URL: <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark>, <https://rebeccamdeprey.com/blog/embracing-native-dark-mode-with-the-css-color-scheme-property>
- Type: official docs; article

Notes:

- The user-selectable pattern: `:root { color-scheme: light dark }` as the default ("system"), with `[data-theme=light] { color-scheme: light }` and `[data-theme=dark] { color-scheme: dark }` overrides, and colors written with `light-dark()`.
- MDN shows the override but advises against overriding a user's stated preference without giving them the choice.
- No primary source compares this pattern with the class toggle plus `@media (prefers-color-scheme: dark)` approach. The comparison in the conclusion is this record's own reasoning.
- The web.dev theming pattern (<https://web.dev/patterns/theming/color-schemes/pattern>) returned 404 and was not read.

## Claim E20

Date: 2026-10-19
Status: supports
Confidence: medium

Source:

- Label: web.dev `color-scheme` article; MDN `color-scheme`; swyx, "Avoiding Flash of Unstyled Dark Mode Text"; Qwik docs, "Theme management"
- URL: <https://web.dev/articles/color-scheme>, <https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme>, <https://www.swyx.io/avoid-fotc>, <https://qwik.dev/docs/cookbook/theme-management/>
- Type: article; official docs; article; framework docs

Notes:

- The meta tag lets the UA paint the canvas in the right scheme before CSS arrives. MDN advises placing it before any style information.
- A saved user override (not the OS preference) needs a small blocking script in `<head>` that reads storage and sets the attribute before first paint, or a server that renders the attribute from a cookie.
- Qwik notes that inline scripts need a nonce or hash under a strict Content Security Policy.
- No primary source for the cookie approach was found; it is standard practice and the repo already supports it (E26).

## Claim E21

Date: 2026-10-19
Status: mixed
Confidence: medium

Source:

- Label: MQ5 section 13, "Script Control of User Preferences"; Web Preferences API explainer (retired); MDN User Preferences API; Probe
- URL: <https://drafts.csswg.org/mediaqueries-5/#auto-pref>, <https://github.com/lukewarlow/web-preferences-api>, <https://developer.mozilla.org/en-US/docs/Web/API/User_Preferences_API>
- Type: spec; explainer; official docs; browser test

Notes:

- MQ5 defines `navigator.preferences.colorScheme` with `requestOverride()` and `clearOverride()`. An override must apply to the media query, `matchMedia()`, the used color scheme, and the `Sec-CH-Prefers-Color-Scheme` header.
- This would let a site toggle change `prefers-color-scheme` itself, unlike `color-scheme`.
- The explainer was archived on 2026-01-22. It is behind an experimental flag in Chrome; Probe: `navigator.preferences` is `undefined` in Chrome 154 stable. No origin trial was found.

## Claim E22

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: MQ5 changes list; MDN `prefers-color-scheme`
- URL: <https://drafts.csswg.org/mediaqueries-5/#changes>, <https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme>
- Type: spec; official docs

Notes:

- "Made embedded SVGs use the used color scheme of the embedding node for prefers-color-scheme."
- An SVG loaded through `<img>` can carry its own `@media (prefers-color-scheme: dark)` rules and follow the `color-scheme` of the `<img>` element. Inline SVG uses the host page's rules instead.

## Claim E23

Date: 2026-10-19
Status: mixed
Confidence: medium

Source:

- Label: WebKit bug 282057; CSSWG thread on `light-dark()` computed-value timing; CC5 section 7
- URL: <https://bugs.webkit.org/show_bug.cgi?id=282057>, <https://lists.w3.org/Archives/Public/public-css-archive/2026Mar/0940.html>, <https://drafts.csswg.org/css-color-5/#light-dark>
- Type: issue tracker; spec

Notes:

- `light-dark()` computes to a color at the element where it is used. In an unregistered custom property (`--bg: light-dark(...)`) the text is substituted where `var(--bg)` is used, so it follows that element's scheme.
- In a registered `@property` with `syntax: '<color>'`, the value is computed on the declaring element and descendants inherit the resolved color. A subtree that changes `color-scheme` will not flip it. This is an inference from the spec; no vendor test case was found.
- WebKit bug 282057: a registered property whose `initial-value` uses `light-dark()` resolves to the light value; a maintainer said all browsers get this wrong.

## Claim E24

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: just-web-foundation `libs/toolkits/src/theme/` and `libs/css/src/theme/`
- URL: libs/toolkits/src/theme/theme-store/data-attribute-theme-store/data-attribute-theme-store.ts, libs/toolkits/src/theme/class-name/write-class-name.ts, libs/css/src/theme/data-attribute.ts
- Type: code

Notes:

- Theme stores reflect the theme by writing a class name or a `data-*` attribute on `document.documentElement` (or a given element). Persistence stores use localStorage, sessionStorage, cookies, or memory.
- No library code reads or writes the `color-scheme` property, the meta tag, or `light-dark()`.

## Claim E25

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: just-web-foundation `color-scheme` helpers
- URL: libs/toolkits/src/color-scheme/get-prefers-color-scheme.ts, libs/toolkits/src/theme/theme-store/prefers-color-scheme-theme-store/prefers-color-scheme-theme-store.ts, libs/toolkits/src/react/hooks/use-prefers-color-scheme.ts, libs/css/src/utils/prefers-color-scheme.ts
- Type: code

Notes:

- `getPrefersColorScheme`, `observePrefersColorScheme`, `usePrefersColorScheme`, and `prefersColorSchemeThemeStore` read `prefers-color-scheme` through `matchMedia`. The `ColorScheme` type is `'light' | 'dark'`, the media feature's values.
- Given E08 and E10, these report the OS preference (or the embedder's scheme inside an iframe), not the scheme the page renders after a `color-scheme` override.

## Claim E26

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: just-web-foundation cookie theme store and Storybook config
- URL: libs/toolkits/src/theme/cookie/_cookie-utils.ts, libs/toolkits/.storybook/preview.tsx, libs/toolkits/.storybook/tailwind.variant.css, libs/css/.storybook/tailwind.css, libs/types/tailwind.css
- Type: code

Notes:

- `getCookieFromHeader` lets a server read the theme cookie from a request, which supports rendering the theme attribute on the server and avoiding a flash.
- Storybook dark mode adds a `dark` class (plus `bg-black text-white`) and Tailwind uses `@custom-variant dark (&:where(.dark, .dark *))`. Nothing sets `color-scheme`, so native controls, scrollbars, and system colors stay light in dark stories. Superseded by E31: the Storybook CSS now sets `color-scheme` for `.dark`.

## Claim E27

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: Tailwind CSS docs, "color-scheme"; installed `tailwindcss` 4.3.3
- URL: <https://tailwindcss.com/docs/color-scheme>, node_modules/.pnpm/tailwindcss@4.3.3
- Type: official docs; code

Notes:

- Tailwind v4 ships `scheme-normal`, `scheme-light`, `scheme-dark`, `scheme-light-dark`, `scheme-only-light`, and `scheme-only-dark`, each mapping to the matching `color-scheme` value. The installed 4.3.3 build contains all six.
- The docs show combining them with variants, for example `<html class="scheme-light dark:scheme-dark">`.

## Claim E28

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: Tailwind CSS docs, "Dark mode"
- URL: <https://tailwindcss.com/docs/dark-mode>
- Type: official docs

Notes:

- "By default this uses the `prefers-color-scheme` CSS media feature." So the default `dark:` variant ignores a user's pick made through `color-scheme` (see E08).
- The docs show overriding it with `@custom-variant dark (&:where(.dark, .dark *));` or `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));`.
- The page does not mention `color-scheme` or `light-dark()`.

## Claim E29

Date: 2026-10-19
Status: supports
Confidence: medium

Source:

- Label: Probe, Tailwind 4.3.3 `compile()` output
- URL: n/a (hand-run test with the repo's installed Tailwind)
- Type: code test

Notes:

- `@theme { --color-surface: light-dark(#ffffff, #121212); }` is emitted unchanged as an unregistered custom property on `:root, :host`, and `bg-surface` compiles to `background-color: var(--color-surface)`. Per E23, an unregistered property resolves where it is used, so a subtree with `scheme-dark` flips it.
- `bg-surface/50` compiles to `color-mix(in srgb, light-dark(#ffffff, #121212) 50%, transparent)`, with `color-mix(in oklab, var(--color-surface) 50%, transparent)` inside `@supports`. Chrome 154 parses `light-dark()` inside `color-mix()` (E18).
- `data-[theme=dark]:scheme-dark` compiles to `.data-\[theme\=dark\]\:scheme-dark[data-theme="dark"]`, which is more specific than `.scheme-light-dark`, so the user's pick wins on the same element.
- A block `@custom-variant dark` with an attribute branch and a `@media (prefers-color-scheme: dark)` branch on `:root:not([data-theme]) *` compiles as expected.
- Only the compiled CSS was checked; the rendered result was not tested in a browser.

## Claim E30

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: Tailwind CSS docs, "Compatibility"
- URL: <https://tailwindcss.com/docs/compatibility>
- Type: official docs

Notes:

- Tailwind v4 depends on Chrome 111, Safari 16.4, and Firefox 128.
- `light-dark()` needs Chrome 123 and Safari 17.5 (E15). Using it in `@theme` raises a project's browser floor above Tailwind's own for Chrome and Safari. Firefox 128 already covers it.

## Claim E31

Date: 2026-10-19
Status: supports
Confidence: high

Source:

- Label: just-web-foundation Storybook CSS after PR #111; Probe in each Storybook dev server
- URL: libs/css/.storybook/tailwind.css, libs/toolkits/.storybook/tailwind.css, libs/types/tailwind.css, <https://github.com/justland/just-web-foundation/pull/111>
- Type: code; browser test

Notes:

- Each Storybook Tailwind CSS now has `@layer base { .dark { color-scheme: dark; } }`. Being in the `base` layer, `scheme-*` utilities can still override it on a subtree.
- Probe: with the `dark` class on the preview `<html>`, `color-scheme` computed to `dark` and the `Canvas` system color to `rgb(18, 18, 18)`. Without the class, `color-scheme` stayed `normal` and `Canvas` stayed white. Same result in all three libraries.
- The class was added by script; the dark-mode toolbar toggle was not clicked. The configs set `classTarget: 'html'`, so the toggle targets the same element.
- The Storybook story `color-scheme/Dark mode` in `libs/toolkits` (`src/color-scheme/dark-mode.stories.tsx` and `dark-mode.mdx`) now tests this in CI. One story compares a `dark` class with `color-scheme` forced to light against the `dark` class alone. The other flips `<html>` through `classNameThemeStore`, as the toolbar does. Both `play` functions fail when the rule is removed (`color-scheme` stays `normal`).
