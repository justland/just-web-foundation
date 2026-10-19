# CSS color-scheme Conclusion

## Last updated

October 2026

## Question

How do you use the CSS `color-scheme` feature (the property, the `<meta name="color-scheme">` tag, and the `light-dark()` function) to control light and dark mode, including a user-selectable theme? Can it be done within Tailwind CSS v4? How does it apply to `just-web-foundation`?

## Verdict

Declare the schemes the page supports, and let the browser pick one. `color-scheme: light dark` on `:root` (or `<meta name="color-scheme" content="light dark">` in `<head>`) tells the browser the page can render in either scheme. The browser then follows the user's preference and switches its own parts: the canvas behind the page, the default text color, form controls, scrollbars, spellcheck marks, and the system colors such as `Canvas` and `CanvasText` (E03, E04). Without a declaration, these stay light even when your CSS paints the page dark.

Write your own colors with `light-dark(lightValue, darkValue)`. It resolves from the element's `color-scheme`, not from the media query (E13). So one declaration chooses both the browser's colors and yours. It only switches when the element's scheme can be dark: with no `color-scheme`, or with `color-scheme: light`, it always returns the first value (E13, E14).

A user-selectable theme (system, light, dark) then needs only a `color-scheme` override. Keep `light dark` as the default for "system", and set `color-scheme: light` or `color-scheme: dark` on `:root` when the user picks one (E19). The same works on any subtree: a dark card or a light dialog switches its form controls, scrollbars, and `light-dark()` values. This replaces the older pattern of a class toggle plus a duplicated `@media (prefers-color-scheme: dark)` block.

The main limit is that `prefers-color-scheme` does not follow the override. In Chrome 154 the media query keeps reporting the OS preference even on a page that declares only `light` (E08), although the current Media Queries 5 draft reads as if it should report the page's scheme (E07). Any CSS or script that still keys on the media query or `matchMedia()` will ignore the user's choice. Convert it to `light-dark()`, or check the theme attribute as well. The proposed `navigator.preferences.colorScheme.requestOverride()` would let a page change the media query too, but it is not shipped (E21).

To avoid a flash of the wrong theme, put the meta tag first in `<head>` so the canvas is right before CSS loads (E04, E20). A saved user choice still needs either a small blocking script in `<head>` that sets the attribute before first paint, or a server that renders it from a cookie (E20).

Embedded documents take the embedding element's scheme as their preference. Set `color-scheme` on an `<iframe>` or `<img>` (SVG) to pass a scheme down. The embedded page must still declare `light dark` to follow it (E10, E11, E22). If the iframe element's scheme and the embedded root's scheme differ, the browser paints an opaque background behind the frame (E12).

Support is broad. `color-scheme` is Baseline widely available (Chrome 81, Firefox 96, Safari 13) (E17). The color form of `light-dark()` is Baseline 2024 (Chrome 123, Firefox 120, Safari 17.5) and becomes widely available around November 2026 (E15). The image form, `light-dark(url(a.png), url(b.png))`, is new in 2026 and not yet safe without a fallback (E16).

Tailwind CSS v4 supports the whole pattern without a plugin. Its `scheme-*` utilities set `color-scheme`, so the theme switch can be written as classes on `<html>` (E27, E29). Theme colors defined with `light-dark()` in `@theme` become plain custom properties that follow the scheme, opacity modifiers included (E29). Tailwind's default `dark:` variant reads `prefers-color-scheme` and so ignores the user's pick. Keep `dark:` for values `light-dark()` cannot express, and redefine it to follow the theme attribute (E28). Using `light-dark()` raises the browser floor from Tailwind's Safari 16.4 and Chrome 111 to Safari 17.5 and Chrome 123 (E30).

For `just-web-foundation`: nothing in `libs/` sets `color-scheme` today (E24). The theme stores already write the `data-theme` attribute or class that the pattern needs, so a consumer can adopt it with CSS alone. The `prefers-color-scheme` helpers report the OS preference, not the theme a user picked, and inside an iframe they report the embedder's scheme (E25).

## Reference material

### Values of `color-scheme`

| Value | Meaning | Typical use |
| --- | --- | --- |
| `normal` (initial) | Use the page color scheme. With no meta tag and no `:root` declaration, that is light. | Default; inherit from the page. |
| `light` | Element supports only light. | Force light on `:root` or a subtree. |
| `dark` | Element supports only dark. | Force dark on `:root` or a subtree. |
| `light dark` | Supports both; the browser follows the preference. Order is the author's preference when both fit. | The "system" default. Needed for `light-dark()` to switch. |
| `only light` / `only dark` | Same, and forbids the browser from auto-darkening (for example Chrome Auto Dark Theme). | Light-only pages that must not be force-darkened. |
| `only` alone | Invalid (E02). | — |

### What the used scheme changes

