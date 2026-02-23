import{j as n,d as y,w as r,s as a}from"./iframe-Pea2t46H.js";import{d as s}from"./dedent-BuYMbVyj.js";import{d as m}from"./define-theme-storage-options-4rIte7rE.js";import{g as i}from"./get-theme-from-local-storage-FaVte12M.js";import{s as S}from"./set-theme-to-local-storage-CW21Lus8.js";import{S as h}from"./show-theme-from-local-storage-CHMMjpEx.js";import"./preload-helper-PPVm8Dsz.js";import"./local-storage-theme-store-CwG1v2Dm.js";import"./try-parse-json-BpEBnayC.js";import"./theme-result-card-D84vDB1y.js";import"./append-id-Vsg144gU.js";const x=`import { localStorageThemeStore } from './local-storage-theme-store.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Gets the theme key stored in localStorage, validated against a themes map.
 *
 * Reads the value at the given storage key and returns it only if it is a valid theme key.
 * Returns \`theme\` when not in a browser, when the key is missing, or when the stored value is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the stored key)
 * @param options.theme - Fallback theme key when storage is unavailable or value is invalid
 * @param options.storageKey - localStorage key to read (defaults to \`'theme'\`)
 * @returns The stored theme key if valid, otherwise \`theme\`
 *
 * @example
 * \`\`\`ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const theme = getThemeFromLocalStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme'
 * })
 * \`\`\`
 */
export function getThemeFromLocalStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
):
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined {
	const store = localStorageThemeStore<Themes>(options.storageKey)
	return store.get({
		themes: options.themes,
		theme: options.theme,
	})
}
`,{expect:o}=__STORYBOOK_MODULE_TEST__,b={title:"theme/getThemeFromLocalStorage",tags:["func","version:next"],parameters:y({description:{component:"Gets the theme key stored in localStorage, validated against a themes map. Returns defaultTheme when the key is missing, empty, or the stored value is not in the themes map."}}),render:()=>n.jsx(n.Fragment,{})},w={default:"text-white",grayscale:"text-gray-100"},d={tags:["use-case"],parameters:y({description:{story:"Gets theme from localStorage when a valid theme key is stored."}}),decorators:[r(),a({source:s`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    storageKey: 'theme',
                })
            `})],loaders:[()=>{const e=m({themes:w,theme:"default",storageKey:"theme"});return S(e),{options:e}}],render:(e,{loaded:{options:t}})=>n.jsx(h,{...t}),play:async({loaded:{options:e}})=>{const t=i(e);await o(t?.theme).toBe("default"),await o(t?.value).toBe("text-white")}},l={name:"theme: not exists",tags:["use-case","props"],loaders:[()=>{const e=m({themes:w,theme:"grayscale",storageKey:"theme-not-exists"});return S({...e,theme:null}),{options:e}}],decorators:[r({content:n.jsx(n.Fragment,{children:n.jsxs("p",{children:["Returns ",n.jsx("code",{children:"theme"})," when nothing is stored at the key"]})})}),a({source:s`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(h,{...t}),play:async({loaded:{options:e}})=>{const t=i(e);await o(t?.theme).toBe("grayscale"),await o(t?.value).toBe("text-gray-100")}},c={name:"theme: invalid stored value",tags:["props","unit"],loaders:[()=>(window.localStorage.setItem("theme-invalid-value","invalid-theme"),{options:m({themes:w,theme:"grayscale",storageKey:"theme-invalid-value"})})],decorators:[r({content:n.jsxs("p",{children:["Returns ",n.jsx("code",{children:"theme"})," when the stored value is not a valid theme entry."]})}),a({source:s`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-invalid-value',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(h,{...t}),play:async({loaded:{options:e}})=>{const t=i(e);await o(t?.theme).toBe("grayscale"),await o(t?.value).toBe("text-gray-100")}},g={name:"themes: with theme array",tags:["props","use-case"],loaders:[()=>{const e=m({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},storageKey:"theme-array-with-theme"});return S({...e,theme:"default"}),{options:e}}],decorators:[r({content:n.jsx(n.Fragment,{children:n.jsx("p",{children:"Gets the theme from localStorage when the theme value is an array"})})}),a({source:s`
                getThemeFromLocalStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    storageKey: 'theme-array-with-theme',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(h,{...t}),play:async({loaded:{options:e}})=>{const t=i(e);await o(t?.theme).toBe("default"),await o(t?.value).toEqual(["text-white","bg-white"])}},u={name:"Invalid stored value without theme",tags:["unit"],parameters:y({description:{story:"Returns undefined when the stored value is invalid and no defaultTheme is provided."}}),loaders:[()=>(window.localStorage.setItem("theme-no-default","invalid-theme"),{options:m({themes:w,storageKey:"theme-no-default"})})],decorators:[r({content:n.jsx(n.Fragment,{children:n.jsxs("p",{children:["Returns ",n.jsx("code",{children:"undefined"})," when storage is invalid and ",n.jsx("code",{children:"theme"})," is not provided"]})})}),a({source:s`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    storageKey: 'theme-no-default',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(h,{...t}),play:async({loaded:{options:e}})=>{const t=i(e);await o(t).toBeUndefined()}},p={tags:["source"],parameters:y({source:{code:x}}),decorators:[a()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme from localStorage when a valid theme key is stored.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    storageKey: 'theme',
                })
            \`
  })],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'theme: not exists',
  tags: ['use-case', 'props'],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: 'theme-not-exists'
    });
    // Remove the theme from localStorage
    setThemeToLocalStorage({
      ...options,
      theme: null
    });
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Returns <code>theme</code> when nothing is stored at the key
                    </p>
                </>
  }), showSource({
    source: dedent\`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists',
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
    const result = getThemeFromLocalStorage(options);
    await expect(result?.theme).toBe('grayscale');
    await expect(result?.value).toBe('text-gray-100');
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'theme: invalid stored value',
  tags: ['props', 'unit'],
  loaders: [() => {
    window.localStorage.setItem('theme-invalid-value', 'invalid-theme');
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: 'theme-invalid-value'
    });
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    Returns <code>theme</code> when the stored value is not a valid theme entry.
                </p>
  }), showSource({
    source: dedent\`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-invalid-value',
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
    const result = getThemeFromLocalStorage(options);
    await expect(result?.theme).toBe('grayscale');
    await expect(result?.value).toBe('text-gray-100');
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'themes: with theme array',
  tags: ['props', 'use-case'],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes: {
        default: ['text-white', 'bg-white'],
        grayscale: ['text-gray-100', 'bg-gray-100']
      },
      storageKey: 'theme-array-with-theme'
    });
    setThemeToLocalStorage({
      ...options,
      theme: 'default'
    });
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>Gets the theme from localStorage when the theme value is an array</p>
                </>
  }), showSource({
    source: dedent\`
                getThemeFromLocalStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    storageKey: 'theme-array-with-theme',
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
    const stored = getThemeFromLocalStorage(options);
    await expect(stored?.theme).toBe('default');
    await expect(stored?.value).toEqual(['text-white', 'bg-white']);
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Invalid stored value without theme',
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns undefined when the stored value is invalid and no defaultTheme is provided.'
    }
  }),
  loaders: [() => {
    window.localStorage.setItem('theme-no-default', 'invalid-theme');
    return {
      options: defineThemeStorageOptions({
        themes,
        storageKey: 'theme-no-default'
      })
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Returns <code>undefined</code> when storage is invalid and <code>theme</code> is not
                        provided
                    </p>
                </>
  }), showSource({
    source: dedent\`
                getThemeFromLocalStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    storageKey: 'theme-no-default',
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
    const result = getThemeFromLocalStorage(options);
    await expect(result).toBeUndefined();
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const O=["BasicUsage","ThemeNotExists","InvalidStoredValue","WithThemeArray","InvalidStoredValueNoTheme","Source"];export{d as BasicUsage,c as InvalidStoredValue,u as InvalidStoredValueNoTheme,p as Source,l as ThemeNotExists,g as WithThemeArray,O as __namedExportsOrder,b as default};
