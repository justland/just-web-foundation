---
"@just-web/toolkits": minor
---

Add space-separated value support and custom serialization to `dataAttributeThemeStore`. Read uses the first value from the data attribute; write merges the new value as the first token without overwriting others. Add optional `options.parse` and `options.stringify` for custom serialization (e.g. comma-separated values). Export `ParseAttributeValue` and `StringifyAttributeValue` types.
