# CSS color-scheme (October 2026)

## Question

How do you use the CSS `color-scheme` feature to control light and dark mode? This covers the property, the `<meta name="color-scheme">` tag, the `light-dark()` function, user-selectable themes, flash avoidance, scoping, embedded content, and browser support. It also asks how the findings apply to the theming code in `just-web-foundation`.

## Scope

In scope:

- `color-scheme` values (`normal`, `light`, `dark`, `light dark`, `only`), their effects, and how they interact with `prefers-color-scheme`.
- The meta tag and its relation to the property on `:root`.
- `light-dark()` for colors and images.
- Patterns for a system, light, or dark theme switch, compared with class toggles and media queries.
- Flash of the wrong theme on load, subtree scoping, iframes, and SVG images.
- Browser support, Baseline status, and known caveats.
- Doing the same within Tailwind CSS v4.
- Theming code in `libs/toolkits` and `libs/css`. No library code is changed.

Out of scope:

- Forced colors mode (`forced-colors`, `forced-color-adjust`), except where it touches `color-scheme`.
- Choosing palettes or contrast levels for a dark theme.
- Framework-specific theme libraries. Tailwind CSS is in scope as the CSS framework the repo uses.

## Source angles

- Specifications: CSS Color Adjustment 1, CSS Color 5, Media Queries 5, HTML.
- Reference docs: MDN.
- Compatibility data: caniuse, MDN Baseline badges. webstatus.dev did not render.
- Browser vendors: Chrome Developers blog, Chromium Intent to Ship, WebKit Bugzilla, CSSWG issues.
- Practitioner articles: web.dev, Bramus van Damme, swyx, Qwik docs, community posts on iframes.
- Direct testing: a headless Chrome 154 probe run with Playwright, and Tailwind 4.3.3 `compile()` output.
- Tailwind CSS docs for `color-scheme`, dark mode, and compatibility.
- Code: `libs/toolkits/src/theme`, `libs/toolkits/src/color-scheme`, `libs/css/src`, and the Storybook config.

## Findings

### The property and the meta tag

`color-scheme` declares which schemes an element supports. The grammar is `normal | [ light | dark | <custom-ident> ]+ && only?`. It is inherited and its initial value is `normal` (E01). `only` must go with a scheme keyword (E02).

The used scheme switches form controls, scrollbars, spellcheck marks, system colors, and `light-dark()`. On `:root` it also switches the canvas and the viewport scrollbars (E03).

The meta tag gives the browser the page's supported schemes before CSS loads, so the first paint uses the right canvas color (E04). CA1 asks authors to prefer the meta tag for the page scheme (E05). In Chrome, a `:root` declaration overrides the meta tag for rendering (E06).

### Interaction with `prefers-color-scheme`

The MQ5 draft describes the media query as reporting the page color scheme, and adds `ua-color-scheme` for the raw UA setting (E07). Chrome 154 does not do this. A light-only page still matches `(prefers-color-scheme: dark)` when the OS is dark (E08). So in practice the media query is the user's preference, and `color-scheme` is the author's answer to it. A toggle that sets `color-scheme` does not change the media query.

`only` stops the browser from auto-darkening a page that does not support dark, such as with Chrome's Auto Dark Theme (E09).

### `light-dark()`

`light-dark(a, b)` resolves from the element color scheme: `a` for light, `b` for dark (E13). It needs `color-scheme` to include `dark`; otherwise it silently returns `a` (E13, E14). The color form is Baseline 2024 (E15). The image form was added to CC5 in 2026 and shipped in Chrome 150 and Firefox; Safari support is unclear (E16). In Chrome 154 it also parses inside `color-mix()` and relative color syntax (E18).

In an unregistered custom property, `light-dark()` resolves where the property is used. In a registered `<color>` property it resolves where the property is declared, so descendants inherit a fixed color (E23).

### User-selectable theme

The pattern is `:root { color-scheme: light dark }` for "system", plus `[data-theme=light]` and `[data-theme=dark]` rules that set `color-scheme: light` or `color-scheme: dark`, with colors written with `light-dark()` (E19). Compared with a class toggle plus `@media (prefers-color-scheme: dark)`, each color is written once, browser UI follows the choice, and subtrees can be themed with one declaration. Values that `light-dark()` cannot express still need a media query that also checks the attribute.

### Flash of the wrong theme

The meta tag fixes the canvas color before CSS loads. A saved choice that differs from the OS preference needs a blocking `<head>` script or a server-rendered attribute (E20). `navigator.preferences.colorScheme.requestOverride()` in MQ5 section 13 would let the page override the preference itself, including the media query, but no stable browser exposes it (E21).

### Scoping and embedded content

`color-scheme` on any element scopes the effect to that subtree (E03, E14). For an iframe or an SVG in `<img>`, the embedding element's scheme becomes the embedded document's preference (E10, E22). The Chrome probe confirmed that the embedded document must declare `light dark` itself to follow it (E11). When the iframe element's scheme and the embedded root's scheme differ, the browser paints an opaque canvas instead of a transparent one (E12).

### Browser support

`color-scheme`: Chrome 81, Edge 81, Firefox 96, Safari 13; Baseline widely available (E17). `light-dark()` colors: Chrome 123, Edge 123, Firefox 120, Safari 17.5; Baseline 2024, widely available around November 2026 (E15).

### Tailwind CSS v4

