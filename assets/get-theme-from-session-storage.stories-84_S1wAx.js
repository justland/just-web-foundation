import{j as n,d as y,w as a,s}from"./iframe-DpiIn1Pa.js";import{d as r}from"./dedent-BuYMbVyj.js";import{d as i}from"./define-theme-storage-options-4rIte7rE.js";import{g as m}from"./get-theme-from-session-storage-CYcc6G3C.js";import{s as w}from"./set-theme-to-session-storage-C4yyrXX5.js";import{S as d}from"./show-theme-from-session-storage-CDHHYtyI.js";import"./preload-helper-PPVm8Dsz.js";import"./session-storage-theme-store-DVP72-Z9.js";import"./try-parse-json-BpEBnayC.js";import"./theme-result-card-BTwZPLOd.js";import"./append-id-Vsg144gU.js";const x=`import { sessionStorageThemeStore } from './session-storage-theme-store.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Gets the theme key stored in sessionStorage, validated against a themes map.
 *
 * Reads the value at the given storage key and returns it only if it is a valid theme key.
 * Returns \`theme\` when not in a browser, when the key is missing, or when the stored value is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the stored key)
 * @param options.theme - Fallback theme key when storage is unavailable or value is invalid
 * @param options.storageKey - sessionStorage key to read (defaults to \`'theme'\`)
 * @returns The stored theme key if valid, otherwise \`theme\`
 *
 * @example
 * \`\`\`ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const theme = getThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme'
 * })
 * \`\`\`
 */
export function getThemeFromSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
):
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined {
	const store = sessionStorageThemeStore<Themes>(options.storageKey)
	return store.get({
		themes: options.themes,
		theme: options.theme,
	})
}
`,{expect:o}=__STORYBOOK_MODULE_TEST__,O={title:"theme/getThemeFromSessionStorage",tags:["func","version:next"],parameters:y({description:{component:"Gets the theme key stored in sessionStorage, validated against a themes map. Returns defaultTheme when the key is missing, empty, or the stored value is not in the themes map."}}),render:()=>n.jsx(n.Fragment,{})},S={default:"text-white",grayscale:"text-gray-100"},h={tags:["use-case"],parameters:y({description:{story:"Gets theme from sessionStorage when a valid theme key is stored."}}),decorators:[a(),s({source:r`
                getThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    storageKey: 'theme',
                })
            `})],loaders:[()=>{const e=i({themes:S,theme:"default",storageKey:"theme"});return w(e),{options:e}}],render:(e,{loaded:{options:t}})=>n.jsx(d,{...t}),play:async({loaded:{options:e}})=>{const t=m(e);await o(t?.theme).toBe("default"),await o(t?.value).toBe("text-white")}},l={name:"theme: not exists",tags:["use-case","props"],loaders:[()=>{const e=i({themes:S,theme:"grayscale",storageKey:"theme-not-exists"});return w({...e,theme:null}),{options:e}}],decorators:[a({content:n.jsx(n.Fragment,{children:n.jsxs("p",{children:["Returns ",n.jsx("code",{children:"theme"})," when nothing is stored at the key"]})})}),s({source:r`
                getThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-not-exists',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(d,{...t}),play:async({loaded:{options:e}})=>{const t=m(e);await o(t?.theme).toBe("grayscale"),await o(t?.value).toBe("text-gray-100")}},c={name:"theme: invalid stored value",tags:["props","unit"],loaders:[()=>(window.sessionStorage.setItem("theme-invalid-value","invalid-theme"),{options:i({themes:S,theme:"grayscale",storageKey:"theme-invalid-value"})})],decorators:[a({content:n.jsxs("p",{children:["Returns ",n.jsx("code",{children:"theme"})," when the stored value is not a valid theme entry."]})}),s({source:r`
                getThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                    storageKey: 'theme-invalid-value',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(d,{...t}),play:async({loaded:{options:e}})=>{const t=m(e);await o(t?.theme).toBe("grayscale"),await o(t?.value).toBe("text-gray-100")}},g={name:"themes: with theme array",tags:["props","use-case"],loaders:[()=>{const e=i({themes:{default:["text-white","bg-white"],grayscale:["text-gray-100","bg-gray-100"]},storageKey:"theme-array-with-theme"});return w({...e,theme:"default"}),{options:e}}],decorators:[a({content:n.jsx(n.Fragment,{children:n.jsx("p",{children:"Gets the theme from sessionStorage when the theme value is an array"})})}),s({source:r`
                getThemeFromSessionStorage({
                    themes: {
                        default: ['text-white', 'bg-white'],
                        grayscale: ['text-gray-100', 'bg-gray-100'],
                    },
                    storageKey: 'theme-array-with-theme',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(d,{...t}),play:async({loaded:{options:e}})=>{const t=m(e);await o(t?.theme).toBe("default"),await o(t?.value).toEqual(["text-white","bg-white"])}},u={name:"Invalid stored value without theme",tags:["unit"],parameters:y({description:{story:"Returns undefined when the stored value is invalid and no defaultTheme is provided."}}),loaders:[()=>(window.sessionStorage.setItem("theme-no-default","invalid-theme"),{options:i({themes:S,storageKey:"theme-no-default"})})],decorators:[a({content:n.jsx(n.Fragment,{children:n.jsxs("p",{children:["Returns ",n.jsx("code",{children:"undefined"})," when storage is invalid and ",n.jsx("code",{children:"theme"})," is not provided"]})})}),s({source:r`
                getThemeFromSessionStorage({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    storageKey: 'theme-no-default',
                })
            `})],render:(e,{loaded:{options:t}})=>n.jsx(d,{...t}),play:async({loaded:{options:e}})=>{const t=m(e);await o(t).toBeUndefined()}},p={tags:["source"],parameters:y({source:{code:x}}),decorators:[s()]};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme from sessionStorage when a valid theme key is stored.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getThemeFromSessionStorage({
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
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'theme: not exists',
  tags: ['use-case', 'props'],
  loaders: [() => {
    const options = defineThemeStorageOptions({
      themes,
      theme: 'grayscale',
      storageKey: 'theme-not-exists'
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
    content: <>
                    <p>
                        Returns <code>theme</code> when nothing is stored at the key
                    </p>
                </>
  }), showSource({
    source: dedent\`
                getThemeFromSessionStorage({
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
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const result = getThemeFromSessionStorage(options);
    await expect(result?.theme).toBe('grayscale');
    await expect(result?.value).toBe('text-gray-100');
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'theme: invalid stored value',
  tags: ['props', 'unit'],
  loaders: [() => {
    window.sessionStorage.setItem('theme-invalid-value', 'invalid-theme');
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
                getThemeFromSessionStorage({
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
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const result = getThemeFromSessionStorage(options);
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
    setThemeToSessionStorage({
      ...options,
      theme: 'default'
    });
    return {
      options
    };
  }],
  decorators: [withStoryCard({
    content: <>
                    <p>Gets the theme from sessionStorage when the theme value is an array</p>
                </>
  }), showSource({
    source: dedent\`
                getThemeFromSessionStorage({
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
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const stored = getThemeFromSessionStorage(options);
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
    window.sessionStorage.setItem('theme-no-default', 'invalid-theme');
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
                getThemeFromSessionStorage({
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
    return <ShowThemeFromSessionStorage {...options} />;
  },
  play: async ({
    loaded: {
      options
    }
  }) => {
    const result = getThemeFromSessionStorage(options);
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
}`,...p.parameters?.docs?.source}}};const I=["BasicUsage","ThemeNotExists","InvalidStoredValue","WithThemeArray","InvalidStoredValueNoTheme","Source"];export{h as BasicUsage,c as InvalidStoredValue,u as InvalidStoredValueNoTheme,p as Source,l as ThemeNotExists,g as WithThemeArray,I as __namedExportsOrder,O as default};
