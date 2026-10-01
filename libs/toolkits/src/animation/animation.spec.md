---
feature: Animation Utilities
subject: function
phase: rc
created: 2026-10-01
owner: unional
history:
  - phase: alpha
    date: 2026-10-01
  - phase: rc
    date: 2026-10-01
---

# Animation Utilities

## Problem Statement

Web applications need to run logic after CSS transitions, CSS animations, and Web Animations finish — unmounting after an exit animation, moving focus after a panel opens, measuring layout after a transition. Tests need to wait for the real end state instead of polling computed styles or sleeping, and visual snapshots need to fast-forward animations.

Polling `getComputedStyle` is unreliable (reports "stable" during `transition-delay` and when the main thread stalls). `transitionend`/`animationend` fire per-property, bubble from children, and produce cancel events instead of end events on `display: none`. The Web Animations API (`element.getAnimations()` and `Animation.finished`) provides the authoritative answer.

## Use Cases

### Wait After Exit Animation

**Actor**: App developer
**Goal**: Unmount a component only after its exit animation finishes
**Entry Point**: `waitForAnimations(element)`

The developer adds an exit class, then awaits `waitForAnimations` before removing the element from the DOM. This avoids clipping the exit transition.

**Extensions**: Animation is canceled mid-flight (the promise still resolves). No animation starts because `getAnimations` is unavailable (resolves immediately).

### Fast-Forward in Tests

**Actor**: Test author (Vitest browser mode, Playwright, Storybook play function)
**Goal**: Skip animations to reach a stable end state instantly for assertions or visual snapshots
**Entry Point**: `settleAnimations(element)`

The test calls `settleAnimations` to jump finite animations to their end and pause infinite ones in place, then runs assertions. The cleanup function restores normal playback. Unlike Playwright's `animations: 'disabled'`, this reacts to each `Animation` individually rather than forcing all durations to zero, so a newly started animation can run for a sub-frame instant before it is caught.

**Extensions**: none.

### Query Pending Animations

**Actor**: App developer or test author
**Goal**: Check whether any finite animations are still in progress before taking action
**Entry Point**: `getPendingAnimations(element)`

Used for custom waiting logic or to decide whether to delay an action.

**Extensions**: none.

### Observe Pending Animations

**Actor**: App developer
**Goal**: React to animation state changing over time instead of polling once
**Entry Point**: `observePendingAnimations(callback, element)`

The developer registers a callback that is invoked immediately with the current pending animations, then again whenever one starts, finishes, or is canceled. Used for things like disabling a close button while an exit animation is in flight.

**Extensions**: No animation starts because `getAnimations` is unavailable (callback fires once with an empty array).

## Requirements

### Functional Requirements

- [x] `waitForAnimations` resolves when no finite animation on the target is pending
- [x] `waitForAnimations` ignores infinite animations (e.g. `animate-spin`)
- [x] `waitForAnimations` resolves immediately when `getAnimations` is unavailable (jsdom, happy-dom, SSR)
- [x] `waitForAnimations` waits `settleFrames` animation frames before the first query
- [x] `waitForAnimations` supports `filter` to skip specific animations
- [x] `waitForAnimations` supports `AbortSignal` for cancellation
- [x] `waitForAnimations` supports `timeout` for rejection
- [x] `getPendingAnimations` returns finite, non-idle, non-finished animations
- [x] `getPendingAnimations` excludes infinite animations
- [x] `getPendingAnimations` supports `subtree` and `filter` options
- [x] `observePendingAnimations` invokes the callback immediately with the current pending animations
- [x] `observePendingAnimations` invokes the callback again when an animation starts, finishes, or is canceled
- [x] `observePendingAnimations` supports `subtree` and `filter` options
- [x] `observePendingAnimations` returns a cleanup function that stops observing
- [x] `settleAnimations` fast-forwards finite animations to their end
- [x] `settleAnimations` pauses infinite animations instead of finishing them
- [x] `settleAnimations` observes for new animations that start later
- [x] `settleAnimations` cleanup resumes paused infinite animations
- [x] `settleAnimations` supports a `subtree` option
- [x] All four functions accept `Element` or `Document` as target
- [x] All four functions default to `document` when no target is given

