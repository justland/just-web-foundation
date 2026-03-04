import{j as e,w as m,s as r,d as f,r as d}from"./iframe-BfstSRl9.js";import{d as u}from"./dedent-BuYMbVyj.js";import{t as l}from"./theme-entry-D4S_RAMB.js";import{T as y}from"./theme-result-card-ZBE0ua8g.js";import"./preload-helper-PPVm8Dsz.js";import"./append-id-Vsg144gU.js";const b=`import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Interface for theme stores with optional read, write, and subscribe methods.
 * Data flow participation is inferred from which methods exist:
 *
 * - **read** – Participates in waterfall read for \`getThemeFromStores\`
 * - **write** – Receives writes from \`setThemeToStores\`
 * - **subscribe** – GObserved for external changes via \`observeThemeFromStores\`
 *
 * All methods are optional.
 * Built-in implementations:
 * - \`classNameThemeStore\`
 * - \`cookieThemeStore\`
 * - \`dataAttributeThemeStore\`
 * - \`inMemoryThemeStore\`
 * - \`localStorageThemeStore\`
 * - \`prefersColorSchemeThemeStore\`
 * - \`sessionStorageThemeStore\`
 *
 * @typeParam Themes - Map of theme keys to their value types (string or readonly string[])
 */
export interface ThemeStore<Themes extends ThemeMap = ThemeMap> {
	read?: (() => ThemeEntry<Themes> | undefined) | undefined
	write?: ((entry: ThemeEntry<Themes> | undefined) => void) | undefined
	subscribe?: ((handler: (theme: ThemeEntry<Themes> | undefined) => void) => () => void) | undefined
}
`,v={title:"theme/theme-store/ThemeStore",tags:["type","version:1.0"],render:()=>e.jsx(e.Fragment,{})},p={current:"theme-current",grayscale:"theme-grayscale"},s={tags:["props"],decorators:[m({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When you specify only the ",e.jsx("code",{children:"read"})," method, the store is read-only."]}),e.jsxs("p",{children:["When multiple stores have ",e.jsx("code",{children:"read"}),", the first non-empty result is returned."]})]})}),r({source:"read?: () => ThemeEntry | undefined"}),r({source:u`
                const store: ThemeStore = {
                    read: () => themeEntry(themes, 'current')
                }
                store.read()
            `})],render:()=>{const t={read:()=>l(p,"grayscale")};return e.jsx(y,{title:"store.read()","data-testid":"read-only-result",result:t.read()})}},o={tags:["props"],decorators:[m({content:e.jsxs("p",{children:["When you specify only the ",e.jsx("code",{children:"write"})," method, the store is write-only."]})}),r({source:"write?: (entry: ThemeEntry | undefined) => void"}),r({source:u`
                const store: ThemeStore = {
                    write: (entry) => { /* persist */ }
                }
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const[t,c]=d.useState(void 0),i={write:h=>{c(h)}};return d.useEffect(()=>{i.write(l(p,"grayscale"))},[]),e.jsx(y,{title:"store.write() receives","data-testid":"write-only-result",result:t})}},n={tags:["props"],decorators:[m({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When you specify only the ",e.jsx("code",{children:"subscribe"})," method, the store is subscribe-only.",e.jsx("code",{children:"subscribe"})," is used to observe external changes (e.g. system preference, remote sync)."]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"handler"})," is called only when the theme changes."]})]})}),r({source:"subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined) => void) => () => void"}),r({source:u`
                const store: ThemeStore = {
                    subscribe: (handler) => {
                      handlers.push(handler)

                        return () => { handlers = handlers.filter((h) => h !== handler) }
                    }
                }
                store.subscribe((entry) => console.log(entry))

                // wait for the handler to be called
            `})],render:()=>{const[t,c]=d.useState(void 0),i={subscribe:h=>(h(l(p,"grayscale")),()=>{})};return d.useEffect(()=>i.subscribe(c),[]),e.jsx(y,{title:"store.subscribe(handler) → handler receives","data-testid":"subscribe-only-result",result:t})}},a={tags:["source"],parameters:f({source:{code:b}}),decorators:[r()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When you specify only the <code>read</code> method, the store is read-only.
                    </p>
                    <p>
                        When multiple stores have <code>read</code>, the first non-empty result is returned.
                    </p>
                </>
  }), showSource({
    source: 'read?: () => ThemeEntry | undefined'
  }), showSource({
    source: dedent\`
                const store: ThemeStore = {
                    read: () => themeEntry(themes, 'current')
                }
                store.read()
            \`
  })],
  render: () => {
    const store = {
      read: () => themeEntry(themes, 'grayscale')
    } satisfies ThemeStore<typeof themes>;
    return <ThemeResultCard title="store.read()" data-testid="read-only-result" result={store.read()} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When you specify only the <code>write</code> method, the store is write-only.
                </p>
  }), showSource({
    source: 'write?: (entry: ThemeEntry | undefined) => void'
  }), showSource({
    source: dedent\`
                const store: ThemeStore = {
                    write: (entry) => { /* persist */ }
                }
                store.write(themeEntry(themes, 'grayscale'))
            \`
  })],
  render: () => {
    const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined);
    const store = {
      write: entry => {
        setEntry(entry);
      }
    } satisfies ThemeStore<typeof themes>;
    useEffect(() => {
      store.write(themeEntry(themes, 'grayscale'));
    }, []);
    return <ThemeResultCard title="store.write() receives" data-testid="write-only-result" result={entry} />;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When you specify only the <code>subscribe</code> method, the store is subscribe-only.
                        <code>subscribe</code> is used to observe external changes (e.g. system preference,
                        remote sync).
                    </p>
                    <p>
                        The <code>handler</code> is called only when the theme changes.
                    </p>
                </>
  }), showSource({
    source: 'subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined) => void) => () => void'
  }), showSource({
    source: dedent\`
                const store: ThemeStore = {
                    subscribe: (handler) => {
                      handlers.push(handler)

                        return () => { handlers = handlers.filter((h) => h !== handler) }
                    }
                }
                store.subscribe((entry) => console.log(entry))

                // wait for the handler to be called
            \`
  })],
  render: () => {
    const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined);
    const store = {
      subscribe: (handler: (theme: ThemeEntry<typeof themes> | undefined) => void) => {
        handler(themeEntry(themes, 'grayscale'));
        return () => {};
      }
    } satisfies ThemeStore<typeof themes>;
    useEffect(() => {
      return store.subscribe(setEntry);
    }, []);
    return <ThemeResultCard title="store.subscribe(handler) → handler receives" data-testid="subscribe-only-result" result={entry} />;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const j=["ReadOnly","WriteOnly","SubscribeOnly","Source"];export{s as ReadOnly,a as Source,n as SubscribeOnly,o as WriteOnly,j as __namedExportsOrder,v as default};
