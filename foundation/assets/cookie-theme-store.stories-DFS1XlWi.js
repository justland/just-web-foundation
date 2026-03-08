import{j as s,d as h,w as l,s as p,r as H,S as K}from"./iframe-Sd4Xj9SC.js";import{d as g}from"./dedent-BuYMbVyj.js";import{t as I}from"./theme-entry-D4S_RAMB.js";import{d as F}from"./dummy-theme-store-DcCfgetv.js";import{p as P}from"./parse-stored-theme-Dsx2RsUi.js";import{T as k}from"./theme-result-card-5t3626kf.js";import{T as $}from"./theme-store-demo-CeFl2Wd5.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./append-id-Vsg144gU.js";import"./button-BFgGKzfU.js";import"./resolve-class-name-BWUmKjOI.js";function B(e){if(typeof document>"u"||!document.cookie)return null;const o=document.cookie.match(new RegExp(`(?:^|;\\s*)${e}=([^;]*)`))?.[1];return o!==void 0?decodeURIComponent(o):null}function U(e,t,o){const r=[`${e}=${encodeURIComponent(t)}`];r.push(`path=${o.path??"/"}`),o.maxAge!==void 0&&r.push(`max-age=${o.maxAge}`),o.sameSite!==void 0&&r.push(`samesite=${o.sameSite}`),o.secure&&r.push("secure"),document.cookie=r.join("; ")}function D(e,t="/"){document.cookie=`${e}=; path=${t}; max-age=0`}function W(e,t){const r=e.match(new RegExp(`(?:^|;\\s*)${t}=([^;]*)`))?.[1];return r!==void 0?decodeURIComponent(r.trim()):null}function q(e,t){const{cookieName:o,parse:r=P}=t;if(typeof document>"u"||document.cookie===void 0)return;const i=B(o);return r(e,i??void 0)}function J(e,t,o){const{cookieName:r,path:i="/",maxAge:y,sameSite:f,secure:E}=o;if(typeof document>"u"||document.cookie===void 0)return;if(t==null){D(r,i);return}const m={path:i};y!==void 0&&(m.maxAge=y),f!==void 0&&(m.sameSite=f),E&&(m.secure=!0),U(r,JSON.stringify(t),m)}function u(e,t){const{cookieName:o,path:r="/",maxAge:i,sameSite:y,secure:f,parse:E=P}=t;if(document.cookie===void 0)return F;const m=new Set;let b=O()?.theme??void 0;function O(){return q(e,{cookieName:o,parse:E})}function j(){const d=O(),A=d?.theme??void 0;if(A!==b){b=A;for(const M of m)M(d)}}return{read:O,write(d){try{J(e,d,{cookieName:o,path:r,maxAge:i,sameSite:y,secure:f}),j()}catch{}},subscribe(d){return m.add(d),()=>{m.delete(d)}}}}function z(e,t,o={}){const r=o.cookieName??"theme",i=typeof e=="function"?e(r)??null:e?W(e,r):null;return P(t,i??void 0)}const L=`import type { Required } from 'type-plus'
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
`,{expect:c}=__STORYBOOK_MODULE_TEST__,me={title:"theme/theme-store/cookieThemeStore",tags:["func","version:2.0"],parameters:h({description:{component:"Theme store backed by cookies. Persists across sessions; SSR-readable. Cross-tab sync is not supported."}}),render:()=>s.jsx(s.Fragment,{})},n={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},a="theme-cookie-demo";function _(e){document.cookie=`${e}=; path=/; max-age=0`}const T={tags:["playground"],parameters:h({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[l(),p({source:g`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(_(a),{})],render:()=>{const e=H.useMemo(()=>u(n,{cookieName:a}),[]);return s.jsx($,{store:e,themes:n})}},R="theme-cookie-parse";function G(){document.cookie=`${R}=; path=/; max-age=0`}function V(e,t){let o;try{o=t?JSON.parse(t):void 0}catch{return}if(!o?.theme||typeof o.theme!="string"||!(o.theme in e))return;const r=o.theme;return{theme:r,value:e[r]}}const S={name:"options.parse",tags:["props","use-case"],parameters:h({description:{story:"The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined."}}),decorators:[l({content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["The ",s.jsx("code",{children:"options.parse"})," allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation."]}),s.jsxs("p",{children:["The example below pre-seeds the cookie with legacy format"," ",s.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})]})}),p({source:g`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = cookieThemeStore(themes, { cookieName: 'theme', parse: customParse })
            `})],loaders:[()=>(G(),document.cookie=`${R}=${encodeURIComponent(JSON.stringify({theme:"grayscale"}))}; path=/; max-age=60`,{})],render:()=>{const t=u(n,{cookieName:R,parse:V}).read();return s.jsx("div",{className:"flex flex-col gap-4",children:s.jsx(k,{title:"store.read() with custom parse","data-testid":"store-read-result",result:t??{theme:"grayscale",value:n.grayscale}})})},play:async({canvas:e})=>{await c(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await c(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},v={name:"options.cookieName",tags:["props"],decorators:[l({content:s.jsxs("p",{children:["Pass ",s.jsx("code",{children:"options.cookieName"})," to determine the cookie name used for persistence."]})}),p({source:g`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
            `})],loaders:[()=>(u(n,{cookieName:a}).write(I(n,"current")),{})],render:()=>{const t=u(n,{cookieName:a}).read();return s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(K,{title:"Cookie name",appearance:"output",children:s.jsx("code",{children:a})}),s.jsx(k,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"current",value:n.current}})]})},play:async({canvas:e})=>{await c(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await c(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},C={name:"read",tags:["props"],parameters:h({description:{story:"store.read() reads the current theme from the cookie."}}),decorators:[l(),p({source:g`
                const store = cookieThemeStore(themes, { cookieName: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(u(n,{cookieName:a}).write(I(n,"grayscale")),{})],render:()=>{const t=u(n,{cookieName:a}).read();return s.jsx(k,{title:"store.read() result","data-testid":"store-read-result",result:t??{theme:"grayscale",value:n.grayscale}})},play:async({canvas:e})=>{await c(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await c(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},x={name:"read: undefined",tags:["props"],parameters:h({description:{story:"When no theme cookie exists, store.read() returns undefined."}}),decorators:[l(),p({source:g`
                const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(_(a),{})],render:()=>{const t=u(n,{cookieName:a}).read();return s.jsx(k,{title:"store.read() result","data-testid":"store-read-result",result:t!==void 0?t:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await c(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},N={name:"getThemeFromCookie (SSR)",tags:["use-case"],parameters:h({description:{story:"Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies())."}}),decorators:[l(),p({source:g`
                // With raw Cookie header (Express, Remix)
                const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

                // With Next.js cookies()
                const theme = getThemeFromCookie(
                  (name) => cookies().get(name)?.value ?? undefined,
                  themes
                )
            `})],render:()=>{const e=`${a}=${encodeURIComponent(JSON.stringify(I(n,"grayscale")))}`,t=z(e,n,{cookieName:a});return s.jsx(k,{title:"getThemeFromCookie result","data-testid":"get-theme-result",result:t??{theme:"grayscale",value:n.grayscale}})},play:async({canvas:e})=>{await c(e.getByTestId("get-theme-result")).toHaveTextContent("theme: grayscale")}},w={tags:["source"],parameters:h({source:{code:L}}),decorators:[p()]};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const ce=["Playground","ParseOption","CookieName","Read","ReadWhenEmpty","GetThemeFromCookie","Source"];export{v as CookieName,N as GetThemeFromCookie,S as ParseOption,T as Playground,C as Read,x as ReadWhenEmpty,w as Source,ce as __namedExportsOrder,me as default};
