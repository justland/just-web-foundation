import{j as e,w as u,s as r,d as f,r as s}from"./iframe-D_6mvhRd.js";import{d as y}from"./dedent-BuYMbVyj.js";import{t as m}from"./theme-entry-D4S_RAMB.js";import{T as l}from"./theme-result-card-rXyXLGwz.js";import"./preload-helper-PPVm8Dsz.js";import"./append-id-Vsg144gU.js";const b=`import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Async variant of \`ThemeStore\` where read and write may return promises.
 * Use for remote persistence, polling, or WebSocket-based sync.
 *
 * Same optional methods as \`ThemeStore\`:
 *
 * - **read** – Can return \`Promise<ThemeEntry | undefined>\` for async sources
 * - **write** – Can return \`Promise<void>\` for async persistence
 * - **subscribe** – Same signature as sync; observes external changes
 *
 * @typeParam Themes - Map of theme keys to their value types (string or readonly string[])
 */
export interface AsyncThemeStore<Themes extends ThemeMap = ThemeMap> {
	read?:
		| (() => ThemeEntry<Themes> | undefined | Promise<ThemeEntry<Themes> | undefined>)
		| undefined
	write?: ((entry: ThemeEntry<Themes> | undefined) => void | Promise<void>) | undefined
	subscribe?:
		| ((handler: (entry: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}
`,x={title:"theme/theme-store/AsyncThemeStore",tags:["type","version:1.0"],render:()=>e.jsx(e.Fragment,{})},p={current:"theme-current",grayscale:"theme-grayscale"},d={tags:["props"],decorators:[u({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When you specify only the ",e.jsx("code",{children:"read"})," method, the store is read-only."," ",e.jsx("code",{children:"read"})," may return a value or ",e.jsx("code",{children:"Promise"}),"."]}),e.jsxs("p",{children:["When multiple stores have ",e.jsx("code",{children:"read"}),", the first non-empty result is returned."]})]})}),r({source:"read?: () => ThemeEntry | undefined | Promise<ThemeEntry | undefined>"}),r({source:y`
                const store: AsyncThemeStore = {
                    read: async () => themeEntry(themes, 'grayscale')
                }
                await store.read()
            `})],render:()=>{const[t,n]=s.useState(void 0),o={read:async()=>m(p,"grayscale")};return s.useEffect(()=>{o.read?.().then(n)},[]),e.jsx(l,{title:"store.read() (async)","data-testid":"read-only-result",result:t})}},c={tags:["props"],decorators:[u({content:e.jsxs("p",{children:["When you specify only the ",e.jsx("code",{children:"write"})," method, the store is write-only."," ",e.jsx("code",{children:"write"})," may be sync or async (return ",e.jsx("code",{children:"Promise<void>"}),")."]})}),r({source:"write?: (entry: ThemeEntry | undefined) => void | Promise<void>"}),r({source:y`
                const store: AsyncThemeStore = {
                    write: async (entry) => { /* persist */ }
                }
                await store.write?.(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const[t,n]=s.useState(void 0),o={write:async h=>{n(h)}};return s.useEffect(()=>{o.write?.(m(p,"grayscale"))},[]),e.jsx(l,{title:"store.write() receives","data-testid":"write-only-result",result:t})}},a={tags:["props"],decorators:[u({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When you specify only the ",e.jsx("code",{children:"subscribe"})," method, the store is subscribe-only.",e.jsx("code",{children:"subscribe"})," is used to observe external changes (e.g. system preference, remote sync)."]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"handler"})," is called only when the theme changes."]})]})}),r({source:"subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void"}),r({source:y`
                const store: AsyncThemeStore = {
                    subscribe: (handler) => {
                      handlers.push(handler)
                      return () => { handlers = handlers.filter((h) => h !== handler) }
                    }
                }
                store.subscribe?.((entry) => console.log(entry))
            `})],render:()=>{const[t,n]=s.useState(void 0),o={subscribe:h=>(h(m(p,"grayscale")),()=>{})};return s.useEffect(()=>o.subscribe?.(n),[]),e.jsx(l,{title:"store.subscribe(handler) → handler receives","data-testid":"subscribe-only-result",result:t})}},i={tags:["source"],parameters:f({source:{code:b}}),decorators:[r()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When you specify only the <code>read</code> method, the store is read-only.{' '}
                        <code>read</code> may return a value or <code>Promise</code>.
                    </p>
                    <p>
                        When multiple stores have <code>read</code>, the first non-empty result is returned.
                    </p>
                </>
  }), showSource({
    source: 'read?: () => ThemeEntry | undefined | Promise<ThemeEntry | undefined>'
  }), showSource({
    source: dedent\`
                const store: AsyncThemeStore = {
                    read: async () => themeEntry(themes, 'grayscale')
                }
                await store.read()
            \`
  })],
  render: () => {
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    const store = {
      read: async () => themeEntry(themes, 'grayscale')
    } satisfies AsyncThemeStore<typeof themes>;
    useEffect(() => {
      void store.read?.().then(setResult);
    }, []);
    return <ThemeResultCard title="store.read() (async)" data-testid="read-only-result" result={result} />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When you specify only the <code>write</code> method, the store is write-only.{' '}
                    <code>write</code> may be sync or async (return <code>Promise&lt;void&gt;</code>).
                </p>
  }), showSource({
    source: 'write?: (entry: ThemeEntry | undefined) => void | Promise<void>'
  }), showSource({
    source: dedent\`
                const store: AsyncThemeStore = {
                    write: async (entry) => { /* persist */ }
                }
                await store.write?.(themeEntry(themes, 'grayscale'))
            \`
  })],
  render: () => {
    const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined);
    const store = {
      write: async (e: ThemeEntry<typeof themes> | undefined) => {
        setEntry(e);
      }
    } satisfies AsyncThemeStore<typeof themes>;
    useEffect(() => {
      void store.write?.(themeEntry(themes, 'grayscale'));
    }, []);
    return <ThemeResultCard title="store.write() receives" data-testid="write-only-result" result={entry} />;
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    source: 'subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void'
  }), showSource({
    source: dedent\`
                const store: AsyncThemeStore = {
                    subscribe: (handler) => {
                      handlers.push(handler)
                      return () => { handlers = handlers.filter((h) => h !== handler) }
                    }
                }
                store.subscribe?.((entry) => console.log(entry))
            \`
  })],
  render: () => {
    const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    const store = {
      subscribe: (handler: (theme: ThemeEntry<typeof themes> | undefined | null) => void) => {
        handler(themeEntry(themes, 'grayscale'));
        return () => {};
      }
    } satisfies AsyncThemeStore<typeof themes>;
    useEffect(() => {
      return store.subscribe?.(setEntry);
    }, []);
    return <ThemeResultCard title="store.subscribe(handler) → handler receives" data-testid="subscribe-only-result" result={entry} />;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...i.parameters?.docs?.source}}};const j=["ReadOnly","WriteOnly","SubscribeOnly","Source"];export{d as ReadOnly,i as Source,a as SubscribeOnly,c as WriteOnly,j as __namedExportsOrder,x as default};
