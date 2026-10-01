---
"@just-web/toolkits": minor
---

Add animation utilities: `getPendingAnimations`, `observePendingAnimations`, `settleAnimations`, `waitForAnimations`

New `animation/` module for keying off the real end state of CSS transitions, CSS animations, and Web Animations instead of polling computed styles or sleeping:

- `getPendingAnimations(target?, options?)` — lists finite, non-idle animations on an element or document
- `observePendingAnimations(callback, target?, options?)` — calls back with the current pending animations immediately, then again on every start, finish, or cancel
- `settleAnimations(target?, options?)` — fast-forwards finite animations to their end and pauses infinite ones, for instant test assertions and visual snapshots
- `waitForAnimations(target?, options?)` — resolves once no finite animation is pending

Each accepts an optional `Element` or `Document` target (defaults to `document`) and a shared `WaitForAnimationsOptions` type for `subtree`, `filter`, `settleFrames`, `timeout`, and `signal`.
