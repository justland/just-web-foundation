import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-Dhw67M0q.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./observe-data-attribute-Ca5EP0t5.js";import{t as u}from"./src-C4_MMlM4.js";import{n as d,t as f}from"./log-panel-cMenRXHR.js";import{n as p}from"./theme-entry-Cs_OPpJC.js";import{n as m,t as h}from"./data-attribute-theme-store-DqRsPjhr.js";import{n as g,t as _}from"./button-Cd599w8f.js";var v;function y(){return(y=e((()=>{v=`import { observeAttributes } from './observe-attribute.ts'

/**
 * Observes changes to \`data-*\` attributes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping \`data-*\` attribute names to handler functions.
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to \`document.documentElement\`
 * @returns An unsubscribe function to stop observing. Returns a no-op function in SSR environments.
 *
 * @example
 * \`\`\`ts
 * const unsubscribe = observeDataAttributes({
 *   'data-theme': (value) => console.log(\`Theme changed to: \${value}\`),
 *   'data-mode': (value) => console.log(\`Mode changed to: \${value}\`)
 * });
 *
 * // Later, to stop observing:
 * unsubscribe();
 * \`\`\`
 */
export function observeDataAttributes<T extends string, K extends \`data-\${string}\`>(
	handlers: Record<K, (value: T | null) => void>,
	element?: Element | null | undefined
) {
	return observeAttributes(handlers, element)
}
`})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{u(),m(),o(),s(),b=t(),g(),d(),y(),x=n(),{expect:S,userEvent:C}=__STORYBOOK_MODULE_TEST__,w={"test-value":`test-value`},T=h(w,{attributeName:`data-theme`}),E=h(w,{attributeName:`data-color-scheme`}),D={title:`attributes/observeDataAttributes`,tags:[`func`,`version:3.0`],parameters:r({description:{component:"Observes changes to `data-*` attributes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>(0,x.jsx)(x.Fragment,{})},O={parameters:r({description:{story:`Observes a single data-* attribute change on the document root element.`},source:{code:c`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,b.useState)([]);return(0,b.useEffect)(()=>l({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}}),[]),(0,x.jsxs)(`div`,{className:`font-sans`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,x.jsx)(_,{onPress:()=>T.write(p(w,`test-value`)),children:`test-value`}),(0,x.jsx)(_,{onPress:()=>document.documentElement.removeAttribute(`data-theme`),children:`Clear`})]}),(0,x.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`test-value`}),n=e.getByRole(`button`,{name:`Clear`});await C.click(t),await S(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await C.click(n),await S(e.getByText(`data-theme: null`)).toBeInTheDocument()}},k={parameters:r({description:{story:`Observes multiple data-* attributes simultaneously.`},source:{code:c`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,b.useState)([]);return(0,b.useEffect)(()=>l({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])},"data-color-scheme":e=>{t(t=>[...t,`data-color-scheme: ${e}`])}}),[]),(0,x.jsxs)(`div`,{className:`font-sans`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,x.jsx)(_,{onPress:()=>T.write(p(w,`test-value`)),children:`Set data-theme`}),(0,x.jsx)(_,{onPress:()=>document.documentElement.removeAttribute(`data-theme`),children:`Clear data-theme`}),(0,x.jsx)(_,{onPress:()=>E.write(p(w,`test-value`)),children:`Set data-color-scheme`}),(0,x.jsx)(_,{onPress:()=>document.documentElement.removeAttribute(`data-color-scheme`),children:`Clear data-color-scheme`})]}),(0,x.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e,step:t})=>{await t(`data-theme`,async()=>{let t=e.getByRole(`button`,{name:`Set data-theme`}),n=e.getByRole(`button`,{name:`Clear data-theme`});await C.click(t),await S(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await C.click(n),await S(e.getByText(`data-theme: null`)).toBeInTheDocument()}),await t(`data-color-scheme`,async()=>{let t=e.getByRole(`button`,{name:`Set data-color-scheme`}),n=e.getByRole(`button`,{name:`Clear data-color-scheme`});await C.click(t),await S(e.getByText(`data-color-scheme: test-value`)).toBeInTheDocument(),await C.click(n),await S(e.getByText(`data-color-scheme: null`)).toBeInTheDocument()})}},A={parameters:r({description:{story:`Observes data-* attribute changes on a custom element instead of the document root.`},source:{code:c`
                const unsubscribe = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                unsubscribe()
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,b.useState)([]),n=(0,b.useRef)(null);return(0,b.useEffect)(()=>{if(n.current)return l({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}},n.current)},[n]),(0,x.jsxs)(`div`,{className:`font-sans`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,x.jsx)(_,{onPress:()=>{let e=n.current??document.documentElement;h(w,{attributeName:`data-theme`,element:e}).write(p(w,`test-value`))},children:`test-value`}),(0,x.jsx)(_,{onPress:()=>{(n.current??document.documentElement).removeAttribute(`data-theme`)},children:`Clear`})]}),(0,x.jsx)(`div`,{ref:n,className:`p-4 border border-gray-300 mb-4`,children:`Custom Element to observe`}),(0,x.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`test-value`}),n=e.getByRole(`button`,{name:`Clear`}),r=e.getByText(`Custom Element to observe`);await C.click(t),await S(e.getByText(`data-theme: test-value`)).toBeInTheDocument();let i=r.getAttribute(`data-theme`);await S(i).toBe(`test-value`),await C.click(n),await S(e.getByText(`data-theme: null`)).toBeInTheDocument();let a=r.getAttribute(`data-theme`);await S(a).toBeNull()}},j={parameters:r({description:{story:`Verifies that the callback is fired only once per attribute change, not multiple times.`}}),decorators:[a()],render:()=>{let[e,t]=(0,b.useState)([]);return(0,b.useEffect)(()=>l({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}}),[]),(0,x.jsxs)(`div`,{className:`font-sans`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,x.jsx)(_,{onPress:()=>T.write(p(w,`test-value`)),children:`Set test-value`}),(0,x.jsx)(_,{onPress:()=>document.documentElement.removeAttribute(`data-theme`),children:`Clear`})]}),(0,x.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Set test-value`}),r=e.getByRole(`button`,{name:`Clear`});await t(`callback fires once when value changes`,async()=>{await C.click(n),await S(e.getByText(`data-theme: test-value`)).toBeInTheDocument();let t=e.getAllByText(/^data-theme:/);await S(t).toHaveLength(1)}),await t(`callback fires once when value is cleared`,async()=>{await C.click(r),await S(e.getByText(`data-theme: null`)).toBeInTheDocument();let t=e.getAllByText(/^data-theme:/);await S(t).toHaveLength(2)}),await t(`callback fires once when value is set again`,async()=>{await C.click(n);let t=e.getAllByText(/^data-theme:/);await S(t).toHaveLength(3)})}},M={tags:[`source`],parameters:r({source:{code:v}}),decorators:[i()]},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single data-* attribute change on the document root element.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                })
                // cleanup
                unsubscribe()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => testValueDataThemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        test-value
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear
                    </Button>
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const setBtn = canvas.getByRole('button', {
      name: 'test-value'
    });
    const clearBtn = canvas.getByRole('button', {
      name: 'Clear'
    });
    await userEvent.click(setBtn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    await userEvent.click(clearBtn);
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes multiple data-* attributes simultaneously.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \\\`data-color-scheme: \\\${value}\\\`]),
                })
                // cleanup
                unsubscribe()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        },
        'data-color-scheme': value => {
          setLog(prev => [...prev, \`data-color-scheme: \${value}\`]);
        }
      });
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => testValueDataThemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        Set data-theme
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear data-theme
                    </Button>
                    <Button onPress={() => testValueDataColorSchemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        Set data-color-scheme
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-color-scheme')}>
                        Clear data-color-scheme
                    </Button>
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('data-theme', async () => {
      const setBtn = canvas.getByRole('button', {
        name: 'Set data-theme'
      });
      const clearBtn = canvas.getByRole('button', {
        name: 'Clear data-theme'
      });
      await userEvent.click(setBtn);
      await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
      await userEvent.click(clearBtn);
      await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    });
    await step('data-color-scheme', async () => {
      const setBtn = canvas.getByRole('button', {
        name: 'Set data-color-scheme'
      });
      const clearBtn = canvas.getByRole('button', {
        name: 'Clear data-color-scheme'
      });
      await userEvent.click(setBtn);
      await expect(canvas.getByText('data-color-scheme: test-value')).toBeInTheDocument();
      await userEvent.click(clearBtn);
      await expect(canvas.getByText('data-color-scheme: null')).toBeInTheDocument();
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes data-* attribute changes on a custom element instead of the document root.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                unsubscribe()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const customElementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!customElementRef.current) return;
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      }, customElementRef.current);
    }, [customElementRef]);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => {
          const el = customElementRef.current ?? document.documentElement;
          dataAttributeThemeStore(testValueThemes, {
            attributeName: 'data-theme',
            element: el
          }).write(themeEntry(testValueThemes, 'test-value'));
        }}>
                        test-value
                    </Button>
                    <Button onPress={() => {
          ;
          (customElementRef.current ?? document.documentElement).removeAttribute('data-theme');
        }}>
                        Clear
                    </Button>
                </div>
                <div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
                    Custom Element to observe
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const setBtn = canvas.getByRole('button', {
      name: 'test-value'
    });
    const clearBtn = canvas.getByRole('button', {
      name: 'Clear'
    });
    const element = canvas.getByText('Custom Element to observe');
    await userEvent.click(setBtn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    const dataTheme = element.getAttribute('data-theme');
    await expect(dataTheme).toBe('test-value');
    await userEvent.click(clearBtn);
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    const dataTheme2 = element.getAttribute('data-theme');
    await expect(dataTheme2).toBeNull();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Verifies that the callback is fired only once per attribute change, not multiple times.'
    }
  }),
  decorators: [withStoryCard()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => testValueDataThemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        Set test-value
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear
                    </Button>
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const setBtn = canvas.getByRole('button', {
      name: 'Set test-value'
    });
    const clearBtn = canvas.getByRole('button', {
      name: 'Clear'
    });
    await step('callback fires once when value changes', async () => {
      await userEvent.click(setBtn);
      await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
      const logItems = canvas.getAllByText(/^data-theme:/);
      await expect(logItems).toHaveLength(1);
    });
    await step('callback fires once when value is cleared', async () => {
      await userEvent.click(clearBtn);
      await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
      const logItems = canvas.getAllByText(/^data-theme:/);
      await expect(logItems).toHaveLength(2);
    });
    await step('callback fires once when value is set again', async () => {
      await userEvent.click(setBtn);
      const logItems = canvas.getAllByText(/^data-theme:/);
      await expect(logItems).toHaveLength(3);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...M.parameters?.docs?.source}}},N=[`BasicUsage`,`MultipleAttributes`,`CustomElement`,`CallbackFiredOncePerChange`,`Source`]})))()}P();export{O as BasicUsage,j as CallbackFiredOncePerChange,A as CustomElement,k as MultipleAttributes,M as Source,N as __namedExportsOrder,D as default};