| Affected | On any element | Only on `:root` |
| --- | --- | --- |
| Form controls, specially rendered elements | Yes | — |
| Element scrollbars | Yes | Viewport scrollbars |
| System colors (`Canvas`, `CanvasText`, `Field`, `LinkText`, and others) | Yes | — |
| `light-dark()` results | Yes | — |
| Spellcheck and other UA marks | Yes | — |
| Canvas (the surface behind the page) | — | Yes |
| `prefers-color-scheme` in this document | No (Chrome 154 reports the OS preference) | No |
| `prefers-color-scheme` in an embedded iframe or SVG `<img>` | Yes, the embedding element's scheme is the embedded document's preference | — |

### Meta tag versus `:root` property

| | `<meta name="color-scheme" content="light dark">` | `:root { color-scheme: light dark }` |
| --- | --- | --- |
| Takes effect | Before any CSS is fetched | After the stylesheet loads |
| Scope | Sets the page color scheme | `:root` and its subtree; overrides the meta for rendering in Chrome (E06) |
| Use for | First paint of the canvas | Theme overrides and subtrees |

Use both: the meta tag for first paint, and the property for overrides.

### Recipe A: follow the system only

```html
<head>
  <meta name="color-scheme" content="light dark">
  <style>
    :root {
      color-scheme: light dark;
      --surface: light-dark(#ffffff, #121212);
      --text: light-dark(#1a1a1a, #e8e8e8);
    }
    body { background: var(--surface); color: var(--text); }
  </style>
</head>
```

### Recipe B: user-selectable theme (system, light, dark)

```html
<head>
  <meta name="color-scheme" content="light dark">
  <script>
    // Blocking on purpose: runs before first paint.
    try {
      const t = localStorage.getItem('theme')
      if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t
    } catch {}
  </script>
  <style>
    :root { color-scheme: light dark; }               /* system */
    :root[data-theme='light'] { color-scheme: light; }
    :root[data-theme='dark'] { color-scheme: dark; }
    body {
      background: light-dark(#ffffff, #121212);
      color: light-dark(#1a1a1a, #e8e8e8);
    }
  </style>
</head>
```

- "System" means removing the attribute. Do not set `data-theme="system"` to a third `color-scheme` rule: `light dark` on `:root` already does it.
- If a server renders the page, read the theme cookie and write `data-theme` into the HTML instead of using the script.
- Under a strict Content Security Policy the inline script needs a nonce or hash.

### Recipe C: subtree and embedded content

```css
.inverted { color-scheme: dark; }        /* controls, scrollbars, light-dark() flip here */
.always-light { color-scheme: only light; }
iframe.embed { color-scheme: light dark; } /* pass the scheme down; no opaque box */
```

The embedded page must declare `color-scheme: light dark` (or the meta tag) to follow its iframe element.

### `color-scheme` + `light-dark()` versus class toggle + media query

| | `color-scheme` + `light-dark()` | Class toggle + `@media (prefers-color-scheme)` |
| --- | --- | --- |
| Color definitions | One declaration per color | Each color written twice: once in the media block, once in the class block |
| Browser parts (controls, scrollbars, canvas) | Switch automatically | Stay light unless `color-scheme` is also set |
| Subtree theming | Set `color-scheme` on the subtree | Needs a scoped class and duplicated rules |
| User override | Change `color-scheme` on `:root` | Class must beat the media query; easy to get wrong |
| Non-color values (images, shadows, spacing) | Colors, and images in 2026 browsers only | Anything |
| Old browsers | Needs a fallback before Chrome 123, Firefox 120, Safari 17.5 | Works since 2020 |

