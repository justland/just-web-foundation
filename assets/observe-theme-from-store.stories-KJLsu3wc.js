import{j as o,d as v,w as g,s as b,r as S}from"./iframe-DpiIn1Pa.js";import{d as y}from"./dedent-BuYMbVyj.js";import{o as d}from"./observe-theme-from-store-BnVImBhj.js";import{s as i}from"./set-theme-to-store-BD5RwHDf.js";import{T}from"./theme-result-card-BTwZPLOd.js";import"./preload-helper-PPVm8Dsz.js";import"./get-theme-from-store-DOanYLt7.js";import"./append-id-Vsg144gU.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,R={title:"theme/observeThemeFromStore",tags:["func","version:next"],parameters:v({description:{component:"Observes theme from a generic store. Calls handler once on load and when the store notifies (if subscribe is provided)."}}),render:()=>o.jsx(o.Fragment,{})},c={default:"text-white",grayscale:"text-gray-100"};function u(t){let e=t;const s=[];return{get(){return e},set(r){e=r;for(const n of s)n()},subscribe(r){return s.push(r),()=>{const n=s.indexOf(r);n!==-1&&s.splice(n,1)}}}}function p({store:t,themes:e,theme:s}){const[r,n]=S.useState(void 0);return S.useEffect(()=>{const w=d({store:t,themes:e,theme:s??void 0,handler:n});return()=>w.disconnect()},[t,s,e]),o.jsx(T,{title:"Observed theme from store","data-testid":"observed-theme-from-store",result:r})}const h={tags:["use-case"],decorators:[g({content:o.jsxs("p",{children:["Handler is called once on start with the current theme from the store. If the store provides ",o.jsx("code",{children:"subscribe"}),", handler is called again when the store changes."]})}),b({source:y`
                const store = createInMemoryStoreWithSubscribe({ theme: 'grayscale', value: 'text-gray-100' })
                const observer = observeThemeFromStore({
                  store,
                  themes: { default: 'text-white', grayscale: 'text-gray-100' },
                  theme: 'default',
                  handler: (result) => setResult(result),
                })
                observer.disconnect()
            `})],render:()=>{const t=u({theme:"grayscale",value:"text-gray-100"});return o.jsx(p,{store:t,themes:c,theme:"default"})},play:async()=>{const t=u({theme:"grayscale",value:"text-gray-100"}),e=[],s=d({store:t,themes:c,theme:"default",handler:n=>e.push(n)});await new Promise(n=>setTimeout(n,0)),await i({store:t,themes:c,theme:"default"}),await new Promise(n=>setTimeout(n,0)),s.disconnect(),await a(e.length).toBeGreaterThanOrEqual(1),await a(e[0]?.theme).toBe("grayscale");const r=e[e.length-1];await a(r?.theme).toBe("default")}};function f(t){let e=t;return{get(){return e},set(s){e=s}}}const m={tags:["unit"],decorators:[g({content:o.jsxs("p",{children:["When the store has no ",o.jsx("code",{children:"subscribe"}),", the handler is called once with the initial theme from ",o.jsx("code",{children:"getThemeFromStore"})," and is not called again when the store changes."]})}),b({source:y`
                const store = createStoreWithoutSubscribe({ theme: 'grayscale', value: 'text-gray-100' })
                const results = []
                observeThemeFromStore({ store, themes, theme: 'default', handler: (r) => results.push(r) })
                // results.length === 1
            `})],render:()=>{const t=f({theme:"grayscale",value:"text-gray-100"});return o.jsx(p,{store:t,themes:c,theme:"default"})},play:async()=>{const t=f({theme:"grayscale",value:"text-gray-100"}),e=[],s=d({store:t,themes:c,theme:"default",handler:r=>e.push(r)});await new Promise(r=>setTimeout(r,0)),await i({store:t,themes:c,theme:"default"}),await new Promise(r=>setTimeout(r,0)),s.disconnect(),a(e.length).toBe(1),a(e[0]?.theme).toBe("grayscale"),a(e[0]?.value).toBe("text-gray-100")}},l={tags:["unit"],decorators:[g({content:o.jsxs("p",{children:["After ",o.jsx("code",{children:"disconnect()"}),", the handler is no longer called when the store updates."]})}),b({source:y`
                const observer = observeThemeFromStore({ store, themes, theme: 'default', handler })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                observer.disconnect()
                await setThemeToStore({ store, themes, theme: 'default' })
                // handler not called again
            `})],render:()=>{const t=u({theme:"grayscale",value:"text-gray-100"});return o.jsx(p,{store:t,themes:c,theme:"default"})},play:async()=>{const t=u({theme:"grayscale",value:"text-gray-100"}),e=[],s=d({store:t,themes:c,theme:"default",handler:r=>e.push(r)});await new Promise(r=>setTimeout(r,0)),a(e.length).toBe(1),a(e[0]?.theme).toBe("grayscale"),await i({store:t,themes:c,theme:"default"}),await new Promise(r=>setTimeout(r,0)),a(e.length).toBe(2),a(e[1]?.theme).toBe("default"),s.disconnect(),await i({store:t,themes:c,theme:"grayscale"}),await new Promise(r=>setTimeout(r,0)),a(e.length).toBe(2)}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Handler is called once on start with the current theme from the store. If the store
                    provides <code>subscribe</code>, handler is called again when the store changes.
                </p>
  }), showSource({
    source: dedent\`
                const store = createInMemoryStoreWithSubscribe({ theme: 'grayscale', value: 'text-gray-100' })
                const observer = observeThemeFromStore({
                  store,
                  themes: { default: 'text-white', grayscale: 'text-gray-100' },
                  theme: 'default',
                  handler: (result) => setResult(result),
                })
                observer.disconnect()
            \`
  })],
  render: () => {
    const store = createInMemoryStoreWithSubscribe({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ObserveThemeFromStoreDemo store={store} themes={themes} theme="default" />;
  },
  play: async () => {
    const store = createInMemoryStoreWithSubscribe({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    const results: ThemeResult<typeof themes>[] = [];
    const observer = observeThemeFromStore({
      store,
      themes,
      theme: 'default',
      handler: r => results.push(r)
    });
    await new Promise(r => setTimeout(r, 0));
    await setThemeToStore({
      store,
      themes,
      theme: 'default'
    });
    await new Promise(r => setTimeout(r, 0));
    observer.disconnect();
    await expect(results.length).toBeGreaterThanOrEqual(1);
    await expect(results[0]?.theme).toBe('grayscale');
    const afterSet = results[results.length - 1];
    await expect(afterSet?.theme).toBe('default');
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    When the store has no <code>subscribe</code>, the handler is called once with the initial
                    theme from <code>getThemeFromStore</code> and is not called again when the store changes.
                </p>
  }), showSource({
    source: dedent\`
                const store = createStoreWithoutSubscribe({ theme: 'grayscale', value: 'text-gray-100' })
                const results = []
                observeThemeFromStore({ store, themes, theme: 'default', handler: (r) => results.push(r) })
                // results.length === 1
            \`
  })],
  render: () => {
    const store = createStoreWithoutSubscribe({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ObserveThemeFromStoreDemo store={store} themes={themes} theme="default" />;
  },
  play: async () => {
    const store = createStoreWithoutSubscribe({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    const results: ThemeResult<typeof themes>[] = [];
    const observer = observeThemeFromStore({
      store,
      themes,
      theme: 'default',
      handler: r => results.push(r)
    });
    await new Promise(r => setTimeout(r, 0));
    await setThemeToStore({
      store,
      themes,
      theme: 'default'
    });
    await new Promise(r => setTimeout(r, 0));
    observer.disconnect();
    expect(results.length).toBe(1);
    expect(results[0]?.theme).toBe('grayscale');
    expect(results[0]?.value).toBe('text-gray-100');
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    After <code>disconnect()</code>, the handler is no longer called when the store updates.
                </p>
  }), showSource({
    source: dedent\`
                const observer = observeThemeFromStore({ store, themes, theme: 'default', handler })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                observer.disconnect()
                await setThemeToStore({ store, themes, theme: 'default' })
                // handler not called again
            \`
  })],
  render: () => {
    const store = createInMemoryStoreWithSubscribe({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ObserveThemeFromStoreDemo store={store} themes={themes} theme="default" />;
  },
  play: async () => {
    const store = createInMemoryStoreWithSubscribe({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    const results: ThemeResult<typeof themes>[] = [];
    const observer = observeThemeFromStore({
      store,
      themes,
      theme: 'default',
      handler: r => results.push(r)
    });
    await new Promise(r => setTimeout(r, 0));
    expect(results.length).toBe(1);
    expect(results[0]?.theme).toBe('grayscale');
    await setThemeToStore({
      store,
      themes,
      theme: 'default'
    });
    await new Promise(r => setTimeout(r, 0));
    expect(results.length).toBe(2);
    expect(results[1]?.theme).toBe('default');
    observer.disconnect();
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    await new Promise(r => setTimeout(r, 0));
    expect(results.length).toBe(2);
  }
}`,...l.parameters?.docs?.source}}};const D=["BasicUsage","StoreWithoutSubscribe","DisconnectStopsUpdates"];export{h as BasicUsage,l as DisconnectStopsUpdates,m as StoreWithoutSubscribe,D as __namedExportsOrder,R as default};
