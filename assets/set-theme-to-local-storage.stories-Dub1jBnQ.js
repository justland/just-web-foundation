import{j as o,d as l,w as i,s as c}from"./iframe-DpiIn1Pa.js";import{d}from"./dedent-BuYMbVyj.js";import{d as g}from"./define-theme-storage-options-4rIte7rE.js";import{g as p}from"./get-theme-from-local-storage-FaVte12M.js";import{s as h}from"./set-theme-to-local-storage-CW21Lus8.js";import{S as y}from"./show-theme-from-local-storage-B-nMWepC.js";import"./preload-helper-PPVm8Dsz.js";import"./local-storage-theme-store-CwG1v2Dm.js";import"./try-parse-json-BpEBnayC.js";import"./theme-result-card-BTwZPLOd.js";import"./append-id-Vsg144gU.js";const u=`import { localStorageThemeStore } from './local-storage-theme-store.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Sets the theme key in localStorage.
 *
 * Writes the theme key at the given storage key only when in a browser and when the theme is in the themes map.
 * Removes the storage item when the theme is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the theme key)
 * @param options.theme - Theme key to store
 * @param options.storageKey - localStorage key to write (defaults to \`'theme'\`)
 *
 * @example
 * \`\`\`ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 *
 * setThemeToLocalStorage({
 *   themes,
 *   theme: 'dark',
 *   storageKey: 'app-theme'
 * })
 * \`\`\`
 */
export function setThemeToLocalStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
): void {
	const store = localStorageThemeStore<Themes>(options.storageKey)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
`,{expect:a}=__STORYBOOK_MODULE_TEST__,k={title:"theme/setThemeToLocalStorage",tags:["func","version:next"],parameters:l({description:{component:"Sets the theme key in localStorage. Writes only when the theme is in the themes map; removes the storage item by passing null or undefined to the theme option."}}),render:()=>o.jsx(o.Fragment,{})},r={tags:["use-case"],parameters:l({description:{story:"Writes the theme to localStorage"}}),decorators:[i(),c({source:d`
                setThemeToLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100', },
                    theme: 'default',
                    storageKey: 'theme'
                })
            `})],loaders:[()=>{const e=g({themes:{default:"text-white",grayscale:"text-gray-100"},theme:"default",storageKey:"theme"});return h(e),{options:e}}],render:(e,{loaded:{options:t}})=>o.jsx(y,{...t}),play:async({loaded:{options:e}})=>{const t=p(e);await a(t?.theme).toBe("default"),await a(t?.value).toBe("text-white")}},n={tags:["use-case"],loaders:[()=>{h({themes:{default:"default",grayscale:"grayscale"},theme:"grayscale",storageKey:"remove-theme"});const e=g({themes:{default:"default",grayscale:"grayscale"},theme:null,storageKey:"remove-theme"});return h(e),{options:e}}],decorators:[i({content:o.jsx(o.Fragment,{children:o.jsxs("p",{children:["Removes the theme from localStorage by passing ",o.jsx("code",{children:"null"})," to the theme option"]})})}),c({source:d`
                setThemeToLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: null,
                    storageKey: 'remove-theme',
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(y,{...t}),play:async({loaded:{options:e}})=>{const t=p({...e,storageKey:"remove-theme"});await a(t).toBeUndefined()}},s={tags:["use-case"],loaders:[()=>(h({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},theme:"default",storageKey:"theme-array"}),{options:g({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},theme:"default",storageKey:"theme-array"})})],decorators:[i({content:o.jsx(o.Fragment,{children:o.jsx("p",{children:"Writes the theme to localStorage when the theme value is an array"})})}),c({source:d`
                setThemeToLocalStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    theme: 'default',
                    storageKey: 'theme-array',
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(y,{...t}),play:async({loaded:{options:e}})=>{const t=p({...e,storageKey:"theme-array"});await a(t?.theme).toBe("default"),await a(t?.value).toEqual(["text-white","bg-white"])}},m={tags:["source"],parameters:l({source:{code:u}}),decorators:[c()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Writes the theme to localStorage'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                setThemeToLocalStorage({
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
    return <ShowThemeFromLocalStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromLocalStorage(options);
    await expect(stored?.theme).toBe('default');
    await expect(stored?.value).toBe('text-white');
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  loaders: [() => {
    setThemeToLocalStorage({
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
    setThemeToLocalStorage(options);
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Removes the theme from localStorage by passing <code>null</code> to the theme option
                    </p>
                </>
  }), showSource({
    source: dedent\`
                setThemeToLocalStorage({
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
    return <ShowThemeFromLocalStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromLocalStorage({
      ...options,
      storageKey: 'remove-theme'
    });
    await expect(stored).toBeUndefined();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  loaders: [() => {
    setThemeToLocalStorage({
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
                    <p>Writes the theme to localStorage when the theme value is an array</p>
                </>
  }), showSource({
    source: dedent\`
                setThemeToLocalStorage({
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
    return <ShowThemeFromLocalStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromLocalStorage({
      ...options,
      storageKey: 'theme-array'
    });
    await expect(stored?.theme).toBe('default');
    await expect(stored?.value).toEqual(['text-white', 'bg-white']);
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...m.parameters?.docs?.source}}};const B=["BasicUsage","RemoveTheme","WithThemeArray","Source"];export{r as BasicUsage,n as RemoveTheme,m as Source,s as WithThemeArray,B as __namedExportsOrder,k as default};