Keep a media query only for values `light-dark()` cannot express. Make it respect the user's choice:

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) .hero { background-image: url(hero-dark.png); }
}
:root[data-theme='dark'] .hero { background-image: url(hero-dark.png); }
```

### Pitfalls

- `light-dark()` without `color-scheme: light dark` (or `dark`) always returns the light value, with no error (E13).
- A registered custom property (`@property --x { syntax: '<color>' }`) computes `light-dark()` where it is declared. A subtree that changes `color-scheme` then inherits the already-resolved color. Keep theme tokens unregistered, or register them on the element that uses them (E23).
- `prefers-color-scheme` and `matchMedia()` do not see a `color-scheme` override (E08).
- Mixing a color and an image in one `light-dark()` is a parse error (E16).

### Doing it in Tailwind CSS v4

Tailwind maps each `color-scheme` value to a utility (E27):

| Utility | CSS |
| --- | --- |
| `scheme-normal` | `color-scheme: normal` |
| `scheme-light` | `color-scheme: light` |
| `scheme-dark` | `color-scheme: dark` |
| `scheme-light-dark` | `color-scheme: light dark` |
| `scheme-only-light` | `color-scheme: only light` |
| `scheme-only-dark` | `color-scheme: only dark` |

Recipe B in Tailwind. The theme switch is utility classes on `<html>`, and colors use `light-dark()` in `@theme`:

```html
<html class="scheme-light-dark data-[theme=light]:scheme-light data-[theme=dark]:scheme-dark">
```

```css
@import 'tailwindcss';

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
```

- `bg-surface`, `text-ink`, and `bg-surface/50` follow the scheme without a `dark:` prefix (E29).
- The `data-[theme=…]` utilities are more specific than `scheme-light-dark`, so the user's pick wins (E29).
- `scheme-dark` on any element flips the theme colors in that subtree, because `@theme` variables are unregistered (E23, E29).
- Use `dark:` only for values `light-dark()` cannot express, such as background images, shadows, or layout. The default `dark:` variant reads `prefers-color-scheme` and ignores the user's pick (E28). The variant above does not match `<html>` itself while in system mode.
- CSS cannot select on an element's current `color-scheme`, so `dark:` cannot follow a `scheme-dark` subtree on its own.
- `light-dark()` raises the browser floor from Tailwind's own (Chrome 111, Safari 16.4, Firefox 128) to Chrome 123 and Safari 17.5 (E30).

### Applying it to `just-web-foundation`

| Area | Today | What the findings mean |
| --- | --- | --- |
| Theme stores (`dataAttributeThemeStore`, `classNameThemeStore`, `libs/css` `getThemeByDataAttribute`) | Write `data-theme` or a class on `document.documentElement` (E24) | Already the hook Recipe B needs. A consumer adds three CSS rules that map the attribute to `color-scheme`. No library change is needed. |
| `getPrefersColorScheme`, `observePrefersColorScheme`, `usePrefersColorScheme`, `prefersColorSchemeThemeStore`, `libs/css` `getPrefersColorTheme` | Read `prefers-color-scheme` through `matchMedia` (E25) | They report the OS preference, not the theme the user chose. Inside an iframe they report the iframe element's scheme. Their docs could say so. |
| `ColorScheme` type (`'light' \| 'dark'`) | Mirrors the media feature | Correct for the media query. A helper that writes the property would need a wider type (`normal`, `light dark`, `only light`). |
| Cookie theme store (`getCookieFromHeader`) | Server can read the theme cookie (E26) | Supports server rendering of `data-theme`, the no-flash path that needs no inline script. |
| Storybook in `libs/*/.storybook` | Dark mode adds a `dark` class and Tailwind's `dark:` variant; `.dark` maps to `color-scheme: dark` in the `base` layer (E26, E31) | Native controls, scrollbars, and system colors follow dark stories. `scheme-*` utilities can still override a subtree. |
| Possible additions (not made) | — | A store that writes `element.style.colorScheme`, and a reader for the used scheme (`getComputedStyle(el).colorScheme`). |

## Confidence

High for the property, the meta tag, `light-dark()` behavior, and support data, which rest on the specs, MDN, and caniuse. Medium for the media-query behavior after an override and for meta-versus-property precedence, which rest on one engine (Chrome 154). High for the Tailwind utilities and variant behavior (docs), and medium for how Tailwind's compiled output behaves (compiled, not rendered).

## Strongest support

- E01, E03, E04: CA1 and the HTML spec define the values, the effects, and the meta tag.
- E13, E14: CC5 and MDN define `light-dark()` as reading the element color scheme and needing `light dark`.
- E15, E17: caniuse and MDN give the support versions and Baseline status.
- E10, E11, E12: CA1, MQ5, and a Chrome probe agree on iframe behavior.
- E27, E28, E30: the Tailwind docs define the `scheme-*` utilities, the default `dark:` variant, and the browser floor.

## Strongest counterevidence

- E07 against E08: the MQ5 draft says `prefers-color-scheme` reports the page color scheme, while Chrome 154 reports the OS preference. If browsers adopt the draft, a `color-scheme` override would change the media query, and part of the verdict would change.
- E16: sources disagree on Safari support for the image form of `light-dark()`.

## Not supported

- That `light-dark()` cannot be used inside `color-mix()` or relative color syntax. Chrome 154 parses both (E18).
- That a Chrome origin trial for `navigator.preferences` exists (E21).
- That `color-scheme` changes `prefers-color-scheme` in the same document, in current Chrome (E08).

## Thin evidence

- Meta versus `:root` precedence and the media-query behavior were tested only in Chrome; Firefox and Safari were not tested (E06, E08).
- No primary source compares `light-dark()` with the class plus media-query pattern; that comparison is this record's reasoning (E19).
- The server-cookie approach to avoiding a flash has no primary source here (E20).
- Inheritance of registered `<color>` properties that hold `light-dark()` is a spec reading without a test (E23).
- Known Safari issues with `color-scheme` on non-root elements and per-element scrollbars could not be sourced.
- The Tailwind recipe was checked as compiled CSS only, not rendered in a browser (E29).

## Recheck triggers

- A browser changes `prefers-color-scheme` to report the page color scheme, as the MQ5 draft says.
- `navigator.preferences` ships in a stable browser.
- `light-dark()` reaches Baseline widely available (expected around November 2026), or its image form reaches Baseline.
- `just-web-foundation` adds a store or helper that writes `color-scheme`.
- Tailwind adds built-in `light-dark()` support, changes its default `dark:` variant, or raises its browser floor past Chrome 123 and Safari 17.5.
