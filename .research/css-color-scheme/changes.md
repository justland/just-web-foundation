# CSS color-scheme Changes

## 2026-10-19

- Changed: created the topic with evidence E01 to E26 and the first conclusion.
- Why: request for durable research on using `color-scheme` to control light and dark mode, and on how it applies to `just-web-foundation`.
- Material conclusion change: yes (first version).
- Trigger: CA1, MQ5, CC5, and HTML specs; MDN; caniuse; Chrome and WebKit sources; a headless Chrome 154 probe; review of `libs/toolkits` and `libs/css`.

## 2026-10-19 (Tailwind)

- Changed: added evidence E27 to E30 and a Tailwind CSS v4 section to the conclusion and topic.
- Why: follow-up question on whether the pattern can be done within Tailwind CSS.
- Material conclusion change: no. The verdict gains a Tailwind recipe; the core findings are unchanged.
- Trigger: Tailwind docs (`color-scheme`, dark mode, compatibility) and `compile()` output from the repo's Tailwind 4.3.3.

## 2026-10-19 (Storybook)

- Changed: added evidence E31; marked the Storybook part of E26 as superseded; updated the Storybook row in the conclusion and the matching topic bullet.
- Why: PR #111 makes Storybook dark mode set `color-scheme: dark`, as this research recommended.
- Material conclusion change: no. Only the repo status changed.
- Trigger: PR #111 and a check in each Storybook dev server.

## 2026-10-19 (Storybook test)

- Changed: added to E31 that a `libs/toolkits` story now tests the Storybook `color-scheme` rule in CI.
- Why: to show the rule changes native rendering, not only what the `dark` class already changed.
- Material conclusion change: no.
- Trigger: `libs/toolkits/src/color-scheme/dark-mode.stories.tsx` and `dark-mode.mdx`.
