import{j as e,d as p,w as c,s as u,S as m}from"./iframe-DMM-er1z.js";import{d as f}from"./dedent-BuYMbVyj.js";import{a as t}from"./append-id-Vsg144gU.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,I={title:"utils/appendId",tags:["func","version:next"],parameters:p({description:{component:"Appends a suffix to an ID if the ID is defined. Useful for propagating ids (e.g. data-testid, key, or aria attributes) from parent to sub-components so selectors and keys stay consistent and predictable."}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:p({description:{story:"Append a suffix to a defined ID. Returns the combined id with a hyphen."}}),decorators:[c(),u({source:f`
                appendId('card', 'title')   // 'card-title'
                appendId('form', 'submit')  // 'form-submit'
            `})],render(){const d=[{id:"card",suffix:"title"},{id:"form",suffix:"submit"},{id:"list",suffix:"item-0"}];return e.jsx(m,{appearance:"output",children:e.jsx("pre",{className:"text-sm",children:d.map(({id:i,suffix:n})=>`appendId('${i}', '${n}') → ${JSON.stringify(t(i,n))}`).join(`
`)})})},play:async()=>{await a(t("card","title")).toBe("card-title"),await a(t("form","submit")).toBe("form-submit")}},s={name:"data-testid and key propagation",tags:["use-case"],parameters:p({description:{story:"Pass a root id (e.g. from props) down and use appendId for data-testid, key, or other ids so sub-components get stable, predictable identifiers without manual concatenation."}}),decorators:[c(),u({source:f`
                // Parent receives id (or data-testid) and passes it down
                function Card({ id, title, items }: Props) {
                  return (
                    <div data-testid={id}>
                      <h2 data-testid={appendId(id, 'title')}>{title}</h2>
                      <ul>
                        {items.map((item, i) => (
                          <li key={appendId(id, \`item-\${i}\`)} data-testid={appendId(id, \`item-\${i}\`)}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                // <Card id="product-card" /> → data-testid="product-card", "product-card-title", "product-card-item-0", ...
            `})],render(){const d="product-card",i=["title","item-0","item-1","item-2"];return e.jsxs(m,{appearance:"output",children:[e.jsxs("p",{className:"mb-2 text-sm text-gray-600 dark:text-gray-400",children:["With ",e.jsxs("code",{children:['id="',d,'"']}),", sub-ids become:"]}),e.jsx("pre",{className:"text-sm",children:i.map(n=>`appendId('${d}', '${n}') → ${t(d,n)}`).join(`
`)})]})},play:async()=>{const d="product-card";await a(t(d,"title")).toBe("product-card-title"),await a(t(d,"item-0")).toBe("product-card-item-0")}},o={name:"when id is undefined",tags:["unit"],parameters:p({description:{story:"When the id is undefined, appendId returns undefined. Use this when the parent does not set an id (e.g. optional data-testid) so sub-components do not render stray ids."}}),decorators:[c(),u({source:f`
                appendId(undefined, 'title')  // undefined
                appendId(undefined, 'item')   // undefined
            `})],render(){return e.jsx(m,{appearance:"output",children:e.jsxs("pre",{className:"text-sm",children:[`appendId(undefined, 'title') → ${JSON.stringify(t(void 0,"title"))}`,`
`,`appendId(undefined, 'item') → ${JSON.stringify(t(void 0,"item"))}`]})})},play:async()=>{await a(t(void 0,"title")).toBeUndefined(),await a(t(void 0,"item")).toBeUndefined()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Append a suffix to a defined ID. Returns the combined id with a hyphen.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                appendId('card', 'title')   // 'card-title'
                appendId('form', 'submit')  // 'form-submit'
            \`
  })],
  render() {
    const examples = [{
      id: 'card',
      suffix: 'title'
    }, {
      id: 'form',
      suffix: 'submit'
    }, {
      id: 'list',
      suffix: 'item-0'
    }];
    return <StoryCard appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          id,
          suffix
        }) => \`appendId('\${id}', '\${suffix}') → \${JSON.stringify(appendId(id, suffix))}\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(appendId('card', 'title')).toBe('card-title');
    await expect(appendId('form', 'submit')).toBe('form-submit');
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'data-testid and key propagation',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Pass a root id (e.g. from props) down and use appendId for data-testid, key, or other ids so sub-components get stable, predictable identifiers without manual concatenation.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                // Parent receives id (or data-testid) and passes it down
                function Card({ id, title, items }: Props) {
                  return (
                    <div data-testid={id}>
                      <h2 data-testid={appendId(id, 'title')}>{title}</h2>
                      <ul>
                        {items.map((item, i) => (
                          <li key={appendId(id, \\\`item-\\\${i}\\\`)} data-testid={appendId(id, \\\`item-\\\${i}\\\`)}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                // <Card id="product-card" /> → data-testid="product-card", "product-card-title", "product-card-item-0", ...
            \`
  })],
  render() {
    const id = 'product-card';
    const suffixes = ['title', 'item-0', 'item-1', 'item-2'];
    return <StoryCard appearance="output">
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    With <code>id="{id}"</code>, sub-ids become:
                </p>
                <pre className="text-sm">
                    {suffixes.map(suffix => \`appendId('\${id}', '\${suffix}') → \${appendId(id, suffix)}\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const id = 'product-card';
    await expect(appendId(id, 'title')).toBe('product-card-title');
    await expect(appendId(id, 'item-0')).toBe('product-card-item-0');
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'when id is undefined',
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'When the id is undefined, appendId returns undefined. Use this when the parent does not set an id (e.g. optional data-testid) so sub-components do not render stray ids.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                appendId(undefined, 'title')  // undefined
                appendId(undefined, 'item')   // undefined
            \`
  })],
  render() {
    return <StoryCard appearance="output">
                <pre className="text-sm">
                    {\`appendId(undefined, 'title') → \${JSON.stringify(appendId(undefined, 'title'))}\`}
                    {'\\n'}
                    {\`appendId(undefined, 'item') → \${JSON.stringify(appendId(undefined, 'item'))}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(appendId(undefined, 'title')).toBeUndefined();
    await expect(appendId(undefined, 'item')).toBeUndefined();
  }
}`,...o.parameters?.docs?.source}}};const g=["BasicUsage","DataTestIdAndKeyPropagation","WhenIdUndefined"];export{r as BasicUsage,s as DataTestIdAndKeyPropagation,o as WhenIdUndefined,g as __namedExportsOrder,I as default};
