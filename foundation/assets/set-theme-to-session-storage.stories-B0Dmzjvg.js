import{j as o,d,w as g,s as i}from"./iframe-Pea2t46H.js";import{d as c}from"./dedent-BuYMbVyj.js";import{d as l}from"./define-theme-storage-options-4rIte7rE.js";import{g as p}from"./get-theme-from-session-storage-CYcc6G3C.js";import{s as h}from"./set-theme-to-session-storage-C4yyrXX5.js";import{S as y}from"./show-theme-from-session-storage-B_PSoQTG.js";import"./preload-helper-PPVm8Dsz.js";import"./session-storage-theme-store-DVP72-Z9.js";import"./try-parse-json-BpEBnayC.js";import"./theme-result-card-D84vDB1y.js";import"./append-id-Vsg144gU.js";const u=`import { sessionStorageThemeStore } from './session-storage-theme-store.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

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
	const store = sessionStorageThemeStore<Themes>(options.storageKey)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
`,{expect:s}=__STORYBOOK_MODULE_TEST__,B={title:"theme/setThemeToSessionStorage",tags:["func","version:next"],parameters:d({description:{component:"Sets the theme key in sessionStorage. Writes only when the theme is in the themes map; removes the storage item by passing null or undefined to the theme option."}}),render:()=>o.jsx(o.Fragment,{})},n={tags:["use-case"],parameters:d({description:{story:"Writes the theme to sessionStorage"}}),decorators:[g(),i({source:c`
                setThemeToSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100', },
                    theme: 'default',
                    storageKey: 'theme'
                })
            `})],loaders:[()=>{const e=l({themes:{default:"text-white",grayscale:"text-gray-100"},theme:"default",storageKey:"theme"});return h(e),{options:e}}],render:(e,{loaded:{options:t}})=>o.jsx(y,{...t}),play:async({loaded:{options:e}})=>{const t=p(e);await s(t?.theme).toBe("default"),await s(t?.value).toBe("text-white")}},r={tags:["use-case"],loaders:[()=>{h({themes:{default:"default",grayscale:"grayscale"},theme:"grayscale",storageKey:"remove-theme"});const e=l({themes:{default:"default",grayscale:"grayscale"},theme:null,storageKey:"remove-theme"});return h(e),{options:e}}],decorators:[g({content:o.jsx(o.Fragment,{children:o.jsxs("p",{children:["Removes the theme from sessionStorage by passing ",o.jsx("code",{children:"null"})," to the theme option"]})})}),i({source:c`
                setThemeToSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: null,
                    storageKey: 'remove-theme',
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(y,{...t}),play:async({loaded:{options:e}})=>{const t=p({...e,storageKey:"remove-theme"});await s(t).toBeUndefined()}},a={tags:["use-case"],loaders:[()=>(h({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},theme:"default",storageKey:"theme-array"}),{options:l({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},theme:"default",storageKey:"theme-array"})})],decorators:[g({content:o.jsx(o.Fragment,{children:o.jsx("p",{children:"Writes the theme to sessionStorage when the theme value is an array"})})}),i({source:c`
                setThemeToSessionStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    theme: 'default',
                    storageKey: 'theme-array',
                })
            `})],render:(e,{loaded:{options:t}})=>o.jsx(y,{...t}),play:async({loaded:{options:e}})=>{const t=p({...e,storageKey:"theme-array"});await s(t?.theme).toBe("default"),await s(t?.value).toEqual(["text-white","bg-white"])}},m={tags:["source"],parameters:d({source:{code:u}}),decorators:[i()]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const F=["BasicUsage","RemoveTheme","WithThemeArray","Source"];export{n as BasicUsage,r as RemoveTheme,m as Source,a as WithThemeArray,F as __namedExportsOrder,B as default};
