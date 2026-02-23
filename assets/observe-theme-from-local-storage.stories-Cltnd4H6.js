import{j as o,d as u,w as p,s as l,r as m,S as b}from"./iframe-DMM-er1z.js";import{d as y}from"./dedent-BuYMbVyj.js";import{d}from"./try-parse-json-83P4r8LE.js";import{o as f}from"./observe-theme-from-local-storage-D5-Ifohs.js";import{s as h}from"./set-theme-to-local-storage-BwgwevIK.js";import{T as L}from"./theme-result-card-PyzNQYAU.js";import"./preload-helper-PPVm8Dsz.js";import"./append-id-Vsg144gU.js";const K=`import { getThemeFromLocalStorage } from './get-theme-from-local-storage.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

export type ObserveThemeFromLocalStorageResult<Themes extends ThemeMap> =
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined

/**
 * Observes changes to the theme stored in localStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser \`storage\` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromLocalStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with \`disconnect()\` to stop observing
 *
 * @example
 * \`\`\`ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromLocalStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * \`\`\`
 */
export function observeThemeFromLocalStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes> & {
		handler: (result: ObserveThemeFromLocalStorageResult<Themes>) => void
	},
): { disconnect: () => void } {
	const { handler, ...storageOptions } = options

	const notify = () => {
		handler(getThemeFromLocalStorage(storageOptions))
	}

	if (typeof window === 'undefined' || !window.localStorage) {
		// No storage: still call handler with default once, return no-op disconnect
		handler(getThemeFromLocalStorage(storageOptions))
		return { disconnect: () => {} }
	}

	notify()

	const onStorage = (e: StorageEvent) => {
		if (e.key === storageOptions.storageKey && e.storageArea === window.localStorage) {
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
`,{expect:T}=__STORYBOOK_MODULE_TEST__,k={title:"theme/observeThemeFromLocalStorage",tags:["func","version:next"],parameters:u({description:{component:"Observes the theme stored in localStorage and invokes a handler with the current theme. The handler is called once on start and when another tab/window changes the same storage key."}}),render:()=>o.jsx(o.Fragment,{})},v={default:"text-white",grayscale:"text-gray-100"},O="theme-observe";function x({storageKey:e,themes:t,theme:n}){const[i,S]=m.useState(void 0);return m.useEffect(()=>{const g=d({themes:t,theme:n??void 0,storageKey:e}),w=f({...g,handler:S});return()=>w.disconnect()},[e,n,t]),o.jsx(L,{title:"Observed theme from localStorage","data-testid":"observed-theme",result:i})}const s={tags:["use-case"],decorators:[p({content:o.jsxs("p",{children:["Handler is called once on start with the current theme from ",o.jsx("code",{children:"localStorage"}),"."]})}),l({source:y`
                observeThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    storageKey: 'theme-observe',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            `})],loaders:[()=>{const e=d({themes:v,theme:"grayscale",storageKey:O});return h(e),{options:e}}],render:(e,{loaded:{options:t}})=>o.jsx(x,{storageKey:t.storageKey,themes:t.themes,theme:t.theme??void 0}),play:async({canvas:e})=>{await T(e.getByTestId("observed-theme")).toHaveTextContent("theme: grayscale")}},r={parameters:u({description:{story:"Call disconnect() to stop observing and remove the storage listener."}}),loaders:[()=>{const e=d({themes:v,theme:"grayscale",storageKey:"theme-disconnect"});return h(e),{options:e}}],decorators:[p(),l({source:y`
                const observer = observeThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-disconnect',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
                setThemeToLocalStorage({ ...options, theme: 'default' })
            `})],render:(e,{loaded:{options:t}})=>{const[n,i]=m.useState(void 0);return m.useEffect(()=>{f({...t,handler:g=>i(g?.theme)}).disconnect(),h({...t,theme:"default"})},[t]),o.jsxs(b,{title:"After disconnect",appearance:"output",children:["Theme remains to be: ",o.jsx("span",{"data-testid":"theme",children:n??"(empty)"})]})},play:async({canvas:e})=>{await T(e.getByTestId("theme")).toHaveTextContent("grayscale")}},a={name:"theme: not exists",tags:["props"],loaders:[()=>{const e=d({themes:v,theme:"grayscale",storageKey:"theme-not-exists"});return h({...e,theme:null}),{options:e}}],decorators:[p({content:o.jsxs("p",{children:["Handler receives ",o.jsx("code",{children:"theme"})," when nothing is stored at the key."]})}),l({source:y`
                observeThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(x,{storageKey:t.storageKey,themes:t.themes,theme:t.theme??void 0}),play:async({canvas:e})=>{await T(e.getByTestId("observed-theme")).toHaveTextContent("theme: grayscale")}},c={tags:["source"],parameters:u({source:{code:K}}),decorators:[l()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Handler is called once on start with the current theme from <code>localStorage</code>.
                </p>
  }), showSource({
    source: dedent\`
                observeThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    storageKey: 'theme-observe',
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
    setThemeToLocalStorage(options);
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Call disconnect() to stop observing and remove the storage listener.'
    }
  }),
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: 'theme-disconnect'
    });
    setThemeToLocalStorage(options);
    return {
      options
    };
  }],
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const observer = observeThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-disconnect',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
                setThemeToLocalStorage({ ...options, theme: 'default' })
            \`
  })],
  render: (_, {
    loaded: {
      options
    }
  }) => {
    const [theme, setTheme] = useState<string | undefined>(undefined);
    useEffect(() => {
      const observer = observeThemeFromLocalStorage({
        ...options,
        handler: result => setTheme(result?.theme)
      });
      observer.disconnect();
      setThemeToLocalStorage({
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
      storageKey: 'theme-not-exists'
    });
    setThemeToLocalStorage({
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
                observeThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists',
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...c.parameters?.docs?.source}}};const R=["BasicUsage","Disconnect","ThemeNotExists","Source"];export{s as BasicUsage,r as Disconnect,c as Source,a as ThemeNotExists,R as __namedExportsOrder,k as default};
