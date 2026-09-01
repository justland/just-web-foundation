import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-DFQ_z_Nq.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{n as d,t as f}from"./parse-stored-theme-CdadKTi-.js";import{n as p,t as m}from"./dummy-theme-store-D8K5nRD9.js";import{n as h,t as g}from"./theme-result-card-I-1cNXBY.js";import{n as _,t as v}from"./theme-store-demo-CpR1fkgT.js";function y(e){if(typeof document>`u`||!document.cookie)return null;let t=document.cookie.match(RegExp(`(?:^|;\\s*)${e}=([^;]*)`))?.[1];return t===void 0?null:decodeURIComponent(t)}function b(e,t,n){let r=[`${e}=${encodeURIComponent(t)}`];r.push(`path=${n.path??`/`}`),n.maxAge!==void 0&&r.push(`max-age=${n.maxAge}`),n.sameSite!==void 0&&r.push(`samesite=${n.sameSite}`),n.secure&&r.push(`secure`),document.cookie=r.join(`; `)}function x(e,t=`/`){document.cookie=`${e}=; path=${t}; max-age=0`}function S(e,t){let n=e.match(RegExp(`(?:^|;\\s*)${t}=([^;]*)`))?.[1];return n===void 0?null:decodeURIComponent(n.trim())}function C(e,t){let{cookieName:n,parse:r=d}=t;if(!(typeof document>`u`||document.cookie===void 0))return r(e,y(n)??void 0)}function w(){return(w=e((()=>{f()})))()}function T(e,t,n){let{cookieName:r,path:i=`/`,maxAge:a,sameSite:o,secure:s}=n;if(typeof document>`u`||document.cookie===void 0)return;if(t==null){x(r,i);return}let c={path:i};a!==void 0&&(c.maxAge=a),o!==void 0&&(c.sameSite=o),s&&(c.secure=!0),b(r,JSON.stringify(t),c)}function E(){return(E=e((()=>{})))()}function D(e,t){let{cookieName:n,path:r=`/`,maxAge:i,sameSite:a,secure:o,parse:s=d}=t;if(document.cookie===void 0)return m;let c=new Set,l=u()?.theme??void 0;function u(){return C(e,{cookieName:n,path:r,parse:s})}function f(){let e=u(),t=e?.theme??void 0;if(t!==l){l=t;for(let t of c)t(e)}}return{read:u,write(t){try{T(e,t,{cookieName:n,path:r,maxAge:i,sameSite:a,secure:o}),f()}catch{}},subscribe(e){return c.add(e),()=>{c.delete(e)}}}}function O(e,t,n={}){let r=n.cookieName??`theme`,i=typeof e==`function`?e(r)??null:e?S(e,r):null;return d(t,i??void 0)}function k(){return(k=e((()=>{p(),f(),w(),E()})))()}var A;function j(){return(j=e((()=>{A=`import type { Required } from 'type-plus'
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
`})))()}function M(e){document.cookie=`${e}=; path=/; max-age=0`}function N(){document.cookie=`${H}=; path=/; max-age=0`}function P(e,t){let n;try{n=t?JSON.parse(t):void 0}catch{return}if(!n?.theme||typeof n.theme!=`string`||!(n.theme in e))return;let r=n.theme;return{theme:r,value:e[r]}}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{k(),s(),c(),F=t(),h(),_(),j(),I=n(),{expect:L}=__STORYBOOK_MODULE_TEST__,R={title:`theme/theme-store/cookieThemeStore`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Theme store backed by cookies. Persists across sessions; SSR-readable. Cross-tab sync is not supported.`}}),render:()=>(0,I.jsx)(I.Fragment,{})},z={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},B=`theme-cookie-demo`,V={tags:[`playground`],parameters:r({description:{story:`Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.`}}),decorators:[o(),i({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(M(B),{})],render:()=>{let e=(0,F.useMemo)(()=>D(z,{cookieName:B}),[]);return(0,I.jsx)(v,{store:e,themes:z})}},H=`theme-cookie-parse`,U={name:`options.parse`,tags:[`props`,`use-case`],parameters:r({description:{story:`The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined.`}}),decorators:[o({content:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`p`,{children:[`The `,(0,I.jsx)(`code`,{children:`options.parse`}),` allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation.`]}),(0,I.jsxs)(`p`,{children:[`The example below pre-seeds the cookie with legacy format`,` `,(0,I.jsx)(`code`,{children:`{ theme: "grayscale" }`}),` (no value).`]})]})}),i({source:l`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = cookieThemeStore(themes, { cookieName: 'theme', parse: customParse })
            `})],loaders:[()=>(N(),document.cookie=`${H}=${encodeURIComponent(JSON.stringify({theme:`grayscale`}))}; path=/; max-age=60`,{})],render:()=>{let e=D(z,{cookieName:H,parse:P}).read();return(0,I.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,I.jsx)(g,{title:`store.read() with custom parse`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:z.grayscale}})})},play:async({canvas:e})=>{await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},W={name:`options.cookieName`,tags:[`props`],decorators:[o({content:(0,I.jsxs)(`p`,{children:[`Pass `,(0,I.jsx)(`code`,{children:`options.cookieName`}),` to determine the cookie name used for persistence.`]})}),i({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
            `})],loaders:[()=>(D(z,{cookieName:B}).write(u(z,`current`)),{})],render:()=>{let e=D(z,{cookieName:B}).read();return(0,I.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,I.jsx)(a,{title:`Cookie name`,appearance:`output`,children:(0,I.jsx)(`code`,{children:B})}),(0,I.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:z.current}})]})},play:async({canvas:e})=>{await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},G={name:`read`,tags:[`props`],parameters:r({description:{story:`store.read() reads the current theme from the cookie.`}}),decorators:[o(),i({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(D(z,{cookieName:B}).write(u(z,`grayscale`)),{})],render:()=>{let e=D(z,{cookieName:B}).read();return(0,I.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:z.grayscale}})},play:async({canvas:e})=>{await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},K={name:`read: undefined`,tags:[`props`],parameters:r({description:{story:`When no theme cookie exists, store.read() returns undefined.`}}),decorators:[o(),i({source:l`
                const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(M(B),{})],render:()=>{let e=D(z,{cookieName:B}).read();return(0,I.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await L(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},q={name:`getThemeFromCookie (SSR)`,tags:[`use-case`],parameters:r({description:{story:`Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies()).`}}),decorators:[o(),i({source:l`
                // With raw Cookie header (Express, Remix)
                const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

                // With Next.js cookies()
                const theme = getThemeFromCookie(
                  (name) => cookies().get(name)?.value ?? undefined,
                  themes
                )
            `})],render:()=>{let e=O(`${B}=${encodeURIComponent(JSON.stringify(u(z,`grayscale`)))}`,z,{cookieName:B});return(0,I.jsx)(g,{title:`getThemeFromCookie result`,"data-testid":`get-theme-result`,result:e??{theme:`grayscale`,value:z.grayscale}})},play:async({canvas:e})=>{await L(e.getByTestId(`get-theme-result`)).toHaveTextContent(`theme: grayscale`)}},J={tags:[`source`],parameters:r({source:{code:A}}),decorators:[i()]},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...J.parameters?.docs?.source}}},Y=[`Playground`,`ParseOption`,`CookieName`,`Read`,`ReadWhenEmpty`,`GetThemeFromCookie`,`Source`]})))()}X();export{W as CookieName,q as GetThemeFromCookie,U as ParseOption,V as Playground,G as Read,K as ReadWhenEmpty,J as Source,Y as __namedExportsOrder,R as default};