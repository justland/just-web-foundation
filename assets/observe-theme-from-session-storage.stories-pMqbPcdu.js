import{j as s,d as u,w as p,s as c,r as h,S as b}from"./iframe-DMM-er1z.js";import{d as y}from"./dedent-BuYMbVyj.js";import{d}from"./try-parse-json-83P4r8LE.js";import{o as f}from"./observe-theme-from-session-storage-CVw4H7Bt.js";import{s as i}from"./set-theme-to-session-storage-Cr54TX08.js";import{T as K}from"./theme-result-card-PyzNQYAU.js";import"./preload-helper-PPVm8Dsz.js";import"./append-id-Vsg144gU.js";const O=`import { getThemeFromSessionStorage } from './get-theme-from-session-storage.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

export type ObserveThemeFromSessionStorageResult<Themes extends ThemeMap> =
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined

/**
 * Observes changes to the theme stored in sessionStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser \`storage\` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromSessionStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with \`disconnect()\` to stop observing
 *
 * @example
 * \`\`\`ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * \`\`\`
 */
export function observeThemeFromSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes> & {
		handler: (result: ObserveThemeFromSessionStorageResult<Themes>) => void
	},
): { disconnect: () => void } {
	const { handler, ...storageOptions } = options

	const notify = () => {
		handler(getThemeFromSessionStorage(storageOptions))
	}

	if (typeof window === 'undefined' || !window.sessionStorage) {
		// No storage: still call handler with default once, return no-op disconnect
		handler(getThemeFromSessionStorage(storageOptions))
		return { disconnect: () => {} }
	}

	notify()

	const onStorage = (e: StorageEvent) => {
		if (e.key === storageOptions.storageKey && e.storageArea === window.sessionStorage) {
			notify()
		}
	}

	window.addEventListener('storage', onStorage)

	return {
		disconnect: () => {
			window.removeEventListener('storage', onStorage)
		},
	}
}
`,{expect:S}=__STORYBOOK_MODULE_TEST__,R={title:"theme/observeThemeFromSessionStorage",tags:["func","version:next"],parameters:u({description:{component:"Observes the theme stored in sessionStorage and invokes a handler with the current theme. The handler is called once on start and when another tab/window changes the same storage key."}}),render:()=>s.jsx(s.Fragment,{})},T={default:"text-white",grayscale:"text-gray-100"},C="theme-observe-session";function x({storageKey:e,themes:t,theme:o}){const[l,v]=h.useState(void 0);return h.useEffect(()=>{const g=d({themes:t,theme:o??void 0,storageKey:e}),w=f({...g,handler:v});return()=>w.disconnect()},[e,o,t]),s.jsx(K,{title:"Observed theme from sessionStorage","data-testid":"observed-theme",result:l})}const n={tags:["use-case"],decorators:[p({content:s.jsxs("p",{children:["Handler is called once on start with the current theme from ",s.jsx("code",{children:"sessionStorage"}),"."]})}),c({source:y`
                observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    storageKey: 'theme-observe-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            `})],loaders:[()=>{const e=d({themes:T,theme:"grayscale",storageKey:C});return i(e),{options:e}}],render:(e,{loaded:{options:t}})=>s.jsx(x,{storageKey:t.storageKey,themes:t.themes,theme:t.theme??void 0}),play:async({canvas:e})=>{await S(e.getByTestId("observed-theme")).toHaveTextContent("theme: grayscale")}},r={parameters:u({description:{story:"Call disconnect() to stop observing and remove the storage listener."}}),loaders:[()=>{const e=d({themes:T,theme:"grayscale",storageKey:"theme-disconnect-session"});return i(e),{options:e}}],decorators:[p(),c({source:y`
                const observer = observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-disconnect-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
                setThemeToSessionStorage({ ...options, theme: 'default' })
            `})],render:(e,{loaded:{options:t}})=>{const[o,l]=h.useState(void 0);return h.useEffect(()=>{f({...t,handler:g=>l(g?.theme)}).disconnect(),i({...t,theme:"default"})},[t]),s.jsxs(b,{title:"After disconnect",appearance:"output",children:["Theme remains to be: ",s.jsx("span",{"data-testid":"theme",children:o??"(empty)"})]})},play:async({canvas:e})=>{await S(e.getByTestId("theme")).toHaveTextContent("grayscale")}},a={name:"theme: not exists",tags:["props"],loaders:[()=>{const e=d({themes:T,theme:"grayscale",storageKey:"theme-not-exists-session"});return i({...e,theme:null}),{options:e}}],decorators:[p({content:s.jsxs("p",{children:["Handler receives ",s.jsx("code",{children:"theme"})," when nothing is stored at the key."]})}),c({source:y`
                observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            `})],render:(e,{loaded:{options:t}})=>s.jsx(x,{storageKey:t.storageKey,themes:t.themes,theme:t.theme??void 0}),play:async({canvas:e})=>{await S(e.getByTestId("observed-theme")).toHaveTextContent("theme: grayscale")}},m={tags:["source"],parameters:u({source:{code:O}}),decorators:[c()]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Handler is called once on start with the current theme from <code>sessionStorage</code>.
                </p>
  }), showSource({
    source: dedent\`
                observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    storageKey: 'theme-observe-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            \`
  })],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: STORAGE_KEY
    });
    setThemeToSessionStorage(options);
    return {
      options
    };
  }],
  render: (_, {
    loaded: {
      options
    }
  }) => {
    return <ObserveThemeDemo storageKey={options.storageKey} themes={options.themes} theme={options.theme ?? undefined} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('theme: grayscale');
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Call disconnect() to stop observing and remove the storage listener.'
    }
  }),
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: 'theme-disconnect-session'
    });
    setThemeToSessionStorage(options);
    return {
      options
    };
  }],
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const observer = observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-disconnect-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
                setThemeToSessionStorage({ ...options, theme: 'default' })
            \`
  })],
  render: (_, {
    loaded: {
      options
    }
  }) => {
    const [theme, setTheme] = useState<string | undefined>(undefined);
    useEffect(() => {
      const observer = observeThemeFromSessionStorage({
        ...options,
        handler: result => setTheme(result?.theme)
      });
      observer.disconnect();
      setThemeToSessionStorage({
        ...options,
        theme: 'default'
      });
    }, [options]);
    return <StoryCard title="After disconnect" appearance="output">
                Theme remains to be: <span data-testid="theme">{theme ?? '(empty)'}</span>
            </StoryCard>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('theme')).toHaveTextContent('grayscale');
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'theme: not exists',
  tags: ['props'],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: 'theme-not-exists-session'
    });
    setThemeToSessionStorage({
      ...options,
      theme: null
    });
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    Handler receives <code>theme</code> when nothing is stored at the key.
                </p>
  }), showSource({
    source: dedent\`
                observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            \`
  })],
  render: (_, {
    loaded: {
      options
    }
  }) => {
    return <ObserveThemeDemo storageKey={options.storageKey} themes={options.themes} theme={options.theme ?? undefined} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('theme: grayscale');
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...m.parameters?.docs?.source}}};const I=["BasicUsage","Disconnect","ThemeNotExists","Source"];export{n as BasicUsage,r as Disconnect,m as Source,a as ThemeNotExists,I as __namedExportsOrder,R as default};
