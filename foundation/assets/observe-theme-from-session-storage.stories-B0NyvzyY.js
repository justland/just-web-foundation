import{j as s,d as u,w as p,s as i,r as h,S as w}from"./iframe-Pea2t46H.js";import{d as y}from"./dedent-BuYMbVyj.js";import{d}from"./define-theme-storage-options-4rIte7rE.js";import{o as f}from"./observe-theme-from-session-storage-t-AfATrO.js";import{s as c}from"./set-theme-to-session-storage-C4yyrXX5.js";import{T as K}from"./theme-result-card-D84vDB1y.js";import"./preload-helper-PPVm8Dsz.js";import"./session-storage-theme-store-DVP72-Z9.js";import"./try-parse-json-BpEBnayC.js";import"./append-id-Vsg144gU.js";const O=`import { sessionStorageThemeStore } from './session-storage-theme-store.ts'
import type { ThemeMap, ThemeResult, ThemeStorageOptions } from './theme.types.ts'

export type ObserveThemeFromSessionStorageResult<Themes extends ThemeMap> = ThemeResult<Themes>

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
	const store = sessionStorageThemeStore<Themes>(options.storageKey)
	return store.subscribe({
		themes: options.themes,
		theme: options.theme,
		handler: options.handler,
	})
}
`,{expect:T}=__STORYBOOK_MODULE_TEST__,A={title:"theme/observeThemeFromSessionStorage",tags:["func","version:next"],parameters:u({description:{component:"Observes the theme stored in sessionStorage and invokes a handler with the current theme. The handler is called once on start and when another tab/window changes the same storage key."}}),render:()=>s.jsx(s.Fragment,{})},S={default:"text-white",grayscale:"text-gray-100"},C="theme-observe-session";function x({storageKey:e,themes:t,theme:o}){const[l,v]=h.useState(void 0);return h.useEffect(()=>{const g=d({themes:t,theme:o??void 0,storageKey:e}),b=f({...g,handler:v});return()=>b.disconnect()},[e,o,t]),s.jsx(K,{title:"Observed theme from sessionStorage","data-testid":"observed-theme",result:l})}const n={tags:["use-case"],decorators:[p({content:s.jsxs("p",{children:["Handler is called once on start with the current theme from ",s.jsx("code",{children:"sessionStorage"}),"."]})}),i({source:y`
                observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    storageKey: 'theme-observe-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            `})],loaders:[()=>{const e=d({themes:S,theme:"grayscale",storageKey:C});return c(e),{options:e}}],render:(e,{loaded:{options:t}})=>s.jsx(x,{storageKey:t.storageKey,themes:t.themes,theme:t.theme??void 0}),play:async({canvas:e})=>{await T(e.getByTestId("observed-theme")).toHaveTextContent("theme: grayscale")}},r={parameters:u({description:{story:"Call disconnect() to stop observing and remove the storage listener."}}),loaders:[()=>{const e=d({themes:S,theme:"grayscale",storageKey:"theme-disconnect-session"});return c(e),{options:e}}],decorators:[p(),i({source:y`
                const observer = observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-disconnect-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
                setThemeToSessionStorage({ ...options, theme: 'default' })
            `})],render:(e,{loaded:{options:t}})=>{const[o,l]=h.useState(void 0);return h.useEffect(()=>{f({...t,handler:g=>l(g?.theme)}).disconnect(),c({...t,theme:"default"})},[t]),s.jsxs(w,{title:"After disconnect",appearance:"output",children:["Theme remains to be: ",s.jsx("span",{"data-testid":"theme",children:o??"(empty)"})]})},play:async({canvas:e})=>{await T(e.getByTestId("theme")).toHaveTextContent("grayscale")}},a={name:"theme: not exists",tags:["props"],loaders:[()=>{const e=d({themes:S,theme:"grayscale",storageKey:"theme-not-exists-session"});return c({...e,theme:null}),{options:e}}],decorators:[p({content:s.jsxs("p",{children:["Handler receives ",s.jsx("code",{children:"theme"})," when nothing is stored at the key."]})}),i({source:y`
                observeThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists-session',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
            `})],render:(e,{loaded:{options:t}})=>s.jsx(x,{storageKey:t.storageKey,themes:t.themes,theme:t.theme??void 0}),play:async({canvas:e})=>{await T(e.getByTestId("observed-theme")).toHaveTextContent("theme: grayscale")}},m={tags:["source"],parameters:u({source:{code:O}}),decorators:[i()]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const M=["BasicUsage","Disconnect","ThemeNotExists","Source"];export{n as BasicUsage,r as Disconnect,m as Source,a as ThemeNotExists,M as __namedExportsOrder,A as default};
