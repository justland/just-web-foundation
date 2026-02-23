import{j as o,d,w as g,s as i}from"./iframe-BwCvR-Rn.js";import{d as c}from"./dedent-BuYMbVyj.js";import{d as l}from"./try-parse-json-83P4r8LE.js";import{g as p,s as h}from"./set-theme-to-session-storage-Cr54TX08.js";import{S as u}from"./show-theme-from-session-storage-Dw-G9CEC.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-result-card-BVwVUOcQ.js";import"./append-id-Vsg144gU.js";const y=`import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Sets the theme key in sessionStorage.
 *
 * Writes the theme key at the given storage key only when in a browser and when the theme is in the themes map.
 * Removes the storage item when the theme is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the theme key)
 * @param options.theme - Theme key to store
 * @param options.storageKey - sessionStorage key to write (defaults to \`'theme'\`)
 *
 * @example
 * \`\`\`ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 *
 * setThemeToSessionStorage({
 *   themes,
 *   theme: 'dark',
 *   storageKey: 'app-theme'
 * })
 * \`\`\`
 */
export function setThemeToSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
): void {
	if (!window?.sessionStorage) return

	try {
		if (!options.theme) {
			window.sessionStorage.removeItem(options.storageKey)
			return
		}

		window.sessionStorage.setItem(
			options.storageKey,
			JSON.stringify({
				theme: options.theme,
				value: options.themes[options.theme],
			}),
		)
	} catch {
		// Ignore quota or other storage errors
	}
}
`,{expect:n}=__STORYBOOK_MODULE_TEST__,_={title:"theme/setThemeToSessionStorage",tags:["func","version:next"],parameters:d({description:{component:"Sets the theme key in sessionStorage. Writes only when the theme is in the themes map; removes the storage item by passing null or undefined to the theme option."}}),render:()=>o.jsx(o.Fragment,{})},s={tags:["use-case"],parameters:d({description:{story:"Writes the theme to sessionStorage"}}),decorators:[g(),i({source:c`
                setThemeToSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100', },
                    theme: 'default',
                    storageKey: 'theme'
                })
            `})],loaders:[()=>{const e=l({themes:{default:"text-white",grayscale:"text-gray-100"},theme:"default",storageKey:"theme"});return h(e),{options:e}}],render:(e,{loaded:{options:t}})=>o.jsx(u,{...t}),play:async({loaded:{options:e}})=>{const t=p(e);await n(t?.theme).toBe("default"),await n(t?.value).toBe("text-white")}},r={tags:["use-case"],loaders:[()=>{h({themes:{default:"default",grayscale:"grayscale"},theme:"grayscale",storageKey:"remove-theme"});const e=l({themes:{default:"default",grayscale:"grayscale"},theme:null,storageKey:"remove-theme"});return h(e),{options:e}}],decorators:[g({content:o.jsx(o.Fragment,{children:o.jsxs("p",{children:["Removes the theme from sessionStorage by passing ",o.jsx("code",{children:"null"})," to the theme option"]})})}),i({source:c`
                setThemeToSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: null,
                    storageKey: 'remove-theme',
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(u,{...t}),play:async({loaded:{options:e}})=>{const t=p({...e,storageKey:"remove-theme"});await n(t).toBeUndefined()}},a={tags:["use-case"],loaders:[()=>(h({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},theme:"default",storageKey:"theme-array"}),{options:l({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},theme:"default",storageKey:"theme-array"})})],decorators:[g({content:o.jsx(o.Fragment,{children:o.jsx("p",{children:"Writes the theme to sessionStorage when the theme value is an array"})})}),i({source:c`
                setThemeToSessionStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    theme: 'default',
                    storageKey: 'theme-array',
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(u,{...t}),play:async({loaded:{options:e}})=>{const t=p({...e,storageKey:"theme-array"});await n(t?.theme).toBe("default"),await n(t?.value).toEqual(["text-white","bg-white"])}},m={tags:["source"],parameters:d({source:{code:y}}),decorators:[i()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Writes the theme to sessionStorage'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                setThemeToSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100', },
                    theme: 'default',
                    storageKey: 'theme'
                })
            \`
  })],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes: {
        default: 'text-white',
        grayscale: 'text-gray-100'
      },
      theme: 'default',
      storageKey: 'theme'
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
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromSessionStorage(options);
    await expect(stored?.theme).toBe('default');
    await expect(stored?.value).toBe('text-white');
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  loaders: [() => {
    setThemeToSessionStorage({
      themes: {
        default: 'default',
        grayscale: 'grayscale'
      },
      theme: 'grayscale',
      storageKey: 'remove-theme'
    });
    const options = defineThemeStorageOptions({
      themes: {
        default: 'default',
        grayscale: 'grayscale'
      },
      theme: null,
      storageKey: 'remove-theme'
    });
    setThemeToSessionStorage(options);
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Removes the theme from sessionStorage by passing <code>null</code> to the theme option
                    </p>
                </>
  }), showSource({
    source: dedent\`
                setThemeToSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: null,
                    storageKey: 'remove-theme',
                })
            \`
  })],
  render: (_, {
    loaded: {
      options
    }
  }) => {
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromSessionStorage({
      ...options,
      storageKey: 'remove-theme'
    });
    await expect(stored).toBeUndefined();
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  loaders: [() => {
    setThemeToSessionStorage({
      themes: {
        default: ['text-white', 'bg-white'],
        grayscale: ['text-gray-100', 'bg-gray-100']
      },
      theme: 'default',
      storageKey: 'theme-array'
    });
    return {
      options: defineThemeStorageOptions({
        themes: {
          default: ['text-white', 'bg-white'],
          grayscale: ['text-gray-100', 'bg-gray-100']
        },
        theme: 'default',
        storageKey: 'theme-array'
      })
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>Writes the theme to sessionStorage when the theme value is an array</p>
                </>
  }), showSource({
    source: dedent\`
                setThemeToSessionStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    theme: 'default',
                    storageKey: 'theme-array',
                })
            \`
  })],
  render: (_, {
    loaded: {
      options
    }
  }) => {
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromSessionStorage({
      ...options,
      storageKey: 'theme-array'
    });
    await expect(stored?.theme).toBe('default');
    await expect(stored?.value).toEqual(['text-white', 'bg-white']);
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...m.parameters?.docs?.source}}};const O=["BasicUsage","RemoveTheme","WithThemeArray","Source"];export{s as BasicUsage,r as RemoveTheme,m as Source,a as WithThemeArray,O as __namedExportsOrder,_ as default};
