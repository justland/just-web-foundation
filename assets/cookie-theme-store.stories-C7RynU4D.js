import{j as r,d as u,w as p,s as h,r as H,S as M}from"./iframe-C_U-moo6.js";import{d as l}from"./dedent-BuYMbVyj.js";import{t as E}from"./theme-entry-D4S_RAMB.js";import{d as K}from"./resolve-theme-map-value-6BKppRxh.js";import{p as b}from"./parse-stored-theme-CqNOdFO7.js";import{T as g}from"./theme-result-card-B1AduhOD.js";import{T as F}from"./theme-store-demo-Dk8oBi7r.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DneSEyY1.js";function U(e){if(typeof document>"u"||!document.cookie)return null;const t=document.cookie.match(new RegExp(`(?:^|;\\s*)${e}=([^;]*)`))?.[1];return t!==void 0?decodeURIComponent(t):null}function B(e,t,o){const n=[`${e}=${encodeURIComponent(t)}`];n.push(`path=${o.path??"/"}`),o.maxAge!==void 0&&n.push(`max-age=${o.maxAge}`),o.sameSite!==void 0&&n.push(`samesite=${o.sameSite}`),o.secure&&n.push("secure"),document.cookie=n.join("; ")}function D(e,t="/"){document.cookie=`${e}=; path=${t}; max-age=0`}function d(e,t){const{cookieName:o,path:n="/",maxAge:O,sameSite:R,secure:P,parse:j=b}=t;if(document.cookie===void 0)return K;const C=new Set;let I=N()?.theme??void 0;function N(){return j(e,U(o)??void 0)}function $(){const i=N(),c=i?.theme??void 0;if(c!==I){I=c;for(const _ of C)_(i)}}return{read:N,write(i){try{if(i===void 0)D(o,n);else{const c={path:n};O!==void 0&&(c.maxAge=O),R!==void 0&&(c.sameSite=R),P&&(c.secure=!0),B(o,JSON.stringify(i),c)}$()}catch{}},subscribe(i){return C.add(i),()=>{C.delete(i)}}}}function W(e,t){const o=e.match(new RegExp(`(?:^|;\\s*)${t}=([^;]*)`))?.[1];return o!==void 0?decodeURIComponent(o.trim()):null}function J(e,t,o={}){const n=o.cookieName??"theme";return b(t,(typeof e=="function"?e(n)??null:e?W(e,n):null)??void 0)}const q=`import type { Required } from 'type-plus'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import type { ParseStoredTheme, ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export interface CookieThemeStoreOptions<Themes extends ThemeMap = ThemeMap> {
	cookieName: string
	path?: string | undefined
	maxAge?: number | undefined
	sameSite?: 'lax' | 'strict' | 'none' | undefined
	secure?: boolean | undefined
	parse?: ParseStoredTheme<Themes> | undefined
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
 * @param options.parse - Optional custom parser for stored string (default: parseStoredTheme)
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
	options: CookieThemeStoreOptions<Themes>
): Required<ThemeStore<Themes>> {
	const { cookieName, path = '/', maxAge, sameSite, secure, parse = parseStoredTheme } = options

	if (document.cookie === undefined) {
		return dummyThemeStore
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = getCookieValue(cookieName)
		return parse(themes, stored ?? undefined)
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
	return parseStoredTheme(themes, stored ?? undefined)
}
`,{expect:m}=__STORYBOOK_MODULE_TEST__,re={title:"theme/theme-store/cookieThemeStore",tags:["func","version:1.0"],parameters:u({description:{component:"Theme store backed by cookies. Persists across sessions; SSR-readable. Cross-tab sync is not supported."}}),render:()=>r.jsx(r.Fragment,{})},s={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},a="theme-cookie-demo";function A(e){document.cookie=`${e}=; path=/; max-age=0`}const f={tags:["playground"],parameters:u({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[p(),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(A(a),{})],render:()=>{const e=H.useMemo(()=>d(s,{cookieName:a}),[]);return r.jsx(F,{store:e,themes:s})}},w="theme-cookie-parse";function z(){document.cookie=`${w}=; path=/; max-age=0`}function L(e,t){let o;try{o=t?JSON.parse(t):void 0}catch{return}if(!o?.theme||typeof o.theme!="string"||!(o.theme in e))return;const n=o.theme;return{theme:n,value:e[n]}}const k={name:"options.parse",tags:["props","use-case"],parameters:u({description:{story:"The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined."}}),decorators:[p({content:r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options.parse"})," allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation."]}),r.jsxs("p",{children:["The example below pre-seeds the cookie with legacy format"," ",r.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})]})}),h({source:l`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = cookieThemeStore(themes, { cookieName: 'theme', parse: customParse })
            `})],loaders:[()=>(z(),document.cookie=`${w}=${encodeURIComponent(JSON.stringify({theme:"grayscale"}))}; path=/; max-age=60`,{})],render:()=>{const t=d(s,{cookieName:w,parse:L}).read();return r.jsx("div",{className:"flex flex-col gap-4",children:r.jsx(g,{title:"store.read() with custom parse","data-testid":"store-read-result",result:t??{theme:"grayscale",value:s.grayscale}})})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await m(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},y={name:"options.cookieName",tags:["props"],decorators:[p({content:r.jsxs("p",{children:["Pass ",r.jsx("code",{children:"options.cookieName"})," to determine the cookie name used for persistence."]})}),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
            `})],loaders:[()=>(d(s,{cookieName:a}).write(E(s,"current")),{})],render:()=>{const t=d(s,{cookieName:a}).read();return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(M,{title:"Cookie name",appearance:"output",children:r.jsx("code",{children:a})}),r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await m(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},T={name:"read",tags:["props"],parameters:u({description:{story:"store.read() reads the current theme from the cookie."}}),decorators:[p(),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(d(s,{cookieName:a}).write(E(s,"grayscale")),{})],render:()=>{const t=d(s,{cookieName:a}).read();return r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"grayscale",value:s.grayscale}})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await m(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},S={name:"read: undefined",tags:["props"],parameters:u({description:{story:"When no theme cookie exists, store.read() returns undefined."}}),decorators:[p(),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(A(a),{})],render:()=>{const t=d(s,{cookieName:a}).read();return r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t!==void 0?t:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},v={name:"getThemeFromCookie (SSR)",tags:["use-case"],parameters:u({description:{story:"Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies())."}}),decorators:[p(),h({source:l`
                // With raw Cookie header (Express, Remix)
                const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

                // With Next.js cookies()
                const theme = getThemeFromCookie(
                  (name) => cookies().get(name)?.value ?? undefined,
                  themes
                )
            `})],render:()=>{const e=`${a}=${encodeURIComponent(JSON.stringify(E(s,"grayscale")))}`,t=J(e,s,{cookieName:a});return r.jsx(g,{title:"getThemeFromCookie result","data-testid":"get-theme-result",result:t??{theme:"grayscale",value:s.grayscale}})},play:async({canvas:e})=>{await m(e.getByTestId("get-theme-result")).toHaveTextContent("theme: grayscale")}},x={tags:["source"],parameters:u({source:{code:q}}),decorators:[h()]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'options.parse',
  tags: ['props', 'use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined.'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        The <code>options.parse</code> allows you to provide a custom parse function to parse
                        the stored value to a specific structure you wanted. Use it when migrating from legacy
                        formats, supporting custom serialization, or relaxing validation.
                    </p>
                    <p>
                        The example below pre-seeds the cookie with legacy format{' '}
                        <code>{\`{ theme: "grayscale" }\`}</code> (no value).
                    </p>
                </>
  }), showSource({
    source: dedent\`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = cookieThemeStore(themes, { cookieName: 'theme', parse: customParse })
            \`
  })],
  loaders: [() => {
    clearCookieParse();
    // biome-ignore lint/suspicious/noDocumentCookie: Needed for story setup
    document.cookie = \`\${COOKIE_NAME_PARSE}=\${encodeURIComponent(JSON.stringify({
      theme: 'grayscale'
    }))}; path=/; max-age=60\`;
    return {};
  }],
  render: () => {
    const store = cookieThemeStore(themes, {
      cookieName: COOKIE_NAME_PARSE,
      parse: customParseLegacy
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="store.read() with custom parse" data-testid="store-read-result" result={result ?? {
        theme: 'grayscale',
        value: themes.grayscale
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'options.cookieName',
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
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...x.parameters?.docs?.source}}};const se=["Playground","ParseOption","CookieName","Read","ReadWhenEmpty","GetThemeFromCookie","Source"];export{y as CookieName,v as GetThemeFromCookie,k as ParseOption,f as Playground,T as Read,S as ReadWhenEmpty,x as Source,se as __namedExportsOrder,re as default};
