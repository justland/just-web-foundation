import{j as r,d as g,w as i,s as l}from"./iframe-Pea2t46H.js";import{d as u}from"./dedent-BuYMbVyj.js";import{g as S}from"./get-theme-from-store-DOanYLt7.js";import{s as o}from"./set-theme-to-store-BD5RwHDf.js";import{S as y}from"./show-theme-from-store-BgyaEKZV.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-result-card-D84vDB1y.js";import"./append-id-Vsg144gU.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,B={title:"theme/setThemeToStore",tags:["func","version:next"],parameters:g({description:{component:"Sets the theme in a generic store (sync or async). Clears when theme is null or undefined."}}),render:()=>r.jsx(r.Fragment,{})},s={default:"text-white",grayscale:"text-gray-100"};function d(e){let t=e;return{get(){return t},set(h){t=h}}}const a={tags:["use-case"],parameters:g({description:{story:"Sets theme in an in-memory store then reads it back."}}),decorators:[i(),l({source:u`
                const store = createInMemoryStore(undefined)
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
            `})],loaders:[async()=>{const e=d(void 0);return await o({store:e,themes:s,theme:"grayscale"}),{store:e}}],render:(e,{loaded:{store:t}})=>r.jsx(y,{store:t,themes:s,theme:"default"}),play:async()=>{const e=d(void 0);await o({store:e,themes:s,theme:"grayscale"});const t=await S({store:e,themes:s,theme:"default"});await n(t?.theme).toBe("grayscale"),await n(t?.value).toBe("text-gray-100")}},c={tags:["use-case"],decorators:[i({content:r.jsxs("p",{children:["When ",r.jsx("code",{children:"theme"})," is ",r.jsx("code",{children:"null"})," or ",r.jsx("code",{children:"undefined"}),", the store is cleared (writes ",r.jsx("code",{children:"undefined"}),"). A subsequent get with no default theme returns"," ",r.jsx("code",{children:"undefined"}),"."]})}),l({source:u`
                const store = createInMemoryStore(undefined)
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                await setThemeToStore({ store, themes, theme: null })
                const result = await getThemeFromStore({ store, themes })
            `})],loaders:[async()=>{const e=d(void 0);return await o({store:e,themes:s,theme:"grayscale"}),await o({store:e,themes:s,theme:null}),{store:e}}],render:(e,{loaded:{store:t}})=>r.jsx(y,{store:t,themes:s,"data-testid":"result"}),play:async()=>{const e=d(void 0);await o({store:e,themes:s,theme:"grayscale"}),await o({store:e,themes:s,theme:null});const t=await S({store:e,themes:s});n(t).toBeUndefined()}};function w(e){let t=e;return{get(){return t},set(h){return t=h,Promise.resolve()}}}const m={tags:["use-case"],decorators:[i({content:r.jsxs("p",{children:["When ",r.jsx("code",{children:"store.set"})," returns a Promise, ",r.jsx("code",{children:"setThemeToStore"})," awaits it before resolving."]})}),l({source:u`
                const store = createAsyncSetStore(undefined)
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
            `})],loaders:[async()=>{const e=w(void 0);return await o({store:e,themes:s,theme:"grayscale"}),{store:e}}],render:(e,{loaded:{store:t}})=>r.jsx(y,{store:t,themes:s,theme:"default","data-testid":"result"}),play:async()=>{const e=w(void 0);await o({store:e,themes:s,theme:"grayscale"});const t=await S({store:e,themes:s,theme:"default"});n(t?.theme).toBe("grayscale"),n(t?.value).toBe("text-gray-100")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Sets theme in an in-memory store then reads it back.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = createInMemoryStore(undefined)
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
            \`
  })],
  loaders: [async () => {
    const store = createInMemoryStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    return {
      store
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    return <ShowThemeFromStore store={store} themes={themes} theme="default" />;
  },
  play: async () => {
    const store = createInMemoryStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    const result = await getThemeFromStore({
      store,
      themes,
      theme: 'default'
    });
    await expect(result?.theme).toBe('grayscale');
    await expect(result?.value).toBe('text-gray-100');
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>theme</code> is <code>null</code> or <code>undefined</code>, the store is
                    cleared (writes <code>undefined</code>). A subsequent get with no default theme returns{' '}
                    <code>undefined</code>.
                </p>
  }), showSource({
    source: dedent\`
                const store = createInMemoryStore(undefined)
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                await setThemeToStore({ store, themes, theme: null })
                const result = await getThemeFromStore({ store, themes })
            \`
  })],
  loaders: [async () => {
    const store = createInMemoryStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    await setThemeToStore({
      store,
      themes,
      theme: null
    });
    return {
      store
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => <ShowThemeFromStore store={store} themes={themes} data-testid="result" />,
  play: async () => {
    const store = createInMemoryStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    await setThemeToStore({
      store,
      themes,
      theme: null
    });
    const result = await getThemeFromStore({
      store,
      themes
    });
    expect(result).toBeUndefined();
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>store.set</code> returns a Promise, <code>setThemeToStore</code> awaits it
                    before resolving.
                </p>
  }), showSource({
    source: dedent\`
                const store = createAsyncSetStore(undefined)
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
            \`
  })],
  loaders: [async () => {
    const store = createAsyncSetStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    return {
      store
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => <ShowThemeFromStore store={store} themes={themes} theme="default" data-testid="result" />,
  play: async () => {
    const store = createAsyncSetStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    const result = await getThemeFromStore({
      store,
      themes,
      theme: 'default'
    });
    expect(result?.theme).toBe('grayscale');
    expect(result?.value).toBe('text-gray-100');
  }
}`,...m.parameters?.docs?.source}}};const M=["BasicUsage","ClearStore","AsyncSet"];export{m as AsyncSet,a as BasicUsage,c as ClearStore,M as __namedExportsOrder,B as default};
