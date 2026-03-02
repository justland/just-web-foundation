---
"@just-web/toolkits": patch
---

Fix `createThemeHook` / `useThemeStores` to unsubscribe from composed theme stores when the last React listener unmounts. Previously, subscriptions were never cleaned up, causing orphaned listeners and wasted work when switching views or stories. The hook now re-subscribes when a new listener mounts after a full unsubscribe.
