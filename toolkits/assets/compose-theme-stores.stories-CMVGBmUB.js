import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-C-caXvtV.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./theme-entry-Cs_OPpJC.js";import{n as u,t as d}from"./compose-theme-stores-BkbiF_Ba.js";import{n as f,t as p}from"./class-name-theme-store-DxMBjZh1.js";import{n as m,t as h}from"./data-attribute-theme-store-DqRsPjhr.js";import{n as g,t as _}from"./in-memory-theme-store-CJ-IHEDk.js";import{n as v,t as y}from"./local-storage-theme-store-nmP5Qc1w.js";import{n as b,t as x}from"./button-BQi9n5XX.js";import{n as S,t as C}from"./theme-result-card-CJBN2MES.js";import{n as w,t as T}from"./theme-store-demo-Bb76mXKJ.js";var E;function D(){return(D=e((()=>{E=`import type { Required, RequiredPick } from 'type-plus'
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
`})))()}function O(e,t){let n=_(e);return t.initialTheme!==void 0&&n.write?.(l(e,t.initialTheme)),n}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{f(),u(),m(),g(),y(),o(),s(),k=t(),b(),S(),w(),D(),A=n(),{expect:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P={title:`theme/composeThemeStores`,tags:[`func`,`version:1.0`],parameters:r({description:{component:`Composes multiple theme stores into one. Waterfall read (first non-empty), write-to-all, aggregated subscribe. No initial notify.`}}),render:()=>(0,A.jsx)(A.Fragment,{})},F={current:`theme-current`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},I={tags:[`playground`],parameters:r({description:{story:`Interactive demo with ThemeStoreDemo2. Composed store from 2 in-memory stores, defaultTheme current.`},source:{code:c`
                const store1 = inMemoryThemeStore(themes)
                const store2 = inMemoryThemeStore(themes)
                const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,k.useState)(),[n,r]=(0,k.useState)(),i=(0,k.useMemo)(()=>_(F),[F]),a=(0,k.useMemo)(()=>_(F),[F]),o=(0,k.useMemo)(()=>d(F,[i,a],{defaultTheme:`current`}),[i,a]);return(0,k.useEffect)(()=>{i.subscribe(e=>t(e??void 0)),a.subscribe(e=>r(e??void 0))},[i,a]),(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsx)(T,{store:o,themes:F}),(0,A.jsx)(C,{title:`Observed (store1.subscribe())`,result:e}),(0,A.jsx)(C,{title:`Observed (store2.subscribe())`,result:n})]})},play:async({canvas:e})=>{await M.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await N(()=>j(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`))}},L={tags:[`props`],parameters:r({description:{story:`When all stores empty and defaultTheme is undefined, read() returns undefined.`}}),decorators:[a(),i({source:c`
                const store = composeThemeStores(themes, [store1, store2])
                const result = await store.read()
            `})],render:()=>{let e=(0,k.useMemo)(()=>d(F,[_(F),_(F)]),[]),[t,n]=(0,k.useState)();return(0,k.useEffect)(()=>{Promise.resolve(e.read?.()).then(e=>n(e??void 0))},[e]),(0,A.jsx)(C,{title:`store.read() result`,"data-testid":`store-read-result`,result:t})},play:async({canvas:e})=>{await N(()=>j(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`))}},R={tags:[`props`],parameters:r({description:{story:`When all stores empty and defaultTheme is set, read() returns themeEntry(themes, defaultTheme).`}}),decorators:[a(),i({source:c`
                const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'grayscale' })
                const result = await store.read()
            `})],render:()=>{let e=(0,k.useMemo)(()=>d(F,[_(F),_(F)],{defaultTheme:`grayscale`}),[]),[t,n]=(0,k.useState)();return(0,k.useEffect)(()=>{Promise.resolve(e.read?.()).then(e=>n(e??void 0))},[e]),(0,A.jsx)(C,{title:`store.read() result`,"data-testid":`store-read-result`,result:t})},play:async({canvas:e})=>{await N(()=>j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`)),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},z={tags:[`props`],parameters:r({description:{story:`First store has value; composed read() returns that ThemeEntry.`}}),decorators:[a(),i()],loaders:[()=>{let e=_(F),t=_(F);return e.write?.(l(F,`grayscale`)),{store:d(F,[e,t],{defaultTheme:`current`})}}],render:(e,{loaded:{store:t}})=>{let[n,r]=(0,k.useState)();return(0,k.useEffect)(()=>{Promise.resolve(t.read?.()).then(e=>r(e??void 0))},[t]),(0,A.jsx)(C,{title:`store.read() result`,"data-testid":`store-read-result`,result:n})},play:async({canvas:e})=>{await N(()=>j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`))}},B={tags:[`props`],parameters:r({description:{story:`First store empty, second has value; waterfall returns second.`}}),decorators:[a(),i()],loaders:[()=>{let e=_(F),t=_(F);return t.write?.(l(F,`high-contrast`)),{store:d(F,[e,t],{defaultTheme:`current`})}}],render:(e,{loaded:{store:t}})=>{let[n,r]=(0,k.useState)();return(0,k.useEffect)(()=>{Promise.resolve(t.read?.()).then(e=>r(e??void 0))},[t]),(0,A.jsx)(C,{title:`store.read() result`,"data-testid":`store-read-result`,result:n})},play:async({canvas:e})=>{await N(()=>j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: high-contrast`))}},V={tags:[`props`],parameters:r({description:{story:`Store without read is skipped; value from next store wins.`}}),decorators:[a(),i()],loaders:[()=>{let e=_(F);return e.write?.(l(F,`grayscale`)),{store:d(F,[{write:e=>{}},e],{defaultTheme:`current`})}}],render:(e,{loaded:{store:t}})=>{let[n,r]=(0,k.useState)();return(0,k.useEffect)(()=>{Promise.resolve(t.read?.()).then(e=>r(e??void 0))},[t]),(0,A.jsx)(C,{title:`store.read() result`,"data-testid":`store-read-result`,result:n})},play:async({canvas:e})=>{await N(()=>j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`))}},H={tags:[`props`],parameters:r({description:{story:`write() delegates to setThemeToStores; all stores with write receive the entry.`}}),decorators:[a(),i()],render:()=>{let e=(0,k.useMemo)(()=>_(F),[F]),t=(0,k.useMemo)(()=>_(F),[F]),n=(0,k.useMemo)(()=>d(F,[e,t],{defaultTheme:`current`}),[e,t]);return(0,A.jsx)(T,{store:n,themes:F})},play:async({canvas:e})=>{await M.click(e.getByTestId(`theme-store-demo-btn-write-high-contrast`)),await M.click(e.getByTestId(`theme-store-demo-btn-read`)),await N(()=>j(e.getByTestId(`theme-store-demo-read`)).toHaveTextContent(`high-contrast`))}},U={tags:[`props`],parameters:r({description:{story:`subscribe() does not call handler immediately; only when a child store emits.`}}),decorators:[a(),i()],render:()=>{let e=(0,k.useMemo)(()=>d(F,[_(F),_(F)],{defaultTheme:`current`}),[]),[t,n]=(0,k.useState)(void 0);return(0,k.useEffect)(()=>e.subscribe?.(n),[e]),(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(`p`,{children:`Observed stays empty until Write is clicked (no initial notify)`}),(0,A.jsx)(C,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:t})]})},play:async({canvas:e})=>{await j(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`(undefined)`)}},W={tags:[`props`],parameters:r({description:{story:`When a child store emits (e.g. via write), composed subscribe handler is called.`}}),decorators:[a(),i()],render:()=>{let e=(0,k.useMemo)(()=>_(F),[F]),t=(0,k.useMemo)(()=>_(F),[F]),n=(0,k.useMemo)(()=>d(F,[e,t],{defaultTheme:`current`}),[e,t]),[r,i]=(0,k.useState)(void 0);return(0,k.useEffect)(()=>n.subscribe?.(i),[n]),(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:(0,A.jsx)(x,{"data-testid":`write-grayscale`,onClick:()=>e.write?.(l(F,`grayscale`)),children:`Write grayscale (store1)`})}),(0,A.jsx)(C,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:r})]})},play:async({canvas:e})=>{await M.click(e.getByTestId(`write-grayscale`)),await N(()=>j(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`))}},G={tags:[`props`],parameters:r({description:{story:`After unsubscribe, child store writes do not invoke handler.`}}),decorators:[a(),i()],render:()=>{let e=(0,k.useMemo)(()=>_(F),[F]),t=(0,k.useMemo)(()=>_(F),[F]),n=(0,k.useMemo)(()=>d(F,[e,t],{defaultTheme:`current`}),[e,t]),[r,i]=(0,k.useState)(void 0),a=(0,k.useRef)(null);return(0,k.useEffect)(()=>(a.current=n.subscribe(i),()=>{a.current?.()}),[n]),(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,A.jsx)(x,{"data-testid":`write-grayscale`,onClick:()=>e.write?.(l(F,`grayscale`)),children:`Write grayscale`}),(0,A.jsx)(x,{"data-testid":`write-current`,onClick:()=>e.write?.(l(F,`current`)),children:`Write current`}),(0,A.jsx)(x,{"data-testid":`unsubscribe`,onClick:()=>{a.current?.(),a.current=null},children:`unsubscribe`})]}),(0,A.jsx)(C,{title:`store.subscribe() receives (frozen after unsubscribe)`,"data-testid":`store-subscribe-result`,result:r})]})},play:async({canvas:e})=>{await M.click(e.getByTestId(`write-grayscale`)),await N(()=>j(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)),await M.click(e.getByTestId(`unsubscribe`)),await M.click(e.getByTestId(`write-current`)),await j(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)}},K={tags:[`props`],parameters:r({description:{story:`Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete.`},source:{code:c`
                composeThemeStores(themes, [
                  [classNameThemeStore, { element: document.body }],
                  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
                  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
                ], { defaultTheme: 'current' })
            `}}),decorators:[a(),i()],render:()=>{let e=(0,k.useMemo)(()=>d(F,[[p,{element:document.body}],[h,{attributeName:`data-theme`,element:document.body}],[v,{storageKey:`my-theme-key`}]],{defaultTheme:`current`}),[]);return(0,A.jsx)(T,{store:e,themes:F})}},q={tags:[`props`],parameters:r({description:{story:`Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories.`},source:{code:c`
                function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
                  const store = inMemoryThemeStore(themes)
                  if (options.initialTheme) store.write?.(themeEntry(themes, options.initialTheme))
                  return store
                }
                composeThemeStores(themes, [
                  [createInitializedThemeStore, { initialTheme: 'grayscale' }]
                ], { defaultTheme: 'current' })
            `}}),decorators:[a(),i()],render:()=>{let e=(0,k.useMemo)(()=>d(F,[[O,{initialTheme:`grayscale`}]],{defaultTheme:`current`}),[]);return(0,A.jsx)(T,{store:e,themes:F})},play:async({canvas:e})=>{await N(()=>j(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`))}},J={tags:[`source`],parameters:r({source:{code:E}}),decorators:[i()]},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...J.parameters?.docs?.source}}},Y=[`Playground`,`ReadAllEmptyNoDefault`,`ReadAllEmptyWithDefault`,`ReadWaterfallFirstHasValue`,`ReadWaterfallFirstEmptySecondHasValue`,`ReadSkipsStoreWithoutRead`,`WriteToAllStores`,`SubscribeNoInitialNotify`,`SubscribeReNotifyOnChildEmit`,`SubscribeUnsubscribe`,`StoreFactoryPattern`,`CustomStoreFactory`,`Source`]})))()}X();export{q as CustomStoreFactory,I as Playground,L as ReadAllEmptyNoDefault,R as ReadAllEmptyWithDefault,V as ReadSkipsStoreWithoutRead,B as ReadWaterfallFirstEmptySecondHasValue,z as ReadWaterfallFirstHasValue,J as Source,K as StoreFactoryPattern,U as SubscribeNoInitialNotify,W as SubscribeReNotifyOnChildEmit,G as SubscribeUnsubscribe,H as WriteToAllStores,Y as __namedExportsOrder,P as default};