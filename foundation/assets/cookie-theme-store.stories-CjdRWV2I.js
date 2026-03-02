import{j as s,d as u,w as l,s as h,r as j,S as _}from"./iframe-B5WlOR2G.js";import{d as k}from"./dedent-BuYMbVyj.js";import{t as g}from"./theme-entry-D4S_RAMB.js";import{d as H}from"./dummy-theme-store-DcCfgetv.js";import{p as I}from"./parse-stored-theme-Dj4VCwi6.js";import{T as N}from"./theme-result-card-y1WSL0xe.js";import{T as F}from"./theme-store-demo-BZSj3tm9.js";import"./preload-helper-PPVm8Dsz.js";import"./append-id-Vsg144gU.js";import"./button-CsZyzj2i.js";import"./resolve-class-name-Bomprtp8.js";function M(e){if(typeof document>"u"||!document.cookie)return null;const o=document.cookie.match(new RegExp(`(?:^|;\\s*)${e}=([^;]*)`))?.[1];return o!==void 0?decodeURIComponent(o):null}function K(e,t,o){const r=[`${e}=${encodeURIComponent(t)}`];r.push(`path=${o.path??"/"}`),o.maxAge!==void 0&&r.push(`max-age=${o.maxAge}`),o.sameSite!==void 0&&r.push(`samesite=${o.sameSite}`),o.secure&&r.push("secure"),document.cookie=r.join("; ")}function P(e,t="/"){document.cookie=`${e}=; path=${t}; max-age=0`}function c(e,t){const{cookieName:o,path:r="/",maxAge:f,sameSite:p,secure:b}=t;if(document.cookie===void 0)return H;const w=new Set;let R=E()?.theme??void 0;function E(){const i=M(o),m=I(e,i);if(m!==void 0)return g(e,m)}function A(){const i=E(),m=i?.theme??void 0;if(m!==R){R=m;for(const $ of w)$(i)}}return{read:E,write(i){try{if(i===void 0)P(o,r);else{const m={path:r};f!==void 0&&(m.maxAge=f),p!==void 0&&(m.sameSite=p),b&&(m.secure=!0),K(o,JSON.stringify(i),m)}A()}catch{}},subscribe(i){return w.add(i),()=>{w.delete(i)}}}}function B(e,t){const r=e.match(new RegExp(`(?:^|;\\s*)${t}=([^;]*)`))?.[1];return r!==void 0?decodeURIComponent(r.trim()):null}function D(e,t,o={}){const r=o.cookieName??"theme",f=typeof e=="function"?e(r)??null:e?B(e,r):null,p=I(t,f);if(p!==void 0)return g(t,p)}const U=`import type { Required } from 'type-plus'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export interface CookieThemeStoreOptions {
	cookieName: string
	path?: string | undefined
	maxAge?: number | undefined
	sameSite?: 'lax' | 'strict' | 'none' | undefined
	secure?: boolean | undefined
}

function getCookieValue(name: string): string | null {
	if (typeof document === 'undefined' || !document.cookie) return null
	const match = document.cookie.match(new RegExp(\`(?:^|;\\\\s*)\${name}=([^;]*)\`))
	const value = match?.[1]
	return value !== undefined ? decodeURIComponent(value) : null
}

function setCookie(
	name: string,
	value: string,
	options: {
		path?: string | undefined
		maxAge?: number | undefined
		sameSite?: 'lax' | 'strict' | 'none' | undefined
		secure?: boolean | undefined
	}
) {
	const parts = [\`\${name}=\${encodeURIComponent(value)}\`]
	parts.push(\`path=\${options.path ?? '/'}\`)
	if (options.maxAge !== undefined) parts.push(\`max-age=\${options.maxAge}\`)
	if (options.sameSite !== undefined) parts.push(\`samesite=\${options.sameSite}\`)
	if (options.secure) parts.push('secure')
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support; document.cookie is standard for theme persistence
	document.cookie = parts.join('; ')
}

function deleteCookie(name: string, path = '/') {
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support; document.cookie is standard for theme persistence
	document.cookie = \`\${name}=; path=\${path}; max-age=0\`
}

/**
 * Creates a theme store backed by cookies.
 *
 * Persists across sessions. Cookies are sent with every request, so the server can
 * read the theme during SSR to avoid flash of wrong theme. Cross-tab sync is not
 * supported (cookies have no StorageEvent).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.cookieName - Cookie name for theme storage
 * @param options.path - Cookie path (default: '/')
 * @param options.maxAge - Cookie max-age in seconds
 * @param options.sameSite - Cookie sameSite attribute
 * @param options.secure - Cookie secure attribute
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = cookieThemeStore(themes, { cookieName: 'theme' })
 * store.read()
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * \`\`\`
 */
export function cookieThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: CookieThemeStoreOptions
): Required<ThemeStore<Themes>> {
	const { cookieName, path = '/', maxAge, sameSite, secure } = options

	if (document.cookie === undefined) {
		return dummyThemeStore
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = getCookieValue(cookieName)
		const theme = parseStoredTheme(themes, stored)
		if (theme === undefined) return undefined
		return themeEntry(themes, theme)
	}

	function notify() {
		const result = read()
		const key = result?.theme ?? undefined
		if (key === lastNotifiedKey) return
		lastNotifiedKey = key
		for (const h of handlers) h(result)
	}

	return {
		read,
		write(entry) {
			try {
				if (entry === undefined) {
					deleteCookie(cookieName, path)
				} else {
					const opts: {
						path: string
						maxAge?: number
						sameSite?: 'lax' | 'strict' | 'none'
						secure?: boolean
					} = { path }
					if (maxAge !== undefined) opts.maxAge = maxAge
					if (sameSite !== undefined) opts.sameSite = sameSite
					if (secure) opts.secure = true
					setCookie(cookieName, JSON.stringify(entry), opts)
				}
				notify()
			} catch {
				// Ignore quota or other errors
			}
		},
		subscribe(handler) {
			handlers.add(handler)
			return () => {
				handlers.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}

function getCookieFromHeader(cookieHeader: string, name: string): string | null {
	const match = cookieHeader.match(new RegExp(\`(?:^|;\\\\s*)\${name}=([^;]*)\`))
	const value = match?.[1]
	return value !== undefined ? decodeURIComponent(value.trim()) : null
}

/**
 * Reads the theme from cookies during SSR. Use with the request's Cookie header or
 * a framework's cookie API (e.g. Next.js cookies()).
 *
 * @param cookieSource - Raw Cookie header string, or a getter (name) => value for framework APIs
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options - Optional cookie name (default: 'theme')
 * @returns ThemeEntry if valid cookie found, otherwise undefined
 *
 * @example
 * \`\`\`ts
 * // With raw Cookie header (Express, Remix, etc.)
 * const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)
 *
 * // With Next.js cookies()
 * const theme = getThemeFromCookie(
 *   (name) => cookies().get(name)?.value ?? undefined,
 *   themes
 * )
 * \`\`\`
 */
export function getThemeFromCookie<Themes extends ThemeMap>(
	cookieSource: string | null | undefined | ((name: string) => string | null | undefined),
	themes: Themes,
	options: { cookieName?: string | undefined } = {}
): ThemeEntry<Themes> | undefined {
	const cookieName = options.cookieName ?? 'theme'
	const stored =
		typeof cookieSource === 'function'
			? (cookieSource(cookieName) ?? null)
			: cookieSource
				? getCookieFromHeader(cookieSource, cookieName)
				: null
	const theme = parseStoredTheme(themes, stored)
	if (theme === undefined) return undefined
	return themeEntry(themes, theme)
}
`,{expect:d}=__STORYBOOK_MODULE_TEST__,ee={title:"theme/theme-store/cookieThemeStore",tags:["func","version:next"],parameters:u({description:{component:"Theme store backed by cookies. Persists across sessions; SSR-readable. Cross-tab sync is not supported."}}),render:()=>s.jsx(s.Fragment,{})},n={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},a="theme-cookie-demo";function O(e){document.cookie=`${e}=; path=/; max-age=0`}const y={tags:["playground"],parameters:u({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[l(),h({source:k`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(O(a),{})],render:()=>{const e=j.useMemo(()=>c(n,{cookieName:a}),[]);return s.jsx(F,{store:e,themes:n})}},C={name:"cookieName",tags:["props"],decorators:[l({content:s.jsxs("p",{children:["Pass ",s.jsx("code",{children:"options.cookieName"})," to determine the cookie name used for persistence."]})}),h({source:k`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
            `})],loaders:[()=>(c(n,{cookieName:a}).write(g(n,"current")),{})],render:()=>{const t=c(n,{cookieName:a}).read();return s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(_,{title:"Cookie name",appearance:"output",children:s.jsx("code",{children:a})}),s.jsx(N,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"current",value:n.current}})]})},play:async({canvas:e})=>{await d(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await d(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},S={name:"read",tags:["props"],parameters:u({description:{story:"store.read() reads the current theme from the cookie."}}),decorators:[l(),h({source:k`
                const store = cookieThemeStore(themes, { cookieName: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(c(n,{cookieName:a}).write(g(n,"grayscale")),{})],render:()=>{const t=c(n,{cookieName:a}).read();return s.jsx(N,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"grayscale",value:n.grayscale}})},play:async({canvas:e})=>{await d(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await d(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},T={name:"read: undefined",tags:["props"],parameters:u({description:{story:"When no theme cookie exists, store.read() returns undefined."}}),decorators:[l(),h({source:k`
                const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(O(a),{})],render:()=>{const t=c(n,{cookieName:a}).read();return s.jsx(N,{title:"store.read() result","data-testid":"store-read-result",result:t!==void 0?t:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await d(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},x={name:"getThemeFromCookie (SSR)",tags:["use-case"],parameters:u({description:{story:"Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies())."}}),decorators:[l(),h({source:k`
                // With raw Cookie header (Express, Remix)
                const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

                // With Next.js cookies()
                const theme = getThemeFromCookie(
                  (name) => cookies().get(name)?.value ?? undefined,
                  themes
                )
            `})],render:()=>{const e=`${a}=${encodeURIComponent(JSON.stringify(g(n,"grayscale")))}`,t=D(e,n,{cookieName:a});return s.jsx(N,{title:"getThemeFromCookie result","data-testid":"get-theme-result",result:t??{theme:"grayscale",value:n.grayscale}})},play:async({canvas:e})=>{await d(e.getByTestId("get-theme-result")).toHaveTextContent("theme: grayscale")}},v={tags:["source"],parameters:u({source:{code:U}}),decorators:[h()]};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
  })],
  loaders: [() => {
    clearCookie(COOKIE_NAME);
    return {};
  }],
  render: () => {
    const store = useMemo(() => cookieThemeStore(themes, {
      cookieName: COOKIE_NAME
    }), []);
    return <ThemeStoreDemo store={store} themes={themes} />;
  }
  // Play omitted: document.cookie can be restricted in Storybook test iframe (third-party context)
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'cookieName',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>options.cookieName</code> to determine the cookie name used for persistence.
                </p>
  }), showSource({
    source: dedent\`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
            \`
  })],
  loaders: [() => {
    const store = cookieThemeStore(themes, {
      cookieName: COOKIE_NAME
    });
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = cookieThemeStore(themes, {
      cookieName: COOKIE_NAME
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="Cookie name" appearance="output">
                    <code>{COOKIE_NAME}</code>
                </StoryCard>
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current');
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'read',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() reads the current theme from the cookie.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = cookieThemeStore(themes, { cookieName: 'theme' })
                const result = store.read()
            \`
  })],
  loaders: [() => {
    const store = cookieThemeStore(themes, {
      cookieName: COOKIE_NAME
    });
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = cookieThemeStore(themes, {
      cookieName: COOKIE_NAME
    });
    const result = store.read();
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
      theme: 'grayscale',
      value: themes.grayscale
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'read: undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When no theme cookie exists, store.read() returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
                const theme = store.read() // undefined when empty
            \`
  })],
  loaders: [() => {
    clearCookie(COOKIE_NAME);
    return {};
  }],
  render: () => {
    const store = cookieThemeStore(themes, {
      cookieName: COOKIE_NAME
    });
    const result = store.read();
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result !== undefined ? result : {
      theme: undefined,
      value: undefined
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'getThemeFromCookie (SSR)',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies()).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                // With raw Cookie header (Express, Remix)
                const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

                // With Next.js cookies()
                const theme = getThemeFromCookie(
                  (name) => cookies().get(name)?.value ?? undefined,
                  themes
                )
            \`
  })],
  render: () => {
    const cookieHeader = \`\${COOKIE_NAME}=\${encodeURIComponent(JSON.stringify(themeEntry(themes, 'grayscale')))}\`;
    const result = getThemeFromCookie(cookieHeader, themes, {
      cookieName: COOKIE_NAME
    });
    return <ThemeResultCard title="getThemeFromCookie result" data-testid="get-theme-result" result={result ?? {
      theme: 'grayscale',
      value: themes.grayscale
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('get-theme-result')).toHaveTextContent('theme: grayscale');
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}};const te=["Playground","CookieName","Read","ReadWhenEmpty","GetThemeFromCookie","Source"];export{C as CookieName,x as GetThemeFromCookie,y as Playground,S as Read,T as ReadWhenEmpty,v as Source,te as __namedExportsOrder,ee as default};
