import{j as o,d as i,w as l,s as u,r}from"./iframe-DqzjRiTF.js";import{d as b}from"./dedent-BuYMbVyj.js";import{t as S}from"./theme-entry-D4S_RAMB.js";import{c as h}from"./compose-theme-stores-CD86eyKP.js";import{c as A}from"./class-name-theme-store-Czqv1IHK.js";import{d as j}from"./data-attribute-theme-store-Buf9c4Ks.js";import{i as n}from"./in-memory-theme-store-CtdmAzEM.js";import{l as _}from"./local-storage-theme-store-CQ0vNisZ.js";import{B as P}from"./button-BzTOpxR2.js";import{T as y}from"./theme-result-card-BgL0xLjR.js";import{T as H}from"./theme-store-demo-bLvdkXKA.js";import"./preload-helper-PPVm8Dsz.js";import"./set-theme-to-stores-C1AbMsOJ.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-class-name-CewN__EB.js";import"./observe-attribute-CZKLLp6I.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./write-data-attribute-C1LlvwO1.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-ioQK7DCF.js";import"./write-local-storage-CE6rqo_l.js";import"./write-web-storage-H7mtIjJa.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-class-name-BRDkWufJ.js";import"./append-id-Vsg144gU.js";const O=`import type { Required, RequiredPick } from 'type-plus'
import { setThemeToStores } from './_utils/set-theme-to-stores.ts'
import { themeEntry } from './theme-entry.ts'
import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './theme-store/async-theme-store.types.ts'
import type { ThemeStore } from './theme-store/theme-store.types.ts'
import type { ThemeStoreFactory } from './theme-store/theme-store-factory.types.ts'

/** Input item for one position: concrete store or factory config [factory, options?]. */
export type ComposeThemeStoreEntry<
	Themes extends ThemeMap,
	F extends ThemeStoreFactory<Themes> = never
> = ThemeStore<Themes> | AsyncThemeStore<Themes> | readonly [F] | readonly [F, Parameters<F>[1]]

export type ComposeThemeStoresOptions<Themes extends ThemeMap> = {
	defaultTheme?: keyof Themes | undefined
}

/**
 * Composes multiple theme stores into a single store.
 *
 * Accepts concrete stores or store factory tuples \`[factory]\` or \`[factory, options]\`.
 * For factory tuples, calls \`factory(themes)\` or \`factory(themes, options)\` to create stores.
 *
 * - **read**: Returns first non-empty \`ThemeEntry\` from stores (waterfall). When all empty
 *   and \`defaultTheme\` is defined, returns \`themeEntry(themes, defaultTheme)\`.
 * - **write**: Delegates to \`setThemeToStores\` (writes to all stores with write).
 * - **subscribe**: Aggregates child store subscriptions. No initial notify—handler is only
 *   called when a child store emits.
 *
 * @param themes - ThemeMap for synthesizing fallback ThemeEntry
 * @param stores - Array of theme stores or factory configs [factory, options?]
 * @param options.defaultTheme - Fallback theme key when all stores return empty
 * @returns AsyncThemeStore
 */
export function composeThemeStores<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
>(
	themes: Themes,
	stores: readonly [
		store1: ComposeThemeStoreEntry<Themes, A>,
		store2?: ComposeThemeStoreEntry<Themes, B>,
		store3?: ComposeThemeStoreEntry<Themes, C>,
		store4?: ComposeThemeStoreEntry<Themes, D>,
		store5?: ComposeThemeStoreEntry<Themes, E>,
		store6?: ComposeThemeStoreEntry<Themes, F>,
		store7?: ComposeThemeStoreEntry<Themes, G>,
		store8?: ComposeThemeStoreEntry<Themes, H>
	],
	options?: ComposeThemeStoresOptions<Themes> | undefined
): Required<AsyncThemeStore<Themes>> {
	const { defaultTheme } = options ?? {}
	const resolved = resolveStores(themes, stores)
	const withRead = resolved.filter((s): s is StoreWithRead<Themes> => typeof s.read === 'function')

	async function readFromStores(): Promise<ThemeEntry<Themes> | undefined> {
		for (const store of withRead) {
			const result = await Promise.resolve(store.read())
			if (result !== undefined) return result
		}
		return defaultTheme !== undefined ? themeEntry(themes, defaultTheme) : undefined
	}

	const withSubscribe = resolved.filter(
		(s): s is StoreWithSubscribe<Themes> => typeof s.subscribe === 'function'
	)

	function subscribe(handler: (theme: ThemeEntry<Themes> | undefined) => void): () => void {
		let scheduled = false
		let lastEmitted: keyof Themes | undefined

		const scheduleNotify = () => {
			if (scheduled) return
			scheduled = true
			queueMicrotask(async () => {
				scheduled = false
				const entry = await readFromStores()
				const key = entry?.theme ?? undefined
				if (key === lastEmitted) return
				lastEmitted = key
				handler(entry ?? undefined)
			})
		}

		const unSubs = withSubscribe.map((s) => s.subscribe!((_result) => scheduleNotify()))

		return () => {
			for (const unSub of unSubs) {
				unSub()
			}
		}
	}

	return {
		read: readFromStores,
		write(entry) {
			return setThemeToStores(resolved, entry)
		},
		subscribe: withSubscribe.length > 0 ? subscribe : () => () => {}
	}
}

type StoreWithRead<Themes extends ThemeMap> = RequiredPick<AsyncThemeStore<Themes>, 'read'>

type StoreWithSubscribe<Themes extends ThemeMap> = RequiredPick<
	AsyncThemeStore<Themes>,
	'subscribe'
>

function resolveStores<Themes extends ThemeMap>(
	themes: Themes,
	stores: readonly [
		store1: ComposeThemeStoreEntry<Themes, any>,
		store2?: ComposeThemeStoreEntry<Themes, any>,
		store3?: ComposeThemeStoreEntry<Themes, any>,
		store4?: ComposeThemeStoreEntry<Themes, any>,
		store5?: ComposeThemeStoreEntry<Themes, any>,
		store6?: ComposeThemeStoreEntry<Themes, any>,
		store7?: ComposeThemeStoreEntry<Themes, any>,
		store8?: ComposeThemeStoreEntry<Themes, any>
	]
): (ThemeStore<Themes> | AsyncThemeStore<Themes>)[] {
	return stores.map((item) => {
		if (Array.isArray(item)) {
			const [factory, options] = item
			return (factory as (t: Themes, o?: unknown) => ThemeStore<Themes>)(themes, options)
		}
		return item as ThemeStore<Themes> | AsyncThemeStore<Themes>
	})
}
`,{expect:d,userEvent:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,pe={title:"theme/composeThemeStores",tags:["func","version:1.0"],parameters:i({description:{component:"Composes multiple theme stores into one. Waterfall read (first non-empty), write-to-all, aggregated subscribe. No initial notify."}}),render:()=>o.jsx(o.Fragment,{})},t={current:"theme-current",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},g={tags:["playground"],parameters:i({description:{story:"Interactive demo with ThemeStoreDemo2. Composed store from 2 in-memory stores, defaultTheme current."},source:{code:b`
                const store1 = inMemoryThemeStore(themes)
                const store2 = inMemoryThemeStore(themes)
                const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `}}),decorators:[l(),u()],render:()=>{const[e,s]=r.useState(),[a,m]=r.useState(),c=r.useMemo(()=>n(t),[t]),T=r.useMemo(()=>n(t),[t]),D=r.useMemo(()=>h(t,[c,T],{defaultTheme:"current"}),[c,T]);return r.useEffect(()=>{c.subscribe(N=>s(N??void 0)),T.subscribe(N=>m(N??void 0))},[c,T]),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx(H,{store:D,themes:t}),o.jsx(y,{title:"Observed (store1.subscribe())",result:e}),o.jsx(y,{title:"Observed (store2.subscribe())",result:a})]})},play:async({canvas:e})=>{await f.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await p(()=>d(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale"))}},w={tags:["props"],parameters:i({description:{story:"When all stores empty and defaultTheme is undefined, read() returns undefined."}}),decorators:[l(),u({source:b`
                const store = composeThemeStores(themes, [store1, store2])
                const result = await store.read()
            `})],render:()=>{const e=r.useMemo(()=>h(t,[n(t),n(t)]),[]),[s,a]=r.useState();return r.useEffect(()=>{Promise.resolve(e.read?.()).then(m=>a(m??void 0))},[e]),o.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s})},play:async({canvas:e})=>{await p(()=>d(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)"))}},v={tags:["props"],parameters:i({description:{story:"When all stores empty and defaultTheme is set, read() returns themeEntry(themes, defaultTheme)."}}),decorators:[l(),u({source:b`
                const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'grayscale' })
                const result = await store.read()
            `})],render:()=>{const e=r.useMemo(()=>h(t,[n(t),n(t)],{defaultTheme:"grayscale"}),[]),[s,a]=r.useState();return r.useEffect(()=>{Promise.resolve(e.read?.()).then(m=>a(m??void 0))},[e]),o.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s})},play:async({canvas:e})=>{await p(()=>d(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale")),await d(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},x={tags:["props"],parameters:i({description:{story:"First store has value; composed read() returns that ThemeEntry."}}),decorators:[l(),u()],loaders:[()=>{const e=n(t),s=n(t);return e.write?.(S(t,"grayscale")),{store:h(t,[e,s],{defaultTheme:"current"})}}],render:(e,{loaded:{store:s}})=>{const[a,m]=r.useState();return r.useEffect(()=>{Promise.resolve(s.read?.()).then(c=>m(c??void 0))},[s]),o.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:a})},play:async({canvas:e})=>{await p(()=>d(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"))}},E={tags:["props"],parameters:i({description:{story:"First store empty, second has value; waterfall returns second."}}),decorators:[l(),u()],loaders:[()=>{const e=n(t),s=n(t);return s.write?.(S(t,"high-contrast")),{store:h(t,[e,s],{defaultTheme:"current"})}}],render:(e,{loaded:{store:s}})=>{const[a,m]=r.useState();return r.useEffect(()=>{Promise.resolve(s.read?.()).then(c=>m(c??void 0))},[s]),o.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:a})},play:async({canvas:e})=>{await p(()=>d(e.getByTestId("store-read-result")).toHaveTextContent("theme: high-contrast"))}},C={tags:["props"],parameters:i({description:{story:"Store without read is skipped; value from next store wins."}}),decorators:[l(),u()],loaders:[()=>{const e=n(t);return e.write?.(S(t,"grayscale")),{store:h(t,[{write:a=>{}},e],{defaultTheme:"current"})}}],render:(e,{loaded:{store:s}})=>{const[a,m]=r.useState();return r.useEffect(()=>{Promise.resolve(s.read?.()).then(c=>m(c??void 0))},[s]),o.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:a})},play:async({canvas:e})=>{await p(()=>d(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"))}},R={tags:["props"],parameters:i({description:{story:"write() delegates to setThemeToStores; all stores with write receive the entry."}}),decorators:[l(),u()],render:()=>{const e=r.useMemo(()=>n(t),[t]),s=r.useMemo(()=>n(t),[t]),a=r.useMemo(()=>h(t,[e,s],{defaultTheme:"current"}),[e,s]);return o.jsx(H,{store:a,themes:t})},play:async({canvas:e})=>{await f.click(e.getByTestId("theme-store-demo-btn-write-high-contrast")),await f.click(e.getByTestId("theme-store-demo-btn-read")),await p(()=>d(e.getByTestId("theme-store-demo-read")).toHaveTextContent("high-contrast"))}},M={tags:["props"],parameters:i({description:{story:"subscribe() does not call handler immediately; only when a child store emits."}}),decorators:[l(),u()],render:()=>{const e=r.useMemo(()=>h(t,[n(t),n(t)],{defaultTheme:"current"}),[]),[s,a]=r.useState(void 0);return r.useEffect(()=>e.subscribe?.(a),[e]),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx("p",{children:"Observed stays empty until Write is clicked (no initial notify)"}),o.jsx(y,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:s})]})},play:async({canvas:e})=>{await d(e.getByTestId("store-subscribe-result")).toHaveTextContent("(undefined)")}},B={tags:["props"],parameters:i({description:{story:"When a child store emits (e.g. via write), composed subscribe handler is called."}}),decorators:[l(),u()],render:()=>{const e=r.useMemo(()=>n(t),[t]),s=r.useMemo(()=>n(t),[t]),a=r.useMemo(()=>h(t,[e,s],{defaultTheme:"current"}),[e,s]),[m,c]=r.useState(void 0);return r.useEffect(()=>a.subscribe?.(c),[a]),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx("div",{className:"flex flex-wrap gap-2",children:o.jsx(P,{"data-testid":"write-grayscale",onClick:()=>e.write?.(S(t,"grayscale")),children:"Write grayscale (store1)"})}),o.jsx(y,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:m})]})},play:async({canvas:e})=>{await f.click(e.getByTestId("write-grayscale")),await p(()=>d(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale"))}},I={tags:["props"],parameters:i({description:{story:"After unsubscribe, child store writes do not invoke handler."}}),decorators:[l(),u()],render:()=>{const e=r.useMemo(()=>n(t),[t]),s=r.useMemo(()=>n(t),[t]),a=r.useMemo(()=>h(t,[e,s],{defaultTheme:"current"}),[e,s]),[m,c]=r.useState(void 0),T=r.useRef(null);return r.useEffect(()=>(T.current=a.subscribe(c),()=>{T.current?.()}),[a]),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsx(P,{"data-testid":"write-grayscale",onClick:()=>e.write?.(S(t,"grayscale")),children:"Write grayscale"}),o.jsx(P,{"data-testid":"write-current",onClick:()=>e.write?.(S(t,"current")),children:"Write current"}),o.jsx(P,{"data-testid":"unsubscribe",onClick:()=>{T.current?.(),T.current=null},children:"unsubscribe"})]}),o.jsx(y,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:m})]})},play:async({canvas:e})=>{await f.click(e.getByTestId("write-grayscale")),await p(()=>d(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await f.click(e.getByTestId("unsubscribe")),await f.click(e.getByTestId("write-current")),await d(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},k={tags:["props"],parameters:i({description:{story:"Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete."},source:{code:b`
                composeThemeStores(themes, [
                  [classNameThemeStore, { element: document.body }],
                  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
                  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
                ], { defaultTheme: 'current' })
            `}}),decorators:[l(),u()],render:()=>{const e=r.useMemo(()=>h(t,[[A,{element:document.body}],[j,{attributeName:"data-theme",element:document.body}],[_,{storageKey:"my-theme-key"}]],{defaultTheme:"current"}),[]);return o.jsx(H,{store:e,themes:t})}};function z(e,s){const a=n(e);return s.initialTheme!==void 0&&a.write?.(S(e,s.initialTheme)),a}const F={tags:["props"],parameters:i({description:{story:"Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories."},source:{code:b`
                function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
                  const store = inMemoryThemeStore(themes)
                  if (options.initialTheme) store.write?.(themeEntry(themes, options.initialTheme))
                  return store
                }
                composeThemeStores(themes, [
                  [createInitializedThemeStore, { initialTheme: 'grayscale' }]
                ], { defaultTheme: 'current' })
            `}}),decorators:[l(),u()],render:()=>{const e=r.useMemo(()=>h(t,[[z,{initialTheme:"grayscale"}]],{defaultTheme:"current"}),[]);return o.jsx(H,{store:e,themes:t})},play:async({canvas:e})=>{await p(()=>d(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale"))}},W={tags:["source"],parameters:i({source:{code:O}}),decorators:[u()]};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo with ThemeStoreDemo2. Composed store from 2 in-memory stores, defaultTheme current.'
    },
    source: {
      code: dedent\`
                const store1 = inMemoryThemeStore(themes)
                const store2 = inMemoryThemeStore(themes)
                const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [result1, setResult1] = useState<ThemeEntry<typeof themes>>();
    const [result2, setResult2] = useState<ThemeEntry<typeof themes>>();
    const store1 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store2 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store = useMemo(() => composeThemeStores(themes, [store1, store2], {
      defaultTheme: 'current'
    }), [store1, store2]);
    useEffect(() => {
      store1.subscribe(r => setResult1(r ?? undefined));
      store2.subscribe(r => setResult2(r ?? undefined));
    }, [store1, store2]);
    return <div className="flex flex-col gap-2">
                <ThemeStoreDemo store={store} themes={themes} />
                <ThemeResultCard title="Observed (store1.subscribe())" result={result1} />
                <ThemeResultCard title="Observed (store2.subscribe())" result={result2} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When all stores empty and defaultTheme is undefined, read() returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = composeThemeStores(themes, [store1, store2])
                const result = await store.read()
            \`
  })],
  render: () => {
    const store = useMemo(() => composeThemeStores(themes, [inMemoryThemeStore(themes), inMemoryThemeStore(themes)]), []);
    const [result, setResult] = useState<ThemeEntry<typeof themes>>();
    useEffect(() => {
      Promise.resolve(store.read?.()).then(r => setResult(r ?? undefined));
    }, [store]);
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result} />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)'));
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When all stores empty and defaultTheme is set, read() returns themeEntry(themes, defaultTheme).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'grayscale' })
                const result = await store.read()
            \`
  })],
  render: () => {
    const store = useMemo(() => composeThemeStores(themes, [inMemoryThemeStore(themes), inMemoryThemeStore(themes)], {
      defaultTheme: 'grayscale'
    }), []);
    const [result, setResult] = useState<ThemeEntry<typeof themes>>();
    useEffect(() => {
      Promise.resolve(store.read?.()).then(r => setResult(r ?? undefined));
    }, [store]);
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result} />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale'));
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'First store has value; composed read() returns that ThemeEntry.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  loaders: [() => {
    const store1 = inMemoryThemeStore(themes);
    const store2 = inMemoryThemeStore(themes);
    store1.write?.(themeEntry(themes, 'grayscale'));
    return {
      store: composeThemeStores(themes, [store1, store2], {
        defaultTheme: 'current'
      })
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    const [result, setResult] = useState<ThemeEntry<typeof themes>>();
    useEffect(() => {
      Promise.resolve(store.read?.()).then(r => setResult(r ?? undefined));
    }, [store]);
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result} />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale'));
  }
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'First store empty, second has value; waterfall returns second.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  loaders: [() => {
    const store1 = inMemoryThemeStore(themes);
    const store2 = inMemoryThemeStore(themes);
    store2.write?.(themeEntry(themes, 'high-contrast'));
    return {
      store: composeThemeStores(themes, [store1, store2], {
        defaultTheme: 'current'
      })
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    const [result, setResult] = useState<ThemeEntry<typeof themes>>();
    useEffect(() => {
      Promise.resolve(store.read?.()).then(r => setResult(r ?? undefined));
    }, [store]);
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result} />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: high-contrast'));
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Store without read is skipped; value from next store wins.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  loaders: [() => {
    const storeWithRead = inMemoryThemeStore(themes);
    storeWithRead.write?.(themeEntry(themes, 'grayscale'));
    const storeWithoutRead = {
      write: (_entry: unknown) => {}
    };
    return {
      store: composeThemeStores(themes, [storeWithoutRead, storeWithRead] as any, {
        defaultTheme: 'current'
      })
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    const [result, setResult] = useState<ThemeEntry<typeof themes>>();
    useEffect(() => {
      Promise.resolve(store.read?.()).then(r => setResult(r ?? undefined));
    }, [store]);
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result} />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale'));
  }
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'write() delegates to setThemeToStores; all stores with write receive the entry.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store1 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store2 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store = useMemo(() => composeThemeStores(themes, [store1, store2], {
      defaultTheme: 'current'
    }), [store1, store2]);
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-high-contrast'));
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent('high-contrast'));
  }
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'subscribe() does not call handler immediately; only when a child store emits.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => composeThemeStores(themes, [inMemoryThemeStore(themes), inMemoryThemeStore(themes)], {
      defaultTheme: 'current'
    }), []);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => store.subscribe?.(setResult), [store]);
    return <div className="flex flex-col gap-4">
                <p>Observed stays empty until Write is clicked (no initial notify)</p>
                <ThemeResultCard title="store.subscribe() receives" data-testid="store-subscribe-result" result={result} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('(undefined)');
  }
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When a child store emits (e.g. via write), composed subscribe handler is called.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store1 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store2 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store = useMemo(() => composeThemeStores(themes, [store1, store2], {
      defaultTheme: 'current'
    }), [store1, store2]);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => store.subscribe?.(setResult), [store]);
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-grayscale" onClick={() => store1.write?.(themeEntry(themes, 'grayscale'))}>
                        Write grayscale (store1)
                    </Button>
                </div>
                <ThemeResultCard title="store.subscribe() receives" data-testid="store-subscribe-result" result={result} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale'));
  }
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'After unsubscribe, child store writes do not invoke handler.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store1 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store2 = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const store = useMemo(() => composeThemeStores(themes, [store1, store2], {
      defaultTheme: 'current'
    }), [store1, store2]);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    const unSubRef = useRef<(() => void) | null>(null);
    useEffect(() => {
      unSubRef.current = store.subscribe(setResult);
      return () => {
        unSubRef.current?.();
      };
    }, [store]);
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-grayscale" onClick={() => store1.write?.(themeEntry(themes, 'grayscale'))}>
                        Write grayscale
                    </Button>
                    <Button data-testid="write-current" onClick={() => store1.write?.(themeEntry(themes, 'current'))}>
                        Write current
                    </Button>
                    <Button data-testid="unsubscribe" onClick={() => {
          unSubRef.current?.();
          unSubRef.current = null;
        }}>
                        unsubscribe
                    </Button>
                </div>
                <ThemeResultCard title="store.subscribe() receives (frozen after unsubscribe)" data-testid="store-subscribe-result" result={result} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale'));
    await userEvent.click(canvas.getByTestId('unsubscribe'));
    await userEvent.click(canvas.getByTestId('write-current'));
    await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale');
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete.'
    },
    source: {
      code: dedent\`
                composeThemeStores(themes, [
                  [classNameThemeStore, { element: document.body }],
                  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
                  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
                ], { defaultTheme: 'current' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => composeThemeStores(themes, [[classNameThemeStore, {
      element: document.body
    }], [dataAttributeThemeStore, {
      attributeName: 'data-theme',
      element: document.body
    }], [localStorageThemeStore, {
      storageKey: 'my-theme-key'
    }]], {
      defaultTheme: 'current'
    }), []);
    return <ThemeStoreDemo store={store} themes={themes} />;
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories.'
    },
    source: {
      code: dedent\`
                function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
                  const store = inMemoryThemeStore(themes)
                  if (options.initialTheme) store.write?.(themeEntry(themes, options.initialTheme))
                  return store
                }
                composeThemeStores(themes, [
                  [createInitializedThemeStore, { initialTheme: 'grayscale' }]
                ], { defaultTheme: 'current' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => composeThemeStores(themes, [[createInitializedThemeStore, {
      initialTheme: 'grayscale'
    }]], {
      defaultTheme: 'current'
    }), []);
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
  }
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...W.parameters?.docs?.source}}};const Te=["Playground","ReadAllEmptyNoDefault","ReadAllEmptyWithDefault","ReadWaterfallFirstHasValue","ReadWaterfallFirstEmptySecondHasValue","ReadSkipsStoreWithoutRead","WriteToAllStores","SubscribeNoInitialNotify","SubscribeReNotifyOnChildEmit","SubscribeUnsubscribe","StoreFactoryPattern","CustomStoreFactory","Source"];export{F as CustomStoreFactory,g as Playground,w as ReadAllEmptyNoDefault,v as ReadAllEmptyWithDefault,C as ReadSkipsStoreWithoutRead,E as ReadWaterfallFirstEmptySecondHasValue,x as ReadWaterfallFirstHasValue,W as Source,k as StoreFactoryPattern,M as SubscribeNoInitialNotify,B as SubscribeReNotifyOnChildEmit,I as SubscribeUnsubscribe,R as WriteToAllStores,Te as __namedExportsOrder,pe as default};
