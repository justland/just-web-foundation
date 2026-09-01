import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as i,c as a,l as o,s}from"./iframe-BJVp8-w1.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{n as d,t as f}from"./theme-result-card-DmTK1KKZ.js";var p;function m(){return(m=e((()=>{p=`import type { ThemeEntry } from '../theme-entry.types.ts'
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
	subscribe?: ((handler: (entry: ThemeEntry<Themes> | undefined) => void) => () => void) | undefined
}
`})))()}var h=t({ReadOnly:()=>b,Source:()=>C,SubscribeOnly:()=>S,WriteOnly:()=>x,__namedExportsOrder:()=>w,default:()=>v}),g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s(),c(),g=n(),d(),m(),_=r(),v={title:`theme/theme-store/AsyncThemeStore`,tags:[`type`,`version:1.0`],render:()=>(0,_.jsx)(_.Fragment,{})},y={current:`theme-current`,grayscale:`theme-grayscale`},b={tags:[`props`],decorators:[o({content:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`p`,{children:[`When you specify only the `,(0,_.jsx)(`code`,{children:`read`}),` method, the store is read-only.`,` `,(0,_.jsx)(`code`,{children:`read`}),` may return a value or `,(0,_.jsx)(`code`,{children:`Promise`}),`.`]}),(0,_.jsxs)(`p`,{children:[`When multiple stores have `,(0,_.jsx)(`code`,{children:`read`}),`, the first non-empty result is returned.`]})]})}),a({source:`read?: () => ThemeEntry | undefined | Promise<ThemeEntry | undefined>`}),a({source:l`
                const store: AsyncThemeStore = {
                    read: async () => themeEntry(themes, 'grayscale')
                }
                await store.read()
            `})],render:()=>{let[e,t]=(0,g.useState)(void 0),n={read:async()=>u(y,`grayscale`)};return(0,g.useEffect)(()=>{n.read?.().then(t)},[]),(0,_.jsx)(f,{title:`store.read() (async)`,"data-testid":`read-only-result`,result:e})}},x={tags:[`props`],decorators:[o({content:(0,_.jsxs)(`p`,{children:[`When you specify only the `,(0,_.jsx)(`code`,{children:`write`}),` method, the store is write-only.`,` `,(0,_.jsx)(`code`,{children:`write`}),` may be sync or async (return `,(0,_.jsx)(`code`,{children:`Promise<void>`}),`).`]})}),a({source:`write?: (entry: ThemeEntry | undefined) => void | Promise<void>`}),a({source:l`
                const store: AsyncThemeStore = {
                    write: async (entry) => { /* persist */ }
                }
                await store.write?.(themeEntry(themes, 'grayscale'))
            `})],render:()=>{let[e,t]=(0,g.useState)(void 0),n={write:async e=>{t(e)}};return(0,g.useEffect)(()=>{n.write?.(u(y,`grayscale`))},[]),(0,_.jsx)(f,{title:`store.write() receives`,"data-testid":`write-only-result`,result:e})}},S={tags:[`props`],decorators:[o({content:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`p`,{children:[`When you specify only the `,(0,_.jsx)(`code`,{children:`subscribe`}),` method, the store is subscribe-only.`,(0,_.jsx)(`code`,{children:`subscribe`}),` is used to observe external changes (e.g. system preference, remote sync).`]}),(0,_.jsxs)(`p`,{children:[`The `,(0,_.jsx)(`code`,{children:`handler`}),` is called only when the theme changes.`]})]})}),a({source:`subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined) => void) => () => void`}),a({source:l`
                const store: AsyncThemeStore = {
                    subscribe: (handler) => {
                      handlers.push(handler)
                      return () => { handlers = handlers.filter((h) => h !== handler) }
                    }
                }
                store.subscribe?.((entry) => console.log(entry))
            `})],render:()=>{let[e,t]=(0,g.useState)(void 0),n={subscribe:e=>(e(u(y,`grayscale`)),()=>{})};return(0,g.useEffect)(()=>n.subscribe?.(t),[]),(0,_.jsx)(f,{title:`store.subscribe(handler) → handler receives`,"data-testid":`subscribe-only-result`,result:e})}},C={tags:[`source`],parameters:i({source:{code:p}}),decorators:[a()]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined);
    const store = {
      subscribe: (handler: (theme: ThemeEntry<typeof themes> | undefined) => void) => {
        handler(themeEntry(themes, 'grayscale'));
        return () => {};
      }
    } satisfies AsyncThemeStore<typeof themes>;
    useEffect(() => {
      return store.subscribe?.(setEntry);
    }, []);
    return <ThemeResultCard title="store.subscribe(handler) → handler receives" data-testid="subscribe-only-result" result={entry} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...C.parameters?.docs?.source}}},w=[`ReadOnly`,`WriteOnly`,`SubscribeOnly`,`Source`]})))()}export{T as n,v as r,h as t};