### Non-Functional Requirements

- [x] Zero runtime dependencies beyond the Web Animations API (Chrome 84+, Firefox 75+, Safari 13.1+)
- [ ] JSDoc with `@param`, `@returns`, and `@example` on all exports
- [x] Graceful fallback when `getAnimations` is unavailable

## API Surface

### Signature: `waitForAnimations`

```ts
function waitForAnimations(
  target?: Element | Document | undefined,
  options?: WaitForAnimationsOptions | undefined
): Promise<void>
```

### Signature: `getPendingAnimations`

```ts
function getPendingAnimations(
  target?: Element | Document | undefined,
  options?: Pick<WaitForAnimationsOptions, 'subtree' | 'filter'> | undefined
): Animation[]
```

### Signature: `observePendingAnimations`

```ts
function observePendingAnimations(
  callback: (pending: Animation[]) => void,
  target?: Element | Document | undefined,
  options?: Pick<WaitForAnimationsOptions, 'subtree' | 'filter'> | undefined
): () => void
```

### Signature: `settleAnimations`

```ts
function settleAnimations(
  target?: Element | Document | undefined,
  options?: Pick<WaitForAnimationsOptions, 'subtree'> | undefined
): () => void
```

### Parameters: `WaitForAnimationsOptions`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| subtree | boolean | true | Include descendants and pseudo-elements |
| settleFrames | number | 1 | Frames to wait before the first query |
| filter | (a: Animation) => boolean | — | Skip animations the caller does not care about |
| timeout | number | — | Reject after this many milliseconds |
| signal | AbortSignal | — | Cancel externally via AbortController |

## Acceptance Criteria

- [x] `waitForAnimations(el)` resolves after a 50ms opacity transition finishes
- [x] `waitForAnimations(el)` resolves immediately when only infinite animations are present
- [x] `getPendingAnimations(el)` returns the correct count of running finite animations
- [x] `observePendingAnimations(callback, el)` calls back with the running count immediately, then on each start/finish/cancel
- [x] `settleAnimations(el)` immediately ends finite animations and pauses infinite ones
- [x] `settleAnimations(el, { subtree: false })` only settles animations on `el` itself, not descendants
- [x] Cleanup from `settleAnimations` resumes paused infinite animations
- [x] All functions handle missing `getAnimations` gracefully

## Dependencies

- Web Animations API (`Element.getAnimations()`, `Animation.finished`) — baseline since 2020

## Known Limitations

- JavaScript-driven motion (rAF loops, inline-style timers) is invisible to `getAnimations()` and therefore invisible to these utilities.
- Tests that trigger a transition must force a style flush before changing the class. Reading `getComputedStyle(el).opacity` or calling `el.getAnimations()` does the flush. Without it, the browser starts no transition and there is nothing to wait for.
- The `timeout` option on `waitForAnimations` has a simplified implementation that does not list still-running animations in the error message (deferred to beta).

## Open Questions

- Should `waitForAnimations` accept a `Document` target in practice, or should it always be an `Element`?
- Resolved: `settleAnimations` now accepts a `subtree` option, matching the other three functions. `filter` was deliberately left out — settling always acts on every matched animation, so there is no use case for skipping a subset.
- Resolved: `settleAnimations`'s internal `childList`/`attributes` `MutationObserver` flags were considered for exposure as options but rejected — they are implementation details of how new animations are detected, not independently meaningful to callers, and disabling either would silently break the function's documented "watches for new animations" guarantee.

---

## Phase History

| Phase | Date | Notes |
|-------|------|-------|
| Alpha | 2026-10-01 | Initial creation per issue #94 |
| RC | 2026-10-01 | Promoted ahead of beta per user request |
