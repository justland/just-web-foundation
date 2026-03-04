import{j as r,d as u,w as p,s as h,r as H,S as K}from"./iframe-6R7iObMn.js";import{d as l}from"./dedent-BuYMbVyj.js";import{t as I}from"./theme-entry-D4S_RAMB.js";import{d as F}from"./dummy-theme-store-DcCfgetv.js";import{p as P}from"./parse-stored-theme-Dsx2RsUi.js";import{T as g}from"./theme-result-card-xEPx6OSf.js";import{T as $}from"./theme-store-demo-uf1zpCDF.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./button-2D35iakA.js";function B(e){if(typeof document>"u"||!document.cookie)return null;const t=document.cookie.match(new RegExp(`(?:^|;\\s*)${e}=([^;]*)`))?.[1];return t!==void 0?decodeURIComponent(t):null}function U(e,t,o){const s=[`${e}=${encodeURIComponent(t)}`];s.push(`path=${o.path??"/"}`),o.maxAge!==void 0&&s.push(`max-age=${o.maxAge}`),o.sameSite!==void 0&&s.push(`samesite=${o.sameSite}`),o.secure&&s.push("secure"),document.cookie=s.join("; ")}function D(e,t="/"){document.cookie=`${e}=; path=${t}; max-age=0`}function W(e,t){const o=e.match(new RegExp(`(?:^|;\\s*)${t}=([^;]*)`))?.[1];return o!==void 0?decodeURIComponent(o.trim()):null}function q(e,t){const{cookieName:o,parse:s=P}=t;if(!(typeof document>"u"||document.cookie===void 0))return s(e,B(o)??void 0)}function J(e,t,o){const{cookieName:s,path:k="/",maxAge:y,sameSite:f,secure:E}=o;if(typeof document>"u"||document.cookie===void 0)return;if(t===void 0){D(s,k);return}const i={path:k};y!==void 0&&(i.maxAge=y),f!==void 0&&(i.sameSite=f),E&&(i.secure=!0),U(s,JSON.stringify(t),i)}function d(e,t){const{cookieName:o,path:s="/",maxAge:k,sameSite:y,secure:f,parse:E=P}=t;if(document.cookie===void 0)return F;const i=new Set;let b=O()?.theme??void 0;function O(){return q(e,{cookieName:o,parse:E})}function j(){const c=O(),A=c?.theme??void 0;if(A!==b){b=A;for(const M of i)M(c)}}return{read:O,write(c){try{J(e,c,{cookieName:o,path:s,maxAge:k,sameSite:y,secure:f}),j()}catch{}},subscribe(c){return i.add(c),()=>{i.delete(c)}}}}function z(e,t,o={}){const s=o.cookieName??"theme";return P(t,(typeof e=="function"?e(s)??null:e?W(e,s):null)??void 0)}const L=`import type { Required } from 'type-plus'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import { getCookieFromHeader } from '../../cookie/_cookie-utils.ts'
import { readCookieTheme } from '../../cookie/read-cookie-theme.ts'
import { writeCookieTheme } from '../../cookie/write-cookie-theme.ts'
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
		return readCookieTheme(themes, { cookieName, path, parse })
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
				writeCookieTheme(themes, entry, {
					cookieName,
					path,
					maxAge,
					sameSite,
					secure
				})
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
`,{expect:m}=__STORYBOOK_MODULE_TEST__,ae={title:"theme/theme-store/cookieThemeStore",tags:["func","version:1.0"],parameters:u({description:{component:"Theme store backed by cookies. Persists across sessions; SSR-readable. Cross-tab sync is not supported."}}),render:()=>r.jsx(r.Fragment,{})},n={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},a="theme-cookie-demo";function _(e){document.cookie=`${e}=; path=/; max-age=0`}const T={tags:["playground"],parameters:u({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[p(),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(_(a),{})],render:()=>{const e=H.useMemo(()=>d(n,{cookieName:a}),[]);return r.jsx($,{store:e,themes:n})}},R="theme-cookie-parse";function G(){document.cookie=`${R}=; path=/; max-age=0`}function V(e,t){let o;try{o=t?JSON.parse(t):void 0}catch{return}if(!o?.theme||typeof o.theme!="string"||!(o.theme in e))return;const s=o.theme;return{theme:s,value:e[s]}}const S={name:"options.parse",tags:["props","use-case"],parameters:u({description:{story:"The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined."}}),decorators:[p({content:r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options.parse"})," allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation."]}),r.jsxs("p",{children:["The example below pre-seeds the cookie with legacy format"," ",r.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})]})}),h({source:l`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = cookieThemeStore(themes, { cookieName: 'theme', parse: customParse })
            `})],loaders:[()=>(G(),document.cookie=`${R}=${encodeURIComponent(JSON.stringify({theme:"grayscale"}))}; path=/; max-age=60`,{})],render:()=>{const t=d(n,{cookieName:R,parse:V}).read();return r.jsx("div",{className:"flex flex-col gap-4",children:r.jsx(g,{title:"store.read() with custom parse","data-testid":"store-read-result",result:t??{theme:"grayscale",value:n.grayscale}})})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await m(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},v={name:"options.cookieName",tags:["props"],decorators:[p({content:r.jsxs("p",{children:["Pass ",r.jsx("code",{children:"options.cookieName"})," to determine the cookie name used for persistence."]})}),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
            `})],loaders:[()=>(d(n,{cookieName:a}).write(I(n,"current")),{})],render:()=>{const t=d(n,{cookieName:a}).read();return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(K,{title:"Cookie name",appearance:"output",children:r.jsx("code",{children:a})}),r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"current",value:n.current}})]})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await m(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},C={name:"read",tags:["props"],parameters:u({description:{story:"store.read() reads the current theme from the cookie."}}),decorators:[p(),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(d(n,{cookieName:a}).write(I(n,"grayscale")),{})],render:()=>{const t=d(n,{cookieName:a}).read();return r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"grayscale",value:n.grayscale}})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await m(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},x={name:"read: undefined",tags:["props"],parameters:u({description:{story:"When no theme cookie exists, store.read() returns undefined."}}),decorators:[p(),h({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(_(a),{})],render:()=>{const t=d(n,{cookieName:a}).read();return r.jsx(g,{title:"store.read() result","data-testid":"store-read-result",result:t!==void 0?t:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await m(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},N={name:"getThemeFromCookie (SSR)",tags:["use-case"],parameters:u({description:{story:"Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies())."}}),decorators:[p(),h({source:l`
                // With raw Cookie header (Express, Remix)
                const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

                // With Next.js cookies()
                const theme = getThemeFromCookie(
                  (name) => cookies().get(name)?.value ?? undefined,
                  themes
                )
            `})],render:()=>{const e=`${a}=${encodeURIComponent(JSON.stringify(I(n,"grayscale")))}`,t=z(e,n,{cookieName:a});return r.jsx(g,{title:"getThemeFromCookie result","data-testid":"get-theme-result",result:t??{theme:"grayscale",value:n.grayscale}})},play:async({canvas:e})=>{await m(e.getByTestId("get-theme-result")).toHaveTextContent("theme: grayscale")}},w={tags:["source"],parameters:u({source:{code:L}}),decorators:[h()]};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...w.parameters?.docs?.source}}};const ie=["Playground","ParseOption","CookieName","Read","ReadWhenEmpty","GetThemeFromCookie","Source"];export{v as CookieName,N as GetThemeFromCookie,S as ParseOption,T as Playground,C as Read,x as ReadWhenEmpty,w as Source,ie as __namedExportsOrder,ae as default};