Tailwind v4 has a `scheme-*` utility for each `color-scheme` value (E27). Its default `dark:` variant reads `prefers-color-scheme`; the docs show redefining it with `@custom-variant` to follow a class or a `data-theme` attribute (E28).

Compiling with the repo's Tailwind 4.3.3 showed the following (E29):

- `light-dark()` values in `@theme` pass through unchanged as unregistered custom properties on `:root, :host`.
- Opacity modifiers wrap the value in `color-mix()`.
- `data-[theme=dark]:scheme-dark` is more specific than `scheme-light-dark`, so the user's pick wins on the same element.

So the pattern works in Tailwind without a plugin: put the theme switch on `<html>` as utilities and the colors in `@theme`. Keep a redefined `dark:` variant for values that `light-dark()` cannot express. Tailwind's own browser floor (Chrome 111, Safari 16.4, Firefox 128) is lower than what `light-dark()` needs (E30).

### Relevance to `just-web-foundation`

- The theme stores in `libs/toolkits` and `libs/css` write a class or `data-*` attribute and persist to storage or cookies. None of them touches `color-scheme` (E24).
- The `prefers-color-scheme` helpers read the OS preference through `matchMedia`. After a `color-scheme` override they no longer describe what is rendered, and inside an iframe they describe the iframe element's scheme (E25).
- The cookie store's `getCookieFromHeader` supports the server-rendered, no-flash path (E26).
- Storybook dark mode uses a `dark` class and Tailwind's class-based `dark:` variant. It did not set `color-scheme`, so native UI stayed light in dark stories (E26). PR #111 maps `.dark` to `color-scheme: dark` in each Storybook's CSS (E31).

## Contradictions

- MQ5 draft (E07) versus Chrome 154 behavior (E08) on what `prefers-color-scheme` reports.
- caniuse readings disagree on Safari support for `light-dark()` with images (E16).
- An unverified claim that CC5 forbids `light-dark()` inside `color-mix()` or relative colors conflicts with Chrome 154 parsing both (E18).

## Open questions

- Do Firefox and Safari also let a `:root` declaration override the meta tag, and also keep `prefers-color-scheme` on the OS preference?
- Does Safari 27 support the image form of `light-dark()`?
- How do browsers handle registered `<color>` properties holding `light-dark()` across a subtree with a different `color-scheme`?
- Will `navigator.preferences` ship, and would `just-web-foundation` want a store backed by it?

## Sources consulted

- CSS Color Adjustment Module Level 1: <https://drafts.csswg.org/css-color-adjust-1/>
- CSS Color Module Level 5: <https://drafts.csswg.org/css-color-5/>
- Media Queries Level 5: <https://drafts.csswg.org/mediaqueries-5/>
- HTML Living Standard, `color-scheme` meta: <https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme>
- MDN `color-scheme`: <https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme>
- MDN `light-dark()`: <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark>
- MDN `prefers-color-scheme`: <https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme>
- MDN User Preferences API: <https://developer.mozilla.org/en-US/docs/Web/API/User_Preferences_API>
- caniuse `color-scheme`: <https://caniuse.com/mdn-css_properties_color-scheme>
- caniuse `light-dark()`: <https://caniuse.com/mdn-css_types_color_light-dark>
- caniuse `light-dark()` images: <https://caniuse.com/wf-light-dark-image>
- web.dev, `color-scheme`: <https://web.dev/articles/color-scheme>
- Chrome Developers, Auto Dark Theme: <https://developer.chrome.com/blog/auto-dark-theme>
- Chromium Intent to Ship, `light-dark()` images: <https://groups.google.com/a/chromium.org/d/msgid/blink-dev/3639174f-7f49-4a51-b8c4-d493345c2cdbn%40chromium.org>
- CSSWG issue 5089 (`only`): <https://lists.w3.org/Archives/Public/public-css-archive/2021May/0330.html>
- CSSWG issue 12513 (image form): <https://lists.w3.org/Archives/Public/public-css-archive/2026Mar/0755.html>
- CSSWG thread on `light-dark()` computed values: <https://lists.w3.org/Archives/Public/public-css-archive/2026Mar/0940.html>
- WebKit bug 282057: <https://bugs.webkit.org/show_bug.cgi?id=282057>
- Web Preferences API explainer (retired): <https://github.com/lukewarlow/web-preferences-api>
- Bramus van Damme, `light-dark()`: <https://www.bram.us/2023/10/09/the-future-of-css-easy-light-dark-mode-color-switching-with-light-dark/>
- Rebecca DePrey, native dark mode with `color-scheme`: <https://rebeccamdeprey.com/blog/embracing-native-dark-mode-with-the-css-color-scheme-property>
- swyx, avoiding a flash of the wrong theme: <https://www.swyx.io/avoid-fotc>
- Qwik docs, theme management: <https://qwik.dev/docs/cookbook/theme-management/>
- fvsch, transparent iframes: <https://fvsch.com/transparent-iframes>
- Simon Elvery, iframe background in dark mode: <https://elvery.net/drzax/iframe-background-colour-transparent-dark-mode/>
- Tailwind CSS, `color-scheme`: <https://tailwindcss.com/docs/color-scheme>
- Tailwind CSS, dark mode: <https://tailwindcss.com/docs/dark-mode>
- Tailwind CSS, compatibility: <https://tailwindcss.com/docs/compatibility>
