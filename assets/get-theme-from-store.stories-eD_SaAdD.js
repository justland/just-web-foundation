import{j as t,d as f,w as o,s as c}from"./iframe-DpiIn1Pa.js";import{d as l}from"./dedent-BuYMbVyj.js";import{g as C}from"./get-theme-from-store-DOanYLt7.js";import{S as u}from"./show-theme-from-store-BqWy-KAH.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-result-card-BTwZPLOd.js";import"./append-id-Vsg144gU.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,D={title:"theme/getThemeFromStore",tags:["func","version:next"],parameters:f({description:{component:"Gets the theme from a generic store (sync or async). Validates against the themes map and uses the default theme when missing or invalid."}}),render:()=>t.jsx(t.Fragment,{})},n={default:"text-white",grayscale:"text-gray-100"};function d(e){let s=e;return{get(){return s},set(a){s=a}}}function F(e){let s=e;return{get(){return Promise.resolve(s)},set(a){s=a}}}const i={tags:["use-case"],decorators:[o({content:t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:[t.jsx("code",{children:"getThemeFromStore"})," gets the theme from a generic store."]}),t.jsx("p",{children:"Validates against the themes map and uses the default theme when missing or invalid."})]})}),c({source:l`
                const store = { theme: 'grayscale', value: 'text-gray-100' }
                const result = await getThemeFromStore({
                    store: { get: () => store },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            `})],render:()=>{const e=d({theme:"grayscale",value:"text-gray-100"});return t.jsx(u,{store:e,themes:n,"data-testid":"result"})},play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("grayscale");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("text-gray-100")}},h={tags:["use-case"],decorators:[o({content:t.jsxs("p",{children:["When ",t.jsx("code",{children:"store.get()"})," returns a Promise, ",t.jsx("code",{children:"getThemeFromStore"})," awaits it and returns the resolved theme."]})}),c({source:l`
                const store = {}
                const result = await getThemeFromStore({
                    store: { get: () => Promise.resolve(store) },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            `})],render:()=>{const e=F({theme:"grayscale",value:"text-gray-100"});return t.jsx(u,{store:e,themes:n,"data-testid":"result"})},play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("grayscale");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("text-gray-100")}},m={decorators:[o({content:t.jsx("p",{children:"Uses the default theme when the stored value is missing or invalid."})}),c({source:l`
                const result = await getThemeFromStore({
                    store: { get: () => undefined },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                })
            `})],render:()=>{const e=d(void 0);return t.jsx(u,{store:e,themes:n,theme:"grayscale","data-testid":"result"})},play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("grayscale");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("text-gray-100")}},g={decorators:[o({content:t.jsxs("p",{children:["Returns ",t.jsx("code",{children:"undefined"})," when the stored value is missing and no default theme is provided."]})}),c({source:l`
                const result = await getThemeFromStore({
                    store: { get: () => undefined },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            `})],render:()=>{const e=d();return t.jsx(u,{store:e,themes:n,"data-testid":"result"})},play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("undefined");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("undefined")}},y={decorators:[o({content:t.jsxs("p",{children:["When ",t.jsx("code",{children:"theme"})," is explicitly ",t.jsx("code",{children:"null"})," and the store is empty or invalid, result is ",t.jsx("code",{children:"undefined"})," (same as no default theme)."]})}),c({source:l`
                const result = await getThemeFromStore({
                    store: { get: () => undefined },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: null,
                })
            `})],render:()=>{const e=d(void 0);return t.jsx(u,{store:e,themes:n,theme:null,"data-testid":"result"})},play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("undefined");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("undefined")}},v={default:"a",other:["b","c"]},w={tags:["unit"],decorators:[o({content:t.jsxs("p",{children:["When the themes map has array values (",t.jsx("code",{children:"readonly string[]"}),"), a valid stored result with that value is returned as-is."]})}),c({source:l`
                const themes = { default: 'a', other: ['b', 'c'] }
                const result = await getThemeFromStore({
                    store: { get: () => ({ theme: 'other', value: ['b', 'c'] }) },
                    themes,
                })
            `})],render:()=>{const e=d({theme:"other",value:v.other});return t.jsx(u,{store:e,themes:v,"data-testid":"result"})},play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("other");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("[b, c]")}},x={tags:["unit"],decorators:[o({content:t.jsxs("p",{children:["Returns ",t.jsx("code",{children:"theme"})," (if provided) or ",t.jsx("code",{children:"undefined"})," when the stored value is invalid."]})}),c({source:l`
                const result = await getThemeFromStore({
                    store: { get: () => 'something else' as any },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            `})],render:()=>t.jsx(u,{store:{get:()=>"something else"},themes:n,theme:"grayscale","data-testid":"result"}),play:async({canvas:e})=>{const s=await e.getByTestId("result-theme");await r(s).toHaveTextContent("grayscale");const a=await e.getByTestId("result-value");await r(a).toHaveTextContent("text-gray-100");const p=[],T=console.warn;console.warn=(...S)=>{p.push(String(S[0]))},await C({store:{get:()=>"something else"},themes:n,theme:"grayscale"}),console.warn=T,r(p).toContain("The stored theme value is invalid")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>getThemeFromStore</code> gets the theme from a generic store.
                    </p>
                    <p>
                        Validates against the themes map and uses the default theme when missing or invalid.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                const store = { theme: 'grayscale', value: 'text-gray-100' }
                const result = await getThemeFromStore({
                    store: { get: () => store },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            \`
  })],
  render: () => {
    const store = createSyncStore({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ShowThemeFromStore store={store} themes={themes} data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const resultTheme = await canvas.getByTestId('result-theme');
    await expect(resultTheme).toHaveTextContent('grayscale');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('text-gray-100');
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>store.get()</code> returns a Promise, <code>getThemeFromStore</code> awaits it
                    and returns the resolved theme.
                </p>
  }), showSource({
    source: dedent\`
                const store = {}
                const result = await getThemeFromStore({
                    store: { get: () => Promise.resolve(store) },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            \`
  })],
  render: () => {
    const store = createAsyncStore({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ShowThemeFromStore store={store} themes={themes} data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const resultTheme = await canvas.getByTestId('result-theme');
    await expect(resultTheme).toHaveTextContent('grayscale');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('text-gray-100');
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>Uses the default theme when the stored value is missing or invalid.</p>
  }), showSource({
    source: dedent\`
                const result = await getThemeFromStore({
                    store: { get: () => undefined },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                })
            \`
  })],
  render: () => {
    const store = createSyncStore(undefined);
    return <ShowThemeFromStore store={store} themes={themes} theme="grayscale" data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const result = await canvas.getByTestId('result-theme');
    await expect(result).toHaveTextContent('grayscale');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('text-gray-100');
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>
                    Returns <code>undefined</code> when the stored value is missing and no default theme is
                    provided.
                </p>
  }), showSource({
    source: dedent\`
                const result = await getThemeFromStore({
                    store: { get: () => undefined },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            \`
  })],
  render: () => {
    const store = createSyncStore();
    return <ShowThemeFromStore store={store} themes={themes} data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const result = await canvas.getByTestId('result-theme');
    await expect(result).toHaveTextContent('undefined');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('undefined');
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <p>
                    When <code>theme</code> is explicitly <code>null</code> and the store is empty or invalid,
                    result is <code>undefined</code> (same as no default theme).
                </p>
  }), showSource({
    source: dedent\`
                const result = await getThemeFromStore({
                    store: { get: () => undefined },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: null,
                })
            \`
  })],
  render: () => {
    const store = createSyncStore(undefined);
    return <ShowThemeFromStore store={store} themes={themes} theme={null} data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const result = await canvas.getByTestId('result-theme');
    await expect(result).toHaveTextContent('undefined');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('undefined');
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    When the themes map has array values (<code>readonly string[]</code>), a valid stored
                    result with that value is returned as-is.
                </p>
  }), showSource({
    source: dedent\`
                const themes = { default: 'a', other: ['b', 'c'] }
                const result = await getThemeFromStore({
                    store: { get: () => ({ theme: 'other', value: ['b', 'c'] }) },
                    themes,
                })
            \`
  })],
  render: () => {
    const store = createSyncStore({
      theme: 'other',
      value: themesWithArray.other
    });
    return <ShowThemeFromStore store={store} themes={themesWithArray} data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const resultTheme = await canvas.getByTestId('result-theme');
    await expect(resultTheme).toHaveTextContent('other');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('[b, c]');
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    Returns <code>theme</code> (if provided) or <code>undefined</code> when the stored value
                    is invalid.
                </p>
  }), showSource({
    source: dedent\`
                const result = await getThemeFromStore({
                    store: { get: () => 'something else' as any },
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                })
            \`
  })],
  render: () => {
    return <ShowThemeFromStore store={{
      get: () => 'something else' as any
    }} themes={themes} theme="grayscale" data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const result = await canvas.getByTestId('result-theme');
    await expect(result).toHaveTextContent('grayscale');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('text-gray-100');
    const warnings: string[] = [];
    const originalWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      warnings.push(String(args[0]));
    };
    await getThemeFromStore({
      store: {
        get: () => 'something else' as any
      },
      themes,
      theme: 'grayscale'
    });
    console.warn = originalWarn;
    expect(warnings).toContain('The stored theme value is invalid');
  }
}`,...x.parameters?.docs?.source}}};const _=["SyncStore","AsyncStore","DefaultTheme","NoDefaultTheme","DefaultThemeNull","ThemeMapArrayValue","InvalidStoredValue"];export{h as AsyncStore,m as DefaultTheme,y as DefaultThemeNull,x as InvalidStoredValue,g as NoDefaultTheme,i as SyncStore,w as ThemeMapArrayValue,_ as __namedExportsOrder,D as default};
