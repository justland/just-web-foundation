---
"@just-web/css": patch
"@just-web/toolkits": patch
---

Pin `type-plus` to the exact version `8.0.0-beta.10` instead of a caret range.

`type-plus` 8 is a prerelease line where breaking changes have landed between betas. An exact version turns each future bump into a reviewable pull request instead of something a lockfile refresh can do silently.
