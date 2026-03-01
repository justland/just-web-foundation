---
"@just-web/toolkits": minor
---

Add `cookieThemeStore` and `getThemeFromCookie` for theme persistence in cookies. Enables SSR-readable theme (avoid flash of wrong theme in Next.js, Remix, etc.). Supports options: `cookieName`, `path`, `maxAge`, `sameSite`, `secure`. Cross-tab sync is not supported